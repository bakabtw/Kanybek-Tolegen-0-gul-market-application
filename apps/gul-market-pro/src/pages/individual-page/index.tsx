import React, { useState, FC } from 'react'
import { IconButton, Typography } from '@material-tailwind/react'
import { StepHeader } from '../../components/step-header'
import { configs } from './constants'
import { BrandButton, Container, Layout } from '@design-system/ui'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@design-system/ui'
import { GMStepper } from '../../components/gm-stepper'
import './style.css'

export const IndividualPage: FC = props => {
  const [activeStep, setActiveStep] = useState(0)
  const [isLastStep, setIsLastStep] = useState(false)
  const [isFirstStep, setIsFirstStep] = useState(false)

  const handleNext = () => !isLastStep && setActiveStep(cur => cur + 1)
  const handlePrev = () => !isFirstStep && setActiveStep(cur => cur - 1)

  const { steps_content, stepper_configs } = configs

  const content = steps_content[activeStep]!

  const StepForm = content.stepForm

  return (
    <Layout>
      <Layout.Content>
        <div className="flex flex-col items-center">
          <GMStepper
            activeStep={activeStep}
            stepper_configs={stepper_configs}
            onStepChange={setActiveStep}
            isLastStep={setIsLastStep}
            isFirstStep={setIsFirstStep}
          />
          <StepHeader title={content.title} description={content.description} />
          <div>
            <Container className={'flex-col mb-6 min-w-[630px]'}>
              <StepForm />
            </Container>
            <div className="flex justify-between items-center w-full">
              {activeStep === 0 ? (
                <Link to="/choose_role">
                  <div className={'flex items-center gap-2'}>
                    <IconButton variant="text" className="w-4 h-4">
                      <ChevronLeftIcon alt="svg" />
                    </IconButton>
                    <Typography children="К выбору роли" />
                  </div>
                </Link>
              ) : (
                <button onClick={handlePrev}>
                  <div className={'flex items-center gap-2'}>
                    <IconButton variant="text" className="w-4 h-4">
                      <ChevronLeftIcon alt="svg" />
                    </IconButton>
                    <Typography children="К предыдущему шагу" />
                  </div>
                </button>
              )}
              {!isLastStep ? (
                <BrandButton onClick={handleNext}>Далее</BrandButton>
              ) : (
                <Link to="">
                  <BrandButton>Завершить создание аккаунта</BrandButton>
                </Link>
              )}
            </div>
          </div>
        </div>
      </Layout.Content>
    </Layout>
  )
}