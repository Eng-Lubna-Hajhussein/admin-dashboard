import * as React from "react";
import {
  Box,
  Typography,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Paper,
} from "@basetoolkit/ui";

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData("Lasania Chiken Fri", 18908424, "2 March 2022", "Approved"),
  createData("Big Baza Bang", 18908424, "2 March 2022", "Pending"),
  createData("Mouth Freshner", 18908424, "2 March 2022", "Approved"),
  createData("Cupcake", 18908421, "2 March 2022", "Delivered"),
];

const makeStyle = (status) => {
  if (status === "Approved") {
    return {
      backgroundColor: "rgba(145, 254, 159, 0.47)",
      color: "green",
    };
  } else if (status === "Pending") {
    return {
      backgroundColor: "#ffadad8f",
      color: "red",
    };
  } else {
    return {
      backgroundColor: "#59bfff",
      color: "white",
    };
  }
};

export default function BasicTable() {
  return (
    <Box
      sx={{ width: "100%", mt: 4, md: { mt: 2 }, sm: { mt: 2 }, xs: { mt: 2 } }}
    >
      <Typography variant="button" mb={1}>
        Recent Orders
      </Typography>
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: "0px 13px 20px 0px #80808029",
          borderRadius: "0.7rem",
          overflow: "hidden",
          width: "100%", xs: { width: "23rem" },
          mx: 0, xs: { width: "auto" },
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Product</TableCell>
              <TableCell align="left" sx={{ fontWeight: "bold" }}>
                Tracking ID
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: "bold" }}>
                Date
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: "bold" }}>
                Status
              </TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  "& td, & th": { padding: "20px !important", border: "none" },
                }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.trackingId}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">
                  <Box
                    component="span"
                    sx={{
                      ...makeStyle(row.status),
                      padding: "8px",
                      borderRadius: "9px",
                    }}
                  >
                    {row.status}
                  </Box>
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    color: "#00b5ff",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Details
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
