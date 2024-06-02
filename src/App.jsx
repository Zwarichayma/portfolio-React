import Header from './components/header/header';
import Hero from './components/hero/Heroo';
import Main from './components/main/Main';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className='container'>
      <Header />
      <div className='divider'/>
      <Hero />
      <div className='divider'/>
v      <Main />
<div className='divider'/>
      <Contact />
      <div className='divider'/>
      <Footer /> 
    </div>
  );
}
export default App;

