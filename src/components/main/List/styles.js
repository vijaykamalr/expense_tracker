import { makeStyles } from '@mui/styles';
import { red, green } from '@mui/material/colors';

export default makeStyles((theme) => ({
  avatarIncome: {
    color: '#fff !important',
    backgroundColor: `${green[500]} !important`,
  },
  avatarExpense: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: `${red[500]} !important`,
  },
  list: {
    height:'50vh',
    overflow: 'auto',
  },
}));