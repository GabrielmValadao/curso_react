// desafio da seção

const UserDetails = ({name, age, profession}) => {
  return (
    <div>
        <h2>{name}</h2>
        <p>Idade: {age}</p>
        <p>Profissão: {profession}</p>
        {age >= 18 ? (
            <p>Pode tirar carteira de motorista</p>
        ) : (
            <p>Menor de idade, espere chegar até 18 anos</p>
        )}
    </div>
  )
}

export default UserDetails