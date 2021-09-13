import React from 'react';

export const ControlPresupuesto = ({ presupuesto, restante }) => {
   return (
      <>
         <div class='alert alert-primary'>Presupuesto: ${presupuesto}</div>
         <div class='alert '>Restante: ${restante}</div>
      </>
   );
};
