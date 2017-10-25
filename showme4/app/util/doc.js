import hljs from 'highlight.js';

function addClass(id, className) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.add(className);
  }
}

function removeClass(id, className) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.remove(className);
  }
}

function setHtml(id, html) {
  const el = document.getElementById(id);
  if (el) {
    el.innerHTML = html;
  }
}

// Initialize the non-sample JS code - you should not need to change this
export function initDoc() {
  const path = window.location.pathname;

  // Add syntax highlighting to code examples in documentation
  hljs.initHighlightingOnLoad();

  // Highlight the active menu item and section
  const parts = path.split('/');
  if (parts.length === 3) {
    addClass(`section-${parts[1]}`, 'active');
    addClass(`item-${parts[2]}`, 'active');
    addClass('doc', 'explain');
    document.getElementById('default-app-text').remove();
  } else {
    addClass('item-overview', 'active');
  }

  // Remove loading spinner from language/framework table
  removeClass('code-types', 'loading');

  // Add frontend info - these variables are defined in webpack.config.js
  // through the define plugin.
  if (FRAMEWORK) {
    setHtml('frontend-framework', FRAMEWORK);
    setHtml('frontend-environment', ENVIRONMENT);
  } else {
    setHtml('frontend-framework', ENVIRONMENT);
    document.getElementById('frontend-environment').remove();
  }
}

export default initDoc;
