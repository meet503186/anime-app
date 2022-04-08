import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../CSS/AnimeDetails.css";
import PulseLoader from "react-spinners/PulseLoader";

function AnimeDetails(props) {
  const id = useParams().id;
  const [anime, setAnime] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAnimeDetails = async (id) => {
    try {
      let res = await axios({
        method: "get",
        url: `https://ghibliapi.herokuapp.com/films/${id}`,
      });
      console.log(res.data);
      let data = await res.data;

      setAnime(data);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      getAnimeDetails(id);
    }
  }, [id]);

  return loading ? (
    <div className="loading_container">
      <PulseLoader color="#fff" loading={loading} size={50} />
    </div>
  ) : (
    <div className="anime_container">
      <div className="anime">
        <div className="anime_image">
          <img src={anime.image} alt="anime-image" />
        </div>

        <div className="anime_details">
          <h1 className="anime_title">{anime.title}</h1>
          <h3 className="anime_rating">
            <strong>IMDB Rating: </strong> {parseFloat(anime.rt_score) / 10}
          </h3>
          <h3 className="anime_release_date">
            <strong>Year: </strong> {anime.release_date}
          </h3>
          <h3 className="anime_runtime">
            <strong>Runtime: </strong> {anime.running_time} Min
          </h3>
          <h3 className="anime_director">
            <strong>Director: </strong> {anime.director}
          </h3>
          <h3 className="anime_producer">
            <strong>Producer: </strong> {anime.producer}
          </h3>
          <h3 className="anime_description">
            <strong>Description: </strong> {anime.description}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default AnimeDetails;
