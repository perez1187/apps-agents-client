import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Box, Button, Typography } from '@mui/material';
const columns: GridColDef[] = [
    { field: 'id', headerName: 'Player', width: 300 },
    { field: 'nickname', headerName: 'Nickname', width: 300 },
    { field: 'club', headerName: 'Club', width: 300 },
    { field: 'rakeback', headerName: 'Rakeback', width: 300 },
    { field: 'rebate', headerName: 'Rebate', width: 300 },
    
];


const rows = [
    { id: '2100559', nickname: 'tellmewhyy', club: '2100559', rakeback: '$ 0.00', rebate: '$ 0.00',  },
    { id: '2100559', nickname: 'tellmewhyy', club: '2100559', rakeback: '$ 0.00', rebate: '$ 0.00',  },
    { id: '2100559', nickname: 'tellmewhyy', club: '2100559', rakeback: '$ 0.00', rebate: '$ 0.00',  },
    { id: '2100559', nickname: 'tellmewhyy', club: '2100559', rakeback: '$ 0.00', rebate: '$ 0.00',  },
    { id: '2100559', nickname: 'tellmewhyy', club: '2100559', rakeback: '$ 0.00', rebate: '$ 0.00',  },
];

export default function SettlementsTabal() {
   
    
    return (
        <>
            <Box className='data_tabal_def_min'>
                <Box className='tabl_p_btn'>
                    <Typography>Settlements</Typography>
                  
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


        </>
    );
}