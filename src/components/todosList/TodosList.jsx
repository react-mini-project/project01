import React from "react"
import styled from "styled-components"
import { FaTrashAlt } from "react-icons/fa"
const TodosList = () => {

    return (
        <TodosListCtn>
            <HomeMenuName>
                Todo List
            </HomeMenuName>
            <TodosListBox>
                <ListCtn>
                    <ListCtn2>
                        <ListTitle>{"가장 최신 게시글이 위로 올라갑니다."}</ListTitle>
                        <ListNickname>@{"홍길동"}</ListNickname>
                    </ListCtn2>
                    <FaTrashAlt size="24" color="tomato" />
                </ListCtn>
                <ListCtn>
                    <ListCtn2>
                        <ListTitle>{"id: 1 글이라고 가정합니다."}</ListTitle>
                        <ListNickname>@{"todos"}</ListNickname>
                    </ListCtn2>
                    <FaTrashAlt size="24" color="tomato" />
                </ListCtn>
            </TodosListBox>
        </TodosListCtn>
    )
}

const TodosListCtn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
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
    justify-content: space-between;
    align-items: center;
`
const ListCtn2 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
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