import type { FC, ReactNode } from 'react';
import { Layout as AntLayout } from 'antd';
import { Outlet, ScrollRestoration } from 'react-router-dom';

type Props = {
  headerSlot: ReactNode
}

const Layout: FC<Props> = ({ headerSlot }) => (
  <AntLayout>
    {headerSlot}
    <Outlet />
    <ScrollRestoration />
  </AntLayout>
);

export default Layout;