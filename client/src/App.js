import React, {useContext, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "./pages/Main.js";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import {observer} from "mobx-react-lite";
import News from "./pages/News";
import AuthRouter from "./pages/auth/AuthRouter";
import {Context} from "./index";
import Company from "./pages/Company";
import AUP from "./pages/AUP";
import VideoUploader from "./pages/VideoUploader";
import Vakansii from "./pages/Vakansii";
import About from "./pages/About";
import Group from "./pages/Group";


function App() {
    const {store} = useContext(Context)
    useEffect(() => {
        if(localStorage.getItem('token')){
            store.checkAuth()
        }
    },[])
    if(store.isLoading){
        return <div>Загрузка...</div>
    }
    if(!store.isAuth) return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path='*' element={<AuthRouter/>} />
                </Routes>
            </div>
        </Router>
    )
    if(store.isAuth) {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/company" element={<Company/>}/>
                    <Route path="/aup" element={<AUP/>}/>
                    <Route path="/promo" element={<VideoUploader/>}/>
                    <Route path="/vakansii" element={<Vakansii/>}/>
                    <Route path="/vakansii" element={<Vakansii/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/group" element={<Group/>}/>

                </Routes>
                <ToastContainer/>
            </Router>
        );
    }
}

export default observer(App)
