import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Box, Button, Typography } from '@mui/material';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'Player', width: 130 },
    { field: 'club', headerName: 'Club', width: 130 },
    { field: 'nickname', headerName: 'Nickname', width: 130 },
    { field: 'nicknameid', headerName: 'Nickname ID', width: 210 },
    { field: 'rakeback', headerName: 'Rakeback', width: 210 },
    { field: 'rebate', headerName: 'Rebate', width: 210 },
    { field: 'createdat', headerName: 'Created at', width: 160 },
    { field: 'updatedat', headerName: 'Updated at', width: 160 },
    { field: 'action', renderCell: (params) => {
        return (
          <div className="userBox">
            <Button className='edit_btn'>Edit</Button>
          </div>
        );
        }, headerName: 'Action', width: 130 },
];

const rows = [
    { id: 2100559, club: '137795', nickname: 'Korill', nicknameid: '123456', rakeback: '$ 0.000', rebate: '$ 0.000', createdat: '12-02-2024', updatedat: '12-02-2024', action: <div>11</div>,  },
    { id: 2100559, club: '137795', nickname: 'Korill', nicknameid: '123456', rakeback: '$ 0.000', rebate: '$ 0.000', createdat: '12-02-2024', updatedat: '12-02-2024', action: <div>11</div>,  },
    { id: 2100559, club: '137795', nickname: 'Korill', nicknameid: '123456', rakeback: '$ 0.000', rebate: '$ 0.000', createdat: '12-02-2024', updatedat: '12-02-2024', action: <div>11</div>,  },
    { id: 2100559, club: '137795', nickname: 'Korill', nicknameid: '123456', rakeback: '$ 0.000', rebate: '$ 0.000', createdat: '12-02-2024', updatedat: '12-02-2024', action: <div>11</div>,  },
    { id: 2100559, club: '137795', nickname: 'Korill', nicknameid: '123456', rakeback: '$ 0.000', rebate: '$ 0.000', createdat: '12-02-2024', updatedat: '12-02-2024', action: <div>11</div>,  },
];

export default function DealsAgentsTabal() {
    return (
        <Box className='data_tabal_def_min mrgn_for'>
            <Box className='tabl_p_btn'>
                <Typography>Deals</Typography>
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