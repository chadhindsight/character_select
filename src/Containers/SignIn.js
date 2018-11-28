import React, {Component} from 'react';
import Header from '../Header'
class SignIn extends Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault()

        const userName = event.target.elements.user.value;
        const password = event.target.elements.password.value;

        // Double check
        if(userName && password) {
            
        }
    }

    render() {
        return (
            <div>
                <Header />
                <form onSubmit={this.handleSubmit}>
                    <input type=" text" placeholder="User Name" name="user"/>
                    <input type="password" placeholder="Password" name="password"/>
                    <button>Submit</button>
                 </form>
            </div>

        )
    }
}
export default SignIn;