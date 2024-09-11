const NavList = () => {
  return (
    <ul className="hidden gap-4 text-sm text-stone-700  md:flex">
      <li className="cursor-pointer   hover:font-semibold hover:text-yellow-500">
        Home
      </li>
      <li className="cursor-pointer  hover:font-semibold hover:text-yellow-500">
        New
      </li>
      <li className="cursor-pointer   hover:font-semibold hover:text-yellow-500">
        Popular
      </li>
      <li className="cursor-pointer hover:font-semibold hover:text-yellow-500">
        Trending
      </li>
      <li className="cursor-pointer hover:font-semibold hover:text-yellow-500">
        Categories
      </li>
    </ul>
  )
}

export default NavList
