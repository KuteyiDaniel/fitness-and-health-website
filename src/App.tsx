import React, { useEffect } from 'react';
import IndexPage from './pages/IndexPage';
import {Routes, Route, useLocation} from 'react-router-dom'
import AboutusPage from './pages/AboutusPage';
import ContactPage from './pages/ContactPage';
import TrainingPage from './pages/TrainingPage';
import BeginnerPlans from './pages/BeginnerPlans';
import AbBeginner from './pages/AbBeginner';
import ArticlePage from './pages/ArticlePage';



function App() {

  let {pathname} = useLocation()

  useEffect(()=>{
    window.scrollTo({top: 0, behavior: 'smooth'})
  }, [pathname])

  return (
   <Routes>
     <Route path='/' element = {<IndexPage/>}/>
     <Route path='/about' element = {<AboutusPage/>}/>
     <Route path='/contact' element = {<ContactPage/>}/>
     <Route path='/training' element = {<TrainingPage/>}/>
     <Route path='/beginner' element ={<BeginnerPlans/>}/>
     <Route path='/articles' element ={<ArticlePage/>}/>
     <Route path='/abs-beginner' element ={<AbBeginner/>}/>
     <Route path='/chest-beginner' element ={<BeginnerPlans/>}/>
     <Route path='/back-beginner' element ={<BeginnerPlans/>}/>
     <Route path='/quad-beginner' element ={<BeginnerPlans/>}/>
     <Route path='/arm-beginner' element ={<BeginnerPlans/>}/>
   
   </Routes>
  );
}

export default App;


/*
<div className="App">
      <IndexPage/>
    </div>
*/