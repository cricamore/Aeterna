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
      text: "¿Cuál fue el periodo de tiempo en el que se considera que el latín tuvo sus primeras apariciones?",
      options: [
        { id: 0, text: "Siglo VI a. C.", isCorrect: false },
        { id: 1, text: "Siglo IV a. C.", isCorrect: true },
        { id: 2, text: "Siglo II a. C.", isCorrect: false },
        { id: 3, text: "Siglo I a. C.", isCorrect: false },
      ],
    },
    {
      text: "¿Qué factor contribuyó a la expansión del latín romano y a la existencia de pocas diferencias dialectales?",
      options: [
        { id: 0, text: "La dominación etrusca.", isCorrect: false },
        { id: 1, text: "La invasión de los galos.", isCorrect: false },
        { id: 2, text: "La influencia de los griegos.", isCorrect: true },
        { id: 3, text: "La extensión del imperio romano.", isCorrect: false },
      ],
    },
    {
      text: "¿Cuál de los siguientes dioses romanos era considerado el padre de los dioses y gobernante del cielo?",
      options: [
        { id: 0, text: "Júpiter", isCorrect: true },
        { id: 1, text: "Marte", isCorrect: false },
        { id: 2, text: "Venus", isCorrect: false },
        { id: 3, text: "Juno", isCorrect: false },
      ],
    },
    {
      text: "¿Cuál fue la influencia principal en la mitología romana y la adopción de dioses y mitos de otra cultura?",
      options: [
        { id: 0, text: "La mitología egipcia.", isCorrect: false },
        { id: 1, text: "La mitología celta.", isCorrect: false },
        { id: 2, text: "La mitología griega.", isCorrect: true },
        { id: 3, text: "La mitología nórdica.", isCorrect: false },
      ],
    },
    {
      text: "¿Cuál de las siguientes instituciones representaba los intereses de la plebe y promovía reformas sociales en la antigua Roma?",
      options: [
        { id: 0, text: "Senado", isCorrect: false },
        { id: 1, text: "Cónsules", isCorrect: false },
        { id: 2, text: "Tribunos de la plebe", isCorrect: true },
        { id: 3, text: "Emperador", isCorrect: false },
      ],
    },
    {
      text: "¿Qué tipo de gobierno se estableció en Roma después de la transformación hacia un sistema imperial?",
      options: [
        { id: 0, text: "Monarquía", isCorrect: false },
        { id: 1, text: "República", isCorrect: true },
        { id: 2, text: "Autocracia", isCorrect: false },
        { id: 3, text: "Teocracia", isCorrect: false },
      ],
    },
    {
      text: "¿Cuál fue el primer código de leyes romano que se considera como el inicio del derecho romano?",
      options: [
        { id: 0, text: "Ley de las Doce Tablas", isCorrect: true },
        { id: 1, text: "Código de Justiniano", isCorrect: false },
        { id: 2, text: "Edicto del pretor", isCorrect: false },
        { id: 3, text: "Ley de los plebeyos", isCorrect: false },
      ],
    },
    {
      text: "¿Cuál de las siguientes opciones describe mejor la distinción entre el Derecho público y el Derecho privado en el derecho romano?",
      options: [
        { id: 0, text: "El Derecho público regula los acuerdos y transacciones entre ciudadanos, mientras que el Derecho privado regula las acciones del Estado.", isCorrect: false },
        { id: 1, text: "El Derecho público regula las acciones del Estado, mientras que el Derecho privado regula los acuerdos y transacciones entre ciudadanos.", isCorrect: true },
        { id: 2, text: "El Derecho público regula las relaciones entre el Estado y la Iglesia, mientras que el Derecho privado regula las relaciones entre ciudadanos.", isCorrect: false },
        { id: 3, text: "El Derecho público regula las relaciones entre los ciudadanos, mientras que el Derecho privado regula las acciones del Estado.", isCorrect: false },
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
            <h1>Evaluacion Cultura</h1>

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