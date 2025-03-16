import './index.scss';
import { Box, TextField, Button, Typography } from '@mui/material';
import emailjs from 'emailjs-com';

function Contact() {

  // Fonction de gestion de l'envoi du formulaire
  const sendEmail = (e) => {
    e.preventDefault();

    // Remplace les chaînes ci-dessous par tes identifiants EmailJS
    const serviceID = 'service_a1zb4ro';
    const templateID = 'template_sn0momt';
    const userID = 'rUozu5RAYKbrF5-lX'; // ou userID selon ce que te fournit EmailJS

    emailjs.sendForm(serviceID, templateID, e.target, userID)
      .then((result) => {
          console.log(result.text);
          alert('Message envoyé !');
      }, (error) => {
          console.log(error.text);
          alert('Une erreur est survenue, merci de réessayer.');
      });
    e.target.reset(); // Optionnel, pour réinitialiser le formulaire
  };

  return (
    <div className='container'>
      <div>
        <ol style={{ listStyleType: 'decimal', textAlign: 'left' }}>
          <li style={{ padding: '0 0 0 10px' }}>
            <span style={{ color: '#F9774E' }}>.contact {'{'}</span>
          </li>
          <li>
            Email : <span style={{ color: '#F9774E' }}>gaetancarre.ct@gmail.com</span>
          </li>
          <li>
            Phone : <span style={{ color: '#F9774E' }}>06.66.36.61.82</span>
          </li>
          <li>
            Linkedin : <span onClick={() => window.open('https://www.linkedin.com/in/ga%C3%ABtan-carr%C3%A9-4649162aa/')} style={{ color: '#F9774E', cursor: 'pointer' }}>Gaëtan Carré</span>
          </li>
          <li>
            Github : <span onClick={() => window.open('https://github.com/CarreGaetan')} style={{ color: '#F9774E', cursor: 'pointer' }}>CarreGaetan</span>
          </li>
          <li style={{ padding: '0 0 0 10px' }}>
            <span style={{ color: '#F9774E' }}>{'}'}</span>
          </li>
        </ol>
      </div>
      <div className='contact-form' style={{ textAlign: 'left' }}>
        {/* Wrapper pour limiter la largeur à 80% */}
        <div className="content">
          <div>
            <Typography variant="h5" sx={{ fontFamily: 'JetBrains Mono, monospace', marginBottom: '30px' }} gutterBottom>
              J&apos;ai hâte de vous lire
            </Typography>
          </div>
          <Box
            component="form"
            onSubmit={sendEmail}
            noValidate
            autoComplete="off"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2
            }}
          >
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                id="email"
                name="email_id"
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                required
                sx={{
                  '& label': { 
                    color: '#fff',
                    fontWeight: '300',
                    fontVariationSettings: "'wght' 300",
                    fontFamily: 'JetBrains Mono, monospace'
                  },
                  '& label.Mui-focused': { color: '#fff' },
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#1F2428',
                    '& .MuiInputBase-input': {
                      color: '#fff',
                      fontWeight: '200',
                      fontVariationSettings: "'wght' 200",
                      fontFamily: 'JetBrains Mono, monospace'
                    },
                    '& fieldset': { borderColor: 'transparent' },
                    '&:hover fieldset': { borderColor: '#9e9e9e' },
                    '&.Mui-focused fieldset': { borderColor: '#0366d6' }
                  }
                }}
              />
              <TextField
                id="name"
                name="from_name"
                label="Nom"
                variant="outlined"
                fullWidth
                sx={{
                  '& label': { 
                    color: '#fff',
                    fontWeight: '300',
                    fontVariationSettings: "'wght' 300",
                    fontFamily: 'JetBrains Mono, monospace'
                  },
                  '& label.Mui-focused': { color: '#fff' },
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#1F2428',
                    '& .MuiInputBase-input': {
                      color: '#fff',
                      fontWeight: '300',
                      fontVariationSettings: "'wght' 300",
                      fontFamily: 'JetBrains Mono, monospace'
                    },
                    '& fieldset': { borderColor: 'transparent' },
                    '&:hover fieldset': { borderColor: '#9e9e9e' },
                    '&.Mui-focused fieldset': { borderColor: '#0366d6' }
                  }
                }}
              />
            </Box>
            <TextField
              id="message"
              name="message"
              label="Message"
              multiline
              rows={6}
              variant="outlined"
              fullWidth
              required
              sx={{
                '& label': { 
                  color: '#fff',
                  fontWeight: '300',
                  fontVariationSettings: "'wght' 300",
                  fontFamily: 'JetBrains Mono, monospace'
                },
                '& label.Mui-focused': { color: '#fff' },
                '& .MuiOutlinedInput-root': {
                  backgroundColor: '#1F2428',
                  '& .MuiInputBase-input': {
                    color: '#fff',
                    fontWeight: '300',
                    fontVariationSettings: "'wght' 300",
                    fontFamily: 'JetBrains Mono, monospace'
                  },
                  '& fieldset': { borderColor: 'transparent' },
                  '&:hover fieldset': { borderColor: '#9e9e9e' },
                  '&.Mui-focused fieldset': { borderColor: '#0366d6' }
                }
              }}
            />
            <Button
              variant="contained"
              type="submit"
              sx={{
                padding: '4px 10px',
                fontSize: '1rem',
                fontFamily: 'JetBrains Mono, monospace',
                fontWeight: '300',
                '&:hover': { backgroundColor: '#0366d6' }
              }}
            >
              Envoyer
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
