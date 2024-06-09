import React, { FC } from 'react'
import { Typography } from '@material-tailwind/react'
import { PlantationSection } from '../../constants'
import { fakePlantation, StarIcon } from '@design-system/ui'
interface PlantationSectionProps {
  sectionData: PlantationSection
}

const PlantationSection: FC<PlantationSectionProps> = ({ sectionData }) => {
  const { title, buttonAdd, plantations } = sectionData
  return (
    <div>
      <div className="flex justify-between mb-8">
        <Typography children={title} className="font-normal text-3xl text-gr-800" />
        <button className="rounded-[8px] px-3 py-1.5 bg-gr-100 font-normal text-base text-tip_extra_bold">
          Смотреть все плантации {buttonAdd}
        </button>
      </div>
      <div className="flex flex-wrap gap-x-5 gap-y-5">
        {plantations.map((plant, idx) => {
          const { logo, newPlant, name, specification, rating } = plant
          return (
            <div className="flex gap-3 w-[386px] rounded-base p-3 bg-body items-center">
              <img alt="plantation logo" src={logo} />
              <div className="flex flex-col gap-3 w-full">
                <div className="flex justify-between font-normal !text-xsm">
                  {newPlant && <button className="rounded-[4px] px-1 py-0.5 bg-pk-400  text-primary">Новая</button>}
                  <div className="flex items-center gap-1 h-4">
                    <StarIcon />
                    <Typography children={rating} className="text-tip font-normal !text-xsm" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Typography children={name} className="font-light text-sm text-tip_extra_bold" />
                  <Typography children={specification} className="font-normal text-xs text-t-disabled" />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PlantationSection
