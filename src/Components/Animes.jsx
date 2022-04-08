import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import PulseLoader from "react-spinners/PulseLoader";

function Animes(props) {
  const [animeData, setAnimeData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAnimeData = async () => {
    try {
      let res = await axios({
        method: "get",
        url: "https://ghibliapi.herokuapp.com/films",
      });

      console.log(res);

      let data = await res.data;

      setAnimeData(data);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAnimeData();
  }, []);

  return loading ? (
    <div className="loading_container">
      <PulseLoader color="#fff" loading={loading} size={50} />
    </div>
  ) : (
    <div className="container">
      {animeData.map((anime, index) => {
        return <Card anime={anime} key={anime.id} />;
      })}
      ;
    </div>
  );
}

export default Animes;
