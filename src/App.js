import { useState, useEffect } from 'react';

import { Formulario } from './components/Formulario';
import { Listado } from './components/Listado';
import { Pregunta } from './components/Pregunta';
import { ControlPresupuesto } from './components/ControlPresupuesto';

function App() {
   const [presupuesto, guardarPresupuesto] = useState(0);
   const [restante, guardarRestante] = useState(0);
   const [mostrarPregunta, actualizarPregunta] = useState(true);
   const [gastos, guardarGastos] = useState([]);
   const [gasto, guardarGasto] = useState({});
   const [crearGasto, guardarCrearGasto] = useState(false);

   //    useEffect que actualiza el restante
   useEffect(() => {
      if (crearGasto) {
         //   agrega al nuevo presupuesto
         guardarGastos([...gastos, gasto]);

         //  Resta el presupuesto actual
         const presupuestoRestante = restante - gasto.cantidad;
         guardarRestante(presupuestoRestante);

         //   Resetear a false
         guardarCrearGasto(false);
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [gasto]);

   return (
      <div className='container'>
         <header>
            <h1>Gasto Semanal</h1>

            <div className='contenido-principal contenido'>
               {mostrarPregunta ? (
                  <Pregunta
                     //
                     guardarPresupuesto={guardarPresupuesto}
                     guardarRestante={guardarRestante}
                     actualizarPregunta={actualizarPregunta}
                  />
               ) : (
                  <div className='row'>
                     <div className='one-half column'>
                        <Formulario
                           //
                           guardarGasto={guardarGasto}
                           guardarCrearGasto={guardarCrearGasto}
                        />
                     </div>
                     <div className='one-half column'>
                        <Listado gastos={gastos} />

                        <ControlPresupuesto
                           //
                           presupuesto={presupuesto}
                           restante={restante}
                        />
                     </div>
                  </div>
               )}
            </div>
         </header>
      </div>
   );
}

export default App;
