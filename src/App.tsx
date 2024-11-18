import './App.css';
import Creations from './Creations';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';

function App() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Creations></Creations>
      <Footer year={currentYear}></Footer>
    </>
  );
}

export default App;
