import React from 'react';
import './Footer.css'
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
const Footer = () => {
  return (
    <footer>
      <Box>
        <Typography
          align='center'
          sx={{
            ml: 2,
            fontWeight: 700,
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Hi! My name is Daniil Kudrya.
        </Typography>
      </Box>
      <Box>
        <Typography
          align='center'
          sx={{
            fontWeight: 700,
            color: 'white',
            textDecoration: 'none',
          }}
        >
          I`m studying at Odessa National Polytechnic University.
        </Typography>
      </Box>
      <Box>
        <Typography
          align='center'
          sx={{
            mr: 2,
            fontWeight: 700,
            color: 'white',
            textDecoration: 'none',
          }}
        >
          I`m the best developer ever!
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
