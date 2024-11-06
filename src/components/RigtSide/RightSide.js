import React from "react";
import { Box, Typography } from "@basetoolkit/ui";
import CustomerReview from "../CustomerReview/CustomerReview";
import Updates from "../Updates/Updates";

const RightSide = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "95%",
        justifyContent: "space-evenly",
        mt: 3,
        md: {
          justifyContent: "flex-start",
          mt: 3,
        },
        xs: {
          width: "100%",
          mt: 0,
          "& > div": {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          },
        },
      }}
    >
      <Box mb={2}>
        <Typography variant="button" component="h3">
          Updates
        </Typography>
        <Updates />
      </Box>
      <Box>
        <Typography variant="button" component="h3">
          Customer Review
        </Typography>
        <CustomerReview />
      </Box>
    </Box>
  );
};

export default RightSide;
