require('dotenv').config();

const verifyData = async (request, res, next) => {
    let message = '';
    const req = request.body;
    if(req['name'].length >= 60) { message = 'Name length exceeded 60 characters'; }
    if(req['cost'] < 0 || req['cost'] > 999.99) { message = 'Cost should be between 0 and 999.99'; }
    if(message !== '') {
        return res.status(400).send({ success: false, data: '', message, status: 400 });
    }
    next();
};

const verifyUpdateReq = async (req, res, next) => {
    let count = 0;
    for(let key in req.body) {
        if(req.body.hasOwnProperty(key)) { count++ }
    }
    if( count !== 1) {
        return res.status(400).send({ success: false, data: '', message: 'Only cost can be updated', status: 400 });
    }
    next();
};

module.exports = { verifyData, verifyUpdateReq };
