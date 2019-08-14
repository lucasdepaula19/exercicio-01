import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HeaderComponent } from './Components/headerComponent';
import { SidebarComponent } from './Components/sidebarComponent';
import { FooterComponent } from './Components/footerComponent';
import { MainComponent } from './Components/mainComponent';


function App() {
  return (
    <div>
      <HeaderComponent />
      <SidebarComponent/>
      <MainComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
