import React from "react";
import ListTodos from "./AppTodos/ListTodos";
import logo from "./logo.svg";
import "./App.css";

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
        a className = "App-link"
        href = "https://reactjs.org"
        target = "_blank"
        rel = "noopener noreferrer" >
        { " " }
        Learn React { " " } <
        /a>{" "} <
        /header>{" "} <
        /div>
    );
}

export default App;