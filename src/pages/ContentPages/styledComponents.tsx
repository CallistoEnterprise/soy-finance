import styled from 'styled-components'
import { Theme } from 'constants/theme'

/* Container */

export const Container = styled.div`
  width: 100%;
  padding: 150px 15% 100px;
  background-color: white;
  @media screen and (max-width: 768px) {
    padding: 150px 20px 200px;
  }
  @media screen and (max-width: 390px) {
    padding: 150px 20px 300px;
  }
`

/* Text */

export const Title = styled.p<{ color: string }>`
  color: ${({ color }) => color};
  font-family: ${Theme.fonts.text};
  font-weight: 700;
  font-size: 73.5px;
  line-height: 88.2px;
  letter-spacing: 5%;
  text-align: center;
  @media screen and (max-width: 1102px) {
    font-size: 50px;
  }
  @media screen and (max-width: 768px) {
    font-size: 50px;
    line-height: 60px;
  }
  @media screen and (max-width: 573px) {
    font-size: 40px;
    line-height: 60px;
  }
`
export const SubTitle = styled.p<{ color: string }>`
  color: ${({ color }) => color};
  font-family: ${Theme.fonts.text};
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  letter-spacing: 5%;
  @media screen and (max-width: 768px) {
  }
`
export const Text = styled.p<{ color: string }>`
  color: ${({ color }) => color};
  font-family: ${Theme.fonts.text};
  font-weight: 400;
  font-size: 21px;
  line-height: 30px;
  @media screen and (max-width: 768px) {
  }
`
export const TextInline = styled(Text)`
  white-space: pre-line;
  word-break: break-all;
  display: inline;
`
export const TextNowrap = styled(Text)`
  white-space: nowrap;
`

/* Divs and spacing */
export const TopDiv = styled.div`
  width: 70%;
  @media screen and (max-width: 1461px) {
    width: 100%;
  }
`
export const TopDivFullwidth = styled.div`
  width: 100%;
`
export const SpacedDivOnSmallScreens = styled.div`
  @media screen and (max-width: 1062px) {
    margin-top: 50px;
  }
`
export const BottomDiv = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1062px) {
    flex-direction: column;
    width: 100%;
  }
`

export const RowBaseFlex = styled.div`
  display: flex;
  padding-left: 50px;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding-left: 20px;
  }
`
export const RowReadable = styled(RowBaseFlex)`
  width: 70%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const RowFullwidth = styled(RowBaseFlex)`
  width: 100%;
`

export const RowLeftPadded = styled.div`
  padding-left: 118px;
  @media screen and (max-width: 768px) {
    padding-left: 58px;
  }
`
export const RowStraight = styled.div`
  display: flex;
  width: 100%;
`

/* Other elements */

export const Circle = styled.div`
  min-width: 18px;
  min-height: 18px;
  border-radius: 9px;
  background-color: ${Theme.colors.bgscondary};
  margin-right: 50px;
`
