import React, {useState, useEffect} from "react";
import { useParams, useLocation } from "react-router";
import { PageTitle } from "../../components/titles/PageTitle";
import { convertMarkdown } from "../../components/utils";
import WorksContent from '../../datas/pages/Works.txt'
import { Box } from "@mui/system";
import { Container } from "@mui/material";

export const Works = (props) => {
  const [pageContent, setPageContent] = useState();

  useEffect(() => {
    fetch(WorksContent)
    .then(response => response.text())
    .then(data => setPageContent(data)) //
  },[])

  const {params} = useParams();
  const location = useLocation();
  const search = new URLSearchParams(location.search)

  if (params === 'list'){
    return (
       <Container>
        <PageTitle title="Travaux"/>
        <Box dangerouslySetInnerHTML={convertMarkdown(pageContent)} />
       </Container>
    );
  } else {
    return (
      <div className="works-view">
        {params}
         {search.get('name')}
      </div>
    )
  }
}

