// import style
import styles from './Register.module.css'

import {useState, useEffect} from 'react'

const Register = () => {
  return (
    <div className={styles.register}>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias!</p>
      <form>
        <label>
          <span>Nome</span>
          <input type="text" name='name' required placeholder='Nome do Usuário' />
        </label>
        
        <label>
          <span>E-mail</span>
          <input 
          type="email" 
          name='email' 
          required 
          placeholder='E-mail do Usuário' />
        </label>
        
        <label>
          <span>Senha</span>
          <input 
          type="password" 
          name='password' 
          required 
          placeholder='Informe sua Senha' />
        </label>

        <label>
          <span>Confirmação de senha</span>
          <input 
          type="password" 
          name='confirmPassword' 
          required 
          placeholder='Confirme sua Senha' />
        </label>
        <button className='btn'type='submit'>Cadastrar</button>
      </form>
    </div>
  )
}

export default Register