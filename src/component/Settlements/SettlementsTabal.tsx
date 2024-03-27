import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Box, Button, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
const columns: GridColDef[] = [
    { field: 'id', headerName: 'Date', width: 300 },
    { field: 'player', headerName: 'Player', width: 300 },
    { field: 'amount', headerName: 'Amount $', width: 300 },
    { field: 'description', headerName: 'Description', width: 300 },
    { field: 'action', renderCell: (params) => {
        return (
          <div className="userBox">
            <Button className='edt_btn_ic'><CreateIcon /></Button>
            <Button className='edt_btn_ic delet_btn_ic'><DeleteIcon /></Button>
          </div>
        );
        }, headerName: 'Action', width: 300 },
];


const rows = [
    { id: '12/2/2024', player: '2100559', amount: '$ 0.000', description: 'Description', action: <div>aasdas</div>, },
    { id: '12/2/2024', player: '2100559', amount: '$ 0.000', description: 'Description', action: <div>aasdas</div>, },
    { id: '12/2/2024', player: '2100559', amount: '$ 0.000', description: 'Description', action: <div>aasdas</div>, },
    { id: '12/2/2024', player: '2100559', amount: '$ 0.000', description: 'Description', action: <div>aasdas</div>, },
];

export default function SettlementsTabal() {
    //pop//
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Box className='data_tabal_def_min'>
                <Box className='tabl_p_btn'>
                    <Typography>Settlements</Typography>
                    {/* <Button onClick={handleClickOpen}> Delete</Button> */}
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


            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className='def_modal dilog'
            >
                <Box>
                    <Box className="sign">
                        <Box className="sign_min Delete_pop">
                            <Typography component={"h2"} className='def_h2_hd mrg_colr'>Delete Settlements</Typography>
                            <Box className="flx_log_input">
                                <Typography className='def_p_forget'>Are you sure you want to delete ?</Typography>
                              
                                <Button className='def_btn Delete'>Delete</Button>
                            </Box>

                        </Box>
                    </Box>
                </Box>
            </Dialog>
        </>
    );
}