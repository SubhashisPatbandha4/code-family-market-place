import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationOutlined() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

      <Stack spacing={2}>
        <Pagination count={10} variant="outlined" color="primary" style={{ alignContent: "centerS" }} />
      </Stack>
    </div>
  );
}
