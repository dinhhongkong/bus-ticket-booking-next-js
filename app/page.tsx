import Image from "next/image";
import Header from "../components/header/header";
import styles from "./home.module.css"
import Link from "next/link";


export default function Home() {
  return (
    <>

      <div className={`${styles['search-form']} m-2 font-medium 2lg:m-auto xl:w-[1128px]`}>
        {/*select ticket type*/}
        <div className={"flex items-center justify-between text-[15px]"}>
          <div className={"ant-radio-group ant-radio-group-outline radio-group-custom"}>
            <label className={"ant-radio-wrapper ant-radio-wrapper-checked"}>
              <span className={"ant-radio ant-radio-checked"}>
                <input type={"radio"} className={"ant-radio-input"}/>
              </span>
              <span>Một chiều</span>
            </label>

            <label className={"ant-radio-wrapper ant-radio-wrapper-checked"}>
              <span className={"ant-radio ant-radio-checked"}>
                <input type={"radio"} className={"ant-radio-input"}/>
              </span>
              <span>Khứ hồi</span>
            </label>
          </div>

          <span className="cursor-pointer font-medium text-orange 2lg:contents">
            <a target="_blank" rel="noreferrer" href="/huong-dan-dat-ve-tren-web">Ticket booking guide</a>
          </span>
        </div>

        <div className={"grid grid-cols-1 pb-4 pt-4 2lg:grid-cols-2 2lg:gap-4"}>
          <div className={"relative flex justify-center 2lg:gap-4"}>
            <div className="flex-1"><label>Origin</label>
              <div
                className="input-search item-start mt-1 flex w-full cursor-pointer font-medium 2lg:items-center undefined text-base 2lg:text-lg ">
                <span className="max-w-[140px] truncate 2lg:max-w-[220px]">Buôn Ma Thuột<div
                  className="text-[13px] font-normal leading-[15px] text-[#4A4A4A]"></div></span></div>
            </div>

            <div className="flex-1 text-right 2lg:text-left"><label>Destination</label>
              <div
                className="input-search item-start mt-1 flex w-full cursor-pointer font-medium 2lg:items-center justify-end 2lg:justify-start text-base 2lg:text-lg ">
                <span className="max-w-[140px] truncate 2lg:max-w-[220px]">BX Mien Đông Mới<div
                  className="text-[13px] font-normal leading-[15px] text-[#4A4A4A]"></div></span></div>
            </div>
          </div>

          <div className="divide my-3 2lg:hidden"></div>




        </div>

      </div>
    </>
);
}
