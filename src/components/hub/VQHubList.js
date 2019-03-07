import React from 'react'
import { Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import VQHubTableRow from './VQHubTableRow';

const table = { width: '100%' }

class VQHubList extends React.Component {
    render() {
        return (
            <Paper style={{ position: 'relative' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>No</TableCell>
                            <TableCell>Serial Number</TableCell>
                            <TableCell>Hub status</TableCell>
                            <TableCell>Test status</TableCell>
                            <TableCell>Create date</TableCell>
                            <TableCell>Last tested date</TableCell>
                            <TableCell>Last tested by</TableCell>
                            <TableCell>Identify</TableCell>
                            <TableCell>View</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <VQHubTableRow data={{ key: 1, data: 'test' }} />
                        <VQHubTableRow data={{ key: 2, data: 'test' }} />
                        <VQHubTableRow data={{ key: 3, data: 'test' }} />
                        <VQHubTableRow data={{ key: 4, data: 'test' }} />
                        <VQHubTableRow data={{ key: 5, data: 'test' }} />
                        <VQHubTableRow data={{ key: 6, data: 'test' }} />
                        <VQHubTableRow data={{ key: 7, data: 'test' }} />
                        <VQHubTableRow data={{ key: 8, data: 'test' }} />
                        <VQHubTableRow data={{ key: 9, data: 'test' }} />
                        <VQHubTableRow data={{ key: 10, data: 'test' }} />
                        <VQHubTableRow data={{ key: 11, data: 'test' }} />
                        <VQHubTableRow data={{ key: 12, data: 'test' }} />
                        <VQHubTableRow data={{ key: 13, data: 'test' }} />
                        <VQHubTableRow data={{ key: 14, data: 'test' }} />
                        <VQHubTableRow data={{ key: 15, data: 'test' }} />
                        <VQHubTableRow data={{ key: 16, data: 'test' }} />
                        <VQHubTableRow data={{ key: 17, data: 'test' }} />
                        <VQHubTableRow data={{ key: 18, data: 'test' }} />
                        <VQHubTableRow data={{ key: 19, data: 'test' }} />
                        <VQHubTableRow data={{ key: 20, data: 'test' }} />
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}

export default VQHubList