/**
 * Get the UI information as a formatted text string.
 *
 * @param {object} req - The request object
 *
 * @returns {string} The formatted UI information
 */
function formatUIInformation(req) {
  const ulId = req.body.uniqueLogId ? `[${req.body.uniqueLogId}] ` : '';
  const formattedUIInformation = `[${req.body.category}] ${ulId}${req.body.message}`;
  const username = req._authCookie?.userName;

  return {
    level: req.body.severity,
    message: formattedUIInformation,
    timestamp: req.body.timestamp,
    extraInfo: username ? { username } : null,
  };
}

export { formatUIInformation };
