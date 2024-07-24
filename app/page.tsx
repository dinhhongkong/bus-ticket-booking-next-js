"use client"
import styles from "./home.module.css"
import switch_icon from "@/public/assets/switch_location.svg"
import Image from "next/image";
import Picture from "@/public/assets/Artboard.png"
import ProvincePicker from "@/components/province/province-picker";
import {useState} from "react";
import Datepicker from "react-tailwindcss-datepicker";
import Trip from "@/components/trip/trip";
import {useProvince} from "@/hook/useProvince";
import {fetchData} from "@/api/apiClient";
import Loading from "@/components/loading";
import { useRouter } from 'next/navigation';
import Notification from "@/components/notification/notification";
import {useNotification} from "@/context/NotificationContext";
import {useCustomerInfo} from "@/context/CustomerContext";
import {isDateGreaterThan} from "@/utils/timeUtils";
import {Tabs} from "antd";


export default function Home() {

  const {setNotification} = useNotification()

  const [startDate, setStartDate] = useState({
    startDate: null,
    endDate: null
  });

  const [endDate, setEndDate] = useState({
    startDate: null,
    endDate: null
  });

  const { provinces } = useProvince();
  const [responseDeparture, setResponseDeparture] = useState([])
  const [responseDestination, setResponseDestination] = useState([])
  const [activeSearch, setActiveSearch] = useState(false)
  const [search, setSearch] = useState({
    provinceStart: 0,
    provinceEnd: 0,
    startName: "",
    endName: "",
    dayStart: "",
    dayEnd: "",
  })
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {tripInfo, setTripInfo} = useCustomerInfo()
  const {tripSelection, setTripSelection} = useState()


  const handleDepartureTripSelection = (tripProps) => {
    if (!tripInfo.isRoundTrip) {
      setTripInfo( preState => ({
        ...preState,
        departure: {
          ...preState.departure,
          id: tripProps.id
        }
      }))
      // console.log(tripInfo)
      router.push(`/booking-ticket`)
      return
    }
    if (tripInfo.departure.id !== 0 && tripInfo.departure.id !== 0) {
      setTripInfo( preState => ({
        ...preState,
        departure: {
          ...preState.departure,
          id: tripProps.id
        }
      }))
      router.push(`/booking-ticket`)
      return;
    }
    setTripInfo( preState => ({
      ...preState,
      departure: {
        ...preState.departure,
        id: tripProps.id
      }
    }))



  };

  const handleDestinationTripSelection= (tripProps) => {
    if (tripInfo.departure.id !== 0 && tripInfo.departure.id !== 0) {
      setTripInfo( preState => ({
        ...preState,
        destination: {
          ...preState.destination,
          id: tripProps.id
        }
      }))
      router.push(`/booking-ticket`)
      return
    }
    setTripInfo( preState => ({
      ...preState,
      destination: {
        ...preState.destination,
        id: tripProps.id
      }
    }))

  };

  const updateDepartureProvinceId = (newId: number, name: string) => {
    setSearch(prevState => ({
      ...prevState,
      provinceStart: newId,
      startName: name
    }));
  };

  const updateDestinationProvinceId = (newId: number, name: string) => {
    setSearch(prevState => ({
      ...prevState,
      provinceEnd: newId,
      endName: name
    }));
  };

  const updateStartDate = (newDate) => {
    setSearch(prevState => ({
      ...prevState,
      dayStart: newDate.startDate
    }));
    setStartDate(newDate);
  };

  const updateEndDate = (newDate) => {
    setSearch(prevState => ({
      ...prevState,
      dayEnd: newDate.endDate
    }));
    setEndDate(newDate);
  };

  const handleRoundTripChange = (event) => {
    const value = event.target.value == 1
    setTripInfo(preState => ({
      ...preState,
      isRoundTrip: value
    }))
    setActiveSearch(false)
  }


  const onClickBtnSearch = async (event) => {
    if (search.provinceStart == 0) {
      setNotification({ show: true, message: 'Quý khách vui chọn điểm đi', type: 'error' })
      return
    }
    else if (search.provinceEnd == 0) {
      setNotification({ show: true, message: 'Quý khách vui lòng điểm đến', type: 'error' })
      return
    }
    else if (search.dayStart.length === 0) {
      setNotification({ show: true, message: 'Quý khách vui lòng điền ngày đi', type: 'error' })
      return
    }
    else if (search.dayEnd.length ===0 && tripInfo.isRoundTrip) {
      setNotification({ show: true, message: 'Quý khách vui lòng điền ngày về', type: 'error' })
      return
    }
    else if ( !isDateGreaterThan( search.dayEnd, search.dayStart) &&  tripInfo.isRoundTrip) {
      setNotification({ show: true, message: 'Quý khách vui lòng chọn ngày về lớn hơn ngày đi', type: 'error' })
      return
    }

    setTripInfo( preState => ({
      ...preState,
      departure: {
        ...preState.departure,
        id: 0
      },
      destination: {
        ...preState.destination,
        id: 0
      }
    }))

    setIsLoading(true)
    try {
      const data = await fetchData("booking/search/trip", {
        departureProvinceId: search.provinceStart,
        destinationProvinceId: search.provinceEnd,
        startDate: search.dayStart
      });
      setResponseDeparture(data)
    }
    catch (error) {
      console.error("Error fetching data:", error);
    }
    finally {
      setIsLoading(false)
    }

    if (tripInfo.isRoundTrip) {
      try {
        const data = await fetchData("booking/search/trip", {
          departureProvinceId: search.provinceEnd,
          destinationProvinceId: search.provinceStart,
          startDate: search.dayEnd
        });
        setResponseDestination(data)
        console.log("call ve")
      }
      catch (error) {
        console.error("Error fetching data:", error);
      }
      finally {
        setIsLoading(false)
      }
    }
    setActiveSearch(true)
  }

  const setItemTab = () =>{
    if (tripInfo.isRoundTrip) {
      return[{
        key: '1',
        label: "CHUYẾN ĐI: " + search.startName + ' - ' + search.endName,
        children: isLoading ? (
          <Loading/>
        ) : responseDeparture.length > 0 ? (
          responseDeparture.map((trip) => (
            <Trip key={trip.id} tripProps={trip} onClickTrip={()=>handleDepartureTripSelection(trip)} />
          ))
        ) : (
          <p>Không có chuyến đi nào được tìm thấy.</p>
        ),
      },
        {
          key: '2',
          label: "CHUYẾN VỀ: " + search.endName + ' - '+ search.startName,
          children: isLoading ? (
            <Loading/>
          ) : responseDestination.length > 0 ? (
            responseDestination.map((trip) => (
              <Trip key={trip.id} tripProps={trip} onClickTrip={()=>handleDestinationTripSelection(trip)} />
            ))
          ) : (
            <p>Không có chuyến đi nào được tìm thấy.</p>
          ),
        }]

    }

    return [{
      key: '1',
      label: "CHUYẾN ĐI: " + search.startName + ' - ' + search.endName,
      children: isLoading ? (
        <Loading/>
      ) : responseDeparture.length > 0 ? (
        responseDeparture.map((trip) => (
          <Trip key={trip.id} tripProps={trip} onClickTrip={()=>handleDepartureTripSelection(trip)} />
        ))
      ) : (
        <p>Không có chuyến đi nào được tìm thấy.</p>
      ),
    }]
  }



  return (
    <div className={"w-full "}>
      <div className={`layout pb-2 md:pb-8 lg:block`}>
        {/*search trips*/}
        <section className={`layout relative flex flex-col pt-40 lg:pt-[28rem]`}>
          <div className={` ${styles.homeSearch} absolute z-30`}>
            <div
              className={`${styles.cardBoxShadown} xl:w-[1128px] relative mx-auto mb-10 h-[250px] cursor-pointer rounded-xl lg:flex`}>
              <Image src={Picture} alt={"banner"}
                     className={` ${styles.cardBoxShadown} transition-all duration-200 relative mx-auto mb-10 hidden h-[250px] w-full cursor-pointer rounded-xl lg:flex`}/>
            </div>

            <div className={`${styles['search-form']} m-2 font-medium lg:m-auto xl:w-[1128px]`}>
              {/*select ticket type*/}
              <div className={"flex items-center justify-between text-[15px]"}>
                <div>
                  <label>
                  <span>
                    <input name={"isRoundTrip"}
                           value={0}
                           className={"align-middle mx-1"}
                           type={"radio"}
                           onChange={handleRoundTripChange}
                           defaultChecked
                    />
                  </span>
                    <span className={"font-medium " + (tripInfo.isRoundTrip ? "" : "text-orange-600")}>Một chiều</span>
                  </label>


                  <label className={"ml-4"}>
                  <span>
                    <input name={"isRoundTrip"}
                           value={1}
                           className={"align-middle mx-1 "}
                           type={"radio"}
                           onChange={handleRoundTripChange}
                    />
                  </span>
                    <span className={"font-medium " + (tripInfo.isRoundTrip  ? "text-orange-600" : "")}>Khứ hồi</span>
                  </label>
                </div>

                <span className="cursor-pointer font-medium text-orange-600 lg:contents">
            <a target="_blank" rel="noreferrer" href="/huong-dan-dat-ve-tren-web">Hướng dẫn mua vé</a>
          </span>
              </div>

              <div className={"grid grid-cols-1 pb-4 pt-4 lg:grid-cols-2 lg:gap-4"}>
                <div className={"relative flex justify-center lg:gap-4"}>
                  <div className="flex-1">
                    <label>Điểm đi</label>
                    <div
                      className={`${styles['input-search']} item-start mt-1 flex w-full cursor-pointer font-medium lg:items-center text-base lg:text-lg`}>
                      <ProvincePicker title={"Điểm đi"} provinces={provinces} onSelectProvince={updateDepartureProvinceId} />
                    </div>
                  </div>

                  <img className={`${styles['switch-location']} bottom-6 h-8 w-8 lg:bottom-3 lg:h-10 lg:w-10`}
                       src={switch_icon.src}
                       alt="switch location icon"/>

                  <div className="flex-1 text-right lg:text-left">
                    <label>Điểm đến</label>
                    <div
                      className={` ${styles['input-search']}  item-start mt-1 flex w-full cursor-pointer font-medium lg:items-center justify-end lg:justify-start text-base lg:text-lg `}>
                      <ProvincePicker title={"Điểm đến"} provinces={provinces} onSelectProvince={updateDestinationProvinceId} />
                    </div>
                  </div>
                </div>

                <div className={"flex"}>
                  {/*Chọn ngày đi*/}
                  <div className="mr-4 flex flex-1 flex-col">
                    <label>Ngày đi</label>
                    <div
                      className={`${styles['input-search']}  item-start mt-1 flex w-full cursor-pointer font-medium lg:items-center text-base lg:text-lg `}>

                  <span className="max-w-[140px] lg:max-w-[220px] z-20 focus:outline-none p-4">
                    <Datepicker primaryColor={"orange"}
                                useRange={false}
                                asSingle={true}
                                minDate={new Date()}
                                local={"vn"}
                                value={startDate}
                                placeholder={"Chọn ngày đi"}
                                inputClassName={"bg-white w-full rounded-md outline-none"}
                                containerClassName="relative"
                                displayFormat={"DD/MM/YYYY"}
                                onChange={updateStartDate}
                    />
                  </span>
                    </div>
                  </div>

                  {/*Chọn ngày về*/}
                  {tripInfo.isRoundTrip && (
                    <div className="mr-4 flex flex-1 flex-col">
                      <label>Ngày về</label>
                      <div
                        className={`${styles['input-search']}  item-start mt-1 flex w-full cursor-pointer font-medium lg:items-center text-base lg:text-lg `}>

                  <span className="max-w-[140px] lg:max-w-[220px] z-20 focus:outline-none p-4">
                    <Datepicker primaryColor={"orange"}
                                useRange={false}
                                asSingle={true}
                                minDate={new Date()}
                                local={"vn"}
                                value={endDate}
                                placeholder={"Chọn ngày về"}
                                inputClassName={"bg-white w-full rounded-md outline-none"}
                                containerClassName="relative"
                                displayFormat={"DD/MM/YYYY"}
                                onChange={updateEndDate}
                    />
                  </span>
                      </div>
                    </div>
                  )}


                  {/*Chọn số vé*/}
                  <div className={"mr-4 flex flex-1 flex-col  " + (tripInfo.isRoundTrip ? "max-w-[90px]":"")}>
                    <label>Số vé</label>
                    <div
                      className={`${styles['input-search']}  item-start mt-1 flex w-full cursor-pointer font-medium lg:items-center text-base lg:text-lg `}>

                  <span className="max-w-[140px] lg:max-w-[220px] z-20 focus:outline-none p-4">
                    1
                  </span>
                    </div>
                  </div>


                </div>

                <div className="divide my-3 lg:hidden"></div>

              </div>
              <div className="relative z-10 flex w-full justify-center">
                <button
                  onClick={onClickBtnSearch}
                  className="absolute h-12 rounded-full bg-orange-600 px-20 text-base text-white transition duration-200">
                  Tìm chuyến xe
                </button>
              </div>
            </div>
          </div>
        </section>


        <div className={'xl:w-[1128px] mx-auto mt-12'}>
          <div className={"flex justify-between gap-10 "}>
            {/*filter*/}
            <div className={'w-[300px] min-w-[300px] h-full sticky top-4 border shadow-xl rounded-xl'}>
              <div className={'flex justify-between p-4'}>
                <div>Bộ lọc tìm kiếm</div>
                <div className={'cursor-pointer text-[#E12424]'}>
                  Bỏ lọc
                </div>
              </div>
              <div className={'p-4'}>
                <span>Giờ đi</span>
                <div>
                  <label>
                <span>
                  <input type={"checkbox"}/>
                </span>
                    <span className={"font-medium ml-2"}>Sáng sớm 00:00 - 06:00</span>
                  </label>
                </div>

                <div>
                  <label>
                <span>
                  <input type={"checkbox"}/>
                </span>
                    <span className={"font-medium ml-2"}>Buổi sáng 06:00 - 12:00</span>
                  </label>
                </div>

                <div>
                  <label>
                <span>
                  <input type={"checkbox"}/>
                </span>
                    <span className={"font-medium ml-2"}>Buổi chiều 12:00 - 18:00</span>
                  </label>
                </div>

                <div>
                  <label>
                <span>
                  <input type={"checkbox"}/>
                </span>
                    <span className={"font-medium ml-2"}>Sáng tối 18:00 - 24:00</span>
                  </label>
                </div>
              </div>

              <div className={"w-full h-[1px] bg-black opacity-10 rounded-xl"}/>

              <div className={'p-4'}>
                <div>Loại xe</div>
                <div className={'mt-4 flex flex-wrap gap-2'}>
                  <div className={'cursor-pointer rounded-md py-1 px-3 border text-[14px] font-normal'}>Ghế</div>
                  <div className={'cursor-pointer rounded-md py-1 px-3 border text-[14px] font-normal'}>Giường nằm</div>
                  <div className={'cursor-pointer rounded-md py-1 px-3 border text-[14px] font-normal'}>Limosine</div>
                </div>
              </div>
            </div>

            {/*trip*/}
            <div className={"w-full"}>
              {activeSearch && (
                <Tabs defaultActiveKey="1" items={setItemTab()}/>
              )}

              {/*<div className={"flex justify-between font-medium text-xl mb-3"}>*/}
              {/*  <div className={"flex-1 py-2 flex items-center justify-center rounded-xl"}>*/}
              {/*    {search.startName + ' - ' + search.endName }*/}
              {/*  </div>*/}

              {/*  {tripInfo.isRoundTrip && (*/}
              {/*    <div className={"flex-1 flex items-center justify-center"}>{search.endName + ' - '+ search.startName}</div>)}*/}

              {/*</div>*/}

              {/*{isLoading ? (*/}
              {/*  <Loading/>*/}
              {/*) : responseDeparture.length > 0 ? (*/}
              {/*  responseDeparture.map((trip) => (*/}
              {/*    <Trip key={trip.id} tripProps={trip} onClickTrip={()=>handleTripSelection(trip.id)} />*/}
              {/*  ))*/}
              {/*) : (*/}
              {/*  <p>Không có chuyến đi nào được tìm thấy.</p>*/}
              {/*)}*/}


            </div>
          </div>
          {/*filter*/}


        </div>
      </div>
    </div>


  );
}
