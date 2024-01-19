import { Layout } from 'antd';
import { FC, ReactNode } from 'react';
import Logo from '../Logo';

const { Header: AntHeader } = Layout;

type Props = {
  logoutButton: ReactNode
}

const Header: FC<Props> = ({ logoutButton }) => (
  <AntHeader style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <Logo />
    {logoutButton}
  </AntHeader>
);

export default Header;