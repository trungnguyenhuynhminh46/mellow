import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'

type OptionType = string | number | readonly string[] | undefined;

type Props<T> = {
    inputLabel: string,
    options: { [label: string]: OptionType & T },
    selectedOption: OptionType & T,
    onChange: (event: SelectChangeEvent<OptionType & T>) => void
}
const CustomSelect = <T extends string>({ inputLabel, options, selectedOption, onChange }: Props<T>) => {
  return <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">{inputLabel}</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
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
