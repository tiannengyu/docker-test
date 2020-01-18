import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }

    render() {
        return (
            <div>
                <h1>Page Home.</h1>
                <div>{this.state.data}</div>
                <Link to="/post">Link to Post</Link>
            </div>
        );
    }
    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        const res = await fetch('http://localhost:7779/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'token': 'anenglaile'
            },
            body: JSON.stringify({
                name: 'ceido',
                age: 100
            }),
        });
        const data = await res.text();
        this.setState({
            data
        });
    };
}

export default {
    path: '/',
    exact: true,
    component: Home
};
