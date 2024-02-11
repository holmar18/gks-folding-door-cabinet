import "./App.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import FoldingDorCabinet from "./pages/FoldingDorCabinet";
import Doors from "./pages/Doors";

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/fdc' element={<FoldingDorCabinet />} />
          <Route path='/doors' element={<Doors />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
