import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Box, Button, Typography } from '@mui/material';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'Date', width: 500 },
    { field: 'profitloss', headerName: 'Description', width: 500 },
    { field: 'rake', headerName: 'Created at', width: 500 },   
  ];

  
  const rows = [
    { id: '12/2/2024', profitloss: 'Description', rake: '12/2/2024', },
    { id: '12/2/2024', profitloss: 'Description', rake: '12/2/2024', },
    { id: '12/2/2024', profitloss: 'Description', rake: '12/2/2024', },
    { id: '12/2/2024', profitloss: 'Description', rake: '12/2/2024', },
    { id: '12/2/2024', profitloss: 'Description', rake: '12/2/2024', },
    // { id: 957072, profitloss: '2222222222', rake: '333333333333', rakeback: '444444444', rebatefive: '5555', agentearnings: '6666666' },
  ];
  
export default function ReportsAgentsOne() {
    return (
        <Box className='data_tabal_def_min'>
            <Box className='tabl_p_btn'>
                <Typography>Reports</Typography>
                {/* <Button>Upload Report</Button> */}
            </Box>
            <div style={{ height: 368, width: '100%' }} className='data_tabal_def'>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                // checkboxSelection
                />
            </div>
        </Box>

    );
}