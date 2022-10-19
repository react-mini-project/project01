import React, { Children } from "react"
import styled from "styled-components"

const Button = ({width="100px", borderColor="black", bgColor="white", color="black", onClick, fontWeight="400", children}) => {
    return (
        <ButtonCtn
            width={width}
            borderColor={borderColor}
            bgColor={bgColor}
            fontWeight = {fontWeight}
            color = {color}
            onClick = {onClick}
        >
           {children}
        </ButtonCtn>
    )
}

const ButtonCtn = styled.button`
    width: ${(props)=>props.width};
    color: ${(props)=>props.color};
    padding: 4px 10px;
    border: 1px solid ${(props)=>props.borderColor};
    border-radius: 10px;
    background-color: ${(props)=>props.bgColor};
    font-weight: ${(props)=>props.aaa};
`
export default Button