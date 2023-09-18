import Image from 'next/image'
// import Navbar from '@/app/components/Navbar'
import Main from '@/app/components/Main'
import About from '@/app/components/About'
import Skills from '@/app/components/Skills'
import Projects from '@/app/components/Projects'
import Contact from '@/app/components/Contact'

// import Nav from '@/components/navnext'
export default function Home() {
  return (
    <main >
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />

    </main>
  )
}
