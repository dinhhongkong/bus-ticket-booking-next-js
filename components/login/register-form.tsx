import {EllipsisOutlined, EyeInvisibleOutlined, EyeTwoTone, InfoCircleOutlined, UserOutlined} from "@ant-design/icons";
import {Button, Flex, Form, GetProp, Input, Tooltip} from "antd";
import {OTPProps} from "antd/es/input/OTP";
import {useState} from "react";

export default function RegisterForm() {

  const [process, setProcess] = useState(1)

  const onChange: GetProp<typeof Input.OTP, 'onChange'> = (text) => {
    console.log('onChange:', text);
  };

  const sharedProps: OTPProps = {
    onChange,
  };

  function onBtnClick(event) {
    if (process===1) {
      setProcess(2)
    }
    else if (process===2) {
      setProcess(3)
    }

  }


  return (
    <Form
      labelCol={{span: 8}}
      wrapperCol={{span: 16}}
      style={{maxWidth: 600}}
    >

      { process == 1 && (
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
      )}

      { process === 2 && (
        <div>
          <div className={"w-full text-center font-medium text-xl text-orange-600"}>Nhập mã xác thực</div>
          <Flex gap="middle"  vertical className={"mt-3 p-3 mx-6"}>
            <Input.OTP mask="🔒" {...sharedProps} datatype={"number"} />
          </Flex>
        </div>
      )
      }

      { process === 3 && (
        <div>
          <Input.Password
            placeholder="Nhập mật khẩu"
            prefix={<EllipsisOutlined/>}
            iconRender={(visible) => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
            rootClassName={"mt-6 p-3"}
          />
          <Input.Password
            placeholder="Xác nhận khẩu"
            prefix={<EllipsisOutlined/>}
            iconRender={(visible) => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
            rootClassName={"mt-6 p-3"}
          />
        </div>
      )
      }




      <Button className={"p-5 mt-6 text-white bg-orange-600 cursor-pointer rounded-3xl w-full hover:bg-orange-600"}
              onClick={onBtnClick}
      >
        Tiếp tục
      </Button>

    </Form>


  )
}