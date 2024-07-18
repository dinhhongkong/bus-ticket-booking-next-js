import {Button, ConfigProvider} from "antd";

export default function CustomButton({ children, ...props }) {
  return(
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultHoverColor: "#f8fafc",
            defaultHoverBg: "#ea020c"
          },
        },
      }}
    >
      <Button {...props}>
        {children}
      </Button>

    </ConfigProvider>
  )
}