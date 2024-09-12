app.get('/auth/telegram', async (req, res) => {
    const telegramAuthData = req.query;

    // Perform authentication validation
    if (checkTelegramAuth(telegramAuthData)) {
        // Successful authentication, redirect to the main app
        res.redirect('https://app-mhizcoin-ai.vercel.app/dashboard'); // Redirect to your app
    } else {
        // Authentication failed
        res.status(403).send('Authentication failed.');
    }
});
window.onload = function() {
    setTimeout(function() {
        window.location.href = "home.html"; 
    }, 20000);
  };
