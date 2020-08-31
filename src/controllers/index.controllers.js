const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
    res.render('index');
};

indexCtrl.renderAbout = (re, res) => {
    res.render('about');
}

module.exports = indexCtrl;