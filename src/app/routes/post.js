import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import fetchData from '../../helpers/fetchData';
import printMe from '../../helpers/print';

class Post extends Component {
    constructor(props) {
        super(props);
        if (props.staticContext && props.staticContext.data) {
            this.state = {
                post: props.staticContext.data
            };
        } else {
            this.state = {
                post: {},
            };
        }
    }

    componentDidMount() {
        if (window.__ROUTE_DATA__) {
            this.setState({
                post: window.__ROUTE_DATA__,
            });
            delete window.__ROUTE_DATA__;
        } else {
            fetchData().then(data => {
                this.setState({
                    post: data,
                });
            });
        }
        printMe();
        const array = [1];
        const other = _.concat(array, 2, [3], [[4]]);
        console.log(other);
    }

    render() {
        const { post } = this.state;
        return (
            <div>
                <h1>Page Post</h1>
                <Link to="/">Link to Home</Link>
                <h2>{post.title}</h2>
                <p>By: {post.author}</p>
                <p>Link: <a href={post.url}>{post.url}</a></p>
            </div>
        );
    }
}

export default {
    path: '/post',
    exact: true,
    component: Post,
    fetchData
};
