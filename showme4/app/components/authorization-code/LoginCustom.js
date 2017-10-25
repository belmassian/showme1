import React from 'react';
import SignIn from '@okta/okta-signin-widget';

class LoginCustom extends React.Component {

  componentDidMount() {
    const config = this.props.route.config;
    const signIn = new SignIn({
      baseUrl: config.oktaUrl,
      clientId: config.clientId,
      redirectUri: config.redirectUri,
      authParams: {
        issuer: config.issuer,
        responseType: 'code',
        scopes: ['openid', 'email', 'profile'],
      },
      i18n: {
        en: {
          'primaryauth.title': 'Use john/Asdf1234 for the mock Okta server',
        },
      },
    });
    signIn.renderEl({ el: '#sign-in-container' }, () => {});
  }

  render() {
    return (
      <<form id="signin" name="signin" method="post" action="signin"><label for="email">Email Address</label><input class="text" name="email" type="text" /><label for="password">Password</label><input name="password" type="password" /><input class="btn signInBtn" type="submit" value="Sign In" />
    );
  }
}

LoginCustom.propTypes = {
  route: React.PropTypes.object.isRequired,
};

export default LoginCustom;
