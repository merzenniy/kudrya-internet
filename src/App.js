import './App.css';
import Header from './components/Header'
import Auth from './components/Auth'
import {Stack} from "@mui/material";
import Footer from "./components/Footer";
function App() {
  return (
    <div className='cont'>
      <Header/>
      <Auth/>
      <Footer/>
    </div>
  )
}

export default App;
