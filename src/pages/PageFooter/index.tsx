import React from 'react'
import styled from 'styled-components'
import Spacer from 'components/Spacer';
import { Theme } from 'constants/theme';
import { Assets } from 'constants/images';
import Telegram from 'components/Svg/Icons/Telegram';
import Twitter from 'components/Svg/Icons/Twitter';
import Redit from 'components/Svg/Icons/Redit';
import Facebook from 'components/Svg/Icons/Facebook';
import Pulse from 'components/Svg/Icons/Pulse';
import Gitbook from 'components/Svg/Icons/Gitbook';
import { useTranslation } from 'contexts/Localization';

const StyledLi = styled.a`
    text-decoration: none !important;
    font-family: ${Theme.fonts.text};
    font-size: 16px;
    line-height: 18.56px;
    color: ${Theme.colors.white};
    white-space: pre-line;
    &:hover {
        cursor: pointer;
        color: #767676;
    }
`;
const StyledLi2 = styled.a`
    margin: 0 10px 0 0;
`;

const PageFooter = () => {
    const { t } = useTranslation()
    return (
        <Footer id="contact">
            <BkImage>
                <Flex>
                    <Row2>
                        <Itemdiv>
                            <Image src={Assets.logowhite} alt="" />
                            <Spacer height="10px" />
                            <RightsdivWeb>
                                <Text>{t('All rights reserved by')}</Text>
                                <Spacer height="5px" />
                                <Text><b>{t('Callisto Enterprise')}</b></Text>
                            </RightsdivWeb>
                        </Itemdiv>
                        <Itemdiv>                            
                            <Text><b>{t('Soy Finance')}</b></Text>
                            <Spacer height="10px" />
                            <StyledLi href="https://soy-finance.gitbook.io/soy-finance/miscellaneous/media-kit" target="_blank">{t('Media Kit')}</StyledLi>
                            <Spacer height="10px" />
                            <StyledLi href="/roadmap">{t('Roadmap')}</StyledLi>
                            <Spacer height="10px" />
                            <StyledLi href="/safelist">{t('Safelisting')}</StyledLi>
                            <Spacer height="10px" />
                            <StyledLi href="https://bullsinvesting.club/" target="_blank">{t('BUSDT Stablecoin')}</StyledLi>
                        </Itemdiv>
                        <Itemdiv>                            
                            <Text><b>{t('Resources')}</b></Text>
                            <Spacer height="10px" />
                            <StyledLi href="https://callistoenterprise.com/team" target="_blank">{t('Team')}</StyledLi>
                            <Spacer height="10px" />
                            <StyledLi href="https://github.com/SoyFinance/" target="_blank">{t('Github')}</StyledLi>
                            <Spacer height="10px" />
                            <StyledLi href="https://callisto.network/" target="_blank">{t('Callisto Network')}</StyledLi>
                            <Spacer height="10px" />
                            <StyledLi href="https://callistoenterprise.com/" target="_blank">{t('Callisto Enterprise')}</StyledLi>
                        </Itemdiv>
                        
                    </Row2>
                    <Spacer2 />
                    <Row2>
                        <Itemdiv2>
                            <Text><b>{t('Documentation')}</b></Text>
                            <Spacer height="10px" />
                            <StyledLi href="https://soy-finance.gitbook.io/soy-finance/soy-products/safety-on-yields/soy-finance-security-audit/" target="_blank">{t('Platform Audit Report')}</StyledLi>
                            <Spacer height="10px" />
                            <StyledLi href="https://clo.click/SOY-Deck" target="_blank">{t('Investor Deck')}</StyledLi>
                            <Spacer height="10px" />
                            <StyledLi href="https://soy-finance.gitbook.io/soy-finance/soy-products/soy-token/monetary-policy-vision/" target="_blank">{t('Monetary Policy')}</StyledLi>
                            <Spacer height="10px" />
                            <StyledLi href="https://soy-finance.gitbook.io/soy-finance/soy-products/safety-on-yields/erc-223-token-standard/" target="_blank">{t('ERC 223 Token Standard')}</StyledLi>
                        </Itemdiv2>
                        <Itemdiv>
                            {/* <Text align="center"><b>{t('Social Media')}</b></Text>
                            <Spacer height="10px" /> */}
                            <Row>
                                <StyledLi2 href="https://t.me/Soy_Finance" target="_blank"><Telegram /></StyledLi2>
                                <StyledLi2 href="https://twitter.com/Soy_Finance" target="_blank"><Twitter /></StyledLi2>
                                <StyledLi2 href="https://www.reddit.com/r/Soy_Finance/" target="_blank"><Redit /></StyledLi2>
                                <StyledLi2 href="https://www.facebook.com/Soy.Finance" target="_blank"><Facebook /></StyledLi2>
                                <StyledLi2 href="https://soy-finance.gitbook.io/" target="_blank">
                                    {/* <img src={Assets.medium} width="40px" height="40px" alt=""/> */}
                                    <Gitbook />
                                </StyledLi2>
                            </Row>
                            <Spacer height="10px" />
                            <Row3>
                                <StyledLi2 href="https://coinmarketcap.com/currencies/soy-finance/" target="_blank">
                                    <img src={Assets.CMCIcon} width="38px" height="38px" alt=""/>
                                </StyledLi2>
                                <StyledLi2 href="https://www.coingecko.com/en/coins/soy-finance" target="_blank">
                                    <img src={Assets.coingecko} width="38px" height="38px" alt=""/>
                                </StyledLi2>
                                <StyledLi2 href="https://coinpaprika.com/coin/soy-soy-finance/" target="_blank">
                                    <img src={Assets.coinpap} width="40px" height="40px" alt=""/>
                                </StyledLi2>
                                <StyledLi2 href="https://defillama.com/protocol/soy-finance" target="_blank" ><Pulse width="38px" height="38px"/></StyledLi2>
                            </Row3>
                        </Itemdiv>
                    </Row2>
                    <RightsdivMob>
                        <Spacer height="30px" />
                        <Text>{t('All rights reserved by')} <b>{t('Callisto Enterprise')}</b></Text>
                    </RightsdivMob>
                </Flex>
            </BkImage>
            <WebDiv>
                <Flex>
                    <div>
                        <Image src={Assets.logowhite} alt="" />
                        <Spacer height="10px" />
                        <Text>{t('All rights reserved by')}</Text>
                        <Spacer height="5px" />
                        <Text><b>{t('Callisto Enterprise')}</b></Text>
                    </div>
                    <div>
                        <Text><b>{t('Soy Finance')}</b></Text>
                        <Spacer height="10px" />
                        <StyledLi href="https://soy-finance.gitbook.io/soy-finance/miscellaneous/media-kit" target="_blank">{t('Media Kit')}</StyledLi>
                        <Spacer height="10px" />
                        <StyledLi href="/roadmap">{t('Roadmap')}</StyledLi>
                        <Spacer height="10px" />
                        <StyledLi href="/safelist">{t('Safelisting')}</StyledLi>
                        <Spacer height="10px" />
                        <StyledLi href="https://bullsinvesting.club/" target="_blank">{t('BUSDT Stablecoin')}</StyledLi>
                    </div>
                    <div>
                        <Text><b>{t('Resources')}</b></Text>
                        <Spacer height="10px" />
                        <StyledLi href="https://callistoenterprise.com/team" target="_blank">{t('Team')}</StyledLi>
                        <Spacer height="10px" />
                        <StyledLi href="https://github.com/SoyFinance/" target="_blank">{t('Github')}</StyledLi>
                        <Spacer height="10px" />
                        <StyledLi href="https://callisto.network/" target="_blank">{t('Callisto Network')}</StyledLi>
                        <Spacer height="10px" />
                        <StyledLi href="https://callistoenterprise.com/" target="_blank">{t('Callisto Enterprise')}</StyledLi>
                    </div>
                    <div>
                        <Text><b>{t('Documentation')}</b></Text>
                        <Spacer height="10px" />
                        <StyledLi href="https://soy-finance.gitbook.io/soy-finance/soy-products/safety-on-yields/soy-finance-security-audit" target="_blank">{t('Platform Audit Report')}</StyledLi>
                        <Spacer height="10px" />
                        <StyledLi href="https://clo.click/SOY-Deck" target="_blank">{t('Investor Deck')}</StyledLi>
                        <Spacer height="10px" />
                        <StyledLi href="https://soy-finance.gitbook.io/soy-finance/soy-products/soy-token/monetary-policy-vision" target="_blank">{t('Monetary Policy')}</StyledLi>
                        <Spacer height="10px" />
                        <StyledLi href="https://soy-finance.gitbook.io/soy-finance/soy-products/safety-on-yields/erc-223-token-standard" target="_blank">{t('ERC 223 Token Standard')}</StyledLi>
                    </div>
                    <div>
                        {/* <Text align="center"><b>{t('Social Media')}</b></Text>
                        <Spacer height="10px" /> */}
                        <Row>
                            <StyledLi2 href="https://t.me/Soy_Finance" target="_blank"><Telegram /></StyledLi2>
                            <StyledLi2 href="https://twitter.com/Soy_Finance" target="_blank"><Twitter /></StyledLi2>
                            <StyledLi2 href="https://www.reddit.com/r/Soy_Finance/" target="_blank"><Redit /></StyledLi2>
                            <StyledLi2 href="https://www.facebook.com/Soy.Finance" target="_blank"><Facebook /></StyledLi2>
                            <StyledLi2 href="https://soy-finance.gitbook.io/" target="_blank"><Gitbook /></StyledLi2>
                            {/* <StyledLi2 href="https://soy-finance.gitbook.io/" target="_blank">
                                <img src={Assets.medium} width="38px" height="38px" alt=""/>
                            </StyledLi2> */}
                        </Row>
                        <Spacer height="10px" />
                        <Row3>
                            <StyledLi2 href="https://coinmarketcap.com/currencies/soy-finance/" target="_blank">
                                <img src={Assets.CMCIcon} width="40px" height="40px" alt=""/>
                            </StyledLi2>
                            <StyledLi2 href="https://www.coingecko.com/en/coins/soy-finance" target="_blank">
                                <img src={Assets.coingecko} width="40px" height="40px" alt=""/>
                            </StyledLi2>
                            <StyledLi2 href="https://coinpaprika.com/coin/soy-soy-finance/" target="_blank">
                                <img src={Assets.coinpap} width="40px" height="40px" alt=""/>
                            </StyledLi2>
                            <StyledLi2 href="https://defillama.com/protocol/soy-finance" target="_blank" ><Pulse width="38px" height="38px"/></StyledLi2>
                        </Row3>             
                    </div>
                </Flex>
                <BkImage2 src={Assets.footerback} alt="" />
            </WebDiv>
        </Footer>
    )
}


