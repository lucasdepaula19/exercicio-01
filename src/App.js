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
      <SidebarComponent
      lists={['Assunto 1','Assunto 2','Assunto 3','Assunto 4','Assunto 5','Assunto 6','Assunto 7','Assunto 8','Assunto 9',]}
      />
      <MainComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
