import React from 'react';
import ReactDOM from 'react-dom';
import {CssBaseline} from "@mui/material";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/Landing";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";

function App() {
    return (
        <>
            <CssBaseline/>
            <BrowserRouter>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Landing}/>
                    {/*<Route exact path="/about" component={About}/>*/}
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App/>, document.getElementById('root'));
}
