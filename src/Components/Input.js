import React from 'react';
import { Label, GrupoInput, Error, IconValidacion, Input } from './Elements/Formulario';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const ComponentInput = ({label, placeholder, type, name, leyendaError, exprecionRegular, state, changeState}) => {
   
    const onchange = (e) =>{
        changeState({ ...state, campo: e.target.value});
    };

    const validation = () =>{
        if(exprecionRegular){
            if(exprecionRegular.test(state.campo)){
                changeState({ ...state, valido:'true' });
            }else{
                changeState({ ...state, valido:'false' });
            }
        }
    };
   
    return ( 
        <div>
            <Label htmlFor={name} valido={state.valido}>{label}</Label>
            <GrupoInput>
                <Input type={type} placeholder={placeholder} id={name} value={state.campo} onChange={onchange} onKeyUp={validation} onBlur={validation} valido={state.valido} />
                <IconValidacion icon={state.valido === 'true' ? faCheckCircle : faTimesCircle}  valido={state.valido}/>
            </GrupoInput>
            <Error valido={state.valido}>{leyendaError}</Error>
        </div>
     );
}
 
export default ComponentInput;