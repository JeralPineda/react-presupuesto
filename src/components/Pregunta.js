import React, { useState } from 'react';

export const Pregunta = () => {
   // definir el state
   const [cantidad, guardarCantidad] = useState(0);

   // funcion que lee el presupuesto
   const definirPresupuesto = (e) => {
      guardarCantidad(parseInt(e.target.value, 10));
   };

   //    Submit para definir el presupuesto
   const agregarPresupuesto = (e) => {
      e.preventDefault();

      // validar

      // si se pasa la validacion
   };

   return (
      <>
         <h2>Coloca tu presupuesto</h2>

         <form onSubmit={agregarPresupuesto}>
            <input
               //
               type='number'
               className='u-full-width'
               placeholder='Coloca tu presupuesto'
               onChange={definirPresupuesto}
            />

            <input
               //
               type='submit'
               className='button-primary u-full-width'
               value='Definir Presupuesto'
            />
         </form>
      </>
   );
};
