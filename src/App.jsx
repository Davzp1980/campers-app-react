import './App.css';
import { Route, Routes } from 'react-router';
import Header from './pages/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import Catalog from './pages/Catalog/Catalog';
import { getList } from './app';
import Details from './pages/Details/Details';
import Reviews from './components/Reviews/Reviews';
import Characteristics from './components/Characteristics/Characteristics';
import { Toaster } from 'react-hot-toast';

function App() {
  getList();
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<Details />}>
            <Route path="features" element={<Characteristics />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </main>
      <Toaster />
    </>
  );
}

export default App;
