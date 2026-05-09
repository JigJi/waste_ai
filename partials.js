// Shared HTML partials — nav + hero + footer
// Inject via document.write or innerHTML on each page

window.renderNav = function(active) {
  const html = `
  <nav class="topnav">
    <div class="topnav-inner">
      <a href="index.html" class="brand" style="text-decoration:none; color:inherit;">
        <span class="brand-mark">K</span>
        <div>
          <div style="font-size:15px; font-weight:600; line-height:1.1;">Koji Insight</div>
          <div style="font-size:11px; color:var(--charcoal-soft); font-weight:400; letter-spacing:0.04em;">AI Operations Layer for Koji Bakery</div>
        </div>
      </a>
      <ul class="nav-links">
        <li><a href="index.html" class="${active === 'dashboard' ? 'active' : ''}">Data</a></li>
        <li><a href="analytics.html" class="${active === 'analytics' ? 'active' : ''}">Analytics</a></li>
        <li><a href="forecasting.html" class="${active === 'forecasting' ? 'active' : ''}">Forecasting</a></li>
      </ul>
    </div>
  </nav>
  `;
  document.getElementById('nav-mount').innerHTML = html;
};

window.renderFooter = function() {
  const html = `
  <footer class="footer">
    <div>
      Koji Insight · AI Operations Layer for Koji Bakery · <strong>One-pager v2 + Counterfactual proof</strong> · 2026-05-08
    </div>
    <div style="margin-top:6px; font-size:12px;">
      Methodology: 2 independent Claude sessions, 80+ feature horse race, proper inventory simulation
    </div>
  </footer>
  `;
  document.getElementById('footer-mount').innerHTML = html;
};
