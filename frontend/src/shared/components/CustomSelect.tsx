import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'

type OptionType = string | number | readonly string[] | undefined;

type Props<T> = {
    id: string,
    inputLabel: string,
    options: { [label: string]: OptionType & T },
    selectedOption: OptionType & T,
    onChange: (event: SelectChangeEvent<OptionType & T>) => void
}
const CustomSelect = <T extends string>({ id, inputLabel, options, selectedOption, onChange }: Props<T>) => {
  const labelId = id + '-label'
  return <FormControl fullWidth>
    <InputLabel id={id}>{inputLabel}</InputLabel>
    <Select
      labelId={labelId}
      id={id}
      value={selectedOption}
      label={inputLabel}
      onChange={onChange}
    >
      {Object.entries(options).map(([label, value]) => {
        return <MenuItem value={value}>{label}</MenuItem>
      })}
    </Select>
  </FormControl>
}

export default CustomSelect
