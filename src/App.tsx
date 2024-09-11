import Faq from './components/Faq'
import Features from './components/Features'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  return (
    <>
      <Header />
      <div className="max-w-[1200px] mx-auto md:grid grid-cols-2 grid-rows-2 gap-4">
        <Hero />
        <Faq />
        <Features />
      </div>
    </>
  )
}

export default App
