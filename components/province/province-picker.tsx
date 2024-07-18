import {useEffect, useRef, useState} from "react";
import Image from "next/image";

export default function ProvincePicker({title, provinces}) {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className="relative w-full h-full ">
      {isOpen && (
        <div ref={panelRef} className={`absolute bg-white rounded-xl border shadow-md py-2 min-w-[360px] z-30`}>
          <div className={'flex justify-between'}>
            <label className="hidden pl-9 text-sm font-medium lg:block">{title}</label>
            <Image src={"/assets/close.svg"} alt={"close"} width={10} height={10} onClick={togglePanel}  className={"mr-5 cursor-pointer"} />
          </div>
          <div className={`py-2`}>
            <div className={`flex px-4`}>
        <span className={`border border-orange-500 cursor-pointer mx-auto rounded-md relative p-4  w-full`}>
          <input type={"text"} className={`w-full outline-0 font-normal`} placeholder={"Nhập " + title.toLowerCase()}/>
        </span>
            </div>
            <div className={``}>
              <div className={`px-4 py-3 font-medium uppercase`}>Tỉnh/Thành phố</div>
              <div className={'overflow-y-scroll h-64'}>
                {
                  provinces?.map(province => (
                    <div key={province.id} className={`flex cursor-pointer border-b border-neutral-200 px-4 py-3 hover:bg-[#FEF6F3] `}>
                      <div className="cursor-pointer text-[15px] font-medium">{province.provinceName}</div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      )
      }

      <div className={"flex items-center w-full h-full" } onClick={togglePanel}>
        <input placeholder={"Chọn " + title.toLowerCase()}  readOnly={true} className="max-w-[140px] pl-4 truncate lg:max-w-[220px] font-medium outline-none" type={"text"} ></input>
      </div>

    </div>

  );
}