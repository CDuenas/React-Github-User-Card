import React from "react";

class Followers extends React.Component {
    constructor() {
        super();
        this.state = {
            followers: []
        }
    }

    componentDidMount() {
        fetch("https://api.github.com/users/CDuenas/followers")
            .then(res => res.json())
            .then(followers => this.setState({ followers }))
            .catch(err => console.log("Error:", err));
    }

    render() {
        {console.log(this.state.followers)}
        return (
            <div>
                {this.state.followers.map(follower => {
                    return (
                        <p>{follower.login}</p>
                    )
                })}
            </div>
        )
    }
}

export default Followers;