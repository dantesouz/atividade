import imagem from '../img/img2.jpg'
import imagem1 from '../img/img3.jpg'
import imagem2 from '../img/img4.jpg'
function Sobre() {
    return (
        <div>
            <h1>Hail, Hail young fellows!!!! </h1>
            <h1>Heavy Metal Sunshine LTDA.</h1>
            <br></br>
            <h2>A nossa empresa deseja levar a todos uma boa experiência,</h2>
            <h2>Com viagens, shows e tudo o mais que pudermos oferecer. </h2>
            <h2>Então venham nos visitar!!!!</h2>

            <div>
                <img className="img-center" src={imagem} alt="img" ></img>
                <img className="img-center"src={imagem1} alt="img3.jpg"></img>
                <img className="img-center"src={imagem2} alt="img4.jpg"></img>
            </div>






        </div>




    )
}





export default Sobre;