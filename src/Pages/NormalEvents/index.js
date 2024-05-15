import React, { useEffect, useState } from 'react';
import EventLeftPaper from '../../Components/Events/Index';
import EventRightPaper from '../../Components/Events/Index2';
//import EventRightPaper2 from '../../Components/Events/Index3';
import EventLeftPaper2 from '../../Components/Events/Index4';
import { Box } from '@mui/material';
import Preloader from '../../Components/Preloader/index';
import EventLotusTower from './../../Components/Events/Index5';
import EventSACS from '../../Components/Events/Index6';
import EventCST from '../../Components/Events/Index7';
import EventADOS from '../../Components/Events/Index8';
import EventSLCP from '../../Components/Events/Index9';
import EventAutismAwareness from '../../Components/Events/Index10';
import EventIRD from '../../Components/Events/Index11';
import EventVABS from '../../Components/Events/Index12';

const NormalEvents = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process (replace with your actual loading logic)
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {isLoading ? <Preloader /> : <></>}
      <Box
        sx={{
          textAlign: 'center',
          fontWeight: 600,
          fontSize: '50px',
          mb: 2,
          mt: 2,
        }}
      >
        <h1>Events</h1>
      </Box>
      <EventRightPaper />
      <EventLeftPaper />
      {/* <EventRightPaper2 /> */}
      <EventLeftPaper2 />
      <EventLotusTower />
      <EventSACS />
      <EventCST />
      {/* <EventADOS /> */}
      {/* <EventSLCP /> */}
      <EventAutismAwareness />
      <EventIRD />
      <EventVABS />
    </div>
  );
};

export default NormalEvents;
