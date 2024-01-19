import type { FC, PropsWithChildren } from 'react';
import { ConfigProvider, App as AntApp } from 'antd';

const StyleProvider: FC<PropsWithChildren> = ({ children }) => (
  <ConfigProvider
    prefixCls="gdwn"
    theme={{
      components: {
        Layout: {
          headerBg: 'rgba(0,0,0,0)',
        }
      }
    }}
  >
    <AntApp>
      {children}
    </AntApp>
  </ConfigProvider>
);

export default StyleProvider;