import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { __getTodo, __patchTodo } from "../../redux/modules/todoSlice"
import { __getTodos } from "../../redux/modules/todosSlice"

const DetailTodo = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { todos } = useSelector((state) => state.todos)

    const [editContent, setEditContent] = useState()
    const onChangeContent = (e) => {
        setEditContent(e.target.value)
    }

    const [isTodoEdit, setIsTodoEdit] = useState(false)

    const { id } = useParams()


    const NextHandler = (todo) => {
        const CurIndex = todos.indexOf(todo)
        if (CurIndex == todos.length - 1) {
            alert("마지막 게시글입니다.")
        } else {
            const NextId = todos[CurIndex + 1].id
            navigate(`/todos/${NextId}`)
        }
    }


    const PrevHandler = (todo) => {
        const CurIndex = todos.indexOf(todo)
        if (CurIndex == 0) {
            alert("첫 게시글입니다.")
        } else {
            const NextId = todos[CurIndex - 1].id
            navigate(`/todos/${NextId}`)
        }
    }


    const onEditTodoHandler = (id, content, todo) => {
        (isTodoEdit) ? dispatch(__patchTodo({ id, content })) : setEditContent(todo.content)
        setIsTodoEdit(!isTodoEdit)
    }

    useEffect(() => {
        dispatch(__getTodos())
    }, [])



    return (
        <>
            {
                todos.map((todo) => {
                    if (todo.id == id)
                        return (
                            <DetailTodoCtn key={id}>
                                <DetailTop>
                                    <DetailHeader>
                                        <DetailTodoID>ID: {id}</DetailTodoID>
                                        <BackBtn onClick={() => navigate("/todos")}>이전으로</BackBtn>
                                    </DetailHeader>
                                    <DetailBody>
                                        <DetailBody2>
                                            <DetailNickname>@{todo.nickname}</DetailNickname>
                                            <DetailTitle>{todo.title}</DetailTitle>
                                        </DetailBody2>
                                        {isTodoEdit ? (
                                            <DetailContentEdit
                                                value={editContent}
                                                onChange={onChangeContent}
                                                rows="4"
                                            />
                                        ) : (
                                            <DetailContent>
                                                {todo.content}
                                            </DetailContent>
                                        )}
                                    </DetailBody>
                                </DetailTop>
                                <DetailTodoEdit
                                    onClick={() => onEditTodoHandler(id, editContent, todo)}
                                >
                                    {isTodoEdit ? "저장하기" : "수정하기"}
                                </DetailTodoEdit>

                                <DetailTodoEdit onClick={() => { NextHandler(todo) }} >다음 게시글</DetailTodoEdit>
                                <DetailTodoEdit onClick={() => { PrevHandler(todo) }} >이전 게시글</DetailTodoEdit>
                            </DetailTodoCtn>
                        )
                })
            }</>

    )
}

const DetailTodoCtn = styled.div`
    margin: 20px auto 0 auto;
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    height: calc(100vh - 90px);
    justify-content: space-between;
`
const DetailTop = styled.div`
    display: flex;
    gap: 20px;
    flex-direction: column;
`
const DetailHeader = styled.div`
    font-size: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const DetailTodoID = styled.p`
    color: gray;
`
const BackBtn = styled.button`
    border: 2px solid #ddd;
    border-radius: 10px;
    padding: 5px 12px;
`
const DetailBody = styled.div`
    border-top: 2px solid #ddd;
    padding: 40px 0;
    display: flex;
    gap: 20px;
    flex-direction: column;
`
const DetailBody2 = styled.div`
    display: flex;
    gap: 20px;
    flex-direction: column;
`
const DetailNickname = styled.h3``
const DetailTitle = styled.h1``
const DetailContent = styled.p`
    min-height: 100px;
    font-size: 20px;
    line-height: 1.5;
`
const DetailContentEdit = styled.textarea`
    font-size: 20px;
    line-height: 1.5;
    border-radius: 5px;
    border: 1px solid #ddd;
    padding: 5px 10px;
`
const DetailTodoEdit = styled.button`
    
    min-width: 200px;
    max-width: 300px;
    padding: 6px 12px;
    font-weight: 700;
    background-color: white;
    border: 2px solid #1a73e8;
    border-radius: 10px;
    transition: all, 0.3s;
    &:hover {
        cursor: pointer;
        background-color: #1a73e8;
        color: white;
    }
`


// 댓글 영역

export default DetailTodo