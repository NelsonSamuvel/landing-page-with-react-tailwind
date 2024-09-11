import { useEffect, useRef } from 'react'
import { HiXMark } from 'react-icons/hi2'

type PropsType = {
  onShow: () => void
}

type refType = {
  current: HTMLDivElement | null
}

const Sidebar = ({ onShow }: PropsType) => {
  const ref: refType = useRef(null)

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
        onShow()
      }
    }
    document.addEventListener('click', handleOutsideClick, true)

    return () => document.removeEventListener('click', handleOutsideClick, true)
  }, [onShow])

  return (
    <div className="fixed inset-0 bg-stone-900/60">
      <div
        ref={ref}
        className="fixed bottom-0 right-0 top-0 w-[250px] bg-white px-4 py-2"
      >
        <HiXMark className="icon ml-auto cursor-pointer" onClick={onShow} />
        <ul className="mt-24 flex flex-col gap-5 ">
          <li className="cursor-pointer text-lg text-stone-900 hover:font-semibold hover:text-yellow-500">
            Home
          </li>
          <li className="cursor-pointer text-lg text-stone-900 hover:font-semibold hover:text-yellow-500">
            New
          </li>
          <li className="cursor-pointer text-lg text-stone-900 hover:font-semibold hover:text-yellow-500">
            Popular
          </li>
          <li className="cursor-pointer text-lg text-stone-900 hover:font-semibold hover:text-yellow-500">
            Trending
          </li>
          <li className="cursor-pointer text-lg text-stone-900 hover:font-semibold hover:text-yellow-500">
            Categories
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
