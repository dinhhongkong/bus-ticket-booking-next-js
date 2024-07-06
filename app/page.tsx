"use client"
import styles from "./home.module.css"
import switch_icon from "@/public/assets/switch_location.svg"
import Image from "next/image";
import Picture from "@/public/assets/Artboard.png"
import ProvincePicker from "@/components/province/province-picker";
import {useState} from "react";
import Datepicker from "react-tailwindcss-datepicker";
import Test from "@/components/test/test";



export default function Home() {
  const [showProvincePicker, setShowProvincePicker] = useState(false);
  const [value, setValue] = useState({
    startDate: null,
    endDate: null
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  }


  const handleOpenModal = (e) => {
    setShowProvincePicker(true);
  };


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
                <div
                  className={`${styles["ant-radio-group"]} ${styles["ant-radio-group-outline"]} ${styles["radio-group-custom"]}`}>
                  <label className={`${styles["ant-radio-wrapper"]} ${styles["ant-radio-wrapper-checked"]}`}>
                  <span className={`${styles['ant-radio']} ${styles['ant-radio-checked']}`}>
                    <input type={"radio"} className={`${styles['ant-radio-input']}`}/>
                  </span>
                    <span>Một chiều</span>
                  </label>


                  <label className={`${styles["ant-radio-wrapper"]} ${styles["ant-radio-wrapper-checked"]}`}>
                  <span className={`${styles['ant-radio']} ${styles['ant-radio-checked']}`}>
                    <input type={"radio"} className={`${styles['ant-radio-input']}`}/>
                  </span>
                    <span>Khứ hồi</span>
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
                    <div className={`${styles['input-search']} item-start mt-1 flex w-full cursor-pointer font-medium lg:items-center text-base lg:text-lg`}>
                      <ProvincePicker title={"Điểm đi"}/>
                    </div>
                  </div>

                  <img className={`${styles['switch-location']} bottom-6 h-8 w-8 lg:bottom-3 lg:h-10 lg:w-10`}
                       src={switch_icon.src}
                       alt="switch location icon"/>

                  <div className="flex-1 text-right lg:text-left">
                    <label>Điểm đến</label>
                    <div className={` ${styles['input-search']}  item-start mt-1 flex w-full cursor-pointer font-medium lg:items-center justify-end lg:justify-start text-base lg:text-lg `}>
                      <ProvincePicker title={"Điểm đến"}/>
                    </div>
                  </div>
                </div>

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
                                value={value}
                                placeholder={"Chọn ngày đi"}
                                inputClassName={"bg-white w-full rounded-md outline-none"}
                                containerClassName="relative"
                                displayFormat={"DD-MM-YYYY"}
                                onChange={handleValueChange}
                    />
                  </span>
                  </div>
                </div>
                <div className="divide my-3 lg:hidden"></div>

              </div>
              <div className="relative z-10 flex w-full justify-center">
                <button
                  className="absolute h-12 rounded-full bg-orange-600 px-20 text-base text-white transition duration-200">
                  Tìm chuyến xe
                </button>
              </div>
            </div>

          </div>

        </section>


        <div className={'xl:w-[1128px] mx-auto'}>
          {/*filter*/}
          <div className={'w-[300px] min-w-[300px] border shadow-xl rounded-xl'}>
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

            <div className={'divide-y'}/>

            <div className={'p-4'}>
              <div>Loại xe</div>
              <div className={'mt-4 flex flex-wrap gap-2'}>
                <div className={'cursor-pointer rounded-md py-1 px-3 border text-[14px] font-normal'}>Ghế</div>
                <div className={'cursor-pointer rounded-md py-1 px-3 border text-[14px] font-normal'}>Giường nằm</div>
                <div className={'cursor-pointer rounded-md py-1 px-3 border text-[14px] font-normal'}>Limosine</div>
              </div>
            </div>
          </div>


        </div>


      </div>

      <Test/>
      {/*<ProvincePicker show={showProvincePicker} position={modalPosition} onClose={() => setShowProvincePicker(false)}/>*/}
    </div>

  );
}
