"use client"
import {useCustomerInfo} from "@/context/CustomerContext";
import TripDetail from "@/components/trip/trip-detail";
import {formatCurrency} from "@/utils/formatCurrency";

export default function Payment() {
  const {tripInfo, customerInfo, setCustomerInfo } = useCustomerInfo();


  const handlePaymentMethodChange = async (event) => {
    if (event.target.value === 'VNPAY') {

    }
  };


  return (
    <div className="flex flex-wrap justify-center max-w-4xl mx-auto">
      <div className="w-1/2 p-4">
        {/*payment method*/}
        <div className=" mb-5 flex-col 2lg:flex border border-[#DDE2E8] rounded-xl">
          <div className=" mt-3 ml-3 text-xl font-medium"> Chọn phương thức thanh toán</div>
          <div className="ant-radio-group rounded p-3 ant-radio-group-outline">
            {/*Zalopay*/}
            <label className="ant-radio-wrapper m-0 flex items-center border-b py-3">
                            <span className="ant-radio">
                                <input type="radio" className="ant-radio-input" name={"paymentMethod"} value={"ZALOPAY"} />
                                <span className="ant-radio-inner"></span>
                            </span>
              <span>
                                <div className="flex w-full items-center">
                                    <img className="ml-4 mr-4 w-[40px]"
                                         src="https://storage.googleapis.com/futa-busline-web-cms-prod/zalo_a38c879763/zalo_a38c879763.svg"
                                         alt="" />
                                    <div className="flex w-full flex-col">
                                        <div className="flex w-52 items-end justify-between">
                                            <span className="text-base text-black">ZaloPay</span>
                                        </div>
                                    </div>
                                </div>
                            </span>
            </label>

            {/*vnpay*/}
            <label className="ant-radio-wrapper m-0 flex items-center border-b py-3">
                            <span className="ant-radio">
                                <input type="radio" className="ant-radio-input" name={"paymentMethod"} value={"VNPAY"} onChange={handlePaymentMethodChange} />
                                <span className="ant-radio-inner"></span>
                            </span>
              <span>
                                <div className="flex w-full items-center">
                                    <img className="ml-4 mr-4 w-[40px]"
                                         src="https://storage.googleapis.com/futa-busline-web-cms-prod/vnpay_fdc107eeec/vnpay_fdc107eeec.svg"
                                         alt="" />
                                    <div className="flex w-full flex-col">
                                        <div className="flex w-52 items-end justify-between">
                                            <span className="text-base text-black">VNPay</span>
                                        </div>
                                    </div>
                                </div>
                            </span>
            </label>
          </div>
        </div>

        {/*price details*/}
        <div className="w-full  rounded-xl border border-[#DDE2E8] bg-white px-4 py-3 text-[15px]">
          <div className="icon-orange flex gap-2 text-xl font-medium text-black">Chi tiết giá</div>
          <div className="mt-4 flex items-center justify-between"><span
            className="text-gray">Giá vé lượt đi</span><span
            className="text-orange">{formatCurrency(tripInfo.departure.price * tripInfo.departure.selectedSeat.length)}</span></div>
          {tripInfo.isRoundTrip && (
            <div className="mt-1 flex items-center justify-between"><span
              className="text-gray">Giá vé lượt về</span><span
              className="text-orange">{formatCurrency(tripInfo.destination.price * tripInfo.destination.selectedSeat.length)}</span>
            </div>
          )}

          <div className="mt-1 flex items-center justify-between"><span
            className="text-gray">Phí thanh toán</span><span
            className="text-black">0đ</span></div>
          <div className="divide my-3"></div>
          <div className="flex items-center justify-between"><span className="text-gray">Tổng tiền</span>
            <span className="text-orange">{formatCurrency(
              tripInfo.departure.price * tripInfo.departure.selectedSeat.length
                      +
                      tripInfo.destination.price * tripInfo.destination.selectedSeat.length)}</span>
          </div>
        </div>
      </div>
      <div className="w-1/2 p-4">

        {/*Thông tin hàng khách*/}
        <div className="w-full mb-5 rounded-xl border border-[#DDE2E8] bg-white px-4 py-3 text-[15px]"><p
          className="text-xl font-medium text-black">Thông tin hành khách</p>
          <div className="mt-4 flex items-center justify-between"><span
            className="text-gray w-28">Họ và tên</span><span
            className="text-black">{customerInfo.name}</span></div>
          <div className="mt-1 flex items-center justify-between"><span className="text-gray w-28">Số điện thoại</span><span
            className="text-black">{customerInfo.phoneNumber}</span></div>
          <div className="mt-1 flex items-center justify-between"><span
            className="text-gray w-28">Email</span><span
            className="text-black">{customerInfo.email}</span></div>
        </div>



        {/*Thông tin chuyến đi*/}
        <TripDetail title={"lượt đi"}
                    date={tripInfo.departure.day}
                    time={tripInfo.departure.time}
                    price={tripInfo.departure.price}
                    seats={tripInfo.departure.selectedSeat}
                    provinceStart={tripInfo.departure.provinceStart}
                    provinceEnd={tripInfo.departure.provinceEnd}
        />
        <div className={"h-4"}/>

        {tripInfo.isRoundTrip && (
          <TripDetail title={"lượt về"}
                      date={tripInfo.destination.day}
                      time={tripInfo.destination.time}
                      price={tripInfo.destination.price}
                      seats={tripInfo.destination.selectedSeat}
                      provinceStart={tripInfo.destination.provinceStart}
                      provinceEnd={tripInfo.destination.provinceEnd}
          />
        )}

        {/*thông tin chuyến về nếu có khứ hồi*/}

      </div>
    </div>
  )
}