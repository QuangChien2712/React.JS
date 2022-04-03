import React from "react";
import ListTodos from "./AppTodos/ListTodos";
import logo from "./logo.svg";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <
        img src = { logo }
        className = "App-logo"
        alt = "logo" / >
        <
        p > Công việc của Võ Quang Chiến < /p> <ListTodos / >
        <
        /header>{" "} <
        ToastContainer position = "top-right"
        autoClose = { 2000 }
        hideProgressBar = { false }
        newestOnTop = { false }
        closeOnClick rtl = { false }
        pauseOnFocusLoss draggable pauseOnHover /
        >
        <
        /div>
    );
}

export default App;