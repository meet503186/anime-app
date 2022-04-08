import React from "react";
import Images from "./Images";
import "../CSS/Card.css";
import { useNavigate } from "react-router-dom";

function Card({ anime }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="cards" key={anime.id}>
        <div
          className="card"
          onClick={() => {
            console.log("clicked");
            navigate(`/animedetails/${anime.id}`);
          }}
        >
          <Images imgsrc={anime.image} />
          <div className="card_info">
            <span className="card_original_title">{anime.original_title}</span>
            <h3 className="card_title">{anime.title}</h3>
            <div className="anime_release_date">Year: {anime.release_date}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
