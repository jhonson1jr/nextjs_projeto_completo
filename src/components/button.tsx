'use client'

import { useState } from "react"

export function Button() {
  const [conteudo, setConteudo] = useState('Conteudo Original')

  function alterarLabel(){
    setConteudo('Conteudo Alterado')
  }

  return (
    <div>
      <button onClick={alterarLabel} className="btn btn-primary">Alterar Conteudo</button><br />
      <h4>Texto: {conteudo}</h4>
    </div>
  )
}