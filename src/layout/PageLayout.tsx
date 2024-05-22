import type { ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';
import Meta from './Meta';

type LayoutProps = {
  children: ReactNode;
};

const PageLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Meta />
      <Header />
      <div className="flex min-h-screen flex-col dark:bg-black dark:text-white">
        <main className="wrapper">{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default PageLayout;
