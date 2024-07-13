"use client"
import {Tabs} from "antd";
import LoginForm from "@/components/login/login-form";

const items = [
  {
    key: '1',
    label: 'Đăng nhập',
    children: <LoginForm/>
  },
  {
    key: '2',
    label: 'Đăng ký',
    children: 'Content of Tab Pane 2',
  }
];

export default function Login(){
  function hello( event) {
    console.log("hello world")
  }
  return(
    <main className={"w-full"}>
      <div className={"relative max-w-[1128px] mx-auto pt-[360px] flex flex-col"}>
        <div className={"absolute max-w-[1128px] top-[-110px] h-[471px] w-full border-orange-500 shadow-xl bg-[#fff] rounded-xl flex justify-center"}>

          {/*ảnh trang trí*/}
          <div className={"relative flex-auto flex-col items-start lg:flex "}>

          </div>


          <div className={"mt-8 flex w-full flex-col items-center sm:w-[480px]"}>
            <div className="text-2xl font-medium">Đăng nhập tài khoản</div>
            <Tabs defaultActiveKey="1" items={items} onChange={hello} >

            </Tabs>


          </div>



        </div>
      </div>

    </main>
  )
}