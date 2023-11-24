import { useState } from "react";
import { Button, TextField } from "@mui/material";





function SignUp1 () {

  const [user, setUser] = useState({
    username: '', 

  })

  console.log('RE-RENDER: ', user);


  function handleSubmit (e) {
    e.preventDefault()

    
    console.log('ENVIADO');
    console.log(user);
  }
  function handleChange (e) {

    setUser(e.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <TextField value={user.username} onChange={handleChange}/>
      <Button type="submit">ENVIAR</Button>
    </form>
  )
  
}

export default SignUp1