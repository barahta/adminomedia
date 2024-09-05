import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "./pages/Main.js";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import {observer} from "mobx-react-lite";


function App() {
  return (
      <Router>
        <Routes>
            <Route path="/" element={<Main />} />
        </Routes>
          <ToastContainer />
      </Router>
  );
}

export default observer(App)
