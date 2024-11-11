import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Components/Header';
import Home from './Pages/Home';
import Characters from './Pages/Characters'
import Quotes from './Pages/Quotes'
import { UrlProvider, IdProvider } from './utils/Context';
import SignInModal from './Components/SignInModal';
import SignUpModal from './Components/SignUpModal';
import Private from "./Pages/Private"
import PrivateFavorites from "./Pages/Private/PrivateFavorites"
import { Toaster } from 'react-hot-toast';
import './index.css';

export default function App() {
    
  return (
    <Router>
     <UrlProvider>
     <IdProvider>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/characters" element={<Characters />} />
          <Route exact path="/quotes" element={<Quotes />} />
          <Route exact path='/private' element={<Private />}>
            <Route exact path="/private/private-favorites" element={<PrivateFavorites />} />
          </Route>
        </Routes>
        <SignInModal />
        <SignUpModal />
        <Toaster position='bottom-left' />
      </IdProvider>
     </UrlProvider>
  </Router>
  )
}
