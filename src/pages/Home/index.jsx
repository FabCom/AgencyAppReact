import React from "react";
import {Box, Container, Fade, Typography, Paper} from "@mui/material"
import { PageTitle } from "../../components/titles/PageTitle";

const Home = (props) => {
    return (
      <Box>
       <PageTitle title='Accueil'/>
       <Container>
        <Fade in={true}>
          <Typography variant='h3' color='text.primary' >Titre</Typography>
        </Fade>
        <Paper elevation={3} sx={{width: '15%', height: 'auto'}}/>
        <Paper elevation={3} />
        <Paper elevation={3} />
      </Container>
      </Box>
    );
}

export default Home;