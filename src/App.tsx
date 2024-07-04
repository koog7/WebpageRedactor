import './App.css'
import {NavLink, Route, Routes} from "react-router-dom";
import Home from "./containers/Home.tsx";
import FormEdit from "./containers/FormEdit.tsx";
const App = () => {

    return(
        <>
            <div>
                <div className="navbar">
                    <h2><NavLink className={'logo'} to="/">Static pages</NavLink></h2>
                    <div>
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/pages/about">About</NavLink>
                        <NavLink className="nav-link" to="/pages/contacts">Contacts</NavLink>
                        <NavLink className="nav-link" to="/pages/faq">FAQ</NavLink>
                        <NavLink className="nav-link" to="/pages/services">Services</NavLink>
                        <NavLink className="nav-link" to="/pages/admin">Admin Panel</NavLink>
                    </div>
                </div>
                <Routes>
                    <Route path="/" element={(
                        <Home />
                    )}/>
                    <Route path="/pages/:pageName" element={(
                        <Home />
                    )}/>
                    <Route path="/pages/admin" element={(
                        <FormEdit />
                    )}/>
                </Routes>
            </div>
        </>
    );

};

export default App
