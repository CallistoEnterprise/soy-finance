import React, { useState } from 'react'
import { Theme } from 'constants/theme'
import styled from 'styled-components'

const COOKIES_KEY = 'cookies-consented'

const CookiesBar = () => {
  const [cookiesApproved, setCookiesApproved] = useState(() => localStorage.getItem(COOKIES_KEY) === '1')

  const onAccept = () => {
    localStorage.setItem(COOKIES_KEY, '1')
    setCookiesApproved(true)
  }

  if (cookiesApproved) return null

  return (
    <Container>
      <Subcontainer>
        <Text>
          We use cookies to enhance your experience on our website. By continuing to browse our site, you consent to our
          use of cookies. To find out more about how we use cookies, please see our&nbsp;
          <Link href="/docs/cookies-policy.pdf" target="_blank" rel="noopener noreferrer">
            Cookies Policy
          </Link>
          .
        </Text>
        <Button type="button" onClick={onAccept}>
          Accept all
        </Button>
      </Subcontainer>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  bottom: 10px;
  z-index: 100;
  width: 100%;
`

const Subcontainer = styled.div`
  width: 100%;
  max-width: 800px;
  background-color: ${Theme.colors.bgscondary};
  padding: 16px;
  margin: 0px auto;
  border-radius: 14px;
`

const Text = styled.p`
  font-family: ${Theme.fonts.text};
  font-size: 16px;
  color: white;
  line-height: 1.2;
`

const Link = styled.a`
  font-weight: 700;
  text-decoration: none !important;
  &:hover {
    color: black;
  }
`

const Button = styled.button`
  margin-top: 8px;

  color: ${Theme.colors.bgscondary};
  background-color: white;
  font-size: 18px;
  font-weight: 700;
  font-family: ${Theme.fonts.text};
  height: 32px;
  padding: 5px 40px;
  border: 0;
  border-radius: 52px;

  &:hover {
    color: #000;
  }
`

export default CookiesBar
