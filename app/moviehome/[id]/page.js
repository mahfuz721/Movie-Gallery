import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { movies } from "@/lib/getMovies";
import Footer from "@/app/components/footer/page";
import Header from "@/app/components/header/page";
import { Suspense } from "react";
  export async function generateMetadata({ params }) {
     const { id } = await params;


  const movie = movies.find(
    (item) => item.id === Number(id)
  );
  if (!movie) return { title: "Movie not found" };

  return {
    title: movie.title,
    description: movie.overview,
  }
  }

export default async function MovieDetails({ params }) {
  const { id } = await params;


  const movie = movies.find(
    (item) => item.id === Number(id)
  );

  if (!movie) {
    notFound();
  }

  return (
    <main className="p-6  mx-auto w-full max-w-full">
      <Suspense>
      <Header/> 
      </Suspense>
      <Link
        href="/moviehome"
        className="text-blue-500"
      >
        ← Back to movies
      </Link>

      <div className="flex flex-col sm:flex-row gap-6 mt-6">
        <Image
          src={movie.poster}
          alt={movie.title}
          width={300}
          height={450}
          className="rounded-lg w-full sm:w-64 h-fit"
        />

        <section>
          <h1 className="text-4xl font-bold">
            {movie.title}
          </h1>

          <p className="mt-3">
            Release year: {movie.year}
          </p>
          <p>
            Director: {movie.director}
          </p>

          <p>
            Rating: ⭐ {movie.rating}
          </p>
          <p>
            Cast: {movie.cast.join(', ')}
          </p>
          <p>
            Language: {movie.language}
          </p>
          <p>
            Runtime: {movie.runtime}
          </p>

          <p>
            Genre: {movie.genres.join(', ')}
          </p>
          <div className="">
            <a
                href="https://www.netflix.com/bd/"
                className="inline-block rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
            >
                Stream On Netflix
            </a>
          </div>

          <h2 className="text-xl font-semibold mt-5">
            Overview
          </h2>
         

          <p className="mt-2">
            {movie.overview}
          </p>
        </section>
      </div>
      <Footer/>
    </main>
  );
}
