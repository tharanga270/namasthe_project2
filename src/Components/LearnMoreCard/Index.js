import React, { useEffect } from 'react';
import './style.css';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { project2 } from '../../config/Images/Images';

const LearnMoreCard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box
      sx={{
        ml: { xl: '7rem', lg: '6rem', md: '4rem', sm: '2rem', xs: '2rem' },
        mr: { xl: '7rem', lg: '6rem', md: '4rem', sm: '2rem', xs: '2rem' },
      }}
    >
      <h4 className="learn_h4">Project background</h4>
      <div>
        <Typography
          variant="body2"
          className="learn_typography1"
          sx={{
            fontSize: {
              xl: '25px',
              lg: '25px',
              md: '25px',
              sm: '22px',
              xs: '22px',
            },
          }}
        >
          Child Neurodevelopment and autism research unit launches in South Asia
        </Typography>
        <br />
        <Typography
          variant="body2"
          className="learn_typography3"
          sx={{
            fontSize: {
              xl: '25px',
              lg: '25px',
              md: '25px',
              sm: '22px',
              xs: '20px',
            },
          }}
        >
          NAMASTE builds on the decade-long collaboration between Sangath
          (India) and the University of Manchester (UK) to implement a novel
          integrated detection-care pathway for young children with autism and
          their families in India, Sri Lanka, and Nepal, using non-specialist
          health workers.
        </Typography>
        <br />
        <Typography
          variant="body2"
          className="learn_typography3"
          sx={{
            fontSize: {
              xl: '25px',
              lg: '25px',
              md: '25px',
              sm: '22px',
              xs: '20px',
            },
          }}
        >
          The NIHR Global Health Research Unit on Neurodevelopment and Autism in
          South Asia Treatment and Evidence -known as NAMASTE - has been awarded
          by the National Institute of Health and Care Research (NIHR) using UK
          aid from the UK Government which supports global health research.
        </Typography>
        <br />
        <Typography
          variant="body2"
          className="learn_typography3"
          sx={{
            fontSize: {
              xl: '25px',
              lg: '25px',
              md: '25px',
              sm: '22px',
              xs: '20px',
            },
          }}
        >
          NAMASTE builds on Manchester’s autism program and more than a decade
          of partnership with India, to implement a novel integrated
          detection-care pathway for young children with autism and their
          families in India, Sri Lanka, and Nepal, using lay health workers.
        </Typography>
        <br />
        <Typography
          variant="body2"
          className="learn_typography3"
          sx={{
            fontSize: {
              xl: '25px',
              lg: '25px',
              md: '25px',
              sm: '22px',
              xs: '20px',
            },
          }}
        >
          NAMASTE will also develop much-needed research capacity in the field
          of neurodevelopmental disorders in South Asia.
        </Typography>
        <br />
        <Typography
          variant="body2"
          className="learn_typography3"
          sx={{
            fontSize: {
              xl: '25px',
              lg: '25px',
              md: '25px',
              sm: '22px',
              xs: '20px',
            },
          }}
        >
          Autism Spectrum Disorder (‘Autism’) is a severe neurodevelopmental
          disability with a significant impact on children’s social development
          and independence into adulthood and profound economic consequences.
          The WHO included autism as a key priority in its Mental Health Action
          Plan in 2014.
        </Typography>
        <br />
        <Typography
          variant="body2"
          className="learn_typography3"
          sx={{
            fontSize: {
              xl: '25px',
              lg: '25px',
              md: '25px',
              sm: '22px',
              xs: '20px',
            },
          }}
        >
          About five million families in India live with a young autistic child,
          the great majority with no access to services. Over a 10-year
          collaboration, Sangath and The University of Manchester have carefully
          adapted an autism program developed for the UK to the South Asian
          context. The resulting 'Parent-mediated Autism Social Communication
          Intervention for non-Specialists Plus’ (PASS Plus), delivered by
          lay-health workers, is the first of its kind. It has shown real-world
          impact in two initial randomised controlled trials, with large-scale
          evaluations underway in New Delhi.
        </Typography>
        <br />
        <Typography
          variant="body2"
          className="learn_typography3"
          sx={{
            fontSize: {
              xl: '25px',
              lg: '25px',
              md: '25px',
              sm: '22px',
              xs: '20px',
            },
          }}
        >
          NAMASTE will collaborate with the two lead organizations and Autism
          Care Nepal, the College of Paediatrics Sri Lanka, Harvard Medical
          School, La Trobe University, Kings College London, the World Health
          Organisation, and Ummeed, Mumbai.
        </Typography>
        <br />
        <Typography
          variant="body2"
          className="learn_typography1"
          sx={{
            fontSize: {
              xl: '25px',
              lg: '25px',
              md: '25px',
              sm: '22px',
              xs: '20px',
            },
          }}
        >
          Dr. Asiri Hewamalahe, Consultant Community Physician, Ministry of
          Health, Sri Lanka, and Dr. Dilini Vipulaguna, Consultant Community
          Paediatrician, who will together be leading the work in Sri Lanka are
          clear that
        </Typography>
        <br />
        <Typography
          variant="body2"
          className="learn_typography1"
          sx={{
            fontSize: {
              xl: '25px',
              lg: '25px',
              md: '25px',
              sm: '22px',
              xs: '20px',
            },
            mb: 5,
          }}
        >
          "Namaste will complement the existing system of early detection and
          early interventions for developmental disorders including autism in
          Sri Lanka. Most importantly, it will fill the gap in caregiver
          training and parent advocacy which is a timely need for families.
          During the current context of economic hardships in Sri Lanka
          'Namaste' is indeed a blessing".
        </Typography>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <img
          src={project2}
          alt="project2"
          // width="650px"
          // height="650px"
          style={{
            zIndex: 1,
          }}
        />
      </div>
    </Box>
  );
};

export default LearnMoreCard;
