import React from 'react'
import history from '../../history'
class VQHubViewButton extends React.Component {
    viewHandler = () => { history.push('/hub/' + this.props.id) }
    render() { return <button onClick={this.viewHandler}>View</button> }
}

export default VQHubViewButton
