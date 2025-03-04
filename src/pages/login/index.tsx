import { Checkbox, Form, Input, Button } from "antd";
import { AuthForm, useAuth } from "context/auth-context";
import { useState } from "react";

export const LoginPage = () => {
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
    <div style={{ width: "600px", margin: "0 auto", padding: "20px" }}>
      <div>username：{g_User?.user?.username}</div>
      <div>password：{g_User?.user?.password}</div>
      <Form
        name="loginForm"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={loginForm}
        onFinish={onFinish}
        autoComplete="off"
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
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>记住我</Checkbox>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
