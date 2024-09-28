import "./App.css";
import { Header } from "./components/header/Header.jsx";
import { Questions } from "./components/questions/Questions.jsx";
import Result from "./components/result/Result.jsx";
import { UserName } from "./components/userName/UserName.jsx";
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header/>}/>
          <Route path="/questions/:id" element={<Questions/>}/>
          <Route path="/result/:id" element={<Result/>}/>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
