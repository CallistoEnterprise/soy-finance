import React from 'react'
import { useTranslation } from 'contexts/Localization'
import { Theme } from 'constants/theme'
import Spacer from 'components/Spacer'
import Page from 'components/layout/Page'
import {
  Container,
  Title,
  TopDivFullwidth,
  SubTitle,
  Text,
  Text2,
  Text3,
  StyledLi,
  RowFullwidth,
  Row22,
  Row33,
  Circle,
} from '../ContentPages/styledComponents'
import 'aos/dist/aos.css'

const Tokenomics = () => {
  const { t } = useTranslation()

  return (
    <Page>
      <Container>
        <Title color={Theme.colors.primary}>{t('SOY Tokenomics')}</Title>
        <Spacer height="80px" />
        <TopDivFullwidth>
          <SubTitle color={Theme.colors.bgscondary}>{t('Supply and Distribution')}</SubTitle>
          <Spacer height="40px" />
          <SubTitle color={Theme.colors.bgscondary}>
            {t('Max Supply:')}
            <Text2 color={Theme.colors.primary}>
              <b>&nbsp;{t('600 000 000 $SOY.')}</b>
            </Text2>
          </SubTitle>
          <Spacer height="40px" />
          <Text color="#767676">
            {t('120 000 000 $SOY (20% of the max supply) will be created at the genesis and distributed as follows:')}
          </Text>
          <Spacer height="20px" />
          <RowFullwidth>
            <Circle />
            <Text color="#767676">
              {t(
                '75% to Initial Dex Offering early investors. The funds raised will be moved to the distributed insurance system.',
              )}
            </Text>
          </RowFullwidth>
          <Spacer height="20px" />
          <RowFullwidth>
            <Circle />
            <Text color="#767676">{t('5% will be allocated to Callisto Enterprise.')}</Text>
          </RowFullwidth>
          <Spacer height="20px" />
          <RowFullwidth>
            <Circle />
            <Text color="#767676">
              {t(
                '5% will be allocated to the Callisto team members via a dynamic motivation system for the team members to support the project development in the time.',
              )}
            </Text>
          </RowFullwidth>
          <Spacer height="20px" />
          <RowFullwidth>
            <Circle />
            <Text color="#767676">
              {t('5% will be used for bug bounty programs to ensure high-security services.')}
            </Text>
          </RowFullwidth>
          <Spacer height="20px" />
          <RowFullwidth>
            <Circle />
            <Text color="#767676">
              {t(
                '10% will be airdropped in 7 consecutive phases, the details of each phase being announced at the time of its launch.',
              )}
            </Text>
          </RowFullwidth>
          <Spacer height="20px" />
          <Row22>
            <Text color={Theme.colors.primary}>
              <b>{t('Phase 1')}</b>
              <Text2 color="#767676">
                &nbsp;
                {t('- Sowing Soy - PancakeSwap Active Users Airdrop - 500 000 $SOY tokens - 15/10/21 to 30/10/21.')}
              </Text2>
            </Text>
          </Row22>
          <Spacer height="10px" />
          <Row22>
            <Text color={Theme.colors.primary}>
              <b>{t('Phase 2')}</b>
              <Text2 color="#767676">
                &nbsp;{t('- Sowing Soy - SushiSwap Active Users Airdrop - 500 000 $SOY tokens - 01/11/21 to 15/11/21.')}
              </Text2>
            </Text>
          </Row22>
          <Spacer height="10px" />
          <Row22>
            <Text color={Theme.colors.primary}>
              <b>{t('Phase 3')}</b>
              <Text2 color="#767676">
                &nbsp;{t('- Sowing Soy - UniSwap Active Users Airdrop - 500 000 $SOY tokens - 16/11/21 to 30/11/21.')}
              </Text2>
            </Text>
          </Row22>
          <Spacer height="10px" />
          <Row22>
            <Text color={Theme.colors.primary}>
              <b>{t('Phase 4')}</b>
              <Text2 color="#767676">
                &nbsp;{t('- Sowing Soy - 1inch Active Users Airdrop - 500 000 $SOY tokens - 01/12/21 to 15/12/21.')}
              </Text2>
            </Text>
          </Row22>
          <Spacer height="10px" />
          <Row22>
            <Text color={Theme.colors.primary}>
              <b>{t('Phase 5')}</b>
              <Text2 color="#767676">
                &nbsp;
                {t('- Storing Soy - CryptoBot Active Users Airdrop - 1 000 000 $SOY tokens - 16/12/21 to 15/01/21.')}
              </Text2>
            </Text>
          </Row22>
          <Spacer height="10px" />
          <Row22>
            <Text color={Theme.colors.primary}>
              <b>{t('Phase 6')}</b>
              <Text2 color="#767676">&nbsp;{t('- Deep Freezing SOY - Details to be published on 10/01/22*.')}</Text2>
            </Text>
          </Row22>
          <Spacer height="10px" />
          <Row22>
            <Text color={Theme.colors.primary}>
              <b>{t('Phase 7')}</b>
              <Text2 color="#767676">&nbsp;{t('- Harvesting Soy - Details to be published on 25/08/22*.')}</Text2>
            </Text>
          </Row22>
          <Spacer height="10px" />
          <Row22>
            <Text2 color="#767676">{t('*Updated on 10/01/22.')}</Text2>
          </Row22>
          <Spacer height="40px" />
          <SubTitle color={Theme.colors.bgscondary}>{t('Transaction Fees Distribution')}</SubTitle>
          <Spacer height="40px" />
          <Text color="#767676">
            {t(
              'For each trade/swap performed in the SOY Finance platform, a commission fee is applied. Initially, 100% of the collected fee will be split among the liquidity providers. Over time, it will decrease to 55% by year 5 (phase 2).',
            )}
          </Text>
          <Spacer height="20px" />
          <Text color="#767676">
            {t(
              'Thus, up to 20% of the trading fee will be shared among SOY token holders, 5% will be allocated to the insurance fund for its operation, and finally, 20% will be used to buy back SOY tokens and burn them.',
            )}
          </Text>
          <Spacer height="40px" />
          <SubTitle color={Theme.colors.bgscondary}>{t('Fees Distribution Phases Details')}</SubTitle>
          <Spacer height="40px" />
          <Row33>
            <Text3 color={Theme.colors.primary}>
              <b>{t('Phase 0')}</b>&nbsp;&nbsp;&nbsp;
            </Text3>
            <Text color="#767676">
              &nbsp;{t('(Until 15/10/21) — The trading fee is set to 0.2% of the volume of each transaction.')}
            </Text>
          </Row33>
          <Spacer height="20px" />
          <Row33>
            <Text3 color={Theme.colors.primary}>
              <b>{t('Phase 1')}</b>&nbsp;&nbsp;&nbsp;
            </Text3>
            <Text color="#767676">
              &nbsp;
              {t(
                'SOY Finance will use variable fees from 0.3% to 0.5% to audit the newly listed tokens and increase the platform’s liquidity (lower fee will be applied to larger trades).',
              )}
            </Text>
          </Row33>
          <Spacer height="20px" />
          <Row33>
            <Text3 color={Theme.colors.primary}>
              <b>{t('Phase 2')}</b>&nbsp;&nbsp;&nbsp;
            </Text3>
            <Text color="#767676">
              &nbsp;
              {t(
                'In this phase, the trading fee will vary between 0.3% and 0.15% for the audited tokens and the unaudited between 0.5%-0.35%.',
              )}
            </Text>
          </Row33>
          <Spacer height="40px" />
          <SubTitle color={Theme.colors.bgscondary}>{t('Burning Mechanisms - “Buyback & Burn”')}</SubTitle>
          <Spacer height="40px" />
          <Text color="#767676">
            {t(
              'A set of burning mechanisms will be introduced to reward the SOY token holders and liquidity providers by decreasing inflation or lead to deflation depending on the system’s utilization, trading volume, and token price.',
            )}
          </Text>
          <Spacer height="20px" />
          <Text color="#767676">
            {t('The burning mechanism will receive a percentage ranging from 15% to 30% of the total trading fee.')}
            <Text color={Theme.colors.primary}>&nbsp;{t('Weekly, SOY tokens will be rebought and burned.')}</Text>
          </Text>
          <Spacer height="20px" />
          <Text color="#767676">
            {t(
              'The system’s adoption and utilization through transaction volume define the size of the commission fees that will be distributed both to liquidity providers and burned.',
            )}
          </Text>
          <Spacer height="40px" />
          <SubTitle color={Theme.colors.bgscondary}>{t('Addition Information')}</SubTitle>
          <Spacer height="40px" />
          <Text color="#767676">
            {t('A full description of Soy Tokenomic can be found in the')}
            <StyledLi
              href="https://soy-finance.gitbook.io/soy-finance/articles/monetary-policy-vision"
              target="_blank"
              color="#615EFF"
            >
              &nbsp;{t('SOY Monetary Policy.')}
            </StyledLi>
          </Text>
          <Spacer height="20px" />
        </TopDivFullwidth>
        <Spacer height="100px" />
      </Container>
    </Page>
  )
}

export default Tokenomics
