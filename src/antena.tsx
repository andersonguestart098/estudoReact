import { Box } from "@mui/material";
import { keyframes } from "@emotion/react";

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const LiveIndicator = () => {
  return (
    <Box
      sx={{
        width: 19,
        height: 19,
        borderRadius: "50%",
        backgroundColor: "green",
        animation: `${pulseAnimation} 2s infinite`,
      }}
    />
  );
};

export default LiveIndicator;
