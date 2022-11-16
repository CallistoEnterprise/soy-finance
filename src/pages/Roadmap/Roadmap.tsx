import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Page from 'components/Layout/Page'
import { Assets } from 'constants/images'
import 'aos/dist/aos.css'

const Img = styled.img`
  width: 100%;
  margin-top: 100px;
  @media screen and (max-width: 560px) {
    margin-top: 80px;
  }
`
const Roadmap: React.FC = () => {
  const pageEndRef = useRef(null)

  const scrollToBottom = () => {
    pageEndRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    setTimeout(() => {
      scrollToBottom()
    }, 1000)
  }, [pageEndRef])

  return (
    <Page hideFooter>
      <Img src={Assets.roadmap} alt="" />
      <div ref={pageEndRef} />
    </Page>
  )
}

export default Roadmap
