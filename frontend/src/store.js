import { createStore } from 'redux';

// Definir el estado inicial
const initialState = {
  email: '',
};

// Definir el reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

// Crear el store
const store = createStore(reducer);

// Obtener el estado actual del store
const currentState = store.getState();

// Verificar si hay un email guardado
if (currentState.email !== '') {
  console.log('Se ha guardado un email:', currentState.email);
} else {
  console.log('No se ha guardado ningún email.');
}

export default store;
