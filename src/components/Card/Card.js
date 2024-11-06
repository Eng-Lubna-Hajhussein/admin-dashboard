import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  useTheme,
  Gauge,
  LineChart,
  Grid,
  SvgIcon,
  keyframes,
  cssInjection as styled,
  useMediaQueryMatch,
} from "@basetoolkit/ui";
import datewise from "@basetoolkit/ui/datewise";
import coloris from "@basetoolkit/ui/coloris";

const fadeInScale = keyframes({
  from: {
    opacity: 0,
    transform: "scale(0.95)",
  },
  to: {
    opacity: 1,
    transform: "scale(1)",
  },
});

const fadeOutScale = keyframes({
  from: {
    opacity: 1,
    transform: "scale(1)",
  },
  to: {
    opacity: 0,
    transform: "scale(0.95)",
  },
});

const fadeInUp = keyframes({
  from: {
    opacity: 0,
    transform: "translateY(50px)",
  },
  to: {
    opacity: 1,
    transform: "translateY(0)",
  },
});

const fadeOutDown = keyframes({
  from: {
    opacity: 1,
    transform: "translateY(0)",
  },
  to: {
    opacity: 0,
    transform: "translateY(50px)",
  },
});

const AnimatedCompactCard = styled("div")(
  ({ expanded, bgColor, boxShadow }) => ({
    display: "flex",
    flex: 1,
    height: "7rem",
    borderRadius: "0.7rem",
    color: "white",
    padding: "1rem",
    position: "relative",
    cursor: "pointer",
    overflow: "hidden",
    background: bgColor,
    boxShadow: boxShadow,
    animation: `${expanded ? fadeOutScale : fadeInScale} 0.3s forwards`,
  })
);

const AnimatedExpandedCard = styled("div")(
  ({ expanded, bgColor, boxShadow, theme }) => ({
    position: "absolute",
    width: "60%",
    height: "70vh",
    zIndex: 9,
    left: "13rem",
    borderRadius: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "1rem",
    overflow: "hidden",
    background: bgColor,
    boxShadow: boxShadow,
    animation: `${expanded ? fadeInUp : fadeOutDown} 0.5s forwards`,
    [theme.breakpoints.down("md")]: {
      width: "80%",
      height: "60vh",
      left: "10%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      // height: "50vh",
      left: "5%",
      padding: "0.8rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "88%",
      height: "auto",
      maxHeight: "80vh",
      left: "4%",
      padding: "0.5rem",
      overflow: "scroll",
    },
  })
);

const Chart = ({ data }) => {
  const theme = useTheme();

  // Define responsive breakpoints
  const isSmallScreen = useMediaQueryMatch(theme.breakpoints.down("sm"));
  const isXsSmallScreen = useMediaQueryMatch(theme.breakpoints.down("xs"));
  const isMediumScreen = useMediaQueryMatch(theme.breakpoints.down("md"));

  // Adjust chart dimensions based on screen size
  const chartWidth = isXsSmallScreen ? 300 : isMediumScreen ? 500 : 500;
  const chartHeight = isXsSmallScreen ? 200 : 240;

  // Adjust chart margin based on screen size
  const chartMargin = isXsSmallScreen
    ? { top: 20, right: 15, bottom: 30, left: 15 }
    : isMediumScreen
    ? { top: 20, right: 25, bottom: 30, left: 25 }
    : { top: 20, right: 30, bottom: 30, left: 40 };

  return (
    <LineChart
      {...data}
      width={chartWidth}
      height={chartHeight}
      margin={chartMargin}
      grid={{ vertical: true, horizontal: true }}
      areaColor={coloris(theme.palette.primary.main).alpha(0.3).hex()}
      pointColor="secondary"
      matchColor="warning"
    />
  );
};

// Main Card Component
const Card = (props) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  return expanded ? (
    <ExpandedCard param={props} setExpanded={handleToggleExpand} expanded />
  ) : (
    <CompactCard param={props} setExpanded={handleToggleExpand} />
  );
};

// Compact Card Component
function CompactCard({ param, setExpanded }) {
  return (
    <AnimatedCompactCard
      expanded={false}
      bgColor={param.color.backGround}
      boxShadow={param.color.boxShadow}
      onClick={setExpanded}
    >
      <Grid container spacing={2} alignItems="center" width={"100%"}>
        <Grid item lg={6} xs={12}>
          <Gauge
            width={70}
            height={70}
            value={100}
            text={() => `${param.barValue}%`}
            endAngle={(param.barValue / 100) * 360}
            textColor="common.white"
            color="white"
          />
          <Typography variant="button">{param.title}</Typography>
        </Grid>
        <Grid
          item
          lg={6}
          xs={12}
          container
          direction="column"
          alignItems="end"
          justifyContent="between"
        >
          <SvgIcon icon={param.icon} color="common.white" />
          <Typography variant="h5">${param.value}</Typography>
          <Typography variant="caption">Last 24 hours</Typography>
        </Grid>
      </Grid>
    </AnimatedCompactCard>
  );
}

// Expanded Card Component
function ExpandedCard({ param, setExpanded }) {
  const xAxis = [
    "2018-09-19T00:00:00.000Z",
    "2018-09-19T01:30:00.000Z",
    "2018-09-19T02:30:00.000Z",
    "2018-09-19T03:30:00.000Z",
    "2018-09-19T04:30:00.000Z",
    "2018-09-19T05:30:00.000Z",
    "2018-09-19T06:30:00.000Z",
  ].map((date) => ({
    label: datewise(date).format("HH:mm"),
    value: new Date(date).getTime(),
  }));
  const yValues = param.series[0].data;
  const data = {
    points: [
      { id: 1, value: [xAxis[0].value, yValues[0]], area: true, matchID: null },
      { id: 2, value: [xAxis[1].value, yValues[1]], area: true, matchID: 1 },
      { id: 3, value: [xAxis[2].value, yValues[2]], area: true, matchID: 2 },
      { id: 4, value: [xAxis[3].value, yValues[3]], area: true, matchID: 3 },
      { id: 5, value: [xAxis[4].value, yValues[4]], area: true, matchID: 4 },
      { id: 6, value: [xAxis[5].value, yValues[5]], area: true, matchID: 5 },
      { id: 7, value: [xAxis[6].value, yValues[7]], area: true, matchID: 6 },
    ],
    yAxis: [0, 20, 40, 60, 80, 100, 120],
    xAxis,
  };
  return (
    <AnimatedExpandedCard
      expanded={true}
      bgColor={param.color.backGround}
      boxShadow={param.color.boxShadow}
    >
      <Box sx={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <IconButton onClick={setExpanded} size="small">
          <SvgIcon icon="close" color="white" />
        </IconButton>
      </Box>
      <Typography
        variant="button"
        sx={{
          color: "white",
          fontWeight: "bold",
          textShadow: "0px 0px 15px white",
        }}
      >
        {param.title}
      </Typography>
      <Box sx={{ width: "70%", xs: { width: "100%" }, sm: { width: "80%" } }}>
        <Chart data={data} />
      </Box>
      <Typography
        variant="body2"
        sx={{ color: "rgb(236, 236, 236)", fontSize: "15px" }}
      >
        Last 24 hours
      </Typography>
    </AnimatedExpandedCard>
  );
}

export default Card;
