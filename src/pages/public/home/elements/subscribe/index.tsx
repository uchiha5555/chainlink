import React from 'react'
import { CheckboxContainer, CustomButton, CustomInput, Label, MobileCheckboxContainer, SubscribeContainer, SubscribeWrapper } from './style'
import { Flex, Heading } from '@/components/basic'
import { Checkbox } from '@/components/custom'

const Subscribe = () => {
  return (
    <SubscribeContainer>
        <SubscribeWrapper>
            <Heading level={2} $style={{ color: 'header' }}>Get the latest Chainlink content straight to your inbox.</Heading>
            <Flex $style={{
              hAlign: 'center',
              gap: '16px',
              queries: {
                479: {
                  fDirection: 'column',
                  w: '100%'
                }
              }
            }}>
                <Flex $style={{ fDirection: 'column', gap: '16px', maxW: '415px' }}>
                    <CustomInput placeholder='Enter your email address' />
                    <CheckboxContainer>
                      <Checkbox label={<Flex $style={{ flex: '1' }}><Label>Yes, I agree to receive email communications from Chainlink.</Label></Flex>} />
                    </CheckboxContainer>
                </Flex>
                <CustomButton>Subscribe now</CustomButton>
                <MobileCheckboxContainer>
                  <Checkbox label={<Flex $style={{ flex: '1' }}><Label>Yes, I agree to receive email communications from Chainlink.</Label></Flex>} />
                </MobileCheckboxContainer>
            </Flex>
        </SubscribeWrapper>
    </SubscribeContainer>
  )
}

export default Subscribe