import './App.css';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export function BasicSelect(a) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div style={{ backgroundColor: a.y ? '#1e1e1e' : 'white' , display:"flex",flexDirection:"column",overflow:"hidden"}}>
      <FormControl variant="filled" sx={{ m: 3, minWidth: 190, backgroundColor: a.y ? '#1e1e1e' : 'white', overflow: 'hidden',width:"200px" }}>
        <InputLabel style={{ color: a.y ? '#c2c2c2' : 'black' }} id={`demo-simple-select-filled-label-${a.x}`}>{a.x}</InputLabel>
        <Select
          style={{
            backgroundColor: a.y ? '#323232' : 'rgb(239, 239, 239)',
            borderBottom: a.y ? '1.5px solid white' : '1.5px solid black',
            color: a.y ? 'white' : 'black',
            overflow: 'hidden',
          }}
          MenuProps={{ PaperProps: { style: { color: a.y ? '#c2c2c2' : 'black', backgroundColor: a.y ? '#1e1e1e' : 'white' } } }}
          labelId={`demo-simple-select-filled-label-${a.x}`}
          id={`demo-simple-select-filled-${a.x}`}
          value={age}
          onChange={handleChange}
        >
          { a.drop && a.drop.map((item) => (
            <MenuItem key={item} style={{ background: a.y ? '#1e1e1e' : 'white', color: a.y ? 'white' : 'black' }} value={item}>
              {item}
            </MenuItem>
          ))}

        </Select>
      </FormControl>
    </div>
  );
}

export default BasicSelect;

