import React, { useState } from "react";

const ToDo = () => {

    const [inputValue, setInputValue] = useState("")
    const [tasksList, setTasksList] = useState([])

    const handleInput = e => {
        e.preventDefault();
        setInputValue(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        setTasksList([...tasksList, inputValue])
    }

    const deleteTask = (e) => {
        const name = e.target.parentNode.getAttribute("name")
        console.log(name)
        console.log(tasksList.filter(item => item !== name))
        setTasksList(tasksList.filter(item => item !== name))
    }

    //console.log(tasksList)
    return (

        <div className="container mx-auto">
            <h1>ToDo's</h1>
            <ul className="list-group">
                <input value={inputValue} onChange={handleInput} onKeyDown={(e) => { e.key === "Enter" ? handleSubmit(e) : "" }} type="text" className="form-control" id="task" aria-describedby="task" />
                {tasksList.map((task, index) => {
                    return (
                        <li className="list-group-item" key={index} name={task}>
                            {task}
                            <button onClick={deleteTask} type="button" className="btn-close float-end" aria-label="Close"></button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ToDo;