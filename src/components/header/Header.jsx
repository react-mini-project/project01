import React from "react"
import styled from "styled-components"
import { FaHome } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import "./header.css"

const Header = () => {
    const navigate = useNavigate()

    return (
        <HeaderCtn>
            <FaHome
                onClick={()=>navigate("/")}
                className = "icon navigate"
                size="24"
            />
            <HeaderName
                onClick={()=>navigate("/todos")}
                className = "navigate"
            >
                우리 모두의 TODO LIST
            </HeaderName>
        </HeaderCtn>
    )
}

const HeaderCtn = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 2px solid #ddd;
    box-shadow: 0 -1px 5px 1px rgba(0,0,0,0.2);
`
const HeaderName = styled.h1`
    font-weight: 400;
    font-size: 18px;
`

export default Header