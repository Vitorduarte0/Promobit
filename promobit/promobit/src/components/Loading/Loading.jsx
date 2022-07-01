import CircularProgress from "@mui/material/CircularProgress";
import { LoadingContainer } from "./styled";

export const Loading = () => {
  return (
    <LoadingContainer>
      <CircularProgress size={82} />
    </LoadingContainer>
  );
};
