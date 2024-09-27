import React, { useState } from "react";

function Requisicao() {
  const [codigo, setCodigo] = useState(""); // Estado para armazenar o código

  function handleSubmit(e) {
    e.preventDefault();
    const codigoValue = window.document.getElementById("codigo").value;
    setCodigo(codigoValue); // Atualiza o estado
    console.log(codigoValue); // Mostra o valor no console
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Seu código:
          <input type="text" id="codigo" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      
      {codigo && ( // Mostra a imagem se o código for inserido
        <img
          src={`https://api.qrserver.com/v1/create-qr-code/?data=https://publicidadelegaldp.com.br/${codigo}&size=100x100`}
          alt="QR Code"
          title="QR Code"
        />
      )}
    </div>
  );
}

export default Requisicao;
