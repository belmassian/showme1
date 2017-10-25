import React, { Component } from 'react';

import { auth } from '../../firebase';

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { passwordOne } = this.state;

    auth.doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '';

    return (
      <div className="w3-container w3-center w3-padding-16">
      <div className="w3-panel w3-padding-16 w3-black w3-card-2">
      <form onSubmit={this.onSubmit}>
        <div><input
          value={passwordOne}
          onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))}
          type="password"
          placeholder="New Password"
        /></div>
        <div>
        <input
          value={passwordTwo}
          onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))}
          type="password"
          placeholder="Confirm New Password"
        /></div>
        <div>
        <button disabled={isInvalid} type="submit">
          Reset My Password
        </button>
        </div>

        { error && <p>{error.message}</p> }
      </form>
      </div>
      </div>
    );
  }
}

export default PasswordChangeForm;
