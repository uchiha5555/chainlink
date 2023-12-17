import React from 'react'
import { ChoiceCard, ChoiceContainer, Description, IconContainer } from './style'
import { Icon } from '@/components/custom'
import { Flex, P } from '@/components/basic'

const Choice = () => {
  return (
    <ChoiceContainer>
        <ChoiceCard>
            <IconContainer>
                <Icon icon='Command' />
            </IconContainer>
            <Flex $style={{
                fDirection: 'column',
                gap: '12px',
                queries: {
                    768: {
                        w: '100%',
                        hAlign: 'space-between'
                    }
                }
            }}>
                <P $style={{ size: '15px', color: 'header' }}>Developer resources</P>
                <Flex $style={{
                    hAlign: 'space-between',
                    vAlign: 'center',
                    gap: '40px',
                    queries: {
                        479: {
                            fDirection: 'column',
                            vAlign: 'flex-end'
                        }
                    }
                }}>
                    <Description>Tools, tutorials and technical support.</Description>
                    <Icon icon='CircleArrow' />
                </Flex>
            </Flex>
        </ChoiceCard>
        <ChoiceCard>
            <IconContainer>
                <Icon icon='UserGroup' />
            </IconContainer>
            <Flex $style={{
                fDirection: 'column',
                gap: '12px',
                queries: {
                    768: {
                        w: '100%',
                        hAlign: 'space-between'
                    }
                }
            }}>
                <P $style={{ size: '15px', color: 'header' }}>Community</P>
                <Flex $style={{
                    hAlign: 'space-between',
                    vAlign: 'center',
                    gap: '40px',
                    queries: {
                        479: {
                            fDirection: 'column',
                            vAlign: 'flex-end'
                        }
                    }
                }}>
                    <Description>Join a forward-thinking group of smart contract enthusiasts.</Description>
                    <Icon icon='CircleArrow' />
                </Flex>
            </Flex>
        </ChoiceCard>
    </ChoiceContainer>
  )
}

export default Choice