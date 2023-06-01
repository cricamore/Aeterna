import React, { createContext, useState } from 'react';

export const LeccionContext = createContext();

export function LeccionProvider({ children }) {
  const [leccion2Completada, setLeccion2Completada] = useState(false);

  return (
    <LeccionContext.Provider value={{ leccion2Completada, setLeccion2Completada }}>
      {children}
    </LeccionContext.Provider>
  );
}
