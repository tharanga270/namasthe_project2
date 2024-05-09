import React, { useEffect, useState } from 'react';
import EventLeftPaper from '../../Components/Events/Index';
import EventRightPaper from '../../Components/Events/Index2';
import EventRightPaper2 from '../../Components/Events/Index3';
import EventLeftPaper2 from '../../Components/Events/Index4';
import { Box } from '@mui/material';
import Preloader from '../../Components/Preloader/index';
const Events = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process (replace with your actual loading logic)
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
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
      <EventRightPaper2 />
      <EventLeftPaper2 />
    </div>
  );
};

export default Events;
