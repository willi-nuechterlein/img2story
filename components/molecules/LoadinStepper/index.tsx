import React, { useState, useEffect } from 'react'
import { styled } from 'stitches.config'
import LoadingSpinner from 'components/atoms/LoadingSpinner'
import { HiCheckCircle } from 'react-icons/hi'
import { Box } from 'components/atoms/Box'
import { Typography } from 'components/atoms/Typography'
import { useAutoAnimate } from '@formkit/auto-animate/react'

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start'
})

const Step = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '$6'
})

type StepStatus = 'loading' | 'completed' | 'notStarted'

interface LoadingStepperProps {
  steps: string[]
  currentStep?: number
}

const LoadingStepper: React.FC<LoadingStepperProps> = ({
  steps,
  currentStep
}) => {
  const [parent] = useAutoAnimate()

  const [stepStatuses, setStepStatuses] = useState<StepStatus[]>([])

  useEffect(() => {
    if (currentStep === undefined) {
      return
    }
    const newStepStatuses = steps.map((_, index) => {
      if (index < currentStep) {
        return 'completed'
      } else if (index === currentStep) {
        return 'loading'
      } else {
        return 'notStarted'
      }
    })

    setStepStatuses(newStepStatuses)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStep])

  return (
    <Container
      ref={parent}
      css={{
        marginTop: '$3',
        width: '12rem'
      }}
    >
      {steps.map((step, index) => {
        return stepStatuses[index] === 'loading' ||
          stepStatuses[index] === 'completed' ? (
          <Step key={step}>
            <Box
              css={{
                width: '4rem'
              }}
            >
              {stepStatuses[index] === 'loading' ? (
                <Box>
                  <LoadingSpinner size={20} />
                </Box>
              ) : (
                <HiCheckCircle size={25} color="$green" />
              )}
            </Box>
            <Typography
              css={{
                width: '100%',
                marginLeft: '$4',
                fontSize: '$6',
                color: '$secondary8'
              }}
            >
              {step}
            </Typography>
          </Step>
        ) : null
      })}
    </Container>
  )
}

export default LoadingStepper
