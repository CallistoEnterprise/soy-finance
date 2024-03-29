import React, { useEffect } from 'react'
import styled from 'styled-components'
import AOS from 'aos'
import PageFooter from 'components/PageFooter'
import CookiesBar from 'components/CookiesBar'
import Intro from './Intro'
import Metrics from './Metrics'
import Community from './Community'
import CommunityMob from './Community/communityMob'
import Oneinch from './Oneinch/Oneinch'
import WhatsNew from './WhatsNew'
import SoyToken from './SoyToken/soytoken'
import OneToken from './OneToken/onetoken'
import 'aos/dist/aos.css'

const Container = styled.div`
  height: 100%;
  position: relative;
  overflow: hidden;
`
const WebDiv = styled.div`
  display: block;
  @media screen and (max-width: 1166px) {
    display: none;
  }
`
const MobDiv = styled.div`
  display: none;
  @media screen and (max-width: 1166px) {
    display: block;
  }
`

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
  }, [])

  return (
    <Container>
      <CookiesBar />
      <Intro />
      <Metrics />
      <Oneinch />
      <WhatsNew />
      <WebDiv>
        <Community />
      </WebDiv>
      <MobDiv>
        <CommunityMob />
      </MobDiv>
      <SoyToken />
      <OneToken />
      <PageFooter />
    </Container>
  )
}

export default Home
