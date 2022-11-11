import React from 'react'
import styled from 'styled-components';
import Safelistheader from 'components/PageHeader/Safelistheader';
import PageFooter from 'components/PageFooter';
import AirdropContent from './AirdropContent';
import 'aos/dist/aos.css';

const Container = styled.div`
    height: 100%;
    position: relative;
    overflow: hidden;
`
const Tokenomic: React.FC = () => {

    return (
        <Container>
            <Safelistheader />
            <AirdropContent />
            <PageFooter />
        </Container>
    )
}

export default Tokenomic;
