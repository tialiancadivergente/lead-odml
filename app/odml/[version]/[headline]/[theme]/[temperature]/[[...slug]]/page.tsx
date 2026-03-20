"use client";

import { useParams } from "next/navigation";
import Formv1 from "@/app/odml/[version]/v1";
import SplashScreen from "@/app/components/SplashScreen/SplashScreen";


export default function Home() {
  const { version } = useParams();


  return (
    <SplashScreen>
      <Formv1 />
    </SplashScreen>
  );
}
