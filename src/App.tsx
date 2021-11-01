import "./App.css";
import Input from "./components/Input";
import Card from "./components/Card";
import { User } from "./interfaces/user.interface";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState<User[]>([] as User[]);
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [hobby, setHobby] = useState<string>("");

  const inputObject = [
    { placeholder: "Nome", label: "Nome", function: setName },
    { placeholder: "Idade", label: "Idade", function: setAge },
    { placeholder: "Hobby", label: "Hobby", function: setHobby },
  ];

  const handleClick = () => {
    const person = { name, age, hobby };

    setUsers([...users, person]);
  };

  return (
    <div className="App">
      <header className="App-header">
        {inputObject.map((object) => (
          <Input
            key={object.label}
            placeholder={object.placeholder}
            label={object.label}
            onChange={(e) => object.function(e.target.value)}
          />
        ))}
        <button onClick={handleClick}>Gerar</button>
        {users.map((user, index) => {
          const { name, age, hobby } = user;
          return <Card key={index} name={name} age={age} hobby={hobby} />;
        })}
      </header>
    </div>
  );
}

export default App;
