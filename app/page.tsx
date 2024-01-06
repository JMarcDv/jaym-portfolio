'use client'
import First from '@/components/first'
import Resume from '@/components/resume'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function Home() {
  AOS.init();
  return (
    //#9864c8
    <>
      <First/>
      <Resume/>
    </>
      // <div id="projects" className='h-screen bg-gradient-to-b from-blue-950 to-blue-500'>
      //   PROJECT
      //   <Link href='#home'>Back to top</Link>
      // </div>
  )
}
