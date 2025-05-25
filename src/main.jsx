
import React from 'react';
import ReactDOM from 'react-dom/client';
import './stilo.css';
import './stiloproj.css'
import {Navbar} from './component/navbarhead';
import { HeroSection } from './component/hero-section';
import { AboutSection } from './component/AboutSection';
import { ProjectsSection } from './component/ProjectsSection';
import { Footer } from './component/footerP';
import { ContactSection } from './component/ContactSection';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Navbar />
  <HeroSection />  
  <AboutSection />
  <ProjectsSection />
  <ContactSection />
  <Footer />
   
  </React.StrictMode>
);
