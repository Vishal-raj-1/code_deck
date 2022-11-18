import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Playground from './screens/Playground';
import Error404 from './screens/Error404';
import { GlobalStyle } from './style/global';
import ModalProvider from './context/ModalContext';
import PlaygroundProvider from './context/PlaygroundContext';

function App() {
  return (
    <PlaygroundProvider>
      <ModalProvider>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/playground/:folderId/:playgroundId" element={<Playground />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </ModalProvider>
    </PlaygroundProvider>
  );
}

export default App;
