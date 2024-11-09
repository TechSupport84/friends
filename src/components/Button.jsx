import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function CustomButton({text, onClick}) {
  return (
    <Stack spacing={2} direction="row" style={{margin:15}}>
      <Button variant="contained" onclick={onClick}>{text}</Button>
    
    </Stack>
  );
}
