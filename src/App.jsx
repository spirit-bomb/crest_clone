import React from 'react'
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Answers from './components/Answers';
import Review from './components/Review';
import Target from './components/Target';
import Cta from './components/Cta';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col">
      <div className="bg-[url('https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d7eb5ea3efb_home-hero-bg.svg')]
        bg-cover min-h-[1130px] bg-right bg-no-repeat md:min-h-[820px] md:bg-center">
        <NavBar/>
        <Hero/>
      </div>
      <Answers/>
      <Review/>
      <Target/>
      <Cta/>
      <Footer/>
    </div>
  )
}

export default App
