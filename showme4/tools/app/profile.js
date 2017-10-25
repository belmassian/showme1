import OktaAuth from '@okta/okta-auth-js/jquery';
import template from './profile.hbs';

export default function render(config) {
  const auth = new OktaAuth({ url: config.oktaUrl });

  const container = document.querySelector(config.container);
  container.innerHTML = template({
    user: {
      email: config.user.email,
      expFormatted: new Date(config.user.exp * 1000),
    },
  });

  const link = document.getElementById('logout');
  link.addEventListener('click', () => {
    auth.session.close().then(() => {
      window.location = '/authorization-code/logout';
    });
  });
}
