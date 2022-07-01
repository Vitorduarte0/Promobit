import { useParams } from "react-router-dom";
import { Headers } from "../../components/Headers/Headers";
import { SubHeadersDetail } from "../../components/SubHeadersDatail/SubHeadersDetail";
import { apiKey, BASE_URL } from "../../constants/url";
import useRequestData from "../../hooks/useRequestData";
export const PageDatailMovie = () => {
  const paramns = useParams();
  const movieDetail = useRequestData(
    {},
    `${BASE_URL}/movie/${paramns.id}?${apiKey}`
  );
  console.log("detalhe do filme", movieDetail);
 
  return (
    <>
      <Headers />
      <SubHeadersDetail data={movieDetail} />
    </>
  );
};
