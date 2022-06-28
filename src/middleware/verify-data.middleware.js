require('dotenv').config();

const verifyName = async (request, res, next) => {
    let message = request.body['name'].length >= 60 ? 'Name length exceeded 60 characters' : '';
    if(message !== '') {
        return res.status(400).send({ success: false, message, status: 400 });
    }
    next();
};

const verifyCost = async (request, res, next) => {
    let message = (typeof(request.body['cost']) === 'number' && (request.body['cost'] < 0 || request.body['cost'] > 999.99)) ?
        'Cost should be a number and between 0 to 999.99' : '';
    if(message !== '') {
        return res.status(400).send({ success: false, message, status: 400 });
    }
    next();
};

const verifyUpdateReq = async (req, res, next) => {
    let count = 0;
    for(let key in req.body) {
        if(req.body.hasOwnProperty(key)) { count++ }
    }
    if( count !== 1) {
        return res.status(400).send({ success: false, message: 'Only cost can be updated', status: 400 });
    }
    next();
};

module.exports = { verifyName, verifyCost, verifyUpdateReq };
