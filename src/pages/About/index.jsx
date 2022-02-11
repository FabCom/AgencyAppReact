import React, { useEffect, useState } from "react";
import {Box, Container, Fade} from "@mui/material"
import { PageTitle } from "../../components/titles/PageTitle";
import PageContent from '../../datas/pages/About.txt'
import { convertMarkdown } from "../../components/utils";

const Home = (props) => {

  const [content, setContent] = useState();

  useEffect(() => {
    fetch(PageContent)
    .then(response => response.text())
    .then(data => setContent(data)) //
  },[])

    return (
      <Box>
       <PageTitle title='À propos'/>
       <Container>
        <Fade in={true}>
        <Box color="text.primary" dangerouslySetInnerHTML={convertMarkdown(content)} />
        
        </Fade>
        
      </Container>
      </Box>
    );
}

export default Home;