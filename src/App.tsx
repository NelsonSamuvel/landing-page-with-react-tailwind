import Faq from './components/Faq'
import Features from './components/Features'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  return (
    <>
      <Header />
      <div className="mx-auto gap-4 md:grid md:max-w-[1200px] md:grid-cols-2 md:grid-rows-2 lg:grid-cols-[750px_1fr]">
        <Hero />
        <Faq />
        <Features />
      </div>
    </>
  )
}

export default App
