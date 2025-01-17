export type THeader = {
  label: string
  key: string
  renderCell?: (value: string | number | boolean | undefined) => Exclude<React.ReactNode, undefined>
}[]

export interface ICell {
  [key: string]: string | number | boolean
}
