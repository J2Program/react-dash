import React from 'react'
import { TableCell, TableRow } from '@material-ui/core'
import VQHubIdentifyButton from '../buttons/VQHubIdentifyButton'
import VQHubViewButton from '../buttons/VQHubViewButton';

const styles = { tr: { height: '35px' } }

class VQHubTableRow extends React.Component {
    render() {
        const { data } = this.props
        return (
            <TableRow key={data.key} style={styles.tr}>
                <TableCell>{data.key}</TableCell>
                <TableCell>SVHSZW0700023B1</TableCell>
                <TableCell>online</TableCell>
                <TableCell>Pass</TableCell>
                <TableCell>2019-03-07 12:10:24</TableCell>
                <TableCell>2019-03-08 11:20:41</TableCell>
                <TableCell>Dushan</TableCell>
                <TableCell><VQHubIdentifyButton id={data.key} /></TableCell>
                <TableCell><VQHubViewButton id={data.key} /></TableCell>
            </TableRow>
        )
    }
}

export default VQHubTableRow