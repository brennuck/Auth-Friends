import React from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
    state = {
        friends: []
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
        .get("/api/friends")
        .then(res => {
            this.setState({
                friends: res.data
            })
            console.log(this.state)
        })
        .catch(err => {
            console.log("ERR0R", err)
        })
    }
    render() {
        return (
            <div>
                {this.state.friends.map(friend => {
                    return (
                        <div>
                            <h2> {friend.name} </h2>
                            <h3> {friend.age} </h3>
                            <h5> {friend.email} </h5>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default FriendsList;