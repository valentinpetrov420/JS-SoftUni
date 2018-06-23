module.exports = {
    index: (req, res) => {
        res.render('home/index'); //don't forget to move the view file
    },
    about: (req, res) => {
        res.render('home/about');
    }
};