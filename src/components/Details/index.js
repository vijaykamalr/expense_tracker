import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@mui/material";
// import { Doughnut } from "react-chartjs-2";
import useStyles from "./styles";

import useTransactions from "../../useTransactions";
const Details = ({ title, subheader }) => {
  const { total } = useTransactions(title);
  const classes = useStyles();
  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      <CardHeader title={title} subheader={subheader} />
      <CardContent>
        <Typography variant="h5">${total}</Typography>
        {/* <Doughnut data={chartData}></Doughnut> */}
      </CardContent>
    </Card>
  );
};

export default Details;
