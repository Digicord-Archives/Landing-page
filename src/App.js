import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import Landing from "./Landing_page/Landing"; 
import LandingPage from "./pages/LandingPage/LandingPage";
import { useRef } from 'react';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';


function App() {
  const onLoad = () => {
    console.log('onLoad works!');
  };

  const tawkMessengerRef = useRef();

  const handleMinimize = () => {
        tawkMessengerRef.current.minimize();
  };

  return (
    <div className="App">
      <LandingPage/>

      <button onClick={handleMinimize}> Minimize the Chat </button>
      
      <TawkMessengerReact
                propertyId="62a5db05b0d10b6f3e76eb85"
                widgetId="1g5btv4vq"
                onLoad={onLoad} 
                ref={tawkMessengerRef}/>
                  
    </div>
  );
}

export default App;
