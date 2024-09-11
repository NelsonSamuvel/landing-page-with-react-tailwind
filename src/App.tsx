import Faq from './components/Faq'
import Features from './components/Features'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-[1200px] grid-cols-2 grid-rows-2 gap-4 md:grid">
        <Hero />
        <Faq />
        <Features />
      </div>
    </>
  )
}

export default App
