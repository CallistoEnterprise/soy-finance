import React from 'react'
import styled from 'styled-components';
import PageHeader from 'components/PageHeader';
import PageFooter from 'components/PageFooter';
import SafelistContent from './SafelistContent';
import 'aos/dist/aos.css';

const Container = styled.div`
    height: 100%;
    position: relative;
    overflow: hidden;
`
const Safelist: React.FC = () => {

    return (
        <Container>
            <PageHeader />
            <SafelistContent />
            <PageFooter />
        </Container>
    )
}

export default Safelist;
