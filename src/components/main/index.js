import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Grid,
  Typography,
  Divider,
} from "@mui/material";
import InfoCard from "./InfoCard";
import useStyles from "./styles";
import Form from "./Form/Form";
import List from "./List/List";

const Main = () => {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader title="Expense Tracker" />
      <CardContent>
        <Typography variant="h5" align="center">
          Total Balance $Balance
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ lineHeight: "1.5em", marginTop: "20px" }}
        >
          <InfoCard />
        </Typography>
        <Divider className={classes.divider} />
        <Form />
      </CardContent>
      <CardContent className={classes.cartContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
