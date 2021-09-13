import React from 'react';

import { Gasto } from './Gasto';

export const Listado = ({ gastos }) => {
   return (
      <div className='gastos-realizados'>
         {gastos.map((gasto) => (
            <Gasto key={gasto.id} gasto={gasto} />
         ))}
      </div>
   );
};
