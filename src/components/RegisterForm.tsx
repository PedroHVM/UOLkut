
 import "./RegisterForm.css"
 import { useNavigate } from 'react-router-dom';
 
 export const RegisterForm = () => {

    const navigate = useNavigate();

   return (
     <>
    
     <div className="Form_container">
     

     <form>
    <img src="https://www.figma.com/file/Yb9IBH56g7T1hdIyZ3BMNO/Desafios---Codel%C3%A2ndia?type=design&node-id=171980-3543&mode=dev" alt="" />
     <h2>Acesse o Orkut</h2>
         <label>
             
             <input type="text" placeholder="Nome" />
         </label>
         <label>
           
             <input type="email" placeholder="E-mail" />
         </label>
         <label>
             
             <input type="text" placeholder="Nascimento"/>
         </label>
         <label>
             
             <input type="text"  placeholder="Cidade"/>
         </label>
         <label>
             
             <input type="text"  placeholder="Estado"/>
         </label>
         <label>
            
             <input type="password" placeholder="Senha"  />
         </label>
         <label>
            
             <input type="password"  placeholder="Confirme sua senha"/>
         </label>
         <input type="submit" value="Cadastrar" id="submitButton" onClick={() => navigate("/registertwo")} />
         </form>
         </div>
     
    
     </>
   )
 }

 export default RegisterForm