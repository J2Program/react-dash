import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import DashboardIcon from '@material-ui/icons/Dashboard'

import history from '../../history'

class VQMenu extends React.Component {

    buttonHandler = (e) => { history.push(e) }

    render() {
        return (
            <List>
                <ListItem button onClick={() => this.buttonHandler('/hubs')}>
                    <ListItemIcon><DashboardIcon /></ListItemIcon><ListItemText primary="Hubs" />
                </ListItem>
            </List>
        )
    }
}

export default VQMenu