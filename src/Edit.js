import React, { useState } from 'react';
import './App.css';
import jsPDF from 'jspdf';
import Myform from './Myform';
import MyResult from './Result';
import Header from './Header';
import ButtonDowlond from './Button';


const Home = () => {
  const [inputs, setInputs] = useState({
    text: "",
  });

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };

  const extractTextFromHTML = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };

  const handleClick = () => {
    const { text } = inputs;
    const extractedText = extractTextFromHTML(text);

    // Création d'une instance de jsPDF
    const pdf = new jsPDF();
    
    // Ajout du texte extrait (sans balises HTML) au PDF
    pdf.text(extractedText, 10, 10); // Ajoute le texte aux coordonnées (10, 10)

    // Téléchargement du PDF
    pdf.save('texte.pdf'); // Nom du fichier PDF à télécharger
  };

  return (
    <div className='container-fluid mt-5'>
      <Header/>

      <div className='row'>
        <form className="col-md-8">
          <Myform name="text" value={inputs.text} onChange={handleChange}></Myform>
        </form>
        <form className="col-md-4">
          <MyResult name="text" value={extractTextFromHTML(inputs.text)}></MyResult>
        </form>
      </div>

      <ButtonDowlond className="btn btn-primary text-white fs-4" onClick={handleClick}>Download text</ButtonDowlond>
    </div>
  );
}







export default Home;
