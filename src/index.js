import React from 'react';
import './index.css';
import store from "./Components/Redux/State";
import ReactDOM from "react-dom";
import App from "./App";

 let rerenderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()}
                 dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    )
}
store.subscribe(rerenderTree)
rerenderTree()



