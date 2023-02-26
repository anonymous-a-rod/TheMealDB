import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const Error = () => {
  return (
    <section className="h-[70vh] flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-stone-800 mb-4">Oops!</h1>
      <p className="text-xl text-stone-500 text-center mb-8">
        We couldn't find the page you were looking for.
      </p>
      <div className="mb-4">
        <SearchBar />  
      </div>
      
      <Link
        to="/"
        className="text-stone-500 font-medium hover:text-stone-800 mb-2"
      >
        ← Back to home
      </Link>
      <p className="text-stone-500 font-medium hover:text-stone-800">
        Or&nbsp;
        <Link to="/team" className="underline hover:text-stone-800">
          contact us
        </Link>{" "}
        if you need further assistance.
      </p>
    </section>
  );
};

export default Error;
