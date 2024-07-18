import {Button, Form, Input, Space} from "antd";

export default function CustomerInfo() {
  const [form] = Form.useForm();

  return (
    <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
      <Form.Item name="fullname" label="Họ và tên" rules={[{ required: true,type:"string", message:"Vui lòng điền họ và tên"}]}>
        <Input/>
      </Form.Item>

      <Form.Item name="phone" label="Số điện thoại" rules={[{ required: true, message: "Vui lòng điền số điện thoại" }]}>
        <Input />
      </Form.Item>

      <Form.Item name="email" label="Email" rules={[{ required: true, type: "email", message: "Vui lòng điền Email"  }]}>
        <Input />
      </Form.Item>
    </Form>
  )
}