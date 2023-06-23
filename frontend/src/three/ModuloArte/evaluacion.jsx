import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from "react";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflow: 'auto',
};

const optionStyle = {
  marginTop: 8,
  backgroundColor: 'darkgray',
  padding: 16,
  border: '3px solid white',
  borderRadius: 20,
  fontSize: 20,
  cursor: 'pointer'
};

const questionTextStyle = {
  color: 'darkblue',
  fontSize: 24,
};

const buttonStyle = {
  backgroundColor: 'darkblue',
  border: 'none',
  color: 'white',
  padding: '16px 24px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: 16,
  fontWeight: 'bold',
  borderRadius: 24,
};

export default function Evaluacion() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  //Preguntas de la evaluacion
  const questions = [
    {
      text: "¿Qué elementos caracterizan el diseño de los puentes romanos? ",
      options: [
        { id: 0, text: "Arcos romanos", isCorrect: false },
        { id: 1, text: "Inscripciones", isCorrect: false },
        { id: 2, text: "Esculturas", isCorrect: false },
        { id: 3, text: "Todas las anteriores", isCorrect: true },
      ],
    },
    {
      text: "¿Qué conmemoran las inscripciones y esculturas en los puentes romanos?",
      options: [
        { id: 0, text: "Emperadores", isCorrect: false },
        { id: 1, text: "Dioses", isCorrect: false },
        { id: 2, text: "Eventos importantes", isCorrect: false },
        { id: 3, text: "Todas las anteriore", isCorrect: true },
      ],
    },
    {
      text: "¿Dónde se encontró la pintura de las Bodas Aldobrandinas?",
      options: [
        { id: 0, text: "Monte Esquilino", isCorrect: true },
        { id: 1, text: "Pompeya", isCorrect: false },
        { id: 2, text: "Jardines de Mecenas", isCorrect: false },
        { id: 3, text: "Santa María la Mayor", isCorrect: false },
      ],
    },
    {
      text: "¿Dónde se encuentra actualmente la pintura de las Bodas Aldobrandinas?",
      options: [
        { id: 0, text: "En la finca del cardenal Aldobrandini", isCorrect: false },
        { id: 1, text: "En propiedad del pintor Camuccini", isCorrect: false },
        { id: 2, text: "En los Museos Vaticanos", isCorrect: true },
        { id: 3, text: "En propiedad del banquero Vicente Nielli", isCorrect: false },
      ],
    },
    {
      text: "¿Quién encargó la obra “Paris juzgando a las tres Diosas” a Rubens?",
      options: [
        { id: 0, text: "Felipe IV", isCorrect: true },
        { id: 1, text: "Felipe V", isCorrect: false },
        { id: 2, text: "Augusto", isCorrect: false },
        { id: 3, text: "Felipe IV", isCorrect: false },
      ],
    },
    {
      text: "¿Qué atributos acompañan a las tres diosas en la obra “Paris juzgando a las tres Diosas”?",
      options: [
        { id: 0, text: "El escudo de Atenea", isCorrect: false },
        { id: 1, text: "El cupido de Afrodita", isCorrect: false },
        { id: 2, text: "El pavo real de Hera", isCorrect: false },
        { id: 3, text: "Todas las anteriores", isCorrect: true },
      ],
    },
    {
      text: "¿En qué se inspiró la escultura romana?",
      options: [
        { id: 0, text: "En la escultura griega", isCorrect: false },
        { id: 1, text: "En la escultura etrusca", isCorrect: false },
        { id: 2, text: "En el mundo helenístico griego", isCorrect: false },
        { id: 3, text: "Todas las anteriores", isCorrect: true },
      ],
    },
    {
      text: "¿Cuáles fueron los materiales más utilizados en el retrato romano?",
      options: [
        { id: 0, text: "Bronce", isCorrect: false },
        { id: 1, text: "Mármol", isCorrect: false },
        { id: 2, text: "Oro", isCorrect: false },
        { id: 3, text: "A y B son correctas", isCorrect: true },
      ],
    },
  ];

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };


  return(
    <div>
      {/* Modal */}
      <Typography onClick={handleOpen} variant="subtitle2" color="inherit" sx={{ color: '#FFBD12', fontSize:'18px', display:'flex', width:'75%' }}>Evaluación</Typography>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="App">
            <h1>Evaluacion Arte</h1>

            <h2>Puntaje: {score}</h2>

            {showResults ? (
              <div>
                <h1>Resultado Final</h1>
                <h2>
                  {score} de {questions.length} correctas - (
                  {(score / questions.length) * 100}%)
                </h2>
                <button onClick={() => restartGame()} style={buttonStyle}>Volver a intentarlo</button>
              </div>
            ) : (
              /* 5. Question Card  */
              <div>
                {/* Current Question  */}
                <h2>
                  Pregunta: {currentQuestion + 1} de {questions.length}
                </h2>
                <h3 style={questionTextStyle}>{questions[currentQuestion].text}</h3>

                {/* List of possible answers  */}
                <ul>
                  {questions[currentQuestion].options.map((option) => {
                    return (
                      <li
                        key={option.id}
                        onClick={() => optionClicked(option.isCorrect)}
                        style={optionStyle}
                      >
                        {option.text}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
  
}