import Header from './components/header/header';
import Hero from './components/hero/Heroo';
import Main1 from './components/main/Main1';
import Main from './components/main/Main';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Main2 from './components/main/Main2';
function App() {
  return (
    <div className='container'>
      <Header />
      <div className='divider'/>
      <Hero />
      <div className='divider'/>
      <Main />
      <div className='divider'/>
      < Main1/>
      <div className='divider'/>
      < Main2/>
    <div className='divider'/>
      <Contact />
      <div className='divider'/>
      <Footer /> 
    </div>
  );
}
export default App;

