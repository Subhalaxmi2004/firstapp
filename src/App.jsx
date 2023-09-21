
import React,{useState} from "react";
import "./index.css";
import { Icon } from 'react-icons-kit';
import {basic_eye} from 'react-icons-kit/linea/basic_eye';
import {basic_eye_closed} from 'react-icons-kit/linea/basic_eye_closed';
import {arrows_circle_check} from 'react-icons-kit/linea/arrows_circle_check';
import {basic_exclamation} from 'react-icons-kit/linea/basic_exclamation';
import Account from "./Account";
import Login from "./Login";
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom";

const App = () =>{
    return (
        <>
        <Routes>
        <Route path="/" element={<Account/>}/>
        <Route path="/Login" element={<Login/>}/>
    </Routes>
            
        </>
    );
}
export default App;
