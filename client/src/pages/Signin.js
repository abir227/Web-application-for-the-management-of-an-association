import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import M from 'materialize-css'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../compnent/navbar';
import Popup from '../compnent/popup';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
const [openModal, setOpenModal] = useState(false)
  const [nom,setNom]=useState('')
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  function nav(){
    navigate('/welcome')
  }
  function postData() {

    fetch("/signin", {
      method: "post", headers: { "Content-Type": "application/json" }, body: JSON.stringify({
        password: password, nom:nom
      }
      )
    }).then(res => res.json()).then(data => {
      // localStorage.setItem("jwt",data.token)
      console.log(data)

      if (data === "saisir vos cordonnées") {

        M.toast({ html: "saisir vos cordonnées" })

      }
      else if (data.error) {
        M.toast({ html: "verfier vos cordonnées" })
      }
      else {
        localStorage.setItem("jwt", data.token)
        localStorage.setItem("bureau", JSON.stringify(data.bureau))
        M.toast({ html: "Connecté" })
        // useEffect(()=>{navigate('/welcome')})
       nav()
        

      }
    }
    )
  }
  function Reset() {

    fetch("/resetcode", {
      method: "post", headers: { "Content-Type": "application/json" },
      
    }).then(res => res.json()).then(data => {

      if (data.message==="check your email") {
        M.toast({ html: "verifier votre email" })
      }
    }
    )
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

  return (
    <ThemeProvider theme={theme}>
        <Navbar/>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Se connecter
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="nom"
              name="email"
              autoComplete="email"
              autoFocus
              value={nom} onChange={(e) => setNom(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="mot de passe"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password} onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={postData}

            >
            connecter
            </Button>
            <Grid container>
              <Grid item xs>
                <Link onClick={Reset} variant="body2">
                  changer votre l'identifieur (Siege)
                </Link>
              </Grid>
              <Grid item>
                <Link onClick={() => { setOpenModal(true) }} variant="body2">
                  {"Se connecter en tant que siège"}
                </Link>
                <Popup open={openModal} Close={() => setOpenModal(false)}/>

              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}