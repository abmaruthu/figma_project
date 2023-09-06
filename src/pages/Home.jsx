import React from 'react';
import './Home.css';
import Header from '../components/Header';
import { Hero } from '../components/Hero';
import { Content } from '../components/Content';
import { Footer } from '../components/Footer';

export const Home = () => {
  return (
    <div className="bg">
        <Header/>
        <Hero/>
        <Content/>
        <Footer/>
    </div>
  )
}
