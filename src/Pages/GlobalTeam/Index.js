import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { gt6, gt2, gt7, gt4, gt8, email } from '../../config/Images/Images';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import './style.css';
import Preloader from '../../Components/Preloader';
const data = [
  {
    id: 1,
    image: gt8,
    name: 'Professor Jonathan Green',
    position: 'Principal Investigator',
    description: 'Lead investigator with overall responsibilities',
    description1: ' for the programme.',
    // description2: "director for our client team. ",
    email: 'example@mail.com',
  },
  {
    id: 2,
    image: gt6,
    name: 'Dr Gauri Divan',
    position: 'Joint Lead Applicant',
    description: 'Co-PI and lead investigator in India, ',
    description1: 'with overall responsibility for coordinating',
    description2: 'between South Asia sites.  ',
    email: 'example@mail.com',
  },
  {
    id: 3,
    image: gt2,
    name: 'Dr Kathy Leadbitter',
    position: 'Co-applicant',
    description: 'Lead investigator responsible for capacity building, ',
    description1: 'training and supervision. ',
    // description2: "director for our client team. ",
    email: 'example@mail.com',
  },
  {
    id: 4,
    image: gt7,
    name: 'Dr Richard Smallman',
    position: 'Programme Manager',
    description: 'Lead investigator responsible for capacity building,',
    description1: 'training and supervision. ',
    // description2: "director for our client team. ",
    email: 'example@mail.com',
  },
  {
    id: 5,
    image: gt4,
    name: 'Dr Shruti Garg',
    position: 'Co-applicant',
    description: 'Lead investigator responsible for partner liaison ',
    description1: ' and health system development. ',
    // description2: "director for our client team. ",
    email: 'example@mail.com',
  },
];
const GlobalTeam = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process (replace with your actual loading logic)
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      {isLoading ? <Preloader /> : <></>}
      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontWeight: '700',
          fontSize: '64px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 4,
          mb: 3,
        }}
      >
        Global Team
      </Typography>
      <div>
        <Grid
          container
          spacing={2}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignitem: 'center',
            p: 5,
          }}
        >
          {data.map((members, index) => (
            <Grid
              key={members.id}
              item
              lg={4}
              md={6}
              sm={6}
              xs={12}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItem: 'center',
              }}
            >
              <div
                className="global_card"
                style={{
                  cursor: 'pointer',
                }}
              >
                <Box marginBottom="4px">
                  <img
                    src={members.image}
                    alt={members.name}
                    style={{
                      borderRadius: '15px',
                      transition: 'transform 0.3s',
                      width:
                        members.id === 1 || members.id === 2 || members.id === 4
                          ? '460px'
                          : '370px',
                      height:
                        members.id === 1 || members.id === 2 || members.id === 4
                          ? '512px'
                          : '512px',
                    }}
                  />
                </Box>
                <Box>
                  <p
                    style={{
                      fontWeight: '500',
                      fontSize: '16px',
                      color: '#474747',
                    }}
                  >
                    {members.name}
                  </p>
                  <p
                    style={{
                      fontWeight: '500',
                      fontSize: '16px',
                      color: '#474747',
                    }}
                  >
                    {members.position}
                  </p>
                  <p
                    style={{
                      fontSize: '16px',
                      color: '#474747',
                    }}
                  >
                    {members.description}
                    <br />
                    {members.description1}
                    <br />
                    {members.description2}
                  </p>
                  <a href={`mailto:${members.email}`}>
                    <IconButton className="global_IconButton">
                      <Tooltip title={members.email} arrow>
                        <img src={email} alt="email" />{' '}
                      </Tooltip>
                    </IconButton>
                  </a>
                </Box>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default GlobalTeam;
