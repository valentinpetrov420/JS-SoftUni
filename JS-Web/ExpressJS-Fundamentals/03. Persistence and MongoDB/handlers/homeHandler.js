module.exports = (req, res) => {
    if (req.urlData.pathname === '/' && req.method === 'GET') {
        res.view('dist/home.html');
    } else {
        return true;
    }
};