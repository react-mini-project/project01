import React from "react"
import styled from "styled-components"
import { FaHome } from "react-icons/fa"

const Header = () => {

    return (
        <HeaderCtn>
            <FaHome className = "icon" size="24" />
            <HeaderName>
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
`
const HeaderName = styled.h1`
    font-weight: 400;
    font-size: 18px;
`

export default Header