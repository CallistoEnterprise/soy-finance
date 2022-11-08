import React from 'react'
import styled from 'styled-components';
import Spacer from 'components/Spacer';
import { Theme } from 'constants/theme';
import { Assets } from 'constants/images';
import { useTranslation } from 'contexts/Localization';
import { useGetBurnedSoy, useStakingAPR, useFarmingAPR } from 'hooks/useMetrics';
import { CALLISTO_CHAIN_ID } from '@callisto-enterprise/chain-constants'
import { TOKENLIST } from '@callisto-enterprise/assetslist'

import Line from 'components/Line';

import WhatsNewXT from "assets/images/WhatsNewXT.png"
import WhatsNewStaking from "assets/images/WhatsNewStaking.png"
import WhatsNewFarming from "assets/images/WhatsNewFarming.png"
import WhatsNewBurn from "assets/images/WhatsNewBurn.png"

const desc = `Combining a safelist for audited tokens, decentralized insurance, and the most advanced token standard, SOY Finance adopts the industry’s best practices and technologies to provide the community with a rock-solid platform.`

const OneToken = () => {
    const { t } = useTranslation()

    const burnedSoy = useGetBurnedSoy()

    const stakingAPR = useStakingAPR()

    const bestFarms = useFarmingAPR()

    const mainnetTokens = TOKENLIST[CALLISTO_CHAIN_ID.Mainnet]
    const getIconByAddress = (address:string) => {
        return mainnetTokens.find((entry) => entry.address.toLowerCase() === address.toLowerCase()).image
    }
    const soyIcon = getIconByAddress("0x9FaE2529863bD691B4A7171bDfCf33C7ebB10a65") // todo refactor the hardcoded address

    return (
        <Container>
            <BkImage />
            <MobBkImage src={Assets.mobmark3} alt="" />
            <LeftAniImg src={Assets.char} alt="" data-aos="fade-right"/>

            <SpaceRow>
                <div className="col-lg-6 col-md-6" data-aos="fade-right" data-aos-delay="300">
                    <Title color={Theme.colors.primary}>
                        <Title color="#AEDD00">{t('Defi')}&nbsp;</Title>{t('Made Safe')}
                    </Title>
                    <Spacer height="20px" />
                    <Text>
                        {t(desc)}
                    </Text>
                </div>
                <div className="col-lg-6 col-md-6" data-aos="fade-left" data-aos-delay="300">
                    <StyledVideo autoPlay muted loop id="totems">
                        <source src="Totems.webm" type="video/mp4"/>
                    </StyledVideo>
                </div>
            </SpaceRow>
            
            <Spacer height="50px" />

            <WhatsNewContainer>
                <Line color="#AEDD00"/>

                <div style={{margin: "40px"}}>
                    <WhatsNewSubtitle color={Theme.colors.primary}>
                        {t('What\'s new on')}&nbsp;<WhatsNewSubtitle color="#AEDD00">{t('SOY?')}</WhatsNewSubtitle>
                    </WhatsNewSubtitle>
                </div>

                <CardsContainer>
                    <Card img={WhatsNewXT} style={{padding: "0"}}>
                        <a href="https://app.soy.finance/swap" rel="noreferrer noopener">
                            <button type="button" aria-label="Soy Finance" style={{height: "50%", width: "100%", background: "transparent", border: "none"}} />
                        </a>
                        <a href="https://www.xt.com/" rel="noreferrer noopener">
                            <button type="button" aria-label="Soy Finance" style={{height: "50%", width: "100%", background: "transparent", border: "none"}} />
                        </a>
                    </Card>
                    <Card img={WhatsNewStaking}>
                        <StyledCardTitle>{t("Soy Staking")}</StyledCardTitle>
                        <StyledCardSubTitle>{t("Stake Soy, Earn SOY")}</StyledCardSubTitle>
                        <CardBlob>
                            <CardBlobAsset src={soyIcon} alt="" />
                            <StyledCardText>{t("APR")}: {stakingAPR.toFixed(2)}%</StyledCardText>
                        </CardBlob>
                    </Card>
                    <Card img={WhatsNewFarming}>
                        <StyledCardTitle>{t("Yield Farming")}</StyledCardTitle>
                        <StyledCardSubTitle>{t("High APR Farms")}</StyledCardSubTitle>
                        {/* ["XMS - SOY", "ANTEX - SOY", "BCOIN - SOY"].map((name) => {
                            return (
                            <CardBlob>
                                <CardBlobAsset src={WhatsNewStaking} alt="" />
                                <StyledCardText style={{fontWeight: 600}}>+</StyledCardText>
                                <CardBlobAsset src={WhatsNewStaking} alt="" />
                                <StyledCardText>
                                    <span style={{fontWeight: 600}}>{name}</span>
                                    <br />{t("APR")}: {234.93}%</StyledCardText>
                            </CardBlob>
                            )
                        }) */}
                        {bestFarms.map((farm) => {
                            if(farm.name === "undefined")
                                return null
                            
                            return (
                                <CardBlob key={farm.lp}>
                                    <CardBlobAsset src={getIconByAddress(farm.token0)} alt="" />
                                    <StyledCardText style={{fontWeight: 600}}>+</StyledCardText>
                                    <CardBlobAsset src={getIconByAddress(farm.token1)} alt="" />
                                    <StyledCardText>
                                        <span style={{fontWeight: 600}}>{farm.name.replace("-", " - ")}</span>
                                        <br />{t("APR")}: {farm.apr.toFixed(2)}%</StyledCardText>
                                </CardBlob>
                            )
                        })}
                    </Card>
                    <Card img={WhatsNewBurn}>
                        <StyledCardTitle color={Theme.colors.white}>{t("Total Token Burn")}</StyledCardTitle>
                        <StyledCardSubTitle color={Theme.colors.white} style={{fontWeight: 900}}>{burnedSoy} $SOY</StyledCardSubTitle>
                    </Card>
                </CardsContainer>
            </WhatsNewContainer>
        </Container>
    )
}

