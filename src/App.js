import {Routes, Route} from "react-router-dom";
import './App.css';
import Landing from "./pages/LandingPage";

function App() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Landing />}/>
            <Route path="*" element={<Landing />}/>
        </Routes>
    </div>
  );
}

export default App;
