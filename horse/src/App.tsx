import './App.css'
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Layout } from './pages/Layout';
import { NoPage } from './pages/NoPage';

function App() {

  return (
    <>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
    </>
  )
}

export default App
