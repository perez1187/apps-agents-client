import React, { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const AuthLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main>{children}</main>
  );
};

export default AuthLayout;