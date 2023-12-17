import React from 'react'
import { CardContainer, CommunityContainer, CommunityWrapper, Description } from './style';
import { Flex, Grid, Heading, P } from '@/components/basic';
import Image from '@/components/basic/img';

import ChainlinkMarket from '@/assets/img/chainlink-market.png';
import Flews from '@/assets/img/flews.png';
import Ecosystem from '@/assets/img/ecosystem.png';
import { Icon } from '@/components/custom';

const Community = () => {
  return (
    <CommunityContainer>
        <CommunityWrapper>
            <Heading level={2} $style={{ color: 'header', align: 'center' }}>Community-built resources</Heading>
            <Grid $style={{
                columns: '3',
                justifyContent: 'center',
                maxW: '1100px',
                gap: '2rem',
                queries: {
                    991: {
                        columns: '2'
                    },
                    768: {
                        columns: '1'
                    }
                }
            }}>
                <CardContainer>
                    <Flex $style={{ fDirection: 'column', gap: '40px' }}>
                        <Image src={ChainlinkMarket} alt='' $style={{ w: '56px', h: '56px', bradius: '50%' }} />
                        <Flex $style={{ fDirection: 'column', gap: '28px' }}>
                            <P $style={{ size: '15px', color: 'header' }}>Chainlink Market</P>
                            <Description>Chainlink Market is a resource hub for smart contract developers, data providers, and node operators to list and discover Chainlink Network resources.</Description>
                        </Flex>
                    </Flex>
                    <Flex $style={{ vAlign: 'center', gap: '16px' }}>
                        <P $style={{ color: 'primary' }}>Browse the market</P>
                        <Icon icon="CircleArrow" />
                    </Flex>
                </CardContainer>
                <CardContainer>
                    <Flex $style={{ fDirection: 'column', gap: '40px' }}>
                        <Image src={Flews} alt='' $style={{ w: '56px', h: '56px', bradius: '50%' }} />
                        <Flex $style={{ fDirection: 'column', gap: '28px' }}>
                            <P $style={{ size: '15px', color: 'header' }}>Fiews</P>
                            <Description>Fiews is building Chainlink tools and services that offers an Ethereum as a Service (EaaS) tailored specifically for Chainlink nodes.</Description>
                        </Flex>
                    </Flex>
                    <Flex $style={{ vAlign: 'center', gap: '16px' }}>
                        <P $style={{ color: 'primary' }}>Browse the market</P>
                        <Icon icon="CircleArrow" />
                    </Flex>
                </CardContainer>
                <CardContainer>
                    <Flex $style={{ fDirection: 'column', gap: '40px' }}>
                        <Image src={Ecosystem} alt='' $style={{ w: '56px', h: '56px', bradius: '50%' }} />
                        <Flex $style={{ fDirection: 'column', gap: '28px' }}>
                            <P $style={{ size: '15px', color: 'header' }}>Chainlink Ecosystem</P>
                            <Description>Chainlink Ecosystem gives you the latest news and information about partnerships, collaborations, and integrations with the Chainlink Network.</Description>
                        </Flex>
                    </Flex>
                    <Flex $style={{ vAlign: 'center', gap: '16px' }}>
                        <P $style={{ color: 'primary' }}>Browse the market</P>
                        <Icon icon="CircleArrow" />
                    </Flex>
                </CardContainer>
            </Grid>
        </CommunityWrapper>
    </CommunityContainer>
  )
}

export default Community