import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Box, Button, Typography } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'Date', width: 120 },
    { field: 'app', headerName: 'App', width: 100 },
    { field: 'union', headerName: 'Union', width: 120 },   
    { field: 'club', headerName: 'Club', width: 120 },   
    { field: 'clubcurrency', headerName: 'Club currency', width: 180 },   
    { field: 'agent', headerName: 'Agent', width: 120 },   
    { field: 'agentid', headerName: 'Agent id', width: 140 },   
    { field: 'superagent', headerName: 'Super agent', width: 160 },   
    { field: 'superagentid', headerName: 'Super agent id', width: 180 },   
    { field: 'player', headerName: 'Player', width: 140 },   
    { field: 'nickname', headerName: 'Nickname', width: 150 },   
    { field: 'nicknameid', headerName: 'Nickname id', width: 160 },   
    { field: 'deal', headerName: 'Deal', width: 130 },   
    { field: 'profitloss', renderCell: (params) => {
        return (
          <div className="userBox">
            <Button className='edit_btn'>Add</Button>
            &nbsp; &nbsp;
            <Button className='edt_btn_ic'><CreateIcon /></Button>
          </div>
        );
        }, headerName: 'Action', width: 160 },   
  ];

  
  const rows = [
    { id: '12/2/2024', app: 'App Name', union: 'Union', club: 'TOPSHELF', clubcurrency: '$$$$', agent: 'Campari777', agentid: '137795', superagent: '137795', superagentid: '137795', player: '2100559', nickname: '2100559', nicknameid: '2100559', deal: '$ 9892.8', profitloss: '$ 9892.8', },
    { id: '12/2/2024', app: 'App Name', union: 'Union', club: 'TOPSHELF', clubcurrency: '$$$$', agent: 'Campari777', agentid: '137795', superagent: '137795', superagentid: '137795', player: '2100559', nickname: '2100559', nicknameid: '2100559', deal: '$ 9892.8', profitloss: '$ 9892.8', },
    { id: '12/2/2024', app: 'App Name', union: 'Union', club: 'TOPSHELF', clubcurrency: '$$$$', agent: 'Campari777', agentid: '137795', superagent: '137795', superagentid: '137795', player: '2100559', nickname: '2100559', nicknameid: '2100559', deal: '$ 9892.8', profitloss: '$ 9892.8', },
    { id: '12/2/2024', app: 'App Name', union: 'Union', club: 'TOPSHELF', clubcurrency: '$$$$', agent: 'Campari777', agentid: '137795', superagent: '137795', superagentid: '137795', player: '2100559', nickname: '2100559', nicknameid: '2100559', deal: '$ 9892.8', profitloss: '$ 9892.8', },
    { id: '12/2/2024', app: 'App Name', union: 'Union', club: 'TOPSHELF', clubcurrency: '$$$$', agent: 'Campari777', agentid: '137795', superagent: '137795', superagentid: '137795', player: '2100559', nickname: '2100559', nicknameid: '2100559', deal: '$ 9892.8', profitloss: '$ 9892.8', },
  ];

export default function ReportsAgentsTwoTabl() {
    return (
        <Box className='data_tabal_def_min mrgn_for'>
            <Box className='tabl_p_btn'>
                <Typography>Results</Typography>
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