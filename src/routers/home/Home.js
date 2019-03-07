import React from 'react'
import Layout from '../../Layout/Layout';
import VQHubList from '../../components/hub/VQHubList';

class Home extends React.Component {
    render() { return (<Layout dashboard={"Hubs"}><VQHubList /></Layout>) }
}

export default Home