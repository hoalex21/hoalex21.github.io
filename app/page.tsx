"use client"

import About from '@/components/home/About'
import Experience from '@/components/home/Experience'
import Projects from '@/components/home/Projects'
import Socials from '@/components/home/Socials'

export default function Home() {
  return (
    <div className='container mx-auto mt-10'>
        <About />
        <br />
        <Experience />
        <br />
        <Projects />
        <br />
        <Socials />
    </div>
  );
}
