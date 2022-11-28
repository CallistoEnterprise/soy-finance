import React from 'react'
import styled from 'styled-components'
import { ExternalLink } from 'components/Svg'
import { Theme } from 'constants/theme'
import { Assets } from 'constants/images'
import './PageHeader.scss'
import { useTranslation } from 'contexts/Localization'
import { languages } from 'constants/localization/languages'
import { PageHeaderProps } from './types'

const Navbar = styled.div``
const Nav = styled.div``
const NavDropdown = styled.div``

const langTitle = {
  'en-US': 'EN',
  'zh-CN': 'CH',
  'zh-TW': 'TW',
  'ru-RU': 'RU',
  'uk-UA': 'UK',
  'ko-KR': 'KO',
}

const PageHeader: React.FC<PageHeaderProps> = () => {
  const { currentLanguage, setLanguage, t } = useTranslation()

  const handleChangeLang = (lg) => {
    setLanguage(languages[`${lg}`])
  }

  return (
    <Navbar>
      <Navbar>
        <Logo>
          <LogoImg src={Assets.logo} className="App-logo" alt="Soy Finance Logo" width={135} />
        </Logo>
      </Navbar>
      <Navbar aria-controls="responsive-navbar-nav" />
      <Navbar id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Li>
            <NavDropdown title={t('Soy Finance')} id="collasible-nav-dropdown">
              <a href="/roadmap">{t('Roadmap')}</a>
              <a href="/tokenomic">{t('SOY Tokenomics')}</a>
              <a href="/safelist">{t('Safelisting')}</a>
              <a href="/airdrop">{t('SOY Airdrop')}</a>
              <a href="https://clo.click/how_to" target="_blank" rel="noreferrer noopener">
                <div style={{ display: 'flex' }}>
                  {t('Tutorials')}&nbsp;
                  <ExternalLink width={14} />
                </div>{' '}
              </a>
              <a href="https://bullsinvesting.club/" target="_blank" rel="noreferrer noopener">
                <div style={{ display: 'flex' }}>
                  {t('BUSDT Stablecoin')}&nbsp;
                  <ExternalLink width={14} />
                </div>
              </a>
            </NavDropdown>
          </Li>
          <Li>
            <a href="https://bridge.soy.finance/" target="_blank" rel="noreferrer noopener">
              {t('SOY Bridge')}
            </a>
          </Li>
          {/* <LiButton href="https://app.soy.finance/#/swap" target="_blank">
            {t('Launch Soy Finance')}
          </LiButton> */}
          <LiButton href="/airdrop">{t('SOY Airdrop')}</LiButton>
          <Li>
            <NavDropdown title={langTitle[`${currentLanguage.locale}`]} id="collasible-nav-dropdown">
              <NavDropdown onClick={() => handleChangeLang('en-US')}>EN</NavDropdown>
              <NavDropdown onClick={() => handleChangeLang('zh-CN')}>CH</NavDropdown>
              <NavDropdown onClick={() => handleChangeLang('zh-TW')}>TW</NavDropdown>
              <NavDropdown onClick={() => handleChangeLang('ru-RU')}>RU</NavDropdown>
              <NavDropdown onClick={() => handleChangeLang('uk-UA')}>UK</NavDropdown>
              <NavDropdown onClick={() => handleChangeLang('ko-KR')}>KO</NavDropdown>
            </NavDropdown>
          </Li>
        </Nav>
      </Navbar>
    </Navbar>
  )
}

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  @media (max-width: 768px) {
  }
`

const LogoImg = styled.img`
  z-index: 1;
  margin-left: 20px;
  min-width: 135px;
  max-width: 135px;
  @media screen and (max-width: 1050px) {
  }
  @media (max-width: 510px) {
  }
`
const Li = styled.div`
  display: flex;
  align-items: center;
  color: ${Theme.colors.primary};
  font-size: 18px;
  padding: 0 20px;
  z-index: 1500;
  @media (max-width: 1300px) {
    padding: 0 10px;
  }
  @media (max-width: 1160px) {
    padding: 0 5px;
  }
  @media (max-width: 1100px) {
    padding: 0;
  }
`
const LiButton = styled.a`
  color: white;
  background-color: ${Theme.colors.bgscondary};
  font-size: 16px;
  font-weight: 700;
  font-family: ${Theme.fonts.text};
  height: 30px;
  padding: 5px 20px;
  padding-top: 6px;
  border-radius: 30px;
  text-decoration: none !important;
  white-space: nowrap;
  z-index: 9;
  margin-top: 3px;
  margin-left: 20px;
  margin-right: 20px;
  &:hover {
    color: #000;
  }
  @media screen and (max-width: 768px) {
    display: none;
    margin: 0px;
    max-width: 180px;
  }
`
export default PageHeader
