import { useEffect, useRef } from 'react';
import { Outlet } from "react-router-dom";
import MenuBar from "../components/MenuBar";

const RootLayout = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() =>{
    const video = videoRef.current;
    if (video){
      video.play().catch(error => {
      console.error("Your browser does not support the video tag", error)
    });
    }

  },[]);

  return (
    <div className="relative h-screen overflow-hidden">

      <video
        ref={videoRef}
        src="assets/virusBg.mp4" autoPlay loop muted playsInline
        className="object-cover w-full h-full fixed top-0 left-0"
      />

      <div>
        <MenuBar />
      </div>

      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default RootLayout;
