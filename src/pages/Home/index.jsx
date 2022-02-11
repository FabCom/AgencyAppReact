import React, { useEffect, useState } from "react";
import {Box, Container, Fade} from "@mui/material"
import { PageTitle } from "../../components/titles/PageTitle";
import HomeContent from '../../datas/pages/Home.txt'
import { convertMarkdown } from "../../components/utils";

const Home = (props) => {

  const [content, setContent] = useState();

  useEffect(() => {
    fetch(HomeContent)
    .then(response => response.text())
    .then(data => setContent(data)) //
  },[])

    return (
      <Box>
       <PageTitle title='Accueil'/>
       <Container>
        <Fade in={true}>
        <Box color="text.primary" dangerouslySetInnerHTML={convertMarkdown(content)} />
        
        </Fade>
        
      </Container>
      </Box>
    );
}

export default Home;