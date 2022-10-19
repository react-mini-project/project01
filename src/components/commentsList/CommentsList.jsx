import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import useInput from "../../hooks/useInput"
import { __addComment, __getComments } from "../../redux/modules/commentsSlice"
import Comment from "../comment/Comment"

const CommentsList = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const todoId = id
    
    const { comments } = useSelector((state) => state.comments)
    const thisComments = comments.filter((comment)=> {
        return +comment.todoId === +id
    })
    
    const [nickname, onChangeNicknameHandler, resetNickname] = useInput();
    const [comment, onChangeCommentHandler, resetComment] = useInput();

    const onSubmitAddComment = (e) => {
        e.preventDefault();
        dispatch(__addComment({todoId, nickname, comment}))
        resetNickname()
        resetComment()
    }

    
    useEffect(() => {
        dispatch(__getComments())
    }, [])

    return (
        <CommentsListCtn>
            <Footer>
                <FooterTitle>
                    댓글 보기
                </FooterTitle>
                <AddCommentForm onSubmit={onSubmitAddComment}>
                    <AddCommentNickname
                        type="text"
                        name="nickname"
                        value={nickname}
                        onChange={onChangeNicknameHandler}
                        placeholder="작성자의 이름을 입력해주세요. (5자 이내)"
                        maxLength="5"
                        required
                    />
                    <AddCommentContent
                        type="text"
                        name="comment"
                        value={comment}
                        onChange={onChangeCommentHandler}
                        placeholder="내용을 입력해주세요. (100자 이내)"
                        maxLength="100"
                        required
                    />
                    <AddCommentBtn>추가하기</AddCommentBtn>
                </AddCommentForm>
                <CommentsCtn>
                    {thisComments.slice(0).reverse().map((comment)=> (
                        <Comment
                            key={comment.id}
                            comment={comment}
                        />
                    ))}
                </CommentsCtn>

                
            </Footer>
        </CommentsListCtn>
    )
}
const CommentsListCtn = styled.div``
const Footer = styled.div`
    border-top: 1px solid #ddd;
    background-color: white;
    color: gray;
    width: 100%;
    font-size: 2em;
    height: 1.1em;
    /* height: 288px; */
    position: fixed;
    bottom: 0;
    left: 0;
    transition: all, 0.3s;
    box-sizing: border-box;
    box-shadow: 0 0 5px 1px rgba(0,0,0,0.2);
    &:hover {
        height: 288px;
    }
`
const FooterTitle = styled.div`
    padding: 5px 20px;
    font-size: 20px;
`
const AddCommentForm = styled.form`
    display: flex;
    gap: 10px;
    padding: 5px 20px;
    border-top: 1px solid #ddd;
    width: 100%;
    padding-top: 10px;
    color: #ddd;
`
const AddCommentNickname = styled.input`
    min-width: 100px;
    width: 30%;
    max-width: 300px;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 0 12px;
    height: 46px;
    font-size: 14px;
`
const AddCommentContent = styled.input`
    width: 70%;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 0 12px;
    height: 46px;
    font-size: 14px;
`
const AddCommentBtn = styled.button`
    background-color: transparent;
    border: 2px solid #1a73e8;
    color: #1a73e8;
    font-weight: 700;
    width: 100px;
    height: 46px;
    border-radius: 10px;
    padding: 10px;
    transition: all, 0.3s;
    &:hover {
        cursor: pointer;
        background-color: #1a73e8;
        color: white;
    }
`
const CommentsCtn = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px 20px;
    gap: 10px;
    height: 190px;
    overflow: auto;
`

export default CommentsList