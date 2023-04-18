import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      Layout
      {children}
    </div>
  );
};
export default Layout;
