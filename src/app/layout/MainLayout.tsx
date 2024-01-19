import type { FC } from 'react';
import { Layout } from 'antd';
import block from 'bem-cn';
import { Outlet, ScrollRestoration } from 'react-router-dom';

import { Header } from 'widgets/header';

import { LogoutButton } from 'features/authentication/logout';

import './MainLayout.scss';

const b = block('main-layout');

const MainLayout: FC = () => (
  <Layout className={b().toString()}>
    <Header logoutButton={(<LogoutButton />)} />
    <Layout.Content className={b('content').toString()}>
      <Outlet />
    </Layout.Content>
    <ScrollRestoration />
  </Layout>
);

export default MainLayout;