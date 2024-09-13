import './MyForm.css'

const MyForm = () => {
  return (
    <div>
        {/* 1 - criação de form */}
        <form>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name='name' placeholder='Digite seu nome' />
            </div>

            {/* 2 - Label envolvendo input */}
            <label>
                <span>E-mail:</span>
                <input type="email" name='email' placeholder='Digite o seu email' />
            </label>
            <input type="submit" value='Enviar'/>
        </form>
    </div>
  )
}

export default MyForm