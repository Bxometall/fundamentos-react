import React from 'react'

import alunos from '../../data/alunos'

export default _ => {

  const printAlunos = alunos.map((aluno, i) => {
    return (
      <li key={aluno.id}>
        {aluno.id}) {aluno.nome}: {aluno.nota}
      </li>
    )
  })

  return (
    <ul style={{
      listStyle: 'none'
    }}>
      { printAlunos }
    </ul>
  )
}