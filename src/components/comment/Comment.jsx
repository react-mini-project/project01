import { VscEdit, VscTrash } from "react-icons/vsc"
import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { useParams } from "react-router-dom"
import { __deleteComment, __editComment, __getComments } from "../../redux/modules/commentsSlice"


const Comment = ({ comment }) => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const thisID = comment.id
    const [isEdit, setIsEdit] = useState(false)
    const [editComment, setEditComment] = useState(comment.comment)



    const onChangeEditComment = (e) => {
        setEditComment(e.target.value)
    }

    const isEditChange = () => {
        setEditComment(comment.comment)
        setIsEdit(!isEdit)
    }
    const onCompleteEditComment = (id, comment) => {
        dispatch(__editComment({ id, comment }))
        setIsEdit(!isEdit)
    }

    const onDeleteComment = (commentID) => {
        dispatch(__deleteComment(commentID))
    }

    useEffect(() => {
        dispatch(__getComments())
    }, [])

    return (
        <>
            {
                (isEdit) ? (
                    <CommentBox key={comment.id}>
                        <CommentViewBox>
                            <EditCommentInput
                                type="text"
                                value={editComment}
                                maxlength={100}
                                onChange={onChangeEditComment}
                            />
                        </CommentViewBox>
                        <CommentEditBox>
                            <CommentIcon
                                color="#1a73e8"
                                onClick={() => onCompleteEditComment(comment.id, editComment)}
                            >
                                수정
                            </CommentIcon>
                            <CommentIcon
                                color="tomato"
                                onClick={() => isEditChange()}
                            >
                                취소
                            </CommentIcon>
                        </CommentEditBox>
                    </CommentBox>
                ) : (
                    <CommentBox key={comment.id}>
                        <CommentViewBox>
                            <CommentsNickname>@{comment.nickname}</CommentsNickname>
                            <CommentsContent>{editComment}</CommentsContent>
                        </CommentViewBox>
                        <CommentEditBox>
                            <CommentIcon
                                color="#1a73e8"
                                onClick={() => isEditChange()}
                            >
                                <VscEdit
                                    size={20}
                                    color="white"
                                />
                            </CommentIcon>
                            <CommentIcon
                                onClick={() => onDeleteComment(comment.id)}
                                color="tomato"
                            >
                                <VscTrash
                                    size={20}
                                    color="white"
                                />
                            </CommentIcon>
                        </CommentEditBox>
                    </CommentBox>
                )
            }
        </>
    )
}

const CommentBox = styled.div`
    display: flex;
    gap: 10px;
    color: black;
    width: 100%;
    border-bottom: 1px solid #ddd;
`
const CommentViewBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    gap: 10px;
    color: black;
    width: 100%;
`
const CommentsNickname = styled.p`
    font-size: 14px;
`
const CommentsContent = styled.p`
    font-size: 18px;
`
const CommentEditBox = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
const CommentIcon = styled.div`
    border-radius: 10px;
    font-size: 12px;
    color: white;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.color};
    &:hover {
        cursor: pointer;
    }
`
const EditCommentInput = styled.input`
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 0 12px;
    height: 30px;
    font-size: 12px;
`

export default Comment