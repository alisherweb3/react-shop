import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Loader from './components/Loader';
import Shop from './components/Shop';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <Shop />
      <Footer />
    </>
  );
}

export default App;
