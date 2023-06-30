import React from 'react';
import ReactDOM from 'react-dom/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import './scss/index.scss';
import "@fortawesome/fontawesome-free/css/all.min.css";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Components/Header';
import Home from './Pages/Home';
import Characters from './Pages/Characters'
import Quotes from './Pages/Quotes'
import { UrlProvider, UserContextProvider } from './utils/Context';
import SignInModal from './Components/SignInModal';
import SignUpModal from './Components/SignUpModal';
import Private from "./Pages/Private"
import PrivateFavorites from "./Pages/Private/PrivateFavorites"
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <React.StrictMode>
      <Router>
        <UserContextProvider>
         <UrlProvider>
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
         </UrlProvider>
        </UserContextProvider>
      </Router>
    </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log());
