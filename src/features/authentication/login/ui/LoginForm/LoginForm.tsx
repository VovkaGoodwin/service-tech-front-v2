import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd';

import { useAppDispatch } from 'shared/model';

import type { FormData } from '../../model/types.ts';
import loginThunk from '../../model/login.ts';


const LoginForm: FC = () => {
  const [form] = Form.useForm<FormData>();
  const d = useAppDispatch();
  const navigate = useNavigate();

  return (
    <Form
      form={form}
      onFinish={(data) => {
        d(loginThunk(data))
          .unwrap()
          .then(() => navigate('/'));
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