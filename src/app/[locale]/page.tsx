'use client'
import First from '@/src/components/Home/first'
import Projects from '@/src/components/Projects/projects';
import Resume from '@/src/components/Resume/resume'
import Footer from '@/src/components/footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Starfield from 'react-starfield';

export default function Home() {
  useEffect(() => {
    AOS.init();
  })
  return (
    //#9864c8
    <>
      <Starfield
        starCount={2500}
        starColor={[255, 255, 255]}
        speedFactor={0.1}
        backgroundColor="black"
      />
      <First/>
      <Resume/>
      <Projects/>
      <Footer />
    </>
  )
}
