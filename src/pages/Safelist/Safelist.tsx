import React from 'react'
import { useTranslation } from 'contexts/Localization'
import Spacer from 'components/Spacer'
import Page from 'components/layout/Page'
import { Theme } from 'constants/theme'
import {
  Container,
  Title,
  TopDiv,
  Div,
  SubTitle,
  Text,
  Text2,
  Row,
  Row2,
  Circle,
  BottomDiv,
} from '../ContentPages/styledComponents'
import 'aos/dist/aos.css'

const Safelist = () => {
  const { t } = useTranslation()

  return (
    <Page>
      <Container>
        <Title color={Theme.colors.primary}>{t('SOY Finance Safelisting')}</Title>
        <Spacer height="80px" />
        <TopDiv>
          <SubTitle color={Theme.colors.bgscondary}>{t('What Exactly is The Safelist?')}</SubTitle>
          <Spacer height="40px" />
          <Text color={Theme.colors.primary}>
            {t(
              'Security vulnerabilities are undoubtedly the biggest challenge for the DeFI ecosystem, with losses of hundreds of millions of dollars just for 2021.',
            )}
          </Text>
          <Spacer height="20px" />
          <Text color={Theme.colors.primary}>
            {t(
              'SOY Finance intends to offer the highest level of security to its users, and for this purpose, we have established the Safelist with the best security standards.',
            )}
          </Text>
          <Spacer height="40px" />
          <SubTitle color={Theme.colors.bgscondary}>{t('How to Safelist a Token on SOY Finance?')}</SubTitle>
          <Spacer height="40px" />
          <Text color={Theme.colors.primary}>
            {t(
              'For project representatives and community members who wish to have their project token safelisted by SOY Finance, please follow the steps below:',
            )}
          </Text>
          <Spacer height="40px" />
          <Row>
            <Circle />
            <Text color="#767676">{t('The Callisto Security Department should have audited the token.')}</Text>
          </Row>
          <Spacer height="20px" />
          <Row>
            <Circle />
            <Text color="#767676">
              {t('Burn 10 000 SOY tokens by sending them to the')}&nbsp;&nbsp;
              <a
                href="https://explorer.callisto.network/address/0xdEad000000000000000000000000000000000000/token-transfers"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'blue' }}
              >
                {t('"Burn address"')}.
              </a>
            </Text>
          </Row>
        </TopDiv>
        <Spacer height="40px" />
        <BottomDiv>
          <div>
            <Text color={Theme.colors.primary}>{t('Provide the following minimum liquidity:')}</Text>
            <Spacer height="40px" />
            <Row2>
              <Circle />
              <Text color="#767676">{t('Ethereum: 50 000 USD.')}</Text>
            </Row2>
            <Spacer height="20px" />
            <Row2>
              <Circle />
              <Text color="#767676">{t('Callisto Network: 25 000 USD.')}</Text>
            </Row2>
            <Spacer height="20px" />
            <Row2>
              <Circle />
              <Text color="#767676">{t('Binance Smart Chain: 50 000 USD.')}</Text>
            </Row2>
          </div>
          <Div>
            <Text color={Theme.colors.primary}>
              {t('Send us the following information to')}
              <Text2 color={Theme.colors.bgscondary}>
                <b>&nbsp;{t('Safelist@Soy.Finance.')}</b>
              </Text2>
            </Text>
            <Spacer height="40px" />
            <Row2>
              <Circle />
              <Text color="#767676">{t('The token’s description.')}</Text>
            </Row2>
            <Spacer height="20px" />
            <Row2>
              <Circle />
              <Text color="#767676">{t('The token’s smart contract address.')}</Text>
            </Row2>
            <Spacer height="20px" />
            <Row2>
              <Circle />
              <Text color="#767676">{t('The token’s logo ( SVG or PNG 256x256 ).')}</Text>
            </Row2>
          </Div>
        </BottomDiv>
        <Spacer height="60px" />
        <Text color={Theme.colors.primary}>
          {t('Tip: Mentioning your interest in SOY Finance on your social media is always appreciated.')}
        </Text>
        <Spacer height="100px" />
      </Container>
    </Page>
  )
}

export default Safelist
