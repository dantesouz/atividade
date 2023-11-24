import ItemFormulario from "./ItemFormulario";

function Contato(){
    return(
        <div>
           <ItemFormulario nome="Nome" label="nome" type="text" ph="Nome" />
           <ItemFormulario nome="email" label="email" type="text"   ph="E-mail" />
           <ItemFormulario nome="assunto" label="assunto" type="text"   ph="Assunto" />
           <ItemFormulario nome="mensagem" label="mensagem" type="text"   ph="Mensagem" />


           <button type="submit">Enviar</button>
        </div>
    )
}


       
   

export default Contato