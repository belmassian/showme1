import SignIn from '@okta/okta-signin-widget';

export default function render(config) {
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
  signIn.renderEl({ el: config.container }, () => {});
}
