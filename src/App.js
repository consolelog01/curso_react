import './App.css';
import { useState } from "react";
import html2canvas from "html2canvas";

function App() {

  const [liena1, setLinea1] = useState('');
  const [liena2, setLinea2] = useState('');
  const [imagen, setImage] = useState('');
  
  function onChangeLiena1(evt) {
    let textoLinea1 = evt.target.value.trim();
    setLinea1(textoLinea1);
  }

  function onChangeLiena2(evt) {
    let textoLinea2 = evt.target.value.trim();
    setLinea2(textoLinea2);
  }

  function onChangeImage(evt) {
    let imagen = evt.target.value.trim();
    setImage(imagen);
  }

  function generarImagen() {

    html2canvas(document.querySelector("#contenedorMeme")).then( (canvas, filename = "meme", calidad = 0.1) => {

      var imagenMeme = canvas.toDataURL('image/png', calidad);
      var a = document.createElement('a');
      a.href = imagenMeme;
      a.download = filename;
      document.body.appendChild(a);
      a.click();

    });

  }

  return (
    <div className="App">

        <select 
        name="imagenMeme" 
        id="imagenMeme"
        onChange={onChangeImage}>
          <option value="0">---Seleccione---</option>
          <option value="fire">Casa en llamas</option>
          <option value="futurama">Futurama</option>
          <option value="history">History Channel</option>
          <option value="matrix">Matrix</option>
          <option value="philosoraptor">Philosoraptor</option>
          <option value="smart">Smart Guy</option>
        </select>

        <br/>
        
        <input 
        type="text" 
        name='textoLinea1'
        placeholder='Texto 1'
        onChange={onChangeLiena1}/>
        
        <br/>

        <input 
        type="text" 
        name='textoLinea2'
        placeholder='Texto 2'
        onChange={onChangeLiena2}/>

        <br/>

        <div className="contenedorMeme" id='contenedorMeme'>
          <div className="linea1 colorTextoMeme">{liena1}</div>
          <img src={"img/"+imagen+".jpg"} alt="Imagen meme"/>
          <div className="linea2 colorTextoMeme">{liena2}</div>
        </div>

        <button 
        type="button" 
        onClick={generarImagen}
        className='btnExportarMeme'>Exportar meme</button>
        
    </div>
  );

}

export default App;
