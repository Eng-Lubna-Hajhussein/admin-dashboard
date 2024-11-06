import React from "react";
import { Box, Grid, Stack } from "@basetoolkit/ui";
import { cardsData } from "../../Data/Data";
import Card from "../Card/Card";

const Cards = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      width="100%"
      sx={{
        flexWrap: "wrap",
        justifyContent: "space-between",
        "& > *": {
          flexGrow: 1,
          xs: { flexBasis: "100%" },
          sm: { flexBasis: "100%" },
          md: { flexBasis: "48%" },
          lg: { flexBasis: "30%" },
        },
      }}
    >
      {cardsData.map((card, id) => (
        <Box
          key={id}
          height="10.7rem"
          sx={{
            height: "10.7rem",
            xs: {
              height: "auto",
            },
          }}
        >
          <Card
            title={card.title}
            color={card.color}
            barValue={card.barValue}
            value={card.value}
            icon={card.icon}
            series={card.series}
          />
        </Box>
      ))}
    </Stack>
  );
};

export default Cards;
