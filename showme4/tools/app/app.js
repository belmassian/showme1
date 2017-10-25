import 'semantic-ui-css/semantic.min';
import renderProfile from './profile';
import renderLoginRedirectOkta from './login-redirect';
import renderLoginCustom from './login-custom';

export function bootstrap(config) {
  const path = window.location.pathname;

  // DO NOT COPY TO NEW SAMPLE -------------------------------------------------
  // Modal that describes how to build a new sample - you should not copy this
  // section to the new sample.
  /* global jQuery */
  if (path === '/') {
    const gettingStartedEl = jQuery(`
      <div class="ui inverted yellow segment" id="getting-started">
        <div class="ui red ribbon label">Getting Started</div>
        <h3>Building your first frontend sample? <a href="#">Read this.</a></h3>
      </div>
    `);
    gettingStartedEl.find('a').click(() => {
      jQuery('.ui.modal')
        .modal({ duration: 200 })
        .modal('show');
    });
    jQuery('#doc').prepend(gettingStartedEl);
  }
  // ---------------------------------------------------------------------------

  switch (path) {
    case '/authorization-code/profile':
      renderProfile(config);
      break;
    case '/authorization-code/login-redirect':
      renderLoginRedirectOkta(config);
      break;
    case '/authorization-code/login-custom':
      renderLoginCustom(config);
      break;
    default:
      break;
  }
}

export default bootstrap;
