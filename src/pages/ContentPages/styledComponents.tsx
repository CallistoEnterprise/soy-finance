import styled from 'styled-components'
import { Theme } from 'constants/theme'

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
export const TopDiv = styled.div`
  width: 70%;
  @media screen and (max-width: 1461px) {
    width: 100%;
  }
`
export const TopDivFullwidth = styled.div`
  width: 100%;
`
export const Div = styled.div`
  @media screen and (max-width: 1062px) {
    margin-top: 50px;
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
export const Text2 = styled.p<{ color: string }>`
  color: ${({ color }) => color};
  font-family: ${Theme.fonts.text};
  font-weight: 400;
  font-size: 21px;
  line-height: 30px;
  white-space: pre-line;
  word-break: break-all;
  display: inline;
  @media screen and (max-width: 1428px) {
  }
  @media screen and (max-width: 768px) {
  }
`
export const Text3 = styled.p<{ color: string }>`
  color: ${({ color }) => color};
  font-family: ${Theme.fonts.text};
  font-weight: 400;
  font-size: 21px;
  line-height: 30px;
  white-space: nowrap;
  @media screen and (max-width: 768px) {
  }
`
export const StyledLi = styled.a<{ color: string }>`
  color: ${({ color }) => color};
  font-family: ${Theme.fonts.text};
  font-weight: 400;
  font-size: 21px;
  line-height: 30px;
  white-space: pre-line;
  word-break: break-all;
  display: inline;
`
export const Row = styled.div`
  display: flex;
  padding-left: 50px;
  align-items: center;
  width: 70%;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 20px;
  }
`
export const RowFullwidth = styled(Row)`
  width: 100%;
`
export const Row2 = styled.div`
  display: flex;
  padding-left: 50px;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding-left: 20px;
  }
`
export const Row22 = styled.div`
  padding-left: 118px;
  @media screen and (max-width: 768px) {
    padding-left: 58px;
  }
`
export const Row33 = styled.div`
  display: flex;
  width: 100%;
`
export const Circle = styled.div`
  min-width: 18px;
  min-height: 18px;
  border-radius: 9px;
  background-color: ${Theme.colors.bgscondary};
  margin-right: 50px;
`
export const BottomDiv = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1062px) {
    flex-direction: column;
    width: 100%;
  }
`
