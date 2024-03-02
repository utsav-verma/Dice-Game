import React from 'react'
import styled from "styled-components"
const RulesBox = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className='text'>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        <p>if you get wrong guess then  2 point will be dedcuted </p>
      </div>
    </RulesContainer>
  )
}

export default RulesBox

const RulesContainer = styled.div`
display: flex;
flex-direction:column;
padding: 24px;
margin: 0 auto;
max-width: 800px;
margin-top: 25px;
border-radius: 10px;
background-color: #FBF1F1;
    .text{
        margin-top: 24px;
    }
    h2{
        font-size: 24px;
    }
`;
