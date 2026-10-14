/**
 * Returns the Web3Forms access key for the contact form.
 * Set WEB3FORMS_ACCESS_KEY on the Vercel project (Production).
 * The key is intentionally client-visible — Web3Forms treats it as a public form id.
 */
module.exports = function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  if (req.method !== 'GET') {
    res.status(405).json({ configured: false, error: 'method_not_allowed' });
    return;
  }

  var key = process.env.WEB3FORMS_ACCESS_KEY || '';
  if (!key) {
    res.status(503).json({
      configured: false,
      error: 'missing_WEB3FORMS_ACCESS_KEY'
    });
    return;
  }

  res.status(200).json({ configured: true, access_key: key });
};
