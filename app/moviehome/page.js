import Link from "next/link";
import Image from "next/image";
import {movies, PAGE_SIZE} from "@/lib/getMovies";
import Button from "../components/Button/page";
import Footer from "../components/footer/page";
import Header from "../components/header/page";
import { Suspense } from "react";



export default async  function MoviesPage({searchParams}) {
  const {page , q} = await searchParams
  const query = (q || "").trim()

  const filtered = movies.filter((movie) => 
  movie.title.toLowerCase().includes(query.toLowerCase())
)

  const currentPage = Math.max(1, Number(page) || 1)
  const totalPages= Math.ceil(filtered.length / PAGE_SIZE)
   const start = (currentPage - 1) * PAGE_SIZE
   const pageMovies = filtered.slice(start , start + PAGE_SIZE)

  const pageLink = (p) =>
    `/moviehome?${new URLSearchParams({ ...(query && { q: query }), page: p })}`;

  return (
    <main className="p-6">
      <Suspense>
      <Header query={query}/></Suspense>
      

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {pageMovies.map((movie) => (
          <Link
            href={`/moviehome/${movie.id}`}
            key={movie.id}
            className="group"
          >
            <Image
              src={movie.poster}
              alt={movie.title}
              width={300}
              height={450}
              className="w-full rounded-lg group-hover:scale-105 transition"
            />

            <h2 className="mt-2 font-semibold">
              {movie.title}
            </h2>

            <p className="text-gray-500">
              {movie.year}
            </p>
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center gap-4 mt-8 " >
          {currentPage > 1 && (
          <Link href={`/moviehome?page=${currentPage -1}`} className="rounded-lg bg-yellow-400 px-5 py-2 font-semibold text-white transition hover:bg-red-700"> Previous</Link>
          
        )}
          <span>Page {currentPage} of {totalPages}</span>
          {currentPage < totalPages && (
          <Link href={`/moviehome?page=${currentPage + 1}`} className="rounded-lg bg-yellow-400 px-5 py-2 font-semibold text-white transition hover:bg-red-700">Next </Link>
        )}
      </div>
      <Footer/>
    </main>
  );
}