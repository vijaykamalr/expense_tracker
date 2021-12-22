import { Grid, Typography, Paper } from "@mui/material";
import Details from "./components/Details";
import Main from "./components/main";
import useStyles from './styles'

import { SpeechState, useSpeechContext } from "@speechly/react-client";
import { PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui';
import { useEffect, useRef } from "react";

function App() {
  const classes = useStyles()
  const { speechState } = useSpeechContext();
  const main = useRef(null)

  const executeScroll = () => main.current.scrollIntoView()    

  useEffect(() => {
    if (speechState === SpeechState.Recording) {
      executeScroll();
    }
  }, [speechState]);
  return (
    <div>
      <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ height: '100vh'}}>
        <Grid item xs={12} sm={4}  className={classes.mobile}>
          <Details title={"Income"}></Details>
        </Grid>
        <Grid item xs={12} sm={3}  className={classes.main} ref={main} >
          <Main></Main>
        </Grid>
        <Grid item xs={12} sm={4}  className={classes.desktop}>
          <Details title={"Income"}></Details>
        </Grid>
        <Grid item xs={12} sm={4}  className={classes.last}>
          <Details title={"Expense"}></Details>
        </Grid>
        <PushToTalkButtonContainer>
          <PushToTalkButton />
        </PushToTalkButtonContainer>
      </Grid>
    </div>
  );
}

export default App;
