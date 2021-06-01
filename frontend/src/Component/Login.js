import React, { Component } from "react"

const userUrl = "http://localhost:9393/users/"

class Login extends Component {
    state = {
        username: "",
        password: ""
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault();
        const reqPackage = {
            headers: {"Content-Type": "application/json"},
            method: "POST",
            body: JSON.stringify(this.state)
        }
        fetch(userUrl, reqPackage).then(resp => resp.json()).then(data => {
            data.user ? this.props.updateUser(data.user, data.teams) : alert(data.message)
        })
    }
    render(){
        return (
            <div className="login">
                <form className="form" onSubmit={e => this.handleSubmit(e)}>
                    <label>username</label>
                    <input onChange= {this.handleChange} name="username" type="text" required/>
                    <label>password</label>
                    <input onChange= {this.handleChange} name="password" type="password" required/>
                    <button type="submit">LOGIN</button>
                </form>
            </div>
        )
    }
}

export default Login