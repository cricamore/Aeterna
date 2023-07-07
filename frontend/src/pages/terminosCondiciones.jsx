import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import CloseIcon from '@mui/icons-material/Close';

export default function TerminosCondiciones () {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '90vh',
    bgcolor: 'rgba(19, 25, 47,0.95)',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const contentStyle = {
    maxHeight: '70vh',
    overflow: 'auto',
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: 10,
    right: 10,
    color: 'white',
    cursor: 'pointer',
  };

  const backdropStyle = {
    zIndex: 1,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backdropFilter: 'blur(8px)',
    backgroundColor: 'rgba(255, 255, 255, 0.6)', // Color de fondo desenfocado
  };

  return (
    <div>
      <Typography variant="body1" onClick={handleOpen} component="span" sx={{ cursor: 'pointer' }}>
        <span style={{ color: 'white' }}>Acepto</span> los <span style={{ color: '#D4AF37', fontWeight:'bold'}}>términos y condiciones</span>
      </Typography>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropComponent={Backdrop}
        BackdropProps={{ style: backdropStyle }}
      >
        <div onClick={handleClose} style={backdropStyle}>
          <Box sx={style} onClick={(e) => e.stopPropagation()}>
            <CloseIcon onClick={handleClose} style={closeButtonStyle} />
            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ fontSize: '34px', color:'#FFBD12' }} style={{ fontWeight: 'bold' }}>
              Términos y Condiciones
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2, color: 'white' }} style={contentStyle}>
              Bienvenido(a) a nuestra aplicación de educación. Antes de utilizar nuestros servicios, 
              te recomendamos leer detenidamente los siguientes términos y condiciones. Al acceder y 
              utilizar nuestra aplicación, aceptas cumplir con todos los términos establecidos a continuación. 
              Si no estás de acuerdo con alguno de ellos, por favor, abstente de utilizar nuestra aplicación.
              
              <br /><br />

              <Typography variant="h6" component="h3" style={{ fontWeight: 'bold' }}>
                Aceptación de los Términos
              </Typography>

              <br />
              
              Al utilizar nuestra aplicación, aceptas y te comprometes a cumplir con estos términos y 
              condiciones. Si no estás de acuerdo con alguna parte de los mismos, te recomendamos no 
              utilizar nuestra aplicación.

              <br /><br />
              
              <Typography variant="h6" component="h3" style={{ fontWeight: 'bold' }}>
                Uso de la Aplicación
              </Typography>
              
              <br />

              Nuestra aplicación de educación está diseñada para brindar contenido y servicios 
              relacionados con la educación. Debes utilizar la aplicación de acuerdo con su propósito 
              y no hacer uso indebido de la misma. No podrás utilizar nuestra aplicación para cualquier 
              actividad ilegal, fraudulenta o que viole los derechos de terceros.
              
              <br /><br />
              
              <Typography variant="h6" component="h3" style={{ fontWeight: 'bold' }}>
                Registro y Cuenta de Usuario
              </Typography>
              
              <br />
              
              Para utilizar nuestra aplicación, es posible que debas registrarte y crear una cuenta de 
              usuario. Al hacerlo, debes proporcionar información precisa y completa. Eres responsable 
              de mantener la confidencialidad de tu cuenta y contraseña, y de todas las actividades que 
              ocurran bajo tu cuenta.
              
              <br /><br />
              
              <Typography variant="h6" component="h3" style={{ fontWeight: 'bold' }}>
                Propiedad Intelectual
              </Typography>
              
              <br />

              Nuestra aplicación y todo su contenido, incluyendo pero no limitado a texto, gráficos, 
              imágenes, logotipos, iconos, videos y software, están protegidos por derechos de autor 
              y otras leyes de propiedad intelectual. No puedes reproducir, distribuir, modificar, 
              transmitir, exhibir o utilizar de ninguna manera el contenido de nuestra aplicación sin 
              nuestro consentimiento expreso por escrito.
              
              <br /><br />

              <Typography variant="h6" component="h3" style={{ fontWeight: 'bold' }}>
                Privacidad
              </Typography>

              <br />
              
              Respetamos tu privacidad y nos comprometemos a proteger tus datos personales. 
              Nuestra Política de Privacidad describe cómo recopilamos, utilizamos y protegemos la 
              información que nos proporcionas al utilizar nuestra aplicación. Al utilizar nuestra 
              aplicación, aceptas nuestras prácticas de privacidad descritas en la Política de Privacidad.
              
              <br /><br />
              
              <Typography variant="h6" component="h3" style={{ fontWeight: 'bold' }}>
                Limitación de Responsabilidad
              </Typography>

              <br />
              
              Nuestra aplicación se proporciona tal cual y no ofrecemos garantías de ningún tipo, 
              expresas o implícitas, respecto a su funcionamiento, disponibilidad o contenido. 
              No seremos responsables por ningún daño directo, indirecto, incidental, especial o 
              consecuente que surja del uso o la imposibilidad de uso de nuestra aplicación.

              <br /><br />
              
              <Typography variant="h6" component="h3" style={{ fontWeight: 'bold' }}>
                Modificaciones y Terminación
              </Typography>

              <br />
              
              Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. 
              Te notificaremos sobre cualquier cambio sustancial. Además, nos reservamos el derecho de 
              suspender o terminar tu acceso a la aplicación en caso de incumplimiento de estos términos y 
              condiciones.
              
              <br /><br />
              
              <Typography variant="h6" component="h3" style={{ fontWeight: 'bold' }}>
                Ley Aplicable
              </Typography>

              <br />
              
              Estos términos y condiciones se regirán e interpretarán de acuerdo con las leyes del país 
              en el que esté ubicada nuestra empresa, sin tener en cuenta sus disposiciones sobre 
              conflictos de leyes.
            </Typography>
          </Box>
        </div>
      </Modal>
    </div>
  );
}

