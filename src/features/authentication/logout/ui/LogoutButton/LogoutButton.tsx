import type { FC } from 'react';
import { Button as AntButton } from 'antd';
import { useAppDispatch } from 'shared/model';
import logoutThunk from '../../model/logout.ts';

const LogoutButton: FC = () => {
  const dispatch = useAppDispatch();
  const onClickHandler = () => {
    dispatch(logoutThunk());
  };

  return (
    <AntButton onClick={onClickHandler}>Выход</AntButton>
  );
};

export default LogoutButton;