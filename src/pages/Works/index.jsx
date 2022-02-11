import React, {useState, useEffect} from "react";
import { useParams, useLocation } from "react-router";
import { PageTitle } from "../../components/titles/PageTitle";
import { convertMarkdown } from "../../components/utils";
import WorksContent from '../../datas/pages/Works.txt'
import WorkView from './workView.jsx'

import { Box } from "@mui/system";
import { Container } from "@mui/material";

export const Works = (props) => {
  const [pageContent, setPageContent] = useState()

  useEffect(() => {
    fetch(WorksContent)
    .then(response => response.text())
    .then(data => setPageContent(data)) //
  },[])

  const {params} = useParams()
  console.log(params)
  const location = useLocation()
  const search = new URLSearchParams(location.search)

  if (params === 'list' && search.get('title') == null){
    return (
       <Container>
        <PageTitle title="Travaux"/>
        <Box color="text.primary" dangerouslySetInnerHTML={convertMarkdown(pageContent)} />
        <WorkView />
       </Container>
    );
  } else {
    return (
      <Container>
        <WorkView title={search.get('title')}/>
      </Container>
    )
  }
}

