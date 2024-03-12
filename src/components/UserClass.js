import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            userInfo: {
                name: "",
                location: "",
                avatar_url: ""
            }
        }
    }
    async componentDidMount() {
        const data = await fetch('https://api.github.com/users/digicdeanuj');
        const json = await data.json();
        this.setState({
            userInfo: json
        })
    }
    render() {
        return (
            <div className="user-card">
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                    })
                }}>Count : {this.state.count}</button>
                {/* <img src={this.state.userInfo.avatar_url} /> */}
                <h2>Name : {this.state.userInfo.name}</h2>
                <h3>Location : {this.state.userInfo.location}</h3>
                <h4>Contact : @digicodeanuj</h4>
            </div>
        )
    }
}
export default UserClass;