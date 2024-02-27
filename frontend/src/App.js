import logo from './logo.svg';
import './App.css';
import UploadImg from './ui/UploadImg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Analysis from './ui/AnalysisPage/Analysis';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UploadImg />} />
          <Route path="/result" element={<Analysis />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
