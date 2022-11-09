import { BrowserRouter, Router, Routes, Route, Switch } from "react-router-dom";
import './App.css'
import Home from './components/UI/Home'
import Profile from "./components/UI/Profile";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
            
                <Routes>
                    <Route
                        exact path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/profile"
                        element={<Profile />}
                    />
                </Routes>
            
            </BrowserRouter>
        </div>
    );
}

export default App;