/* WHAT's NEW */

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

const Card = styled.div<{img?: string}>`
    width: 328px;
    height: 400px;
    padding: 20px;
    margin: 10px;
    background-image: ${({img}) => `url(${img})`};
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
    background-color: rgba(255,255,255,0.7);
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

const StyledCardText = styled.p<{color?: string}>`
    color: ${({color}) => color || Theme.colors.black};
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
`;

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

/* MAIN PAGE */

const Container = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0;
    background-color: #FFF;
    @media screen and (max-width: 768px) {
    }
`;
const StyledVideo = styled.video`
    width: 100%;
    object-fit: cover;
    @media screen and (max-width: 768px) {
    }
`;
const SpaceRow = styled.div`
    display: flex;
    margin-top: 400px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 5% 0 12%;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        margin-top: 160px;
        padding: 0 10px;
    }
`
const Text = styled.p`
    font-family: ${Theme.fonts.text};
    font-size: 21px;
    line-height: 25.2px;
    color: #767676;
    line-height: 1.67;
    letter-spacing: 0.45px;
    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`;
const Title = styled.p<{color: string}>`
    display: inline;
    color: ${({color}) => color};
    font-family: ${Theme.fonts.text};
    font-weight: 700;
    font-size: 73.5px;
    line-height: 88.2px;
    letter-spacing: 5%;
    @media screen and (max-width: 900px ) {
        font-size: 38px;
        line-height: 52px;
    }
    @media screen and (max-width: 768px ) {
        // font-size: 18px;
    }
`;
const WhatsNewSubtitle = styled(Title)<{color: string}>`
font-weight: 400;
font-size: 60px;
line-height: 88.2px;
letter-spacing: 5%;
@media screen and (max-width: 900px ) {
    font-size: 38px;
    line-height: 52px;
}
@media screen and (max-width: 768px ) {
    // font-size: 18px;
}
`;
const BkImage = styled.div`
    position: absolute;
    width: 100%;
    height: 500px;
    min-height: 500px;
    top: -130px;
    background-image: url(${Assets.mark3});
    background-position: left;
    background-repeat: no-repeat;
    background-size: cover;
    @media screen and (max-width: 1400px) {
        background-size: cover;
    }
    @media screen and (max-width: 768px) {
        display: none;
    }
`
const MobBkImage = styled.img`
    position: absolute;
    width: 100%;
    height: 100px;
    min-height: 200px;
    top: -60px;
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
    }
`
const LeftAniImg = styled.img`
    position: absolute;
    top: 150px;
    left: 33%;
    @media screen and (max-width: 1400px) {
        left: 43%;
    }
    @media screen and (max-width: 1140px) {
        left: 53%;
    }
    @media screen and (max-width: 900px) {
        left: 63%;
    }
    @media screen and (max-width: 768px) {
        left: 63%;
        top: 70px;
        width: 100px;
    }
`

export default OneToken;
