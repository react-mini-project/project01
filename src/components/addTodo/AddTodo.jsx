import React from "react"
import styled from "styled-components"

const AddTodo = () => {

    return (
        <AddTodoCtn>
            <AddTodoCtnArea>
                <AddTodoBox>
                    <AddTodoTitle>작성자</AddTodoTitle>
                    <AddTodoInput
                        placeholder="작성자의 이름을 입력해주세요. (5자 이내)"
                        maxLength="5"
                        required
                    />
                </AddTodoBox>
                <AddTodoBox>
                    <AddTodoTitle>제목</AddTodoTitle>
                    <AddTodoInput
                        placeholder="제목을 입력해주세요. (50자 이내)"
                        maxLength="50"
                        required
                    />
                </AddTodoBox>
                <AddTodoBox>
                    <AddTodoTitle>내용</AddTodoTitle>
                    <AddTodoTextarea
                        placeholder="내용을 입력해주세요. (200자 이내)"
                        maxLength="200"
                        rows="10"
                        required
                    />
                </AddTodoBox>
            </AddTodoCtnArea>
            <AddTodoBtn>추가하기</AddTodoBtn>
        </AddTodoCtn>
    )
}

const AddTodoCtn = styled.form`
    margin: 20px auto 0 auto;
    max-width: 500px;
    height: calc(100vh - 60px);
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: space-between;
`
const AddTodoCtnArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-sizing: border-box;
    height: 100%;
`
const AddTodoBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
    box-sizing: border-box;
`
const AddTodoTitle = styled.h3`
    font-size: 24px;
    font-weight: 400;
`
const AddTodoInput = styled.input`
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 0 12px;
    height: 46px;
    font-size: 14px;
`
const AddTodoTextarea = styled.textarea`
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 12px;
    min-height: 120px;
    font-size: 14px;
`
const AddTodoBtn = styled.button`
    background-color: transparent;
    border: 2px solid #1a73e8;
    color: #1a73e8;
    font-weight: 700;
    border-radius: 10px;
    padding: 10px;
    transition: all, 0.3s;
    &:hover {
        cursor: pointer;
        background-color: #1a73e8;
        color: white;
    }
`

export default AddTodo