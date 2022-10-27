import Header from "@components/Header";
import React from "react";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      {/* <Footer></Footer> */}
    </>
  );
};
export default DefaultLayout;
