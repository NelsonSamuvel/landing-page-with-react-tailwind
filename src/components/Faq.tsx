const Faq = () => {
  const card = `bg-slate-950 px-4 pt-6 h-full`

  const cardItems = `text-white py-6 space-y-2`

  return (
    <section className="">
      <div className="container-main h-full">
        <div className={card}>
          <h2 className="h2 text-yellow-500">New</h2>
          <div className="divide-y md:mt-6 lg:mt-0">
            <div className={cardItems}>
              <h3 className="h3 hover:text-yellow-500 hover:font-semibold cursor-pointer">New Hydrogen VS Electric Cars</h3>
              <p className="text-sm font-thin">
                Will hydrogen-fueled cars ever catch up to EVs?
              </p>
            </div>
            <div className={cardItems}>
              <h3 className="h3 hover:text-yellow-500 hover:font-semibold cursor-pointer">The Downsides of AI Artistry </h3>
              <p className="text-sm font-thin">
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </div>
            <div className={cardItems}>
              <h3 className="h3 hover:text-yellow-500 hover:font-semibold cursor-pointer">Is VC Funding Drying Up?</h3>
              <p className="text-sm font-thin">
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq
