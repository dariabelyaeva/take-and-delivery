import './App.css';
import Header from './Header';
import About from './About';
import Products from './Products';
import Order from './Order';
import Process from './Process';
import Menu from './Menu';
import Contact from './Contact';
import Instruction from './Instruction';
import Footer from './Footer';
import Modal from './Modal';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);
  const [isModalOpened, setIsModalOpened]= useState(false);
  return (
    <div>
      <Header isModalOpened={isModalOpened} setIsModalOpened={setIsModalOpened}/>
      <About />
      <Products />
      <Instruction />
      <Menu cart={cart} setCart={setCart} />
      <Process />
      <Order />
      <Contact />
      <Footer />
      {isModalOpened && <Modal cart={cart} isModalOpened={isModalOpened} setIsModalOpened={setIsModalOpened}/>}
    </div>
  );
}

export default App;
