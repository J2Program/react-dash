import React from 'react'
import history from '../../history'

class VQHubIdentifyButton extends React.Component {
    identifyHandler = () => { history.push('/hub/' + this.props.id); }
    render() { return <button onClick={this.identifyHandler}>Identify</button> }
}

export default VQHubIdentifyButton