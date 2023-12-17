import React from 'react'
import { BrandContainer, DataProviderContainer, DataProviderWrapper, HeaderCaption, ProviderAction, ProviderCustomButton, Subheader } from './style'
import { Flex, Grid, Heading, P } from '@/components/basic'
import Image from '@/components/basic/img';

import ChainlinkImage from '@/assets/img/chainlink-image.png';
import BraveNewCoin from '@/assets/img/brave_new_coin.png';
import CoinGecko from '@/assets/img/coin_gecko.png';
import Ncfx from '@/assets/img/ncfx.png';
import Kaiko from '@/assets/img/kaiko.png';
import CryptoCompare from '@/assets/img/crypto_compare.png';
import Everpedia from '@/assets/img/everpedia.png';
import AlphaVantage from '@/assets/img/alpha_vantage.png';
import Binance from '@/assets/img/binance.png';
import Huobi from '@/assets/img/huobi.png';
import DigitalAssetResearch from '@/assets/img/digital_asset_reserach.png';
import TwoSigma from '@/assets/img/two_sigma.png';
import Galaxy from '@/assets/img/galaxy.png';

const DataProvider = () => {
  return (
    <DataProviderContainer>
        <DataProviderWrapper>
            <Flex $style={{
                fDirection: 'column',
                gap: '76px',
                w: '100%',
                mb: '72px'
            }}>
                <Flex $style={{ fDirection: 'column', vAlign: 'center', gap: '28px', w: '100%' }}>
                    <Heading level={2} $style={{ color: 'header', align: 'center' }}>Become a data provider</Heading>
                    <HeaderCaption align='center'>Sell your existing data and API services to the most widely used oracle network, quickly expanding your business model into the emerging smart contract economy with minimal costs.</HeaderCaption>
                </Flex>
                <Flex $style={{
                    hAlign: 'center',
                    vAlign: 'center',
                    gap: '4rem',
                    queries: {
                        991: {
                            fDirection: 'column',
                            vAlign: 'flex-start',
                            gap: '2rem'
                        },
                        768: {
                            vAlign: 'center'
                        }
                    }
                }}>
                    <Image src={ChainlinkImage} alt='' $style={{ w: '400px', h: '300px' }} />
                    <Flex $style={{ fDirection: 'column', gap: '28px' }}>
                        <P $style={{
                            size: '18px',
                            color: 'header',
                            queries: {
                                768: {
                                    align: 'center'
                                }
                            }
                        }}>Sell your data with Chainlink</P>
                        <Flex $style={{
                            maxW: '400px',
                            queries: {
                                991: {
                                    maxW: '100%'
                                }
                            }
                        }}>
                            <HeaderCaption>Data providers can sell data through their existing APIs to the Chainlink Network in less than an hour. Chainlink abstracts away all the complexities around running nodes and handling cryptocurrency payments, allowing data providers to monetize their existing infrastructure and focus solely on providing quality data.</HeaderCaption>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Flex $style={{
                fDirection: 'column',
                vAlign: 'center',
                gap: '40px'
            }}>
                <Subheader>Adopted by leading data providers</Subheader>
                <BrandContainer>
                    <Grid $style={{ columns: '4', gap: '32px' }}>
                        <Flex $style={{ hAlign: 'center', vAlign: 'center' }}>
                            <Image src={BraveNewCoin} alt='' $style={{ w: 'auto', h: '100%', maxH: '31px', bradius: '0' }} />
                        </Flex>
                        <Flex $style={{ hAlign: 'center', vAlign: 'center' }}>
                            <Image src={CoinGecko} alt='' $style={{ w: 'auto', h: '100%', maxW: '100%', maxH: '31px', bradius: '0' }} />
                        </Flex>
                        <Flex $style={{ hAlign: 'center', vAlign: 'center' }}>
                            <Image src={Ncfx} alt='' $style={{ w: 'auto', h: '100%', maxW: '100%', maxH: '31px', bradius: '0' }} />
                        </Flex>
                        <Flex $style={{ hAlign: 'center', vAlign: 'center' }}>
                            <Image src={Kaiko} alt='' $style={{ w: 'auto', h: '100%', maxW: '100%', maxH: '31px', bradius: '0' }} />
                        </Flex>
                        <Flex $style={{ hAlign: 'center', vAlign: 'center' }}>
                            <Image src={CryptoCompare} alt='' $style={{ w: 'auto', h: '100%', maxW: '100%', maxH: '31px', bradius: '0' }} />
                        </Flex>
                        <Flex $style={{ hAlign: 'center', vAlign: 'center' }}>
                            <Image src={Everpedia} alt='' $style={{ w: 'auto', h: '100%', maxW: '100%', maxH: '31px', bradius: '0' }} />
                        </Flex>
                        <Flex $style={{ hAlign: 'center', vAlign: 'center' }}>
                            <Image src={AlphaVantage} alt='' $style={{ w: 'auto', h: '100%', maxW: '100%', maxH: '31px', bradius: '0' }} />
                        </Flex>
                        <Flex $style={{ hAlign: 'center', vAlign: 'center' }}>
                            <Image src={Binance} alt='' $style={{ w: 'auto', h: '100%', maxW: '100%', maxH: '31px', bradius: '0' }} />
                        </Flex>
                        <Flex $style={{ hAlign: 'center', vAlign: 'center' }}>
                            <Image src={Huobi} alt='' $style={{ w: 'auto', h: '100%', maxW: '100%', maxH: '31px', bradius: '0' }} />
                        </Flex>
                        <Flex $style={{ hAlign: 'center', vAlign: 'center' }}>
                            <Image src={DigitalAssetResearch} alt='' $style={{ w: 'auto', h: '100%', maxW: '100%', maxH: '31px', bradius: '0' }} />
                        </Flex>
                        <Flex $style={{ hAlign: 'center', vAlign: 'center' }}>
                            <Image src={TwoSigma} alt='' $style={{ w: 'auto', h: '100%', maxW: '100%', maxH: '31px', bradius: '0' }} />
                        </Flex>
                        <Flex $style={{ hAlign: 'center', vAlign: 'center' }}>
                            <Image src={Galaxy} alt='' $style={{ w: 'auto', h: '100%', maxW: '100%', maxH: '31px', bradius: '0' }} />
                        </Flex>
                    </Grid>
                </BrandContainer>
            </Flex>
            <ProviderAction>
                <ProviderCustomButton>Monetize your API</ProviderCustomButton>
                <P $style={{ size: '16px', color: 'primary', decorator: 'underline' }}>Learn more</P>
            </ProviderAction>
        </DataProviderWrapper>
    </DataProviderContainer>
  )
}

export default DataProvider