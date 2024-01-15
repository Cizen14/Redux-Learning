import { useSelector } from "react-redux";

const Todos =()=>{
    const myTodos= useSelector(state => state.todos);
    return(
        <>
       { myTodos.map((todo=>
            <li key={todo.name}> {todo.name}</li>
        ))}
        </>
    )
}
export default Todos;