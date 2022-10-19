import React from "react"
import Layout from "../components/layout/Layout"
import Header from "../components/header/Header"
import DetailTodo from "../components/detailTodo/DetailTodo"
import CommentsList from "../components/commentsList/CommentsList"

const Detail = () => {
    return (
        <Layout>
            <Header />
            <DetailTodo />
            <CommentsList />
        </Layout>
    )
}
export default Detail