import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 1,
    })
    history.replace('/')
  }

  onSubmitFailure = err => {
    this.setState({showSubmitError: true, errorMsg: err})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      console.log(data)
      this.onSubmitFailure(data.error_msg)
    }
  }
   
  render() {
    const {showSubmitError, password, username, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-container">
        <form className="login-form-container" onSubmit={this.submitForm}>
          <div className="form-logo-container">
            <img 
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
            />
          </div>
          <label className="form-label" htmlFor="username">
            USERNAME
          </label>
          <br />
          <input 
            className="form-input"
            type="text"
            value={username}
            onChange={this.onChangeUsername}
            placeholder="username"
            id="username"
          />
          <br />
          <br />
          <label className="form-label" htmlFor="password">
            PASSWORD
          </label>
          <input 
            className="form-input"
            type="password"
            value={password}
            onChange={this.onChangePassword}
            placeholder="password"
            id="password"
          />
          <br />
          <br />
          <button className="submit-btn" type="submit">
            Login 
          </button>
          {showSubmitError && <p className="err">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
