import React from 'react'

class VQHubIdentifyButton extends React.Component {
    identifyHandler = () => { alert(this.props.id) }
    render() { return <button onClick={this.identifyHandler}>Identify </button> }
}

export default VQHubIdentifyButton