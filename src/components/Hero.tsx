const Hero = () => {
  return (
    <section>
      <div className="container-main">
        <img
          src="images/hero-mobile.jpg"
          alt="hero-img"
          className="md:hidden"
        />
        <img
          src="images/hero-desktop.jpg"
          alt="hero-img"
          className="hidden md:block"
        />
        <div className="gap-3 md:flex md:flex-col lg:flex-row items-start lg:mt-8">
          <h1 className="h1 mt-8 lg:mt-0 w-[270px] font-extrabold leading-snug md:w-full lg:w-[300px]">
            The Bright Future Of Web 3.0?
          </h1>
          <div className="lg:w-[450px]">
            <p className="mt-4 lg:mt-2 lg:text-sm leading-7 text-stone-600">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className="mt-4 rounded-sm bg-red-500 px-6 py-2 text-sm font-semibold tracking-widest hover:text-white hover:bg-slate-950">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
