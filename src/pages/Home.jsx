import React from "react"
import Layout from "../components/layout/Layout"
import Header from "../components/header/Header"
import HomeMenu from "../components/homeMenu/HomeMenu"

const Home = () => {
    return (
        <Layout>
            <Header />
            <HomeMenu />
        </Layout>
    )
}
export default Home