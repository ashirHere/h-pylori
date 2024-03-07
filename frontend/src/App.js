import logo from './logo.svg';
import './App.css';
import UploadImg from './ui/Upload/UploadImg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Analysis from './ui/AnalysisPage/Analysis';
import Result from './ui/resultPage/Result';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UploadImg />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
