import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { capitalize } from '../utils';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function CustomizedTimeline(props) {

  const events = props.events
  return (
    <Timeline position="alternate" >
      {events.map(event => 
          <TimelineItem key={event.id}>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              <Typography variant = 'h2'>
                {event.start} - {event.end}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="secondary">
                <CircleRoundedIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Button to={'?title=' + event.title} key={event.id} component={Link} > 
                <Typography variant="h3" component="span" color='secondary'>
                  {capitalize(event.title)}
                </Typography>
                <CardMedia
                  component="img"
                  image={event.img}
                  alt="Paella dish"
                />
              </Button>
            </TimelineContent>
          </TimelineItem>
          
        )}
    </Timeline>
  );
}
