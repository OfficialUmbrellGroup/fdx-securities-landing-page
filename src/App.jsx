import AnnouncementBar from './components/AnnouncementBar'
import Credentials from './components/Credentials'
import CtaBanner from './components/CtaBanner'
import Ecosystem from './components/Ecosystem'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import News from './components/News'
import Products from './components/Products'
import Suite from './components/Suite'
import Voices from './components/Voices'
import WhyFdx from './components/WhyFdx'
import './App.css'

export default function App() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <Credentials />
        <Products />
        <Suite />
        <WhyFdx />
        <Voices />
        <Ecosystem />
        <News />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}
