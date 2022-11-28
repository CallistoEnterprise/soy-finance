import React from 'react'
import styled from 'styled-components'
import SafetyOnYields from 'assets/images/safetyonyields.svg'

const TitleSection = () => {
  return (
    <TitleArea>
      <Title>
        <TitleImage src={SafetyOnYields} alt="Safety On Yields" height={157} />
      </Title>
    </TitleArea>
  )
}

const TitleArea = styled.div`
  z-index: 9;
  @media (max-width: 1044px) {
    width: 100%;
  }
  @media (max-width: 320px) {
    // margin-top: 100px;
  }
`

const Title = styled.div`
  display: flex;
  @media (max-width: 596px) {
    display: block;
  }
`

const TitleImage = styled.img`
  height: 135px;
  width: 100%;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  @media (max-width: 1044px) {
    height: 100px;
  }
  @media (max-width: 768px) {
    height: 80px;
    margin-top: 0px;
  }
`
/*
const Titlepre = styled.p`
  font-size: 79px;
  line-height: 157px;
  color: ${Theme.colors.primary};
  font-family: Beautiful;
  width: 100%;
  text-align: center;
  letter-spacing: 0.05em;
  @media (max-width: 1044px) {
    font-size: 60px;
  }
  @media (max-width: 768px) {
    font-size: 40.9px;
    line-height: 97.17px;
    margin-bottom: 20px;
  }
` */

export default TitleSection
