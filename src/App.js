import { Grid } from "@mui/material";
import Details from "./components/Details";
import Main from "./components/main";
import useStyles from './styles'

import { SpeechState, useSpeechContext } from "@speechly/react-client";
import { PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui';
import { useContext, useEffect, useRef } from "react";
import { ExpenseTrackerContext } from "./context/context";
import List from "./components/main/List/List";

function App() {
  const classes = useStyles()
  const { getTransaction } = useContext(ExpenseTrackerContext);
  const { speechState } = useSpeechContext();
  const main = useRef(null)
  useEffect(() => {
    getTransaction()
  }, [])

  const executeScroll = () => main.current.scrollIntoView()    

  useEffect(() => {
    if (speechState === SpeechState.Recording) {
      executeScroll();
    }
  }, [speechState]);
  return (
    <div>
      <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ height: '100vh'}}>
        {/* <Grid item xs={12} sm={4}  className={classes.mobile}>
          <Details title={"Income"}></Details>
        </Grid> */}
        <Grid item xs={12} sm={5} className={classes.main} ref={main} >
          <Main></Main>
        </Grid>
        <Grid item xs={12} sm={5}  className={classes.last} >
         <List/>
        </Grid>
        {/* <Grid item xs={12} sm={4}  className={classes.desktop}>
          <Details title={"Income"}></Details>
        </Grid>
        <Grid item xs={12} sm={4}  className={classes.last}>
          <Details title={"Expense"}></Details>
        </Grid> */}
        <PushToTalkButtonContainer>
          <PushToTalkButton />
        </PushToTalkButtonContainer>
      </Grid>
    </div>
  );
}

export default App;
