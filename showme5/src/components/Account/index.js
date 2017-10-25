import React from 'react';
import { inject, observer } from 'mobx-react';
import { compose } from 'recompose';

import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import withAuthorization from '../Session/withAuthorization';

const AccountPage = ({ sessionStore }) =>
<div className="w3-container w3-center w3-padding-16">
<div className="w3-panel w3-padding-16 w3-black w3-card-2">
  <div>
    <div>
    <PasswordForgetForm />
    </div>
    <div>
    <PasswordChangeForm />
    </div>
  </div>
  </div>
  </div>

export default compose(
  withAuthorization(true),
  inject('sessionStore'),
  observer
)(AccountPage);
