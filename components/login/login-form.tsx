import {Button, Form, Input, Tooltip} from "antd";
import {EllipsisOutlined, EyeInvisibleOutlined, EyeTwoTone, InfoCircleOutlined, UserOutlined} from "@ant-design/icons";
import CustomButton from "@/components/ui/custom-button";


export default function LoginForm() {
  return (
    <Form
      labelCol={{span: 8}}
      wrapperCol={{span: 16}}
      style={{maxWidth: 600}}
    >
      <Input
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
        placeholder="Nhập mật khẩu"
        prefix={<EllipsisOutlined/>}
        iconRender={(visible) => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
        rootClassName={"mt-6 p-3"}
      />

      <Button className={"p-5 mt-6 text-white bg-orange-600 cursor-pointer rounded-3xl w-full hover:bg-orange-600"}>
        Đăng nhập
      </Button>

      <div className={"text-orange-600 mt-5 font-medium cursor-pointer"}>Quên mật khẩu?</div>
    </Form>


  )

}
