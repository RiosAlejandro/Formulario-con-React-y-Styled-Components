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
    const [terminos, setTerminos] = useState(false);
    const [formValid, setFormValid] = useState(null);

    const expresiones = {
      usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
      nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
      password: /^.{4,12}$/, // 4 a 12 digitos.
      correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      telefono: /^\d{7,14}$/ // 7 a 14 numeros.
    };

    const validarPassword2 = () => {
      if(password.campo.length > 0){
        if(password.campo !== password2.campo){
          setPassword2((prevState)=>{
              return{...prevState, valido: 'false'}
          });
        }else{
          setPassword2((prevState)=>{
            return{...prevState, valido: 'true'}
        });
        }
      }
    };

    const onChangeTerminos = (e) =>{
        setTerminos(e.target.checked);
    }

    const onSubmit = (e) =>{
      e.preventDefault();

      if(user.valido === 'true' && name.valido === 'true' && password.valido === 'true' && password2.valido === 'true' && correo.valido === 'true' && phone.valido === 'true' && terminos){
        setFormValid(true);
        setUser({campo:'', valido: null});
        setName({campo:'', valido: null});
        setPassword({campo:'', valido: null});
        setPassword2({campo:'', valido: null});
        setCorreo({campo:'', valido: null});
        setPhone({campo:'', valido: null});
        setTerminos(false);
      }else{
        setFormValid(false);
      }
    }

    return ( 
        <>
          <main>
              <Formulario action="" onSubmit={onSubmit}>

                <ComponentInput 
                  state={user}
                  changeState={setUser}
                  type="text"
                  label="Usuario"
                  placeholder="User"
                  name="user"
                  leyendaError="El usuario tiene que tener de 4 a 16 dígitos y solo puede contener números, letras y guion bajo."
                  exprecionRegular= {expresiones.usuario}
                />

                <ComponentInput 
                  state={name}
                  changeState={setName}
                  type="text"
                  label="Nombre"
                  placeholder="Name"
                  name="name"
                  leyendaError="El nombre solo puede contener letras y espacios."
                  exprecionRegular= {expresiones.nombre}
                />

                <ComponentInput 
                  state={password}
                  changeState={setPassword}
                  type="password"
                  label="Contraseña"
                  name="password"
                  leyendaError="La contraseña tiene que ser de 4 a 12 dígitos."
                  exprecionRegular= {expresiones.password}
                />

                <ComponentInput 
                  state={password2}
                  changeState={setPassword2}
                  type="password"
                  label="Repetir contraseña"
                  name="password2"
                  leyendaError="Ambas contraseñas deben ser iguales."
                  funcion={validarPassword2}
                />

                <ComponentInput 
                  state={correo}
                  changeState={setCorreo}
                  type="email"
                  label="Correo"
                  placeholder="Email"
                  name="email"
                  leyendaError="El correo puede contener letras, números, puntos, guiones y guion bajo."
                  exprecionRegular= {expresiones.correo}
                />

                <ComponentInput 
                  state={phone}
                  changeState={setPhone}
                  type="text"
                  label="Celular"
                  placeholder="Phone"
                  name="phone"
                  leyendaError="El teléfono solo puede contener números y el máximo son 14 dígitos."
                  exprecionRegular= {expresiones.telefono}
                />

                <ContainerTerms>
                  <Label>
                    <input type="checkbox" name="finished" id="finished" checked={terminos} onChange={onChangeTerminos}/>
                    Acepto los Términos y Condiciones
                  </Label>
                </ContainerTerms>

                { formValid=== false && <MessageError>
                  <p>
                    <FontAwesomeIcon icon={faExclamationTriangle} />
                    <b>Error:</b> Por favor rellena el formulario correctamente.
                  </p>
                </MessageError> }

                <ContainerButtonCenter>
                  <Button type="submit">Enviar</Button>
                  {formValid === true && <MessageSuccess>Formulario enviado exitosamente!</MessageSuccess>}
                </ContainerButtonCenter>

              </Formulario>
          </main>  
        </>
     );
}

 
export default App;