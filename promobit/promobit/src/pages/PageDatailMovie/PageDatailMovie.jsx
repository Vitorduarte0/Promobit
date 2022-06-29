import { useParams } from "react-router-dom";
export const PageDatailMovie = () => {
  const paramns = useParams()
  console.log(paramns)
  return (
    <>
      <h1>PageDatailMovie</h1>
    </>
  );
};
