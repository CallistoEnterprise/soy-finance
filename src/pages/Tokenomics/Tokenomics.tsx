import React from 'react'
import styled from 'styled-components'
import PageHeader from 'components/PageHeader'
import PageFooter from 'components/PageFooter'
import TokenomicContent from './TokenomicContent'
import 'aos/dist/aos.css'

const Container = styled.div`
  height: 100%;
  position: relative;
  overflow: hidden;
`
const Tokenomics: React.FC = () => {
  return (
    <Container>
      <PageHeader />
      <TokenomicContent />
      <PageFooter />
    </Container>
  )
}

export default Tokenomics
