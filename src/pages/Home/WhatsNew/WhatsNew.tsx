import React from 'react'
import styled from 'styled-components'
import { Theme } from 'constants/theme'
import { useTranslation } from 'contexts/Localization'
import { useGetBurnedSoy, useStakingAPR, useFarmingAPR } from 'hooks/useMetrics'
import { CALLISTO_CHAIN_ID } from '@callisto-enterprise/chain-constants'
import { TOKENLIST } from '@callisto-enterprise/assetslist'
import contracts from 'constants/contracts'

import Line from 'components/Line'

import WhatsNewXT from 'assets/images/WhatsNewXT.png'
import WhatsNewStaking from 'assets/images/WhatsNewStaking.webp'
import WhatsNewFarming from 'assets/images/WhatsNewFarming.png'
import WhatsNewBurn from 'assets/images/WhatsNewBurn.png'

const WhatsNew = () => {
  const { t } = useTranslation()

  const burnedSoy = useGetBurnedSoy()

  const stakingAPR = useStakingAPR()

  const bestFarms = useFarmingAPR()

  const mainnetTokens = TOKENLIST[CALLISTO_CHAIN_ID.Mainnet]
  const getIconByAddress = (address: string) => {
    return mainnetTokens.find((entry) => entry.address.toLowerCase() === address.toLowerCase()).image
  }
  const soyIcon = getIconByAddress(contracts.soyToken)

  return (
    <Container>
      <WhatsNewContainer>
        <Line color="#AEDD00" />

        <div style={{ margin: '40px' }}>
          <WhatsNewSubtitle color={Theme.colors.primary}>
            {t("What's new on")}&nbsp;<span style={{ color: '#AEDD00' }}>{t('SOY?')}</span>
          </WhatsNewSubtitle>
        </div>

        <CardsContainer>
          <Card img={WhatsNewXT} style={{ padding: '0' }}>
            <a href="https://app.soy.finance/swap" rel="noreferrer noopener">
              <button
                type="button"
                aria-label="Soy Finance"
                style={{ height: '50%', width: '100%', background: 'transparent', border: 'none' }}
              />
            </a>
            <a href="https://www.xt.com/" rel="noreferrer noopener">
              <button
                type="button"
                aria-label="Soy Finance"
                style={{ height: '50%', width: '100%', background: 'transparent', border: 'none' }}
              />
            </a>
          </Card>
          <Card img={WhatsNewStaking}>
            <StyledCardTitle>{t('Soy Staking')}</StyledCardTitle>
            <StyledCardSubTitle>{t('Stake Soy, Earn SOY')}</StyledCardSubTitle>
            {stakingAPR !== 0 && (
              <CardBlob style={{ paddingLeft: '30px', paddingRight: '30px' }}>
                <CardBlobAsset src={soyIcon} alt="SOY" />
                <StyledCardText style={{ fontWeight: 600 }}>
                  {t('APR')}: {stakingAPR.toFixed(2)}%
                </StyledCardText>
              </CardBlob>
            )}
          </Card>
          <Card img={WhatsNewFarming}>
            <StyledCardTitle>{t('Yield Farming')}</StyledCardTitle>
            <StyledCardSubTitle>{t('High APR Farms')}</StyledCardSubTitle>
            {bestFarms.map((farm) => {
              if (farm.name === 'undefined') return null

              return (
                <CardBlob key={farm.lp}>
                  <CardBlobAsset src={getIconByAddress(farm.token0)} alt="Token 1" />
                  <StyledCardText style={{ fontWeight: 600 }}>+</StyledCardText>
                  <CardBlobAsset src={getIconByAddress(farm.token1)} alt="Token 2" />
                  <StyledCardText>
                    <span style={{ fontWeight: 600 }}>{farm.name.replace('-', ' - ')}</span>
                    <br />
                    {t('APR')}: {farm.apr.toFixed(2)}%
                  </StyledCardText>
                </CardBlob>
              )
            })}
          </Card>
          <Card img={WhatsNewBurn}>
            <StyledCardTitle color={Theme.colors.white}>{t('Total Token Burn')}</StyledCardTitle>
            <StyledCardSubTitle color={Theme.colors.white} style={{ fontWeight: 900 }}>
              {burnedSoy.toLocaleString('en-US')} $SOY
            </StyledCardSubTitle>
          </Card>
        </CardsContainer>
      </WhatsNewContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0;
  background-color: #fff;
  @media screen and (max-width: 768px) {
  }
`

const WhatsNewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1500px;
  margin-bottom: 80px;
`

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`

const Card = styled.div<{ img?: string }>`
  width: 328px;
  height: 400px;
  padding: 20px;
  margin: 10px;
  background-image: ${({ img }) => `url(${img})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  border-radius: 20px;

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 768px) {
  }
`

const CardBlob = styled.div`
  width: auto;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 20px 10px;
  margin: 10px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`

const CardBlobAsset = styled.img`
  width: 48px;
  height: 48px;
`

const StyledCardText = styled.p<{ color?: string }>`
  color: ${({ color }) => color || Theme.colors.black};
  font-size: 16px;
  font-family: ${Theme.fonts.text};
  line-height: 24px;
  white-space: nowrap;
  letter-spacing: 5%;
  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 768px) {
    /* font-size: 44.2px;
        line-height: 53.04px; */
  }
`

const StyledCardSubTitle = styled(StyledCardText)`
  font-size: 20px;
  line-height: 34px;
  font-weight: 600;
`

const StyledCardTitle = styled(StyledCardText)`
  font-size: 25px;
  line-height: 38px;
  font-weight: 700;
`

const Title = styled.p<{ color: string }>`
  display: inline;
  color: ${({ color }) => color};
  font-family: ${Theme.fonts.text};
  font-weight: 700;
  font-size: 73.5px;
  line-height: 88.2px;
  letter-spacing: 5%;
  @media screen and (max-width: 900px) {
    font-size: 38px;
    line-height: 52px;
  }
  @media screen and (max-width: 768px) {
    // font-size: 18px;
  }
`
const WhatsNewSubtitle = styled(Title)<{ color: string }>`
  font-weight: 400;
  font-size: 60px;
  line-height: 88.2px;
  letter-spacing: 5%;
  @media screen and (max-width: 900px) {
    font-size: 38px;
    line-height: 52px;
  }
  @media screen and (max-width: 450px) {
    font-size: 28px;
  }
  @media screen and (max-width: 340px) {
    font-size: 20px;
  }
`

export default WhatsNew
