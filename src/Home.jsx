import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

const Home = () => {
  const [beers, setBeers] = useState([]);

  const getBeers = async () => {
    //const endpoint = "https://api.punkapi.com/v2/beers";
    const endpoint = "https://api.sampleapis.com/beers/ale"
    const res = await fetch(endpoint);
    const data = await res.json();

    //console.log(data);

    setBeers(data);
  };

  useEffect(() => {
    getBeers();
  }, []);

  return (
    <>
      <h1>Mas que solo bebidas, festejemos el encuentro.</h1>
      <div className="grid">
        {beers.length ? beers.map((beer,index) => <Card key={index} data={beer} />) : null}
      </div>
    </>
  );
};

export default Home;
