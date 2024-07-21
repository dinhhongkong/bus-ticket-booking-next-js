"use client"
export default function Payment() {


  const handlePaymentMethodChange = async (event) => {
    if (event.target.value === 'VNPAY') {

    }
  };


  return (
    <div className="flex flex-wrap justify-center max-w-4xl mx-auto">
      <div className="w-1/2 p-4">
        {/*payment method*/}
        <div className=" flex-col 2lg:flex border border-[#DDE2E8] rounded-xl">
          <div className="text-xl font-medium"> Chọn phương thức thanh toán</div>
          <div className="ant-radio-group ant-radio-group-outline">
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
        <div className="w-full rounded-xl border border-[#DDE2E8] bg-white px-4 py-3 text-[15px]">
          <div className="icon-orange flex gap-2 text-xl font-medium text-black">Chi tiết giá</div>
          <div className="mt-4 flex items-center justify-between"><span
            className="text-gray">Giá vé lượt đi</span><span
            className="text-orange">{100000}đ</span></div>
          {/*<div className="mt-1 flex items-center justify-between"><span*/}
          {/*    className="text-gray">Giá vé lượt về</span><span*/}
          {/*    className="text-orange">0đ</span></div>*/}
          <div className="mt-1 flex items-center justify-between"><span
            className="text-gray">Phí thanh toán</span><span
            className="text-black">0đ</span></div>
          <div className="divide my-3"></div>
          <div className="flex items-center justify-between"><span className="text-gray">Tổng tiền</span><span
            className="text-orange">{10000}đ</span></div>
        </div>
      </div>
      <div className="w-1/2 p-4">

        {/*Thông tin hàng khách*/}
        <div className="w-full rounded-xl border border-[#DDE2E8] bg-white px-4 py-3 text-[15px]"><p
          className="text-xl font-medium text-black">Thông tin hành khách</p>
          <div className="mt-4 flex items-center justify-between"><span
            className="text-gray w-28">Họ và tên</span><span
            className="text-black">{"Đinh Hồng Kông"}</span></div>
          <div className="mt-1 flex items-center justify-between"><span className="text-gray w-28">Số điện thoại</span><span
            className="text-black">{"08684081232"}</span></div>
          <div className="mt-1 flex items-center justify-between"><span
            className="text-gray w-28">Email</span><span
            className="text-black">{"Đinhhongkonh2002@gmai.com"}</span></div>
        </div>

        {/*Thông tin chuyến đi*/}
        <div className="w-full rounded-xl border border-[#DDE2E8] bg-white px-4 py-3 text-[15px]">
          <p className="icon-orange flex gap-4 text-xl font-medium text-black">Thông tin lượt đi
          </p>
          <div className="mt-4 flex justify-between"><span className="text-gray w-20">Tuyến xe</span><span
            className="text-right text-black">{"Đăk Lắk"} - {"Đăk Lắk"}</span></div>
          <div className="mt-1 flex items-center justify-between"><span className="text-gray w-30">Thời gian xuất bến</span><span
            className="text-[#00613D]">{"10h"} {"20/12/2002"}</span></div>
          <div className="mt-1 flex items-center justify-between"><span className="text-gray w-28">Số lượng ghế</span><span
            className="text-black">{5} Ghế</span></div>
          <div className="mt-1 flex items-center justify-between"><span
            className="text-gray w-28">Số ghế</span><span className="text-[#00613D]">{"A1 A2"}</span></div>
          <div className="mt-1 flex items-center justify-between"><span className="text-gray">Tổng tiền lượt đi</span><span
            className="text-[#00613D]">{100000}</span></div>
        </div>

        {/*thông tin chuyến về nếu có khứ hồi*/}

      </div>
    </div>
  )
}