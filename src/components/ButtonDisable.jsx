import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ButtonDisabled({text, onClick}) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="disabled" onclick={onClick}>{text}</Button>
    
    </Stack>
  );
}
