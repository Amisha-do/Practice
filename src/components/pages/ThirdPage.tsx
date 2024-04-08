import React, { useState } from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup, Button, Chip, Select, MenuItem, InputLabel } from '@mui/material';

const DemoPage = () => {
  const [gender, setGender] = useState('');
  const [selectedChips, setSelectedChips] = useState<string[]>([]);
  const [selectedDropdownValue, setSelectedDropdownValue] = useState<string>('');

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  const handleChipClick = (chipValue: string) => {
    if (selectedChips.includes(chipValue)) {
      setSelectedChips(selectedChips.filter(chip => chip !== chipValue));
    } else {
      setSelectedChips([...selectedChips, chipValue]);
    }
  };

  const handleDropdownChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedDropdownValue(event.target.value as string);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Gender Selection */}
      <FormControl component="fieldset" style={{ marginBottom: '16px' }}>
        <RadioGroup aria-label="gender" name="gender" value={gender} onChange={handleGenderChange}>
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>

      {/* Chip Button Selection */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{  marginBottom: '16px', marginLeft: '20px' }}>
        {[1, 2, 3, 4, 5, 6].map((value) => (
          <Chip
            key={value}
            label={`Option ${value}`}
            onClick={() => handleChipClick(`Option ${value}`)}
            color={selectedChips.includes(`Option ${value}`) ? 'primary' : 'default'}
            style={{ margin: '4px' }}
          />
        ))}
       

      </div>
      <Button variant="outlined" onClick={() => setSelectedChips([])}>Clear Selection</Button>
      </div>

      {/* Dropdown */}
      <FormControl style={{ minWidth: '120px', marginBottom: '16px', marginTop: '20px' }}>
        <InputLabel id="demo-dropdown-label">Demo Data</InputLabel>
        <Select
          labelId="demo-dropdown-label"
          id="demo-dropdown"
          value={selectedDropdownValue}
          onChange={handleDropdownChange}
        >
          <MenuItem value="">None</MenuItem>
          {[1, 2, 3, 4, 5, 6].map((value) => (
            <MenuItem key={value} value={`Data ${value}`}>{`Data ${value}`}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default DemoPage;
