import { image } from "../../constants/url";
import { Img, SubHeadersContainerDetail } from "./styled";

export const SubHeadersDetail = ({ data }) => {
  const movieDetail = `${image}/${data.poster_path}`;
  return (
    <SubHeadersContainerDetail>
      <Img src={movieDetail} alt="Imagem do filme de frente" />
    </SubHeadersContainerDetail>
  );
};
