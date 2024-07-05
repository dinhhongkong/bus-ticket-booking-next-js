import styles from './province-picker.module.css'
import {useEffect, useRef} from "react";
import Image from "next/image";

export default function ProvincePicker({show}) {
  if (!show) {
    return
  }


  return (
      <div className={`absolute bg-white rounded-xl border shadow-md py-2 min-w-[360px]`}>
        <div className={'flex justify-between'}>
          <label className="hidden pl-9 text-sm font-medium lg:block">Điểm đi</label>
          <Image src={"/assets/close.svg"} alt={"close"} width={10} height={10}  className={"mr-5 cursor-pointer"} />
        </div>
        <div className={`py-2`}>
          <div className={`flex px-4`}>
        <span className={`border border-orange-500 cursor-pointer mx-auto rounded-md relative p-4  w-full`}>
          <input type={"text"} className={`w-full outline-0 font-normal`} placeholder={"Chọn điểm đi"}/>
        </span>
          </div>
          <div className={``}>
            <div className={`px-4 py-3 font-medium uppercase`}>Tỉnh/Thành phố</div>
            <div className={'overflow-y-scroll h-64'}>
              <div className={`flex cursor-pointer border-b border-neutral-200 px-4 py-3 hover:bg-[#FEF6F3] `}>
                <div className="cursor-pointer text-[15px] font-medium">An Giang</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}