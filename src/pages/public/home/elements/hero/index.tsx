import React from 'react'
import { BackgroundImage, HeroCaption, HeroContainer, HeroCustomButton, HeroWrapper, MobileBackgroundImage, Rect } from './style'
import { Flex, Heading, P } from '@/components/basic';
import HeroBackground from '@/assets/img/hero_background.png';
import MobileHeroBackground from '@/assets/img/mobile-hero.png';

const Hero = () => {
  return (
    <HeroContainer>
        <Rect />
        <HeroWrapper>
            <Flex $style={{
                fDirection: 'column',
                gap: '2.9rem',
                w: '100%'
            }}>
                <Flex $style={{ fDirection: 'column', maxW: '680px', w: '100%', gap: '42px' }}>
                    <Heading level={1} $style={{ color: 'header' }}>Open-source development and a growing ecosystem of users</Heading>
                    <HeroCaption>Chainlink is driven by a large open-source community of data providers, node operators, smart contract developers, researchers, security auditors, and more.</HeroCaption>
                </Flex>
                <Flex $style={{ 
                    gap: '1rem',
                    queries: {
                        479: {
                            fDirection: 'column',
                            w: '100%'
                        }
                    }
                }}>
                    <HeroCustomButton bg='first'>Monetize your API</HeroCustomButton>
                    <HeroCustomButton bg='second'>Run a chainlink node</HeroCustomButton>
                </Flex>
            </Flex>
            <BackgroundImage src={HeroBackground} alt='' />
        </HeroWrapper>
        <MobileBackgroundImage src={MobileHeroBackground} alt='' />
    </HeroContainer>
  )
}

export default Hero