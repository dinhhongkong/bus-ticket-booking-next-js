export default function TripDetail({title}) {
  return (
    <div className="w-full rounded-xl border border-[#DDE2E8] bg-white px-4 py-3 text-[15px]">
      <p className="icon-orange flex gap-4 text-xl font-medium text-black">Thông tin lượt đi</p>
      <div className="mt-4 flex justify-between">
        <span className="text-gray-500 w-20">Tuyến xe</span>
        <span className="text-right text-black">Buon Ma Thuot - Mien Dong Moi</span>
      </div>

      <div className="mt-1 flex items-center justify-between">
        <span className="text-gray-500 w-30">Thời gian xuất bến</span>
        <span className="text-[#00613D]">09:00 15/07/2024</span>
      </div>
      <div className="mt-1 flex items-center justify-between">
        <span className="text-gray-500 w-28">Số lượng ghế</span>
        <span className="text-black">0 Ghế</span>
      </div>
      <div className="mt-1 flex items-center justify-between">
        <span className="text-gray-500 w-28">Số ghế</span>
        <span className="text-[#00613D]"></span>
      </div>
      <div className="mt-1 flex items-center justify-between">
        <span className="text-gray-500">Tổng tiền lượt đi</span>
        <span className="text-[#00613D]">0đ</span>
      </div>
    </div>

  )
}