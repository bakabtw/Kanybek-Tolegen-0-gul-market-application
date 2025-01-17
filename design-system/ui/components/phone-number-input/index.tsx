import { Button, Menu, MenuHandler, MenuItem, MenuList, Input } from '@material-tailwind/react'
import React, { FC, useState } from 'react'
import { countries } from './constants'
import { Label } from '../label'
import { PatternFormat } from 'react-number-format'
import './style.css'
import { phoneNumberSchema } from './postSchema'
import { ZodError } from 'zod'
import { ErrorText } from '../error-text'

export const PhoneNumberInput: FC<{
  name: string
  error: string
  handleError: ({ name, errorMessage }: { name: string; errorMessage: string }) => void
}> = ({ name, error, handleError }) => {
  const [countryId, setCountryId] = useState(0)

  return (
    <div className="flex flex-col w-full gap-2">
      <Label label="Номер телефона" />
      <div className="flex items-start w-full gap-2">
        <Menu placement="bottom-start">
          {countries[countryId] ? (
            <MenuHandler>
              <Button
                ripple={false}
                variant="text"
                color="blue-gray"
                className="flex items-center gap-2 rounded-md border border-blue-gray-200 min-w-[108px] bg-gray-100 pl-3"
              >
                <img
                  src={countries[countryId]?.flags.svg}
                  alt={countries[countryId]?.name}
                  className="h-4 w-4 rounded-full object-cover"
                />
                {countries[countryId]?.countryCallingCode}
              </Button>
            </MenuHandler>
          ) : null}
          <MenuList className="max-h-[20rem] max-w-[18rem]">
            {countries.map(({ name, flags, countryCallingCode }, index) => {
              return (
                <MenuItem
                  key={name}
                  value={name}
                  className="flex items-center gap-2"
                  onClick={() => setCountryId(index)}
                >
                  <img src={flags.svg} alt={name} className="h-5 w-5 rounded-full object-cover" />
                  {name} <span className="ml-auto">{countryCallingCode}</span>
                </MenuItem>
              )
            })}
          </MenuList>
        </Menu>
        <div className="flex flex-col gap-[4px] w-full">
          <PatternFormat
            className="rounded-md border border-gray-300 w-full"
            name={name}
            format="(###) ### ## ##"
            customInput={Input}
            onBlur={e => {
              const { value } = e.target
              try {
                phoneNumberSchema.parse(value)
                handleError({ name, errorMessage: '' })
              } catch (err) {
                if (err instanceof ZodError) {
                  const errorMessage = err.errors[0]?.message
                  errorMessage && handleError({ name, errorMessage })
                }
              }
            }}
            error={Boolean(error)}
            crossOrigin=""
          />
          {error ? <ErrorText text={error} /> : null}
        </div>
      </div>
    </div>
  )
}

// import React, { useState } from 'react'
// import PhoneInput from 'react-phone-input-2'
// import 'react-phone-input-2/lib/style.css'
// import { Label } from '../label'

// export const PhoneNumberValidation = () => {
//   const [phoneNumber, setPhoneNumber] = useState('')
//   const [valid, setValid] = useState(true)

//   const handleChange = (value: string) => {
//     setPhoneNumber(value)
//     setValid(validatePhoneNumber(value))
//   }

//   const validatePhoneNumber = (phoneNumber: string) => {
//     const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/

//     return phoneNumberPattern.test(phoneNumber)
//   }

//   return (
//     <div className="flex flex-col">
//       <Label label="Номер телефона" />
//       <PhoneInput
//         country={'kz'}
//         value={phoneNumber}
//         onChange={handleChange}
//         inputProps={{
//           required: true
//         }}
//       />
//     </div>
//   )
// }
