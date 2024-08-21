import {EllipsisOutlined, EyeInvisibleOutlined, EyeTwoTone, InfoCircleOutlined, UserOutlined} from "@ant-design/icons";
import {Button, Flex, Form, GetProp, Input, Tooltip} from "antd";
import {OTPProps} from "antd/es/input/OTP";
import {useState} from "react";
import {fetchData, postData} from "@/api/apiClient";
import {useNotification} from "@/context/NotificationContext";

interface UserLogin{
  username: string,
  password: string
}
export default function RegisterForm() {

  const [process, setProcess] = useState(1)
  const [register, setRegister] = useState<UserLogin>()
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const {setNotification} = useNotification()

  const onChange: GetProp<typeof Input.OTP, 'onChange'> = (text) => {
    console.log('onChange:', text);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegister(prev => ({ ...prev, username: e.target.value }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegister(prev => ({ ...prev, password: e.target.value }));
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const registerAction = async ()=> {
    try {
      const data = await postData("/auth/register", register);
      setNotification({show: true, message: 'Quý khách đăng kí thành công, vui lòng đăng nhập', type: 'success'})
    }
    catch (error) {
      console.error("Error fetching data:", error);
      setNotification({show: true, message: 'Username đã tồn tại, vui lòng tạo username khác', type: 'error'})
    }
    finally {

    }
  }


  const onBtnClickSubmit = () => {
    if (process === 1 && register?.username) {
      setProcess(3);
    } else if (process === 3) {
      if (register?.password && confirmPassword === register?.password) {
        registerAction()


      } else {

        console.error('Mật khẩu không khớp hoặc chưa được nhập');
      }
    }
  };

  const sharedProps: OTPProps = {
    onChange,
  };

  function onBtnClick(event) {
    if (process===1) {
      setProcess(3)
    }
    // else if (process===2) {
    //   setProcess(3)
    // }

  }


  return (
    <div
    >

      { process == 1 && (
        <Input
          onChange={handleUsernameChange }
          placeholder="Nhập username"
          prefix={<UserOutlined style={{color: 'rgba(0,0,0,.25)'}}/>}
          suffix={
            <Tooltip title="Nhập username">
              <InfoCircleOutlined style={{color: 'rgba(0,0,0,.45)'}}/>
            </Tooltip>
          }


          rootClassName={"mt-6 p-3"}
        />
      )}

      {/*{ process === 2 && (*/}
      {/*  <div>*/}
      {/*    <div className={"w-full text-center font-medium text-xl text-orange-600"}>Nhập mã xác thực</div>*/}
      {/*    <Flex gap="middle"  vertical className={"mt-3 p-3 mx-6"}>*/}
      {/*      <Input.OTP mask="🔒" {...sharedProps} datatype={"number"} />*/}
      {/*    </Flex>*/}
      {/*  </div>*/}
      {/*)*/}
      {/*}*/}

      { process === 3 && (
        <div>
          <Input.Password
            onChange={handlePasswordChange }
            placeholder="Nhập mật khẩu"
            prefix={<EllipsisOutlined/>}
            iconRender={(visible) => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
            rootClassName={"mt-6 p-3"}
          />
          <Input.Password
            onChange={handleConfirmPasswordChange }

            placeholder="Xác nhận khẩu"
            prefix={<EllipsisOutlined/>}
            iconRender={(visible) => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
            rootClassName={"mt-6 p-3"}
          />
        </div>
      )
      }




      <Button className={"p-5 mt-6 text-white bg-orange-600 cursor-pointer rounded-3xl w-full hover:bg-orange-600"}
              onClick={onBtnClickSubmit}
      >
        Tiếp tục
      </Button>

    </div>


  )
}