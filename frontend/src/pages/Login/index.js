import React, { useState } from 'react';
import api from '../../services/api'
import './styles.css';
import logo from '../../assets/logo.svg'

export default function Login({ history }) {
  const [username, setUsername] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    const res = await api.post('/devs', {
      username,
    })

    const { _id } = res.data

    // const data = new FormData()
    // data.append('username', username)
    
    // await api.post('devs', data)

    history.push(`/dev/${_id}`)
  }


  return (
      <div className="login-container">
          <form onSubmit={handleSubmit}>
            <img src={logo} alt="Tindev" />
            <input 
              placeholder="Digite seu usuário do Github"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <button type="Submit">Enviar</button>
          </form>
      </div>
  )
}