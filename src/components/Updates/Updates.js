import React from "react";
import { Box, Typography } from "@basetoolkit/ui";
import { UpdatesData } from "../../Data/Data";

const Updates = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "white",
        borderRadius: "0.7rem",
        padding: "1rem",
        gap: "1rem",
        display: "flex",
        flexDirection: "column",
        fontSize: "13px",
      }}
    >
      {UpdatesData.map((update) => (
        <Box
          key={update.name} 
          sx={{
            display: "flex",
            gap: "0.5rem",
          }}
        >
          <Box
            component="img"
            src={update.img}
            alt="profile"
            sx={{
              width: "3rem",
              height: "3rem",
              borderRadius: "50%", // Optional, if you want circular images
            }}
          />
          <Box className="noti" sx={{ display: "flex", flexDirection: "column" }}>
            <Box >
              <Typography component="span" fontWeight="bold">
                {update.name}
              </Typography>
              <Typography component="span"> {update.noti}</Typography>
            </Box>
            <Typography variant="caption">{update.time}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Updates;
