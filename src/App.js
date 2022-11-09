import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Playground from './screens/Playground';
import Error404 from './screens/Error404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
