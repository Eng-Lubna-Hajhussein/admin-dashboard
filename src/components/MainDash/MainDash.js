import React from "react";
import { Box, Grid, Stack, Typography } from "@basetoolkit/ui";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";

const MainDash = () => {
  return (
    <Stack
      width={"100%"}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        mt: 4,
        md: {
          justifyContent: "space-evenly",
          mt: 2,
        },
        xs: {
          justifyContent: "center",
          alignItems: "center",
          mt: 2,
        },
      }}
    >
      <Typography variant="button" gutterBottom>
        Dashboard
      </Typography>
      <Cards />
      <Table />
    </Stack>
  );
};

export default MainDash;
