import React from 'react';
import Grid from '@mui/joy/Grid';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';

const Resources = () => {
  return (
    <Container my={3}>
      <Box
        sx={{
          textAlign: 'center',
          fontWeight: 600,
          fontSize: '50px',
          mb: 2,
          mt: 2,
        }}
      >
        <h1>Autism Awareness 2024</h1>
      </Box>
      <Grid container spacing={3} my={3}>
        <Grid
          lg={12}
          md={12}
          sm={12}
          xs={12}
          sx={{
            border: '1px solid #88888d',
            padding: '30px',
            backgroundColor: '#eaeaed',
            borderRadius: '40px',
          }}
        >
          <iframe
            width="100%"
            height="550"
            src="https://www.youtube.com/embed/qwRDt9s0jD0"
            title="press media new 1"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </Grid>
        <Grid
          lg={12}
          md={12}
          sm={12}
          xs={12}
          my={5}
          sx={{
            border: '1px solid #88888d',
            padding: '30px',
            backgroundColor: '#eaeaed',
            borderRadius: '40px',
          }}
        >
          <iframe
            width="100%"
            height="550"
            src="https://www.youtube.com/embed/S7Uno3Olzf8"
            title="dr kosala"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </Grid>
        <Grid
          lg={12}
          md={12}
          sm={12}
          xs={12}
          mb={5}
          sx={{
            border: '1px solid #88888d',
            padding: '30px',
            backgroundColor: '#eaeaed',
            borderRadius: '40px',
          }}
        >
          <iframe
            width="100%"
            height="550"
            src="https://www.youtube.com/embed/_YPVfP2gfnk"
            title="dr asiri"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </Grid>
        <Grid
          lg={12}
          md={12}
          sm={12}
          xs={12}
          mb={5}
          sx={{
            border: '1px solid #88888d',
            padding: '30px',
            backgroundColor: '#eaeaed',
            borderRadius: '40px',
          }}
        >
          <iframe
            width="100%"
            height="550"
            src="https://www.youtube.com/embed/IR7e00B7dnc"
            title="dr dilini"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </Grid>

        <Grid
          lg={12}
          md={12}
          sm={12}
          xs={12}
          mb={5}
          sx={{
            border: '1px solid #88888d',
            padding: '30px',
            backgroundColor: '#eaeaed',
            borderRadius: '40px',
          }}
        >
          <iframe
            width="100%"
            height="550"
            src="https://www.youtube.com/embed/7jm4Yj8-PcY"
            title="ලොව පුරා මව්පියන්ට දුක්දෙන ඔටිසම්...  දරුවා වෙනුවෙන් කළ යුතු හොදම දේ දැන සිටියාද?"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </Grid>

        <Grid
          lg={12}
          md={12}
          sm={12}
          xs={12}
          mb={5}
          sx={{
            border: '1px solid #88888d',
            padding: '30px',
            backgroundColor: '#eaeaed',
            borderRadius: '40px',
          }}
        >
          <iframe
            width="100%"
            height="550"
            src="https://www.youtube.com/embed/GUdOpoNyXhs"
            title="Ms. Rathna Lalani Jayakodi Video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Resources;
