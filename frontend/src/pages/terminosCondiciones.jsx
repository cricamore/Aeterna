import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

export default function TerminosCondiciones () {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Typography onClick={handleOpen}>
        términos y condiciones
      </Typography>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Términos y Condiciones
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Bienvenido(a) a nuestra aplicación de educación. Antes de utilizar nuestros servicios, 
            te recomendamos leer detenidamente los siguientes términos y condiciones. Al acceder y 
            utilizar nuestra aplicación, aceptas cumplir con todos los términos establecidos a continuación. 
            Si no estás de acuerdo con alguno de ellos, por favor, abstente de utilizar nuestra aplicación.

            \n Aceptación de los Términos
Al utilizar nuestra aplicación, aceptas y te comprometes a cumplir con estos términos y condiciones. Si no estás de acuerdo con alguna parte de los mismos, te recomendamos no utilizar nuestra aplicación.

Uso de la Aplicación
Nuestra aplicación de educación está diseñada para brindar contenido y servicios relacionados con la educación. Debes utilizar la aplicación de acuerdo con su propósito y no hacer uso indebido de la misma. No podrás utilizar nuestra aplicación para cualquier actividad ilegal, fraudulenta o que viole los derechos de terceros.

Registro y Cuenta de Usuario
Para utilizar nuestra aplicación, es posible que debas registrarte y crear una cuenta de usuario. Al hacerlo, debes proporcionar información precisa y completa. Eres responsable de mantener la confidencialidad de tu cuenta y contraseña, y de todas las actividades que ocurran bajo tu cuenta.

Propiedad Intelectual
Nuestra aplicación y todo su contenido, incluyendo pero no limitado a texto, gráficos, imágenes, logotipos, iconos, videos y software, están protegidos por derechos de autor y otras leyes de propiedad intelectual. No puedes reproducir, distribuir, modificar, transmitir, exhibir o utilizar de ninguna manera el contenido de nuestra aplicación sin nuestro consentimiento expreso por escrito.

Privacidad
Respetamos tu privacidad y nos comprometemos a proteger tus datos personales. Nuestra Política de Privacidad describe cómo recopilamos, utilizamos y protegemos la información que nos proporcionas al utilizar nuestra aplicación. Al utilizar nuestra aplicación, aceptas nuestras prácticas de privacidad descritas en la Política de Privacidad.

Contenido Generado por el Usuario
Puedes tener la oportunidad de contribuir con contenido a nuestra aplicación, como comentarios, opiniones o calificaciones. Al hacerlo, garantizas que tienes los derechos necesarios para proporcionar ese contenido y que no viola los derechos de terceros. Nos reservamos el derecho de eliminar cualquier contenido generado por el usuario que consideremos inapropiado, ilegal o que viole estos términos y condiciones.

Limitación de Responsabilidad
Nuestra aplicación se proporciona "tal cual" y no ofrecemos garantías de ningún tipo, expresas o implícitas, respecto a su funcionamiento, disponibilidad o contenido. No seremos responsables por ningún daño directo, indirecto, incidental, especial o consecuente que surja del uso o la imposibilidad de uso de nuestra aplicación.

Modificaciones y Terminación
Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Te notificaremos sobre cualquier cambio sustancial. Además, nos reservamos el derecho de suspender o terminar tu acceso a la aplicación en caso de incumplimiento de estos términos y condiciones.

Ley Aplicable
Estos términos y condiciones se regirán e interpretarán de acuerdo con las leyes del país en el que esté ubicada nuestra empresa, sin tener en cuenta sus disposiciones sobre conflictos de leyes.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}