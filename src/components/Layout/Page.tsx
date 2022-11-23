import React from 'react'
import PageHeader from 'components/PageHeader'
import PageFooter from 'components/PageFooter'
import Container from './Container'

export interface PageProps {
  centerize?: boolean,
  hideFooter?: boolean
}

const Page:React.FC<PageProps> = ({centerize, hideFooter, children}) => {
  return (
    <Container>
      <PageHeader centerize={centerize} />
      {children}
      {!hideFooter && <PageFooter />}
    </Container>
  )
}

export default Page
