import React, { useEffect, useState } from "react";

const TodoList = () => {
    // const [valor,setActualizador] = useState(iniciar es estado)
    const [tarea, setTarea] = useState("");
    const [lista, setLista] = useState([]);
    
    const handlechange = (event) => {
        setTarea(event.target.value);
        
    };

    const eliminarTarea = (indexEliminar) => {
        setLista (
            lista.filter((_,index)=>index != indexEliminar)
        )

    }
    
    // useEffect(() => {
    //     console.log(tarea);
    // }, [tarea]);

    function enviarLista (event) {
        event.preventDefault();  
        setLista([...lista, tarea]);
        setTarea("")
    }

    useEffect(() => {
        console.log(lista);
    }, [lista]); 


    return (
        <>
            <h1>Esta es mi lista </h1>
            
            <form onSubmit={enviarLista}> 
                <input 
                    type="text" 
                    placeholder="ingresa tu lista"
                    value={tarea}
                    onChange={handlechange}

                />
            </form>
            
            
                <ul>
                    
                    {
                    lista.map((cadaTarea,index)=>{
                        return(
                            <li key={index}>{cadaTarea}

                            <button onClick={()=>eliminarTarea(index)}>
                                X

                            </button>

                            </li>
                        )
                    })
                    }
                    

                </ul>


            
        </>
    );
};

export default TodoList;