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
        <div className="items-start gap-6 md:flex md:flex-col lg:mt-8 lg:flex-row">
          <h1 className="h1 mt-8 w-[270px] font-extrabold leading-snug md:w-full lg:mt-0 lg:w-[300px]">
            The Bright Future Of Web 3.0?
          </h1>
          <div className="lg:w-[450px]">
            <p className="mt-4 leading-7 text-stone-600 lg:mt-2 lg:text-sm">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className="mt-4 rounded-sm bg-red-500 px-6 py-2 text-sm font-semibold tracking-widest hover:bg-slate-950 hover:text-white">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