const Footer = styled.div`
    width: 100%;
    padding: 0px;
    position: relative;
    z-index: 9999999;
    @media screen and (max-width: 768px) {
        margin-top: -80px;
    }
    @media screen and (max-width: 649px) {
        margin-top: -100px;
    }
    @media screen and (max-width: 611px) {
        margin-top: -150px;
    }
    @media screen and (max-width: 536px) {
        margin-top: -200px;
    }
    @media screen and (max-width: 454px) {
        margin-top: -250px;
    }
    @media screen and (max-width: 383px) {
        margin-top: -280px;
    }
    @media screen and (max-width: 327px) {
        margin-top: -300px;
    }
`;
const Spacer2 = styled.div`
    display: none;
    @media screen and (max-width: 1224px) {
        display: block;
        height: 50px;
    }
    @media screen and (max-width: 768px) {
        display: none;
    }
`
const WebDiv = styled.div`
    display: block;
    width: 100%;
    position: relative;
    @media screen and (max-width: 1220px) {
        display: none;
    }
`
const RightsdivWeb = styled.div`
    display: block;
    @media screen and (max-width: 768px) {
        display: none;
    }
`
const RightsdivMob = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
    }
`
const Itemdiv = styled.div`
    @media screen and (max-width: 768px) {
        margin-left: auto;
        margin-right: auto;
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
const Itemdiv2 = styled.div`
    @media screen and (max-width: 768px) {
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
const BkImage = styled.div`
    // position: absolute;
    margin-top: -30px;
    width: 100%;
    z-index: 1000;
    background-image: url(${Assets.footerback});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: none;
    @media screen and (max-width: 1220px) {
        display: block;
    }
    @media screen and (max-width: 768px) {
        background-image: url(${Assets.footermob});
    }
`
const BkImage2 = styled.img`
    position: absolute;
    top: -30px;
    width: 100%;
    z-index: 1;
    object-fit: cover;
`
const Image = styled.img`
    @media screen and (max-width: 768px) {
        margin-left: auto;
    }
`
const Flex = styled.div`
    width: 100%;
    // height: 100%;
    display: flex;
    justify-content: space-between;
    padding: 100px 12% 50px;
    position: relative;
    z-index: 2;
    @media (max-width: 1224px) {
        flex-direction: column;
        // align-items: center;
    }
    @media (max-width: 768px) {
        padding: 100px 20px 50px;
    }
`
const Row = styled.div`
    display: flex;
    justify-content: space-between;
`
const Row3 = styled.div`
    display: flex;
`
const Row2 = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 1204px) {
        margin-top: 50px;
        // width: 60%;
    }
    @media screen and (max-width: 920px) {
        // width: 80%;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
        flex-direction: column;
    }
`
const Text = styled.p<{align?: string}>`
    font-family: ${Theme.fonts.text};
    font-size: 16px;
    line-height: 18.56px;
    color: ${Theme.colors.white};
    white-space: pre-line;
    text-align: ${({align})=>align};
    @media screen and (max-width: 768px) {
        font-size: 16px;
        text-align: center;
    }
`;

export default PageFooter;
