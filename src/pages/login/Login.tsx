import styled from "@emotion/styled";
import { Checkbox, Form, Input, Button } from "antd";
import { AuthForm, useAuth } from "context/auth-context";
import { useState } from "react";

export const Login = () => {
  const g_User = useAuth();
  //
  const [loginForm] = useState<AuthForm>({
    username: "",
    password: "",
    remember: true,
  });
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    g_User?.login(values);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
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
      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>记住我</Checkbox>
      </Form.Item>
      <Form.Item>
        <LongButton type="primary" htmlType="submit">
          登录
        </LongButton>
      </Form.Item>
    </Form>
  );
};
const LongButton = styled(Button)`
  width: 100%;
`;
