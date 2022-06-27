require('dotenv').config();

const verifyLength = async (req, res, next) => {
    let message = '';
    const req = req.body;
    if(req['name'].length >= 60) { message = 'Name length exceeded 60 characters'; }
    if(req['cost'] > 0 && req['cost'] <= 999.99) { message = 'Cost should be between 0 and 999.99'; }
    if(message !== '') {
        return res.status(400).send({ success: false, data: '', message, status: 400 });
    }
    next();
};
