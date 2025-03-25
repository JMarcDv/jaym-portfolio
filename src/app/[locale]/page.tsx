'use client';
import First from '@/src/components/Home/first';
import Projects from '@/src/components/Projects/projects';
import Resume from '@/src/components/Resume/resume';
import Footer from '@/src/components/footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <First />
      <Resume />
      <Projects />
      <Footer />
    </>
  );
}
