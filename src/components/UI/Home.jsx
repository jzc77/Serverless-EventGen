import React, { useState, useEffect } from 'react';

import '../../App.css';
import NewHeader from '../Header/NewHeader';
import Hero from './Hero';
import Services from './Services';
import Review from './Review';
import Search from './Newsletter';
import Footer from '../Footer/Footer';

const Home = () => {
  const [theme, setTheme] = useState('')

    const toggleTheme = () => {
      theme === '' ? setTheme('light-theme') : setTheme('')
    }

    useEffect(() => {
      document.body.className = theme
    }, [theme])
  return ( 
      <><NewHeader theme={theme} /><Hero theme={theme} /><Search /><Services /><Review /><Footer /></>
   );
}
 
export default Home;


