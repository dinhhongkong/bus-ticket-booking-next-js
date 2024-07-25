"use client"
import {Select} from "antd";
import {useState} from "react";
import {formatDate, formatTime} from "@/utils/timeUtils";

interface address{
  "officeId": number,
  "deltaTime": string,
  "type": number,
  "officeName": string
  "address": string
}

export default function Station ({ title ,pickup, dropOff, day, onChangePickup, onChangeDropOff}) {
  const [infoTime, setInfoTime] = useState("")
  const [infoStation, setInfoStation] = useState("")


  const onChangeSelectPickup = (value) => {
    console.log(value)
    onChangePickup(value)
  }

  const onChangeSelectDropOff = (value) => {
    console.log(value)
    onChangeDropOff(value)
  }


  const onClickStation = (time, name) => {
    setInfoTime(formatTime(time) + " - "  + formatDate(day) )
    setInfoStation(name)
  }

  const renderOptionPickup = (dataList : address[]) => {
    return dataList.map((data) => ({
      label: (
        <div onClick={() => onClickStation(data.deltaTime, data.officeName)}>
          <div className={"text-xl text-orange-600"}>
            <span className={"text-[15px] font-medium"}>
              {data.deltaTime} - {data.officeName}
            </span>
          </div>
          <p className={"text-gray text-[13px] font-medium pb-2"}>Địa chỉ: {data.address}</p>
          <div className="h-[1px] bg-[#f3f3f5] w-full"></div>
        </div>

      ),
      value: data.officeId,
      officeName: data.officeName // Thêm dòng này
    }));
  }

  const renderOptionDropOff = (dataList : address[]) => {
    return dataList.map((data) => ({
      label: (
        <div>
          <div className={"text-xl text-orange-600"}>
            <span className={"text-[15px] font-medium"}>
              {data.deltaTime} - {data.officeName}
            </span>
          </div>
          <p className={"text-gray text-[13px] font-medium pb-2"}>Địa chỉ: {data.address}</p>
          <div className="h-[1px] bg-[#f3f3f5] w-full"></div>
        </div>

      ),
      value: data.officeId,
      officeName: data.officeName // Thêm dòng này
    }));
  }

  return(
    <div className="flex w-full flex-col p-4 text-[15px] md:p-6">
      <div className="icon-orange flex gap-4 text-xl font-medium text-black">Thông tin đón trả {title}</div>
      <div className="flex-1 mt-6 flex gap-6 ">
        <div className="flex flex-1 flex-col gap-4"><span
          className="text-base font-medium uppercase">Điểm đón</span>
          {/*<div className="relative flex justify-between">*/}
          {/*  <div className="">*/}
          {/*    <label className="">*/}
          {/*      <span className="">*/}
          {/*      <input type="radio" className="" value="0"/>*/}
          {/*      <span className=""></span>*/}
          {/*      </span>*/}
          {/*      <span>Điểm đón</span>*/}
          {/*    </label>*/}
          {/*    <label className="">*/}
          {/*      <span className="ant-radio">*/}
          {/*        <input type="radio" className="a" value="1"/>*/}
          {/*        <span className="ant-radio-inner"></span>*/}
          {/*      </span>*/}
          {/*        <span>Trung chuyển</span>*/}
          {/*    </label>*/}
          {/*  </div>*/}
          {/*</div>*/}
          <Select
            showSearch
            placeholder="Vui lòng chọn điểm đón"
            className={"h-10"}
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
              (optionA?.officeName ?? '').toLowerCase().localeCompare((optionB?.officeName ?? '').toLowerCase())
            }
            options={renderOptionPickup(pickup)}
            placement={"bottomRight"}
            optionLabelProp="officeName"
            onChange={onChangeSelectPickup}
          />
          <div className="flex flex-wrap gap-1 ">
            <span className="">Quý khách vui lòng có mặt tại Bến xe/Văn Phòng</span>
            <span className="font-semibold">{infoStation}</span>
            <span className="font-semibold  text-red-500">Trước {infoTime}</span>
            <span className="">để được trung chuyển hoặc kiểm tra thông tin trước khi lên xe.</span>
          </div>
        </div>
        <div className="h-full w-[1px] border-r"></div>
        <div className="flex flex-1 flex-col gap-4"><span
          className="text-base font-medium uppercase">Điểm trả</span>
          {/*<div className="relative flex justify-between">*/}
          {/*  <div className="">*/}
          {/*    <label*/}
          {/*      className="">*/}
          {/*      <span*/}
          {/*        className="">*/}
          {/*        <input type="radio" className="" value="0"/>*/}
          {/*        <span className=""></span>*/}
          {/*      </span>*/}
          {/*      <span>Điểm trả</span>*/}
          {/*    </label>*/}
          {/*    <label className="">*/}
          {/*      <span className="">*/}
          {/*        <input type="radio" className="" value="1"/>*/}
          {/*        <span className=""></span>*/}
          {/*      </span>*/}
          {/*      <span>Trung chuyển</span>*/}
          {/*    </label>*/}
          {/*  </div>*/}
          {/*</div>*/}

          <Select
            showSearch
            placeholder="Vui lòng chọn điểm đón"
            className={"h-10"}
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
              (optionA?.officeName ?? '').toLowerCase().localeCompare((optionB?.officeName ?? '').toLowerCase())
            }
            placement={"bottomRight"}
            options={renderOptionDropOff(dropOff)}
            optionLabelProp="officeName"
            onChange={onChangeSelectDropOff}
          />

        </div>
      </div>
    </div>
  )

}