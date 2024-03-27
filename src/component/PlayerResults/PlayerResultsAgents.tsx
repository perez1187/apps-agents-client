import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Box, Button, Typography } from '@mui/material';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'Date', width: 120 },
    { field: 'app', headerName: 'App', width: 100 },
    { field: 'union', headerName: 'Union', width: 120 },   
    { field: 'club', headerName: 'Club', width: 120 },   
    { field: 'clubcurrency', headerName: 'Club currency', width: 180 },   
    { field: 'player', headerName: 'Player', width: 140 },  
    { field: 'nickname', headerName: 'Nickname', width: 150 },   
    { field: 'nicknameid', headerName: 'Nickname id', width: 160 },   
    { field: 'agent', headerName: 'Rake', width: 120 },   
    { field: 'agentid', headerName: 'Rebate', width: 140 },   
    { field: 'superagent', headerName: 'Profit/Loss', width: 160 },   
    { field: 'superagentid', headerName: 'Rakeback', width: 180 },   
    
    { field: 'deal', headerName: 'Agent earnings', width: 130 },   
  ];

  
  const rows = [
    { id: '12/2/2024', app: 'App Name', union: 'Union', club: 'TOPSHELF', clubcurrency: '$$$$', agent: '$ 0.00', agentid: '$ 0.00', superagent: '$ 0.00', superagentid: '$ 0.00', player: '$ 0.00', nickname: '$ 0.00', nicknameid: '$ 0.00', deal: '$ 9892.8',  },
    { id: '12/2/2024', app: 'App Name', union: 'Union', club: 'TOPSHELF', clubcurrency: '$$$$', agent: '$ 0.00', agentid: '$ 0.00', superagent: '$ 0.00', superagentid: '$ 0.00', player: '$ 0.00', nickname: '$ 0.00', nicknameid: '$ 0.00', deal: '$ 9892.8',  },
    { id: '12/2/2024', app: 'App Name', union: 'Union', club: 'TOPSHELF', clubcurrency: '$$$$', agent: '$ 0.00', agentid: '$ 0.00', superagent: '$ 0.00', superagentid: '$ 0.00', player: '$ 0.00', nickname: '$ 0.00', nicknameid: '$ 0.00', deal: '$ 9892.8',  },
    { id: '12/2/2024', app: 'App Name', union: 'Union', club: 'TOPSHELF', clubcurrency: '$$$$', agent: '$ 0.00', agentid: '$ 0.00', superagent: '$ 0.00', superagentid: '$ 0.00', player: '$ 0.00', nickname: '$ 0.00', nicknameid: '$ 0.00', deal: '$ 9892.8',  },
    { id: '12/2/2024', app: 'App Name', union: 'Union', club: 'TOPSHELF', clubcurrency: '$$$$', agent: '$ 0.00', agentid: '$ 0.00', superagent: '$ 0.00', superagentid: '$ 0.00', player: '$ 0.00', nickname: '$ 0.00', nicknameid: '$ 0.00', deal: '$ 9892.8',  },
  ];

export default function PlayerResultsAgents() {
    return (
        <Box className='data_tabal_def_min mrgn_for'>
            <Box className='tabl_p_btn'>
                <Typography>Reports</Typography>
                <Button>Upload Report</Button>
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