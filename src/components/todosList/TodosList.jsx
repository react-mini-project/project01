import React, { useEffect } from "react"
import styled from "styled-components"
import { FaTrashAlt } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { __deleteTodo, __getTodos } from "../../redux/modules/todosSlice"
import { useNavigate } from "react-router-dom"
import Loading from "../Feature/Loading"
const TodosList = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { isLoading, todos, error } = useSelector((state) => state.todos)

    const deleteTodoHandler = (todoID) => {
        console.log(todoID)
        dispatch(__deleteTodo(todoID))
    }


    useEffect(() => {

        dispatch(__getTodos())
    }, [dispatch])

    if (isLoading) {

        return <Loading />

    }

    if (error) {
        return <div>{error.message}</div>
    }

    return (
        <TodosListCtn>
            <HomeMenuName>
                Todo List
            </HomeMenuName>
            <TodosListBox>
                {(todos.length === 0) ? "TODO LIST가 비어있습니다." :
                    todos.slice(0).reverse().map((todo) => {
                        return (
                            <ListCtn key={todo.id}>
                                <ListCtn2 onClick={() => navigate(`/todos/${todo.id}`)}>
                                    <ListTitle>{todo.title}</ListTitle>
                                    <ListNickname>@{todo.nickname}</ListNickname>
                                </ListCtn2>
                                <FaTrashAlt
                                    onClick={() => deleteTodoHandler(todo.id)}
                                    size="24"
                                    color="tomato" />
                            </ListCtn>
                        )
                    })
                }
            </TodosListBox>
        </TodosListCtn>
    )


}

const TodosListCtn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    height: 100%;
    box-sizing: border-box;
`
const HomeMenuName = styled.h2`
    margin-top: 40px;
    font-size: 3rem;
    font-weight: 400;
    margin-bottom: 20px;
`
const TodosListBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-sizing: border-box;
`
const ListCtn = styled.div`
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
`
const ListCtn2 = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 5px;
    &:hover {
        cursor: pointer;
    }
`
const ListTitle = styled.h3`
    font-size: 20px;
    font-weight: 400;
`
const ListNickname = styled.p`
    font-size: 12px;
    color: gray;
`


export default TodosList