"use client"
import TripDetail from "@/components/trip/trip-detail";
import PriceDetail from "@/components/trip/price-detail";
import SleepingSeat from "@/components/trip/sleeping-seat";
import LimousineSeat from "@/components/trip/limousine-seat";
import {Form, Input, Select} from "antd";
import {useEffect, useState} from "react";
import {fetchData} from "@/api/apiClient";
import {useRouter, useSearchParams} from "next/navigation";
import {useCustomerInfo} from "@/context/CustomerContext";
import {useNotification} from "@/context/NotificationContext";
import {formatCurrency} from "@/utils/formatCurrency";
import Station from "@/components/trip/station";

interface TripDetails {
  id: number,
  departureDay: string,
  price: number,
  departureTime: string,
  busType: string,
  departureProvince: string,
  destProvince: string,
  disableSeat: [] | null
  pickup: [],
  dropOff: []
}

export default function BookingTicket() {
  const {setNotification} = useNotification()
  const {customerInfo, setCustomerInfo, tripInfo, setTripInfo} = useCustomerInfo()
  const [selectedSeatsDepart, setSelectedSeatsDepart] = useState([]);
  const [selectedSeatsDest, setSelectedSeatsDest] = useState([]);
  const [pickupDepart, setPickupDepart] = useState([])
  const [pickupDest, setPickupDest] = useState([])
  const [dropOffDepart, setDropOffDepart] = useState([])
  const [dropOffDest, setDropOffDest] = useState([])


  const router = useRouter();

  const onClickPayment = () => {
    console.log(tripInfo)
    if (selectedSeatsDepart.length === 0) {
      setNotification({show: true, message: 'Quý khách vui lòng chọn ít nhất một ghế cho chuyến đi', type: 'error'})
      return
    } else if (customerInfo.name.length === 0) {
      setNotification({show: true, message: 'Quý khách vui lòng  điền họ và tên', type: 'error'})
      return
    } else if (customerInfo.phoneNumber.length === 0) {
      setNotification({show: true, message: 'Quý khách vui lòng điền số điện thoại', type: 'error'})
      return
    } else if (customerInfo.email.length === 0) {
      setNotification({show: true, message: 'Quý khách vui lòng điền địa chỉ email', type: 'error'})
      return
    } else if (tripInfo.departure.pickupId === 0) {
      setNotification({show: true, message: 'Quý khách vui lòng chọn điểm đón cho chuyến đi', type: 'error'})
      return
    } else if (tripInfo.departure.dropOffId === 0) {
      setNotification({show: true, message: 'Quý khách vui lòng chọn điểm trả cho chuyến đi', type: 'error'})
      return
    } else if (tripInfo.isRoundTrip) {
      if (selectedSeatsDest.length === 0) {
        setNotification({show: true, message: 'Quý khách vui lòng chọn ít nhất một ghế cho chuyến về', type: 'error'})
        return
      } else if (tripInfo.destination.pickupId === 0) {
        setNotification({show: true, message: 'Quý khách vui lòng chọn điểm đón cho chuyến về', type: 'error'})
        return
      } else if (tripInfo.destination.dropOffId === 0) {
        setNotification({show: true, message: 'Quý khách vui lòng chọn điểm trả cho chuyến về', type: 'error'})
        return
      }
    }
    setTripInfo(preState => ({
      ...preState,
      departure: {
        ...preState.departure,
        selectedSeat: selectedSeatsDepart
      },
      destination: {
        ...preState.departure,
        selectedSeat: selectedSeatsDest
      }
    }))


    router.push("/payment")
  };

  const onChangeName = (event) => {
    setCustomerInfo(
      prevInfo => ({
        ...prevInfo,
        name: event.target.value
      })
    )
  }

  const onChangePhoneNumber = (event) => {
    setCustomerInfo(
      prevInfo => ({
        ...prevInfo,
        phoneNumber: event.target.value
      })
    )
  }

  const onChangeEmail = (event) => {
    setCustomerInfo(
      prevInfo => ({
        ...prevInfo,
        email: event.target.value
      })
    )
  }

  const onChangePickupDepart = (id) => {
    setTripInfo(preState => ({
      ...preState,
      departure: {
        ...preState.departure,
        pickupId: id
      }
    }))
  }

  const onChangeDropOffDepart = (id) => {
    setTripInfo(preState => ({
      ...preState,
      departure: {
        ...preState.departure,
        dropOffId: id
      }
    }))
  }

  const onChangePickupDest = (id) => {
    setTripInfo(preState => ({
      ...preState,
      destination: {
        ...preState.destination,
        pickupId: id
      }
    }))
  }

  const onChangeDropOffDest = (id) => {
    setTripInfo(preState => ({
      ...preState,
      destination: {
        ...preState.destination,
        dropOffId: id
      }
    }))
  }


  useEffect(() => {
    async function loadTripDetails() {
      try {
        const data1: TripDetails = await fetchData('/booking/trip/' + tripInfo.departure.id);
        setTripInfo(preState => ({
          ...preState,
          departure: {
            ...preState.departure,
            day: data1["departureDay"],
            time: data1["departureTime"],
            price: data1["price"],
            type: data1["busType"],
            provinceStart: data1["departureProvince"],
            provinceEnd: data1["destProvince"],
            disableSeat: data1["disableSeat"]
          }
        }))
        setPickupDepart(data1.pickup)
        setDropOffDepart(data1.dropOff)
        if (tripInfo.isRoundTrip) {
          const data2: TripDetails = await fetchData('/booking/trip/' + tripInfo.destination.id);

          setTripInfo(preState => ({
            ...preState,
            destination: {
              ...preState.destination,
              day: data2["departureDay"],
              time: data2["departureTime"],
              price: data2["price"],
              type: data2["busType"],
              provinceStart: data2["departureProvince"],
              provinceEnd: data2["destProvince"],
              disableSeat: data2["disableSeat"]
            }
          }))
          setPickupDest(data2.pickup)
          setDropOffDest(data2.dropOff)
        }

      } catch (err) {
        console.error('Error loading provinces:', err);
      } finally {
        console.log(tripInfo)
      }
    }

    loadTripDetails()
  }, []);


  return (
    <div className={"w-full bg-[#f3f3f5]"}>
      <div className={" max-w-[1128px] ml-auto mr-auto pb-2 md:pb-8 lg:block"}>
        <div className={"flex w-full flex-col gap-6 pt-0 lg:flex-row lg:pt-8"}>

          <div className={"flex w-full flex-col"}>
            <div className={"flex w-full flex-col rounded-xl border bg-white divide-x"}>
              {/*select seat*/}
              <div className={"my-4 flex flex-row text-center font-medium gap-4 sm:gap-6"}>

                {tripInfo.departure.type === "Giường" && (
                  <SleepingSeat disabledSeats={tripInfo.departure.disableSeat}
                                selectedSeats={selectedSeatsDepart}
                                setSelectedSeats={setSelectedSeatsDepart}/>
                )}

                {tripInfo.departure.type === "Limousine" && (
                  <LimousineSeat disabledSeats={tripInfo.departure.disableSeat}
                                 selectedSeats={selectedSeatsDepart}
                                 setSelectedSeats={setSelectedSeatsDepart}/>
                )}

                {tripInfo.isRoundTrip && tripInfo.destination.type === "Giường" && (
                  <SleepingSeat disabledSeats={tripInfo.destination.disableSeat}
                                selectedSeats={selectedSeatsDest}
                                setSelectedSeats={setSelectedSeatsDest}/>
                )}

                {tripInfo.isRoundTrip && tripInfo.destination.type === "Limousine" && (
                  <LimousineSeat disabledSeats={tripInfo.destination.disableSeat}
                                 selectedSeats={selectedSeatsDest}
                                 setSelectedSeats={setSelectedSeatsDest}/>
                )}


              </div>
              <div className="mb-4 flex justify-center gap-4 text-[13px] font-normal">
                  <span className="mr-8 flex items-center">
                    <div className="mr-2 h-4 w-4 rounded bg-[#D5D9DD] border-[#C0C6CC]"></div>
                    Đã bán
                  </span>
                <span className="mr-8 flex items-center">
                    <div className="mr-2 h-4 w-4 rounded bg-[#DEF3FF] border-[#96C5E7]"></div>
                    Còn trống
                  </span>
                <span className=" flex items-center">
                    <div className="mr-2 h-4 w-4 rounded bg-[#FDEDE8] border-[#F8BEAB]"></div>
                    Đang chọn</span>
              </div>

              <div className="h-1 bg-[#f3f3f5] w-full"></div>

              {/*user detail*/}
              <div className={"flex w-full flex-col gap-6 px-6 py-4 text-[15px] sm:flex-row"}>
                <div className={"flex flex-1 flex-col"}>
                  <p className="text-xl font-medium text-black">Thông tin khách hàng</p>
                  <Form className={"mt-6"} name="validateOnly" layout="vertical" autoComplete="off">
                    <Form.Item name="fullname" label="Họ và tên"
                               rules={[{required: true, type: "string", message: "Vui lòng điền họ và tên"}]}>
                      <Input onChange={onChangeName}/>
                    </Form.Item>

                    <Form.Item name="phone" label="Số điện thoại"
                               rules={[{required: true, message: "Vui lòng điền số điện thoại"}]}>
                      <Input onChange={onChangePhoneNumber}/>
                    </Form.Item>

                    <Form.Item name="email" label="Email"
                               rules={[{required: true, type: "email", message: "Vui lòng điền Email"}]}>
                      <Input onChange={onChangeEmail}/>
                    </Form.Item>
                  </Form>
                </div>
                <div className="content-editor flex h-full flex-1 flex-col text-justify text-sm">
                  <p className="mb-6 text-center text-base font-medium text-orange-600">ĐIỀU KHOẢN &amp; LƯU Ý</p>
                  <div><p>(*) <span>Quý khách vui lòng có mặt tại bến xuất phát của xe trước ít nhất 30 phút giờ xe khởi hành, mang theo thông báo đã thanh toán vé thành công có chứa mã vé được gửi từ hệ thống FUTA BUS LINE. </span>Vui
                    lòng liên hệ Trung tâm tổng đài <a target="_self" rel="" className="text-orange-600"
                                                       href="tel:19006067"><span
                    >1900 6067</span></a><a target="_blank" rel="" className="text-orange-600"
                                            href="tel:1900 6067"> </a>để được hỗ trợ.</p>
                    <p className={"mt-5"}>(*) Nếu quý khách có nhu cầu trung chuyển, vui lòng liên hệ Tổng đài trung
                      chuyển <a target="_self" rel="" className="text-orange-600" href="tel:19006067"><span
                      >1900 6918</span></a> trước khi đặt vé. Chúng tôi không đón/trung chuyển tại
                      những điểm xe trung chuyển không thể tới được.</p></div>
                </div>

              </div>
              <div className="h-1 bg-[#f3f3f5] w-full"></div>

              <Station title={"chuyến đi"}
                       pickup={pickupDepart}
                       dropOff={dropOffDepart}
                       day={tripInfo.departure.day}
                       onChangeDropOff={onChangeDropOffDepart}
                       onChangePickup={onChangePickupDepart}
              />

              <div className="h-1 bg-[#f3f3f5] w-full"></div>

              {
                tripInfo.isRoundTrip && (
                  <Station
                    title={"chuyến về"}
                    pickup={pickupDest}
                    dropOff={dropOffDest}
                    day={tripInfo.destination.day}
                    onChangeDropOff={onChangePickupDest}
                    onChangePickup={onChangeDropOffDest}
                  />
                )
              }

              <div className="h-1 bg-[#f3f3f5] w-full"></div>

              <div className="flex items-center p-6">
                <div className="flex flex-col">
                  <span className=" px-2 rounded-xl bg-[#00613D] py-2 text-center text-xs text-white">Tổng cộng</span>
                  <span className="mt-2 text-2xl font-medium text-black">{
                    formatCurrency(tripInfo.departure.price * selectedSeatsDepart.length
                      + tripInfo.destination.price * selectedSeatsDest.length)}</span>
                </div>
                <div className="flex flex-auto items-center justify-end">
                  <button type="button"
                          className="w-28 h-10 bg-white border-2 text-orange-600 rounded-full mr-7 hover:bg-orange-500 hover:text-white ">
                    <span>Hủy</span>
                  </button>
                  <button type="button" className="w-28 h-10 bg-orange-500 text-white  rounded-full"
                          onClick={onClickPayment}
                  >
                    <span>Thanh toán</span>
                  </button>
                </div>
              </div>

            </div>


          </div>

          <div className={"mx-auto flex min-w-[345px] flex-col gap-6"}>
            {tripInfo && (
              <>
                <TripDetail title={"lượt đi"}
                            date={tripInfo.departure.day}
                            time={tripInfo.departure.time}
                            price={tripInfo.departure.price}
                            seats={selectedSeatsDepart}
                            provinceStart={tripInfo.departure.provinceStart}
                            provinceEnd={tripInfo.departure.provinceEnd}
                />
                {tripInfo.isRoundTrip && (
                  <TripDetail title={"lượt về"}
                              date={tripInfo.destination.day}
                              time={tripInfo.destination.time}
                              price={tripInfo.destination.price}
                              seats={selectedSeatsDest}
                              provinceStart={tripInfo.destination.provinceStart}
                              provinceEnd={tripInfo.destination.provinceEnd}
                  />
                )}
                <PriceDetail departurePrice={tripInfo.departure.price}
                             departureSeats={selectedSeatsDepart}
                             destinationSeats={selectedSeatsDest}
                             destinationPrice={tripInfo.destination.price}
                             isRoundTrip={tripInfo.isRoundTrip}
                />
              </>
            )}


          </div>

        </div>
      </div>
    </div>
  )
}