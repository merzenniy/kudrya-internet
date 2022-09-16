import React from 'react';
import {Stack, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Auth = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      className='form'
    >
      <h2>Sign in</h2>
      <div className='wrap'>
        <TextField
          required
          id="outlined"
          label="Email"
          defaultValue="Hello World"
        />
        <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <Button variant="contained" size="large">
          Sign in
        </Button>
      </div>
    </Box>
  );
};

export default Auth;
