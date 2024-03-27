import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Box, Button, Typography } from '@mui/material';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'Club', width: 250 },
    { field: 'profitloss', headerName: 'Profit/Loss', width: 250 },
    { field: 'rake', headerName: 'Rake', width: 250 },
    { field: 'rakeback', headerName: 'Rakeback', width: 250 },
    { field: 'rebatefive', headerName: 'Rebate', width: 250 },
    { field: 'agentearnings', headerName: 'Agent earnings', width: 270 },

  ];

  
  const rows = [
    { id: 957072, profitloss: '$ 0.00', rake: '$ 0.00', rakeback: '$ 0.00', rebatefive: '$ 0.00', agentearnings: '$ 0.00' },
    { id: 957072, profitloss: '$ 0.00', rake: '$ 0.00', rakeback: '$ 0.00', rebatefive: '$ 0.00', agentearnings: '$ 0.00' },
    { id: 957072, profitloss: '$ 0.00', rake: '$ 0.00', rakeback: '$ 0.00', rebatefive: '$ 0.00', agentearnings: '$ 0.00' },
    { id: 957072, profitloss: '$ 0.00', rake: '$ 0.00', rakeback: '$ 0.00', rebatefive: '$ 0.00', agentearnings: '$ 0.00' },
    { id: 957072, profitloss: '$ 0.00', rake: '$ 0.00', rakeback: '$ 0.00', rebatefive: '$ 0.00', agentearnings: '$ 0.00' },
    // { id: 957072, profitloss: '2222222222', rake: '333333333333', rakeback: '444444444', rebatefive: '5555', agentearnings: '6666666' },
  ];

export default function ClubResultsTabal() {
    return (
        <Box className='data_tabal_def_min mrgn_for'>
            <Box className='tabl_p_btn'>
                <Typography>Club Results</Typography>
                {/* <Button>Upload Report</Button> */}
            </Box>
            <div style={{ height: 370, width: '100%' }} className='data_tabal_def'>
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