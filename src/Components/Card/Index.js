import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { projectcard1, projectcard2 } from '../../config/Images/Images';
import { Grid } from '@mui/material';
import './style.css';
import { Link } from 'react-router-dom';

const ProjectCard = () => {
  return (
    <div style={{}}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Card
            sx={{
              borderRadius: 10,
              background: '#FFF',
              boxShadow: '2px 2px 20px 3px rgba(0, 0, 0, 0.06)',
              textAlign: 'center',
              width: '27rem',
              height: '26rem',
              marginTop: {
                lg: '-100px',
                md: '-50px',
                sm: '10px',
                xs: '10px',
              },
              zIndex: 999,

              pt: 2,
              pl: 1,
              pr: 1,
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                {/* Small Logo */}
                <img
                  src={projectcard1}
                  alt="Small Logo"
                  // style={{ alignItems: "center" }}
                />
              </Box>

              {/* Heading */}
              <Typography
                variant="h5"
                gutterBottom
                style={{
                  color: '#413F3E',
                  fontSize: '22px',
                  fontWeight: '600',
                  lineHeight: '18px',
                  paddingBottom: '20px',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                Project Background
              </Typography>

              {/* Paragraph */}
              <Typography
                variant="body1"
                color="textSecondary"
                paragraph
                className=""
                style={{
                  color: '#413F3E',
                  fontSize: '12px',
                  fontWeight: '600',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                {/* NAMASTE builds on the decade-long collaboration between Sangath
                (India) and the University of Manchester (UK) to implement a
                novel integrated detection-care pathway for young children with
                autism and their families in India, Sri Lanka and Nepal, using
                non-specialist health workers. The project is a collaboration
                between researchers at Manchester’s Social Development Research
                Group, SANGATH India, Autism Care Nepal, the College of
                Paediatrics Sri Lanka, Harvard Medical School, La Trobe
                University, Kings College London, the World Health Organisation
                (WHO) and Ummeed, Mumbai. */}
                NAMASTE builds on the decade-long collaboration between Sangath
                (India) and the University of Manchester (UK) to implement a
                novel integrated detection-care pathway for young children with
                autism and their families in India, Sri Lanka and Nepal, using
                non-specialist health workers.
              </Typography>
            </CardContent>
            <CardContent sx={{ alignSelf: 'flex-end', mt: 2 }}>
              <Link to="/learn-more" className="learn_a">
                <p className="learn_p">Learn More</p>
              </Link>
            </CardContent>
          </Card>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Card
            sx={{
              borderRadius: 10,
              background: '#FFF',
              boxShadow: '2px 2px 20px 3px rgba(0, 0, 0, 0.06)',
              textAlign: 'center',
              width: '27rem',
              height: '26rem',
              marginTop: {
                lg: '-100px',
                md: '-50px',
                sm: '2px',
                xs: '2px',
              },
              zIndex: 999,
              pt: 2,
              pl: 1,
              pr: 1,
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                {/* Small Logo */}
                <img src={projectcard2} alt="Small Logo" />
              </Box>

              {/* Heading */}
              <Typography
                variant="h5"
                gutterBottom
                style={{
                  color: '#413F3E',
                  fontSize: '22px',
                  fontWeight: '600',
                  lineHeight: '18px',
                  paddingBottom: '20px',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                Project Objectives
              </Typography>

              {/* Paragraph */}
              <Typography
                variant="body1"
                color="textSecondary"
                paragraph
                style={{
                  color: '#413F3E',
                  fontSize: '12px',
                  fontWeight: '600',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                NAMASTE aims to develop and evaluate care pathways that involve
                screening and identifying neurodevelopmental disability in
                children, followed by family-based supports to help caregivers
                understand and support their child’s development. development.
              </Typography>
            </CardContent>
            <CardContent sx={{ alignSelf: 'flex-end', mt: 2 }}>
              <Link to="/projectobj" className="learn_a">
                <p className="learn_p">Learn More</p>
              </Link>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProjectCard;
