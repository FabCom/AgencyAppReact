import { Box } from "@mui/system";
import React from "react";
import CustomizedTimeline from "../../components/timeline/customized.jsx";
import WorksList from "../../datas/works.jsx";
import { convertMarkdown } from "../../components/utils";

const WorkView = (props) => {
  const worksArray = WorksList
  const title = props.title ? props.title : null
  console.log(title)
  const events = [...Object.values(worksArray)]

  if (title === null) {
    return (
      <Box>
        <CustomizedTimeline events={events} />
      </Box>  
     
    )
  } else {
    let events_selected = events.filter((event) => event.title === title)
    return (
      <Box>
        <CustomizedTimeline events={events_selected} />
        <Box color="text.primary" dangerouslySetInnerHTML={convertMarkdown(events_selected[0].text)} />
          
      </Box>  
     
    )
  }

}

export default WorkView