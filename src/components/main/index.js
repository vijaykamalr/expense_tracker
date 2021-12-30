import React, { useContext } from "react";
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
import { ExpenseTrackerContext } from "../../context/context";
import Details from "../Details";

const Main = () => {
  const classes = useStyles();

  const { balance } = useContext(ExpenseTrackerContext);
  return (
    <Card>
      <CardHeader title="Expense Tracker" />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            {" "}
            <Details title={"Income"}></Details>
          </Grid>
          <Grid item xs={6}>
            <Details title={"Expense"}></Details>
          </Grid>
        </Grid>
        <Typography variant="h5" align="center">
          Total Balance ${balance}
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
      {/* <CardContent className={classes.cartContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent> */}
    </Card>
  );
};

export default Main;
