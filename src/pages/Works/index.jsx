import React from "react";
import { useParams, useLocation } from "react-router";
import { PageTitle } from "../../components/titles/PageTitle";

export const Works = (props) => {
  const {params} = useParams();
  const location = useLocation();
  const search = new URLSearchParams(location.search)

  if (params === 'list'){
    return (
       <div className="works-view">
        <PageTitle title="Travaux"/>
       </div>
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