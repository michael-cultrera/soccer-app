import React from "react";
import Link from "next/link";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'


export default function Navbar() {
  return (
    <nav>
      <h1 className="text-6xl text-center font-semibold italic pt-5">Goalz</h1>
      <div className="mt-5">
        <Link href="/" className="ml-8 text-green">
          All leagues
        </Link>
        <Link href="/premierleague" className="ml-8">
          Premier League
        </Link>
        <Link href="/laliga" className="ml-8">
          La Liga
        </Link>
        <Link href="/" className="ml-8">
          Bundesliga
        </Link>
        <Link href="/seriea" className="ml-8">
          Serie A
        </Link>
        <Link href="/" className="ml-8">
          Ligue 1
        </Link>
        <button className="float-right mr-8"> <MagnifyingGlassIcon className="h-6 w-6 text-white"/> </button>
      </div>
    </nav>
  );
}
