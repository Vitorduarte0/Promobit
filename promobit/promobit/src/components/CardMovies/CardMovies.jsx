import * as React from "react";
import { image } from "../../constants/url";
import { CardContainer, CardImg } from "./styled";
export const CardMovies = ({ data, onClick }) => {
    const movieImage = `${image}/${data.poster_path}`
  return (
    <>
      <CardContainer onClick={onClick}>
      
        <CardImg src={movieImage} />
        <p>
          <span>{data.title}</span>
        </p>
        <p><span>{data.release_date}</span></p>
        
      </CardContainer>
    </>
  );
};
