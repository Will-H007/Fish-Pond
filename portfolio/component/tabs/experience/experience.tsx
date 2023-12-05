import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';

// Sample images (replace with actual image URLs)
const timelineImages = {
  eat: '/images/image1.jpg',
  code: '/images/image2.jpg',
  sleep: '/images/image3.jpg',
  repeat: '/images/image4.jpg',
};

const timelineData = [
  {
    id: 1,
    title: 'Eat',
    description: 'Because you need strength',
    icon: <FastfoodIcon fontSize="large" />,
    image: timelineImages.eat,
  },
  {
    id: 2,
    title: 'Code',
    description: 'Because it\'s awesome!',
    icon: <LaptopMacIcon fontSize="large" />,
    image: timelineImages.code,
  },
  {
    id: 3,
    title: 'Sleep',
    description: 'Because you need rest',
    icon: <HotelIcon fontSize="large" />,
    image: timelineImages.sleep,
  },
  {
    id: 4,
    title: 'Repeat',
    description: 'Because this is the life you love!',
    icon: <RepeatIcon fontSize="large" />,
    image: timelineImages.repeat,
  },
  {
    id: 4,
    title: 'Repeat',
    description: 'Because this is the life you love!',
    icon: <RepeatIcon fontSize="large" />,
    image: timelineImages.repeat,
  },
  {
    id: 4,
    title: 'Repeat',
    description: 'Because this is the life you love!',
    icon: <RepeatIcon fontSize="large" />,
    image: timelineImages.repeat,
  },
  {
    id: 4,
    title: 'Repeat',
    description: 'Because this is the life you love!',
    icon: <RepeatIcon fontSize="large" />,
    image: timelineImages.repeat,
  },
];

export default function Experience() {
  return (
    <div style={{ height: '90%', width: '100%', marginTop: '30px', overflowY: 'auto', marginLeft: 'auto', marginRight: 'auto' }}>
      <Timeline position="alternate">
        {timelineData.map((item) => (
          <TimelineItem key={item.id}>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              <img src={item.image} alt={item.title} style={{ width: '30%', height: 'auto', borderRadius:"10px", opacity:"80%" }} />
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ height: '2rem' }} />
              <TimelineDot sx={{ fontSize: '2rem' }}>{item.icon}</TimelineDot>
              <TimelineConnector sx={{ height: '2rem', borderRadius: '10px', border: '1px solid #aaa' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                {item.title}
              </Typography>
              <Typography>{item.description}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
