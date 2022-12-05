import React, { useEffect, useState } from "react";
import TopMenu from "./TopMenu";
import TabBar from "./TabBar";
import { Simulate } from "react-dom/test-utils";
import progress = Simulate.progress;
import { useRouter } from "next/router";

// import {ShowPush} from "./utils/showPush";





const Layout = (props: any) => {
  const needUrl = useRouter();
  const [routerUrl, setRouterUrl] = useState(needUrl);

  return (
    <div className={"flex relative min-h-screen"}>
      <div className={"w-full h-full self-center px-2 pt-14 pb-20"}>
        {props.children}
      </div>
      {!props.hideUi && (
        <div className={"w-full h-14 fixed top-0"} onClick={()=>{}}>
            <TopMenu balance={1245}></TopMenu>
        </div>
      )}
      {!props.hideUi && (
        <div className={"w-full h-20 bg-white fixed bottom-0 z-[999]"}>
          <TabBar currentTab={needUrl.pathname}></TabBar>
        </div>
      )}
    </div>
  );
};

export default Layout;