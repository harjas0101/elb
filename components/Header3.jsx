'use client'

const Header3 = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-400 h-60">
       <div className=" px-5">
        <h2 className="text-4xl text-white text-center font-bold">Over 175 hotels and homes in India</h2>
        <div className="grid grid-cols-5 my-5 mx-20">
            <input type="text" placeholder="Search..." className=" h-16 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-2"/>
            <input type="text" placeholder="Search..." className=" h-16 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-1"/>
            <input type="text" placeholder="Search..." className=" h-16 outline-none px-3 text-lg border-r-2 border-gray-400 cols-pan-1"/>
            <button type="submit" className="h-16 px-3 py-2 col-span-1 bg-green-400 hover:cursor-pointer hover:bg-green-600 text-white text-xl">Search</button>
        </div>
        <div className="flex mx-20 my-5 font-bold">
          <button type="submit" className="h-16 px-3 py-2  hover:cursor-pointer  text-white mr-5">Continue your search</button>
          <button type="submit" className="h-16 px-3 py-2  hover:cursor-pointer border-2 border-white text-white mr-5 hover:bg-gray-500 rounded-xl">Homestay in India hotels</button>
        </div>
       </div>
    </div>
  )
}

export default Header3
