// import './App.css'
// import MainDash from './components/MainDash/MainDash';
// import RightSide from './components/RigtSide/RightSide';
// import Sidebar from './components/Sidebar';

// function App() {
//   return (
//     <div className="App">
//       <div className="AppGlass">
//         <Sidebar/>
//         <MainDash/>
//         <RightSide/>
//       </div>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { Box, Grid } from "@basetoolkit/ui";
import MainDash from "./components/MainDash/MainDash";
import RightSide from "./components/RigtSide/RightSide";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(106.37deg, #ffe1bc 29.63%, #ffcfd1 51.55%, #f3c6f1 90.85%)",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <Box
        sx={{
          width: "97%",
          height: "97%",
          background: "rgba(255, 255, 255, 0.54)",
          borderRadius: "2rem",
          overflow: "scroll",
          lg: { overflow: "hidden" },
          xl: { overflow: "hidden" },
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={2} p={0} m={0}>
            <Sidebar />
          </Grid>
          <Grid item xs={12} sm={6} md={7}>
            <MainDash />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <RightSide />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
