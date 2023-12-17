import React from 'react'
import { BottomRect, BrandContainer, HeaderCaption, NodeOperatorContainer, NodeOperatorWrapper, Subheader, TopRect } from './style'
import { Flex, Grid, Heading, P } from '@/components/basic'
import Image from '@/components/basic/img';

import ChainlinkImage from '@/assets/img/chainlink-image.png';
import T from '@/assets/img/t.svg';
import Certusone from '@/assets/img/certusone.png';
import Linkpool from '@/assets/img/linkpool.png';
import Piertwo from '@/assets/img/piertwo.svg';
import Fiewsio from '@/assets/img/fiews.io.png';
import Chorus from '@/assets/img/chorus.png';
import SNZ from '@/assets/img/snz.png';
import Wetez from '@/assets/img/wetez.png';
import Simplyvc from '@/assets/img/simply_vc.png';
import Stakefish from '@/assets/img/stake-fish.png';
import Chainlayer from '@/assets/img/chainlayer.png';
import Anyblock from '@/assets/img/anyblock.png';
import { ProviderCustomButton } from '../provider/style';

const NodeOperator = () => {
  return (
    <NodeOperatorContainer>
        <NodeOperatorWrapper>
        <Flex $style={{
            fDirection: 'column',
            gap: '76px',
            w: '100%',
            mb: '72px'
        }}>
            <Flex $style={{ fDirection: 'column', vAlign: 'center', gap: '28px', w: '100%' }}>
                <Heading level={2} $style={{ color: 'header', align: 'center' }}>Become a node operator</Heading>
                <HeaderCaption align='center'>Provide oracle computation directly to smart contracts across any blockchain and earn revenue by running critical data infrastructure required for blockchains’ success.</HeaderCaption>
            </Flex>
            <Flex $style={{
                hAlign: 'center',
                vAlign: 'center',
                gap: '4rem',
                queries: {
                    991: {
                        fDirection: 'column-reverse',
                        vAlign: 'flex-start',
                        gap: '2rem'
                    },
                    768: {
                        vAlign: 'center'
                    }
                }
            }}>
                <Flex $style={{ fDirection: 'column', gap: '28px' }}>
                    <P $style={{
                        size: '18px',
                        color: 'header',
                        queries: {
                            768: {
                                align: 'center'
                            }
                        }
                    }}>Operate a Chainlink node</P>
                    <Flex $style={{
                        maxW: '400px',
                        queries: {
                            991: {
                                maxW: '100%'
                            }
                        }
                    }}>
                        <HeaderCaption>Chainlink node operators are the backbone of the Chainlink Network, running and maintaining oracle infrastructure that helps ensure that smart contracts across every blockchain have secure access to the highest quality real-world data.</HeaderCaption>
                    </Flex>
                </Flex>
                <Image src={ChainlinkImage} alt='' $style={{ w: '400px', h: '300px' }} />
            </Flex>
        </Flex>
        <Flex $style={{ fDirection: 'column', vAlign: 'center', gap: '40px' }}>
            <Subheader>Supported by leading node operators</Subheader>
            <BrandContainer>
                <Grid $style={{ columns: '4', gap: '32px' }}>
                    <Flex $style={{ hAlign: 'center', vAlign: 'center' }}>
                        <Image src={T} alt='' $style={{ w: 'auto', h: '100%', maxH: '31px', bradius: '0' }} />
                    </Flex>
                    <Flex $style={{ hAlign: 'center', vAlign: 'center' }}>
                        <Image src={Certusone} alt='' $style={{ w: 'auto', h: '100%', maxW: '100%', maxH: '31px', bradius: '0' }} />
                    </Flex>
                    <Flex $style={{ hAlign: 'center', vAlign: 'center' }}>
                        <Image src={Linkpool} alt='' $style={{ w: 'auto', h: '100%', maxW: '100%', maxH: '31px', bradius: '0' }} />
                    </Flex>
                    <Flex $style={{ hAlign: 'center', vAlign: 'center' }}>
                        <Image src={Piertwo} alt='' $style={{ w: 'auto', h: '100%', maxW: '100%', maxH: '31px', bradius: '0' }} />
                    </Flex>
                    <Flex $style={{ hAlign: 'center', vAlign: 'center' }}>
                        <Image src={Fiewsio} alt='' $style={{ w: 'auto', h: '100%', maxW: '100%', maxH: '31px', bradius: '0' }} />
                    </Flex>
                    <Flex $style={{ hAlign: 'center', vAlign: 'center' }}>
                        <Image src={Chorus} alt='' $style={{ w: 'auto', h: '100%', maxW: '100%', maxH: '31px', bradius: '0' }} />
                    </Flex>
                    <Flex $style={{ hAlign: 'center', vAlign: 'center' }}>
                        <Image src={SNZ} alt='' $style={{ w: 'auto', h: '100%', maxW: '100%', maxH: '31px', bradius: '0' }} />
                    </Flex>
                    <Flex $style={{ hAlign: 'center', vAlign: 'center' }}>
                        <Image src={Wetez} alt='' $style={{ w: 'auto', h: '100%', maxW: '100%', maxH: '31px', bradius: '0' }} />
                    </Flex>
                    <Flex $style={{ hAlign: 'center', vAlign: 'center' }}>
                        <Image src={Simplyvc} alt='' $style={{ w: 'auto', h: '100%', maxW: '100%', maxH: '31px', bradius: '0' }} />
                    </Flex>
                    <Flex $style={{ hAlign: 'center', vAlign: 'center' }}>
                        <Image src={Stakefish} alt='' $style={{ w: 'auto', h: '100%', maxW: '100%', maxH: '31px', bradius: '0' }} />
                    </Flex>
                    <Flex $style={{ hAlign: 'center', vAlign: 'center' }}>
                        <Image src={Chainlayer} alt='' $style={{ w: 'auto', h: '100%', maxW: '100%', maxH: '31px', bradius: '0' }} />
                    </Flex>
                    <Flex $style={{ hAlign: 'center', vAlign: 'center' }}>
                        <Image src={Anyblock} alt='' $style={{ w: 'auto', h: '100%', maxW: '100%', maxH: '31px', bradius: '0' }} />
                    </Flex>
                </Grid>
            </BrandContainer>
        </Flex>
        <Flex $style={{
            vAlign: 'center',
            hAlign: 'center',
            gap: '50px',
            w: '100%',
            queries: {
                479: {
                    fDirection: 'column'
                }
            }
        }}>
            <ProviderCustomButton>Monetize your API</ProviderCustomButton>
            <P $style={{ size: '16px', color: 'primary', decorator: 'underline' }}>Learn more</P>
        </Flex>
        </NodeOperatorWrapper>
        <TopRect />
        <BottomRect />
    </NodeOperatorContainer>
  )
}

export default NodeOperator