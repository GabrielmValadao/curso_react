import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["Gabriel", "Milena" , "Silvana"])

    const [users, setUsers] = useState([
      {
        id: 1,
        name: "Gabriel",
        age: 26
      },
      {
        id: 2,
        name: "Milena",
        age: 25
      },
      {
        id: 3,
        name: "Silvana",
        age: 53
      }
    ])

    const deleteRandom = () => {
      const randomNumber = Math.floor(Math.random() * 4)

      setUsers((prevUsers) => {
        console.log(prevUsers)
        return prevUsers.filter((user) => randomNumber !== user.id)
      })
    }

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name} - {user.age}</li>
          ))}
        </ul>
        <button onClick={deleteRandom}>Delete usuário aleatório</button>
    </div>
  )
}

export default ListRender