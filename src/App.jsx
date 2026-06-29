import Preloader from './components/Preloader'
import Cursor from './components/Cursor'
import Header from './components/Header'
import Hero from './components/Hero'
import Stack from './components/Stack'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { useTheme, useReveal } from './hooks'

export default function App() {
  useTheme()
  useReveal()

  return (
    <>
      <div className="fx-grain" aria-hidden="true" />
      <div className="fx-vignette" aria-hidden="true" />
      <Cursor />
      <Preloader />
      <Header />
      <main>
        <Hero />
        <Stack />
        <Projects />
      </main>
      <Footer />
    </>
  )
}
