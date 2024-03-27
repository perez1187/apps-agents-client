import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Box, Button, Typography } from '@mui/material';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'Club', width: 178 },
    { field: 'profitloss', headerName: 'Player', width: 178 },
    { field: 'rake', headerName: 'Nickname', width: 178 },
    { field: 'rakeback', headerName: 'Profit/Loss', width: 200 },
    { field: 'rebatefive', headerName: 'Rake', width: 178 },
    { field: 'agentearnings', headerName: 'Rakeback', width: 178 },
    { field: 'rebate', headerName: 'Rebate', width: 178 },
    { field: 'earnings', headerName: 'Agent earnings', width: 210 },
   
  ];

  
  const rows = [
    { id: 957072, profitloss: '957072', rake: 'Korill', rakeback: '$ 0.00', rebatefive: '$ 0.00', agentearnings: '$ 0.00', rebate: '$ 0.00', earnings: '$ 0.00' },
    { id: 957072, profitloss: '957072', rake: 'Korill', rakeback: '$ 0.00', rebatefive: '$ 0.00', agentearnings: '$ 0.00', rebate: '$ 0.00', earnings: '$ 0.00' },
    { id: 957072, profitloss: '957072', rake: 'Korill', rakeback: '$ 0.00', rebatefive: '$ 0.00', agentearnings: '$ 0.00', rebate: '$ 0.00', earnings: '$ 0.00' },
    { id: 957072, profitloss: '957072', rake: 'Korill', rakeback: '$ 0.00', rebatefive: '$ 0.00', agentearnings: '$ 0.00', rebate: '$ 0.00', earnings: '$ 0.00' },
    { id: 957072, profitloss: '957072', rake: 'Korill', rakeback: '$ 0.00', rebatefive: '$ 0.00', agentearnings: '$ 0.00', rebate: '$ 0.00', earnings: '$ 0.00' },
    // { id: 957072, profitloss: '2222222222', rake: '333333333333', rakeback: '444444444', rebatefive: '5555', agentearnings: '6666666' },
  ];

export default function NicknameResultsTabal() {
    return (
        <Box className='data_tabal_def_min mrgn_for'>
            <Box className='tabl_p_btn'>
                <Typography>Player Results</Typography>
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