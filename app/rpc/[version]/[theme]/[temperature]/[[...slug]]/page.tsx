"use client";

import SplashScreen from "@/app/components/SplashScreen/SplashScreen";
import RpcV1 from "../../../v1";

export default function Home() {

  return (
    <SplashScreen>
      <RpcV1 />
    </SplashScreen>
  );
}
