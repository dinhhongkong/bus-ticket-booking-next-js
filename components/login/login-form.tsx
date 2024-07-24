import {Button, Form, Input, Tooltip} from "antd";
import {EllipsisOutlined, EyeInvisibleOutlined, EyeTwoTone, InfoCircleOutlined, UserOutlined} from "@ant-design/icons";
import {useAuth} from "@/context/AuthenticationContext";
import {postData} from "@/api/apiClient";
import {useState} from "react";
import {useNotification} from "@/context/NotificationContext";
import {useRouter} from "next/navigation";


export default function LoginForm() {
  const {login} = useAuth()
  const {setNotification} = useNotification()
  const router = useRouter();
  const [loginRequest, setLoginRequest] = useState({
    username: "",
    password: ""
  })

  function onChangeUsername(event) {
    setLoginRequest(
      prevInfo => ({
        ...prevInfo,
        username: event.target.value
      })
    )

  }

  function onChangePassword(event) {
    setLoginRequest(
      prevInfo => ({
        ...prevInfo,
        password: event.target.value
      })
    )
  }

  function onClickLogin() {
    if (loginRequest.username.length ===0 && loginRequest.password.length ===0 ) {
      setNotification({ show: true, message: 'Quý khách vui lòng điền tài khoản và mật khẩu', type: 'error' })
      return
    }
    const sendLogin = async () => {
      try {
        const data = await postData("/api/v1/auth/login",loginRequest)
        login(data.accessToken)
        setNotification({ show: true, message: 'Đăng nhập thành công', type: 'success' })
        router.push(`/`)
      }
      catch (error) {
        setNotification({ show: true, message: 'Tài khoản hoặc mật khẩu không chính xác', type: 'error' })
      }

    }





    sendLogin()


  }
  return (
    <Form
      labelCol={{span: 8}}
      wrapperCol={{span: 16}}
      style={{maxWidth: 600}}
    >
      <Input
        onChange={onChangeUsername}
        placeholder="Nhập email"
        prefix={<UserOutlined style={{color: 'rgba(0,0,0,.25)'}}/>}
        suffix={
          <Tooltip title="Nhập email">
            <InfoCircleOutlined style={{color: 'rgba(0,0,0,.45)'}}/>
          </Tooltip>
        }
        rootClassName={"mt-6 p-3"}
      />

      <Input.Password
        onChange={onChangePassword}
        placeholder="Nhập mật khẩu"
        prefix={<EllipsisOutlined/>}
        iconRender={(visible) => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
        rootClassName={"mt-6 p-3"}
      />

      <Button
        onClick={onClickLogin}
        className={"p-5 mt-6 text-white bg-orange-600 cursor-pointer rounded-3xl w-full hover:bg-orange-600"}>
        Đăng nhập
      </Button>

      <div className={"text-orange-600 mt-5 font-medium cursor-pointer"}>Quên mật khẩu?</div>
    </Form>


  )

}
