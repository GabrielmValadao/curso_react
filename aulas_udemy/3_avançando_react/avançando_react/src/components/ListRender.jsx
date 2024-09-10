import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["Gabriel", "Milena" , "Silvana"])

    const [users] = useState([
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
    </div>
  )
}

export default ListRender