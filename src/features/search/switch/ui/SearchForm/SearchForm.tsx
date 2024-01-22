import type  { FC } from 'react';
import { App, Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from 'shared/model';

import type { SearchParams } from '../../model/types.ts';
import searchThunk from '../../model/search.ts';

const SearchForm: FC = () => {
  const [form] = Form.useForm<SearchParams>();
  const { message } = App.useApp();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <Form
      form={form}
      onFinish={(data) => {
        dispatch(searchThunk(data))
          .unwrap()
          .then((ports) => {
            if (ports === null) {
              message.warning('Коммутатор не найден', 3);
            } else {
              navigate('/switch', { state: { ports } });
            }
          });
      }}
    >
      <Form.Item
        name="ip"
        rules={[
          {
            pattern: /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
            required: true,
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="port"
        rules={[
          { type: 'number', min: 1, max: 24 }
        ]}
      >
        <Input />
      </Form.Item>
      <Button htmlType="submit">Искать</Button>
    </Form>
  );
};

export default SearchForm;