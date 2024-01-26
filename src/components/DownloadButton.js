import React from 'react';
import pdfCurriculo from '../assets/pdf/Curriculo.pdf';
import styles from '../assets/styles/Projects.module.css';

const DownloadButton = () => {
  const handleDownload = async () => {
    const pdfUrl = pdfCurriculo;

    try {
        const response = await fetch(pdfUrl);
        const blob = await response.blob();
  
        const url = window.URL.createObjectURL(blob);
  
        // Cria um elemento <a> invisível
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Curriculo_Gabriel_Moraes.pdf'; // Nome do arquivo que será baixado
  
        // Adiciona o elemento à página e simula um clique para iniciar o download
        document.body.appendChild(link);
        link.click();
  
        // Remove o elemento após o download
        document.body.removeChild(link);
  
        // Revoga o URL do objeto para liberar memória
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error('Erro ao baixar o PDF:', error);
      }
    };
  
    return (
      <button className={styles.buttonPDF} onClick={handleDownload}>
        Baixe meu Currículo
      </button>
    );
  };
  
  export default DownloadButton;
