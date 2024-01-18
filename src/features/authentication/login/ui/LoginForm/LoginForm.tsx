import { FC } from 'react';
import { Button, Form, Input } from 'antd';
import { type FormData } from '../../model/types.ts';
import loginThunk from '../../model/login.ts';
import { useAppDispatch } from 'shared/model';

const LoginForm: FC = () => {
  const [form] = Form.useForm<FormData>();
  const d = useAppDispatch();

  return (
    <Form
      form={form}
      onFinish={(data) => {
        d(loginThunk(data))
          .unwrap()
          .then(console.log);
      }}
    >
      <Form.Item
        name="login"
        label="Login"
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
      >
        <Input.Password></Input.Password>
      </Form.Item>
      <Button type="primary" htmlType="submit">OK</Button>
    </Form>
  );
};

export default LoginForm;