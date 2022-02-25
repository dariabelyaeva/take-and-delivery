import './App.css';
import Header from './Header';
import About from './About';
import Order from './Order';
import Process from './Process';
import Menu from './Menu';
import Contact from './Contact';
import Instruction from './Instruction';
import Footer from './Footer';
import Modal from './Modal';
import { useState } from 'react';

function App() {
  const [card, setCard] = useState([
    {
      title: 'drink',
      amount: 1,
    },
  ]);
  //setCard([])
  return (
    <div>
      <Header />
      <About />
      <Order />
      <Process />
      <Menu card={card} setCard={setCard} />
      <Instruction />
      <Contact />
      <Footer />
      <Modal card={card} />
    </div>
  );
}

export default App;
