/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Slide,
  Card,
  CardHeader,
  CardContent,
  Button,
} from "@mui/material";
import { Delete, MoneyOff } from "@mui/icons-material";

import TextField from "@mui/material/TextField";
import DateRangePicker from "@mui/lab/DateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Box from "@mui/material/Box";

import { ExpenseTrackerContext } from "../../../context/context";
import useStyles from "./styles";

const List = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState([null, null]);
  const { transactions, deleteTransaction, getTransaction } = useContext(
    ExpenseTrackerContext
  );
  const getTransactions = async () => {
    const startDate = value[0] && new Date(value[0]).getTime();
    const endDate = value[1] && new Date(value[1]).getTime();
    await getTransaction({ startDate, endDate });
  };
  return (
    <Card>
      <CardHeader title="Expense list" />
      <CardContent>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateRangePicker
            startText="Start date"
            endText="End date"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} />
              </React.Fragment>
            )}
          />
        </LocalizationProvider>
        <Button onClick={getTransactions}>Filter</Button>
      </CardContent>
      <CardContent>
        <MUIList dense={false} className={classes.list}>
          {transactions.map((transaction) => (
            <Slide
              direction="down"
              in
              mountOnEnter
              unmountOnExit
              key={transaction.id}
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    className={
                      transaction.type === "Income"
                        ? classes.avatarIncome
                        : classes.avatarExpense
                    }
                  >
                    <MoneyOff />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={transaction.category}
                  secondary={`$${transaction.amount} - ${transaction.date}`}
                />
                {/* <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => deleteTransaction(transaction.id)}>
                <Delete />
              </IconButton>
            </ListItemSecondaryAction> */}
              </ListItem>
            </Slide>
          ))}
        </MUIList>
      </CardContent>
    </Card>
  );
};

export default List;
