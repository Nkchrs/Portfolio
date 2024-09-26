import React, { useEffect } from "react";
import { preLoaderAnim } from "../animation";
import './preloader.css'

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>React,</span>
        <span>NodeJs,</span>
        <span>Laravel,</span>
      </div>
    </div>
  );
};

export default PreLoader;