import React, {useState,useEffect} from 'react';

import './App.css';
import Header from './components/Header/Header';
import Hero from './components/UI/Hero';
// import Counter from './components/UI/Counter';
import Services from './components/UI/Services';
// import About from './components/UI/About';
// import Team from './components/UI/Team';
// import Blog from './components/UI/Blog';
import Review from './components/UI/Review';
import Search from './components/UI/Newsletter';
import Footer from './components/Footer/Footer';

function App() {

  const [theme, setTheme] = useState ('')

  const toggleTheme = ()=> {
    theme === '' ? setTheme ('light-theme') : setTheme ('')
  }

  useEffect(()=>{
    document.body.className = theme
  },[theme])

  return (
    <>
    <Header theme={theme} toggleTheme={toggleTheme} />
    {false && <Hero theme={theme} />}
    {/* <Counter /> */}
    <Search />
    <Services />
    {/* <About /> */}
    {/* <Team /> */}
    {/* <Blog /> */}
    <Review />
    <Footer />
    </>
  );
}

export default App;
