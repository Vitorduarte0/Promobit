import { useState } from "react";
import { CardMovies } from "../../components/CardMovies/CardMovies";
import { Headers } from "../../components/Headers/Headers";
import { MoviesContainer } from "../ListMovies/styled";
import { apiKey, BASE_URL } from "../../constants/url";
import useRequestData from "../../hooks/useRequestData";
import { SubHeaders } from "../../components/SubHeaders/SubHeaders";
import { goToDatailMovies } from "../../routes/coordinator";

export const ListMovies = () => {
  const movies = useRequestData([], `${BASE_URL}/movie/popular?${apiKey}`);
  const [input, setInput] = useState("");

  const clickDatail = (id) =>{
    goToDatailMovies(navigator, id)
  } 
  const newMovies = movies?.results?.map((movies) => {
    return <CardMovies key={movies.id} data={movies} onClick={() => clickDatail(movies.id)} />;
  });
  return (
    <>
      <header>
        <Headers />
      </header>

      <SubHeaders />

      <MoviesContainer>{newMovies}</MoviesContainer>
      <footer>
        <p>Paginaçao</p>
      </footer>
    </>
  );
};
