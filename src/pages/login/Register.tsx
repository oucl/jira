import styled from "@emotion/styled";
import { Form, Input, Button, message } from "antd";
import { register } from "api/auth-provider";
import { useState } from "react";
interface RegisterForm {
  username: string;
  password: string;
  cpassword: string;
}
export const Register = ({
  setIsRegister,
}: {
  setIsRegister: (params: any) => void;
}) => {
  const [loginForm] = useState<RegisterForm>({
    username: "",
    password: "",
    cpassword: "",
  });
  const [messageApi, contextHolder] = message.useMessage();
  //
  const onFinish = async (values: any) => {
    console.log("Received values of form: ", values);
    if (values.password !== values.cpassword) {
      messageApi.open({
        type: "error",
        content: "两次输入的密码不一致",
      });
      return;
    }
    await register(values);
    messageApi.open({
      type: "success",
      content: "注册成功，请登录！",
      duration: 2,
    });
    setTimeout(() => {
      setIsRegister(false);
    }, 1000);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      {contextHolder}
      <Form
        name="loginForm"
        initialValues={loginForm}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: "请输入用户名!" }]}
        >
          <Input allowClear />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: "请输入密码!" }]}
        >
          <Input.Password allowClear />
        </Form.Item>
        <Form.Item
          label="确认密码"
          name="cpassword"
          rules={[{ required: true, message: "请输入确认密码!" }]}
        >
          <Input.Password allowClear />
        </Form.Item>
        <Form.Item>
          <LongButton type="primary" htmlType="submit">
            注册
          </LongButton>
        </Form.Item>
      </Form>
    </>
  );
};
const LongButton = styled(Button)`
  width: 100%;
`;
