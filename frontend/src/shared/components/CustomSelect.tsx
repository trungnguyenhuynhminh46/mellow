import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { ReactElement } from 'react'

type OptionType = string | number | readonly string[] | undefined;

const renderMenuItems = <T extends string>(options: { [label: string]: OptionType & T }, icons?: { [label: string]: ReactElement }) => {
  return Object.entries(options).map(([label, value]) => {
    return <MenuItem key={label} value={value}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }}>
        {icons && icons[label]}
        {label}
      </Box>
    </MenuItem>
  })

}

type Props<T> = {
    id: string,
    inputLabel: string,
    options: { [label: string]: OptionType & T },
    icons?: { [label: string]: ReactElement },
    selectedOption: OptionType & T,
    onChange: (event: SelectChangeEvent<OptionType & T>) => void
}

const CustomSelect = <T extends string>({ id, inputLabel, options, icons, selectedOption, onChange }: Props<T>) => {
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
      {renderMenuItems(options, icons)}
    </Select>
  </FormControl>
}

export default CustomSelect
