import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  desktop: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  mobile: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  main: {
    [theme.breakpoints.up("sm")]: {
      paddingBottom: "5%",
    },
  },
  last: {
    marginBottom: '64px !important',
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3),
      paddingBottom: "200px",
    },
  },
  grid: {
    "&>*": {
      margin: `${theme.spacing(2)} !important`,
    },
  },
}));
