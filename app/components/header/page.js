import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default  function Header({ query = '' }) {
    
  return (
   <header>
      <div className="flex items-center justify-between mb-6">
        <Image src="/logo.png" alt="Logo" width={120} height={40} /> 
      <h1 className="text-3xl font-bold mb-6 text-red-600">
       Movie Gallery
      </h1>
      <form action='/moviehome' className="mb-6 flex gap-2">
        <input
          type="search"
          name="q"
          defaultValue={query}
          placeholder="Search..."
          className="w-full max-w-md rounded-lg border border-gray-300 px-4 py-2"
          />
          <button
          type="submit"
          className="rounded-lg bg-red-600 px-5 py-2 font-semibold text-white transition hover:bg-red-700"
        >
          Search
        </button>
        {query && (
          <Link href="/moviehome" className="rounded-lg border px-5 py-2">
            Clear
          </Link>
        )}

      </form>
      </div>
      </header>
  )
}
