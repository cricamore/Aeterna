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

  const questions = [
    {
      text: "¿Cuál era la función principal de las torres medievales en la ciudad de Roma?",
      options: [
        { id: 0, text: "Defender los feudos", isCorrect: true },
        { id: 1, text: "Albergar a la nobleza romana", isCorrect: false },
        { id: 2, text: "Señalizar peligros", isCorrect: false },
        { id: 3, text: "Celebrar ceremonias religiosas", isCorrect: false },
      ],
    },
    {
      text: "¿Cuáles fueron los materiales utilizados en la construcción del Coliseo Romano?",
      options: [
        { id: 0, text: "Bloques de travertino, hormigón y madera", isCorrect: true },
        { id: 1, text: "Ladrillo, piedra y estuco", isCorrect: false },
        { id: 2, text: "Mármol y hormigón", isCorrect: false },
        { id: 3, text: "Madera, ladrillo y estuco", isCorrect: false },
      ],
    },
    {
      text: "¿Qué tipo de eventos tenían lugar en el Coliseo Romano?",
      options: [
        { id: 0, text: "Ceremonias religiosas públicas", isCorrect: false },
        { id: 1, text: "Luchas de gladiadores y espectáculos públicos", isCorrect: true },
        { id: 2, text: "Procesiones y sacrificios de animales", isCorrect: false },
        { id: 3, text: "Exhibiciones de arte y música", isCorrect: false },
      ],
    },
    {
      text: "¿Cuál era la función principal de la sala principal (cella) en un templo romano?",
      options: [
        { id: 0, text: "Albergar la imagen de culto de una deidad", isCorrect: true },
        { id: 1, text: "Celebrar ceremonias religiosas al aire libre", isCorrect: false },
        { id: 2, text: "Almacenar equipos y ofrendas para el templo", isCorrect: false },
        { id: 3, text: "Realizar sacrificios de animales en el altar", isCorrect: false },
      ],
    },
    {
      text: "¿Dónde tenían lugar las ceremonias religiosas públicas en la antigua Roma?",
      options: [
        { id: 0, text: "En el edificio del templo", isCorrect: false },
        { id: 1, text: "Dentro de la cella del templo", isCorrect: false },
        { id: 2, text: "Al aire libre, no dentro del templo", isCorrect: true },
        { id: 3, text: "En un santuario aparte del templo", isCorrect: false },
      ],
    },
    {
      text: "¿Cómo evolucionaron las viviendas romanas a lo largo del tiempo?",
      options: [
        { id: 0, text: "De una cabaña redonda a una domus romana", isCorrect: true },
        { id: 1, text: "De una casa de madera a una casa de piedra", isCorrect: false },
        { id: 2, text: "De una casa unifamiliar a un complejo de apartamentos", isCorrect: false },
        { id: 3, text: "De una casa simple a una casa con chimenea", isCorrect: false },
      ],
    },
    {
      text: "¿Qué factor reflejaba la clase social del propietario en las viviendas romanas?",
      options: [
        { id: 0, text: "El tamaño de la vivienda", isCorrect: false },
        { id: 1, text: "La ubicación de la vivienda", isCorrect: false },
        { id: 2, text: "Los materiales utilizados en la vivienda", isCorrect: true },
        { id: 3, text: "El número de habitaciones en la vivienda", isCorrect: false },
      ],
    },
    {
      text: "¿Cómo se calentaban las viviendas romanas sin chimenea?",
      options: [
        { id: 0, text: "Con hornos fijos de leña construidos bajo la casa", isCorrect: true },
        { id: 1, text: "Utilizando sistemas de calefacción central", isCorrect: false },
        { id: 2, text: "Quemando carbón en el interior de la casa", isCorrect: false },
        { id: 3, text: "Recurriendo a estufas de gas portátiles", isCorrect: false },
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
      <Typography onClick={handleOpen} variant="subtitle2" color="inherit" sx={{ color: '#FFBD12', fontSize:'18px', display:'flex', width:'75%' }}>Evaluación</Typography>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="App">
            <h1>Evaluacion Arquitectura</h1>

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