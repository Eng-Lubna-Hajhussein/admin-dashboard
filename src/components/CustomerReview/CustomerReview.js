import React from "react";
import { LineChart,useTheme } from "@basetoolkit/ui";
import datewise from "@basetoolkit/ui/datewise";
import coloris from "@basetoolkit/ui/coloris";

const CustomerReview = () => {
  const theme = useTheme();
  const xAxis = [
    "2018-09-19T00:00:00.000Z",
    "2018-09-19T01:30:00.000Z",
    "2018-09-19T02:30:00.000Z",
    "2018-09-19T02:30:00.000Z",
    "2018-09-19T04:30:00.000Z",
    "2018-09-19T05:30:00.000Z",
    "2018-09-19T06:30:00.000Z",
  ].map((date) => ({
    label: datewise(date).format("HH:mm"), 
    value: new Date(date).getTime(),
  }));

  const yAxis = [0, 50, 100, 150];

  const points = [
    { id: 1, value: [xAxis[0].value, 10], area: true },
    { id: 2, value: [xAxis[1].value, 50], area: true, matchID: 1 },
    { id: 3, value: [xAxis[2].value, 30], area: true, matchID: 2 },
    { id: 4, value: [xAxis[3].value, 90], area: true, matchID: 3 },
    { id: 5, value: [xAxis[4].value, 40], area: true, matchID: 4 },
    { id: 6, value: [xAxis[5].value, 120], area: true, matchID: 5 },
    { id: 7, value: [xAxis[6].value, 100], area: true, matchID: 6 },
  ];

  return (
    <div className="CustomerReview">
      <LineChart
        xAxis={xAxis}
        yAxis={yAxis}
        points={points}
        width={280}
        height={160}
        margin={{ top: 5, right: 20, bottom: 30, left: 28 }}
        grid={{ vertical: false, horizontal: false }}
        areaColor={coloris("#ff929f").alpha(0.3).hex()} 
        pointColor="#ff929f" 
        matchColor="#ff929f"
      />
    </div>
  );
};

export default CustomerReview;
