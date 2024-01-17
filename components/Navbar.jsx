"use client";

import React from "react";
import Link from "next/link";
import { useRef } from "react";
import $ from "jquery";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Input } from "@chakra-ui/react";

export default function Navbar() {

  function searchTeam() {
    if (document.getElementById("searchBar").classList.contains("hidden") == true){
      document.getElementById("searchBar").classList.remove("hidden")
      $(searchBar).slideDown("slow");
    }
    else {
      document.getElementById("searchBar").classList.add("hidden")
      $(searchBar).slideUp("slow");
    }

  }

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
        <button className="float-right mr-8" onClick={searchTeam}>
          <MagnifyingGlassIcon className="h-6 w-6 text-white" />{" "}
        </button>
        <br />
        <div>
          <Input
            id="searchBar"
            // ref={searchBar}
            className="my-5 ml-6 hidden"
            placeholder="Search..."
            width="50"
          />
        </div>
        <hr
          className="h-px my-8 mx-5 bg-gray-200 border-0 dark:bg-gray-700"
        />
      </div>
    </nav>
  );
}
