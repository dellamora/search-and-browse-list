import React from "react";
import Footer from "~/components/footer";
const BaseLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {

  return (
    <div className="h-screen w-screen overflow-y-hidden">
    <div id="modal-root"/>
    <div className="h-screen flex flex-col bg-[#FBFAFF] overflow-auto">
      <div>{children}</div>
      <Footer/>
    </div>
    </div>
  );
};

export default BaseLayout;