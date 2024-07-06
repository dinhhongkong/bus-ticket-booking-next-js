import Image from "next/image";

export default function Trip() {
  return (
    <div className={"rounded-xl border-2  px-4 py-4 shadow mb-5 hover:border-orange-500 hover:shadow-2xl transition-shadow"}>

      <div className={"flex justify-between pt-3 "}>
        <div className={"flex-1"}>
          <div className={"flex justify-between items-center gap-4"}>
            <span className={"text-2xl font-medium"}>8h00</span>
            <div className={"flex items-center w-full"}>
              <Image src={"/assets/pickup.svg"} alt={"pickup"} width={15} height={15}/>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className={"text-center text-gray-500 font-medium"}>
                {"8 Giờ"}
                <br/>
                <span className="text-[13px] text-gray-500 font-medium">(Asian/Ho Chi Minh)</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <Image src={"/assets/station.svg"} alt={"pickup"} width={15} height={15}/>
            </div>
            <span className={"text-2xl font-medium"}>9h00</span>
          </div>

          <div className={"flex justify-between"}>
            <span>Bến xe miền đông</span>
            <span>Bến xe miền đông</span>
          </div>
        </div>


        <div className={"max-w-[200px] ml-3"}>
          <div className="text-gray hidden min-w-[200px] flex-wrap items-center gap-2 lg:flex">
            <div className={"flex items-center font-medium"}>
              <div className="h-[6px] w-[6px] rounded-full bg-[#C8CCD3] m-1"></div>
              <span className={"text-gray-500"} >Giường</span>
              <div className="ml-3 h-[6px] w-[6px] rounded-full bg-[#C8CCD3] m-1 "></div>
              <span className="text-green-900">40 chỗ trống</span>
            </div>

            <span className="mt-2 w-full text-end text-lg font-semibold text-orange-600">275.000đ</span>
          </div>
        </div>
      </div>
      <div className={"w-full h-[1px] my-3 bg-black opacity-10 rounded-xl"}/>


      {/*<hr/>*/}

      <div className={"flex flex-grow "}>
        <button className={"mr-0 ml-auto rounded-xl font-medium bg-orange-200 text-orange-600 p-1 hover:bg-orange-600 hover:text-white"}>
          <span className={"m-1"}>Chọn chuyến</span>
        </button>
      </div>

    </div>
  );

}