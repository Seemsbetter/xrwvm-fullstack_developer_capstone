import LoginPanel from "./components/Login/Login"
import { Routes, Route } from "react-router-dom"
import Dealers from './components/Dealers/Dealers';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/dealers" element={<Dealers/>} />
       <Route path="/dealer/:id" element={<Dealer/>} />
    </Routes>
  );
}
export default App;
