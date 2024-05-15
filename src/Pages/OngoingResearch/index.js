import React, { useEffect, useState } from 'react';
import Grid from '@mui/joy/Grid';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';
import Preloader from '../../Components/Preloader';
import { underconstruction } from '../../config/Images/Images';

const OngoingResearch = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process (replace with your actual loading logic)
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <Container my={3}>
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
        <h1>Under Constructions</h1>
      </Box>
      <Grid container spacing={3} my={3}>
        <Grid lg={12} md={12} sm={12} xs={12}>
          <img src={underconstruction} alt="under-constructionimage" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default OngoingResearch;
