import { useState } from 'react'

import './MyForm.css'

const MyForm = ({user}) => {
    // 6 - controlled inputs

    // 3 - gerenciamento de dados
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')
    const [bio, setBio] = useState(user ? user.bio : '')
    const [role, setRole] = useState(user ? user.role : '')

    const handleName = (e) => {
        setName(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('enviando o form')
        console.log(name, email, bio, role)
        
        // 7 - limpar form
        setName('')
        setEmail('')
        setBio('')
        setRole('')
    }

    

  return (
    <div>
        {/* 1 - criação de form */}
        <form onSubmit={handleSubmit}>
        {/* 5 - Envio de form */}
            <div>
                <label htmlFor="name">Nome:</label>
                <input 
                type="text" 
                name='name' 
                placeholder='Digite seu nome' 
                onChange={handleName}
                value={name}
                />
            </div>

            {/* 2 - Label envolvendo input */}
            <label>
                <span>E-mail:</span>
                {/* 4 - Simplificação de  manipulação de state*/}
                <input 
                type="email" 
                name='email' 
                placeholder='Digite o seu email' 
                onChange={(e) => setEmail(e.target.value)}
                value={email} 
                />
            </label>

            {/* 8 - textarea */}
            <label>
                <span>Bio:</span>
            </label>
            <textarea 
            name="bio" 
            placeholder='Descrição do usuario' 
            onChange={(e) => setBio(e.target.value)} 
            value={bio}></textarea>

            {/* 9 - Select */}
            <label>
                <span>Função do sistema</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
            </label>

            <input 
            type="submit" 
            value='Enviar'/>
        </form>
    </div>
  )
}

export default MyForm