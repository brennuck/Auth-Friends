import React from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
    state = {
        friends: []
    }

    componentDidMount() {
        this.getData();
    }

    componentDidUpdate() {
        this.addUser();
    }

    getData = () => {
        axiosWithAuth()
        .get("/api/friends")
        .then(res => {
            this.setState({
                friends: res.data
            })
        })
        .catch(err => {
            console.log("ERR0R", err)
        })
    }

    addUser = () => {
        axiosWithAuth()
        .post("/api/friends", {
            id: Date.now(),
            name: "Brennon",
            age: "20",
            email: "brennuck@gmail.com"
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log("P0ST ERR0R", err)
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