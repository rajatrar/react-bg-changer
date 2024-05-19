import * as React from 'react'
import { useState } from 'react'

export function SolidButtons() {

    const [color, setColor] = useState("white");
  return (

   <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
    <div className="  flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0" >
      <button onClick={() => setColor("Black")}
        type="button"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Black
      </button>
      <button onClick={() => setColor("Yellow")}
        type="button"
        className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
      >
        yellow
      </button>
      <button onClick={() => setColor("Red")}
        type="button"
        className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
      >
       Red
      </button>
      <button onClick={() => setColor("Green")}
        type="button"
        className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
      >
        Green
      </button>
    </div>
    </div>
  )
}
