import { TextField, Stack, Button, Container  } from '@mui/material';
import * as React from 'react';
import { useState } from "react";



export default function SignUp() {


  const [user, setUser] = useState({
    username: '', 
    email: '', 
    password: ''
    
  })

  // console.log('RE-RENDER: ', user);


  function handleSubmit (e) {
    e.preventDefault()
    
    
    console.log('ENVIADO');
    console.log( user );
  }
  function handleChange (e) {

    setUser({...user, [e.target.name]: e.target.value});
  }
  
   return (
    <Container>
    

        <Stack
          onSubmit={handleSubmit}
          component="form"
          sx={{
            marginTop: '50px',
            
            
            padding: '10',
            
            
                 
          }}
          spacing={4}
          noValidate
          autoComplete="on"
        >
        <TextField
          
          name="username"
          required
          fullWidth
          id="username"
          label="username"
          autoFocus
          onChange={handleChange}
        />
        
       
        <TextField
          required
          fullWidth
          id="email"
          label="email"
          name="email"
          autoComplete="email"
          onChange={handleChange}
        />
        
        
        <TextField
          required
          fullWidth
          name="password"
          label="password"
          type="password"
          id="password"
          
          onChange={handleChange}
        />
        
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
         >
           Sign Up
        </Button>
        </Stack>
      
     
   </Container>

 
 
 )
}