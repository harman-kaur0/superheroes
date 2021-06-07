import React, { Component } from "react"

const userUrl = "http://localhost:9393/users/"

class Login extends Component {
    state = {
        username: "",
        password: "",
        createUser: false,
        name: "",
        confirmPassword: "",
        usernames: []
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    getUsers = fetch(userUrl).then(resp => resp.json()).then(data => data.users.map(user => this.setState({usernames: [...this.state.usernames, user.username]})))

    handleSubmit = e => {
        e.preventDefault();
        const reqPackage = {
            headers: {"Content-Type": "application/json"},
            method: "PATCH",
            body: JSON.stringify({username: this.state.username, password: this.state.password})
        }
        fetch(userUrl, reqPackage).then(resp => resp.json()).then(data => {
            data.user ? this.props.updateUser(data.user, data.teams) : alert(data.message)
        })
    }

    handleCreate = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    createNewUser = e => {
        e.preventDefault();   
        const reqPackage = {
            headers: {"Content-Type": "application/json"},
            method: "POST",
            body: JSON.stringify({name: this.state.name, username: this.state.username, password: this.state.password})       
        }
        this.state.usernames.includes(this.state.username) ? alert ("username already exits") :
        this.state.confirmPassword !== this.state.password ? alert("password does not match") :
        fetch(userUrl, reqPackage).then(resp => resp.json()).then(data => {
            data.user ? this.props.updateUser(data.user, data.teams) : alert(data.message)
        })
    }
    render(){
        return (
            <div className="login">
                {this.state.createUser === false ?
                <form className="form" onSubmit={e => this.handleSubmit(e)}>
                    <label>username</label>
                    <input onChange= {this.handleChange} name="username" type="text" required/>
                    <label>password</label>
                    <input onChange= {this.handleChange} name="password" type="password" required/>
                    <div className="btnContainer">
                        <button type="submit">login</button>
                        <button onClick= {() => this.setState({createUser: true})}type="submit">sign up</button>
                    </div>
                </form> :
                <form className = "form2" onSubmit={e => this.createNewUser(e)}>
                    <h2>Create Your Account</h2>
                    <label className="name">Name</label>
                    <input onChange= {this.handleCreate} name="name" type="text" required/>
                    <label>Username</label>
                    <input onChange= {this.handleCreate} name="username" type="text" required/>
                    <label>Password</label>
                    <input onChange= {this.handleCreate} name="password" type="password" required/>
                    <label className="confirmPass">Confirm Password</label>
                    <input onChange= {this.handleCreate} name="confirmPassword" type="password" required/>
                    <div className="loginBtn">
                        <button type="submit">LOGIN</button>  
                    </div>   
                </form>
                }
            </div>
        )
    }
}

export default Login