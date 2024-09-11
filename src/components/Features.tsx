const Features = () => {
  return (
    <section className="col-span-3">
      <div className="container-main flex flex-col lg:flex-row  lg:gap-4">
        <div className="mb-6  mt-4 flex items-start gap-6">
          <img
            src="images/retro.jpg"
            alt=""
            className="w-[100px] object-cover"
          />
          <div className="space-y-2">
            <h1 className="h1 tracking-widest text-red-500">01</h1>
            <h4 className="h4 hover:text-red-500 cursor-pointer"> Reviving Retro PCs</h4>
            <p className="text-stone-700">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
        <div className="mb-6 mt-4  flex   items-start gap-6">
          <img src="images/laptops.jpg" alt="" className="w-[100px]" />
          <div className="space-y-2">
            <h1 className="h1 tracking-widest text-red-500">02</h1>
            <h4 className="h4 hover:text-red-500 cursor-pointer">Top 10 Laptops of 2022</h4>
            <p className="text-stone-700">
              Our best picks for various needs and budgets
            </p>
          </div>
        </div>
        <div className="mb-6 mt-4  flex items-start gap-6">
          <img src="images/gaming.jpg" alt="" className="w-[100px]" />
          <div className="space-y-2">
            <h1 className="h1 tracking-widest text-red-500">03</h1>
            <h4 className="h4 hover:text-red-500 cursor-pointer">The Growth of Gaming</h4>
            <p className="text-stone-700">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
