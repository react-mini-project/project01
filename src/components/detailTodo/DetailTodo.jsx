import React from "react"
import styled from "styled-components"

const DetailTodo = () => {

    return (
        <DetailTodoCtn>
            <DetailHeader>
                <DetailTodoID>ID: {"2"}</DetailTodoID>
                <BackBtn>이전으로</BackBtn>
            </DetailHeader>
        </DetailTodoCtn>
    )
}

const DetailTodoCtn = styled.div`
    margin: 20px auto 0 auto;
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: space-between;
`
const DetailHeader = styled.div`
    font-size: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const DetailTodoID = styled.p`
    
`
const BackBtn = styled.button`
    border: 2px solid #ddd;
    border-radius: 10px;
    padding: 5px 12px;
`


export default DetailTodo