import React from 'react';
import { Formulario, Label, GrupoInput, Input, Error, IconValidacion, ContainerTerms, ContainerButtonCenter, Button, MessageSuccess, MessageError } from './Elements/Formulario';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';


const App = () => {
    return ( 
        <>
          <main>
              <Formulario>
              
                <div>
                  <Label htmlFor="user">Usuario</Label>
                  <GrupoInput>
                    <Input type="text" placeholder="User" id="user" />
                    <IconValidacion icon={faCheckCircle} />
                  </GrupoInput>
                  <Error>lorere ererdrter</Error>
                </div>

                <ContainerTerms>
                  <Label>
                    <input type="checkbox" name="finished" id="finished" />
                    Acepto los Terminos y Condiciones
                  </Label>
                </ContainerTerms>

                { false && <MessageError>
                  <p>
                    <FontAwesomeIcon icon={faExclamationTriangle} />
                    <b>Error:</b> Por favor rellena el formulario correctamente.
                  </p>
                </MessageError> }

                <ContainerButtonCenter>
                  <Button type="submit">Enviar</Button>
                  <MessageSuccess>Formulario enviado exitosamente!</MessageSuccess>
                </ContainerButtonCenter>

              </Formulario>
          </main>  
        </>
     );
}

 
export default App;