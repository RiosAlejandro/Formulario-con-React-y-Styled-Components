import React, { useState } from 'react';
import { Formulario, Label, ContainerTerms, ContainerButtonCenter, Button, MessageSuccess, MessageError } from './Elements/Formulario';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import ComponentInput from './Components/Input';


const App = () => {

    const [user, setUser] = useState({campo:'', valido: null});
    const [name, setName] = useState({campo:'', valido: null});
    const [password, setPassword] = useState({campo:'', valido: null});
    const [password2, setPassword2] = useState({campo:'', valido: null});
    const [correo, setCorreo] = useState({campo:'', valido: null});
    const [phone, setPhone] = useState({campo:'', valido: null});

    const expresiones = {
      usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
      nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
      password: /^.{4,12}$/, // 4 a 12 digitos.
      correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      telefono: /^\d{7,14}$/ // 7 a 14 numeros.
    }

    return ( 
        <>
          <main>
              <Formulario>

                <ComponentInput 
                  state={user}
                  changeState={setUser}
                  type="text"
                  label="Usuario"
                  placeholder="User"
                  name="user"
                  leyendaError="El usuario tiene que tener de 4 a 16 digitos"
                  exprecionRegular= {expresiones.usuario}
                />

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