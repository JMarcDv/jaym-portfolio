'use client'
import First from '@/components/Home/first'
import HeadBar from '@/components/headbar';
import Projects from '@/components/Projects/projects';
import Resume from '@/components/Resume/resume'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    AOS.init();
  })
  return (
    //#9864c8
    <>
      <HeadBar />
      <First/>
      <Resume/>
      <Projects/>
    </>
  )
}
