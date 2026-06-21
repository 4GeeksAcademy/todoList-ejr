import React, { useEffect, useState } from "react";

const TodoList = () => {
    // const [valor,setActualizador] = useState(iniciar es estado)
    const [tarea, setTarea] = useState("");
    const [lista, setLista] = useState([]);
    
    const handlechange = (event) => {
        setTarea(event.target.value);
        console.log(tarea);
    };

    useEffect(() => {
        console.log(tarea);
    }, [tarea]);

    return (
        <>
            <h1>esta es mi lista </h1>
            <form>
                <input 
                    type="text" 
                    placeholder="ingresa tu lista"
                    value={tarea}
                    onChange={handlechange}
                />
            </form>
            
            <ul>
                <li>hacer la tarea</li>
                <li>estudiar</li>
                <li>ir al trabajo</li>
            </ul>
        </>
    );
};

export default TodoList;