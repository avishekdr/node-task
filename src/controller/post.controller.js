require('dotenv').config();
const router = require('express').Router(), db = require('../models'), { verifyData, verifyUpdateReq } = require('../middleware/verify-data.middleware');

router.post('/create', verifyData, async (req, res) => {
    try {
        res.status(201).send({ success: true, data: await db.Post.create(req.body), message: "Date inserted successfully", status: 201 });
    } catch (error) {
        console.error(error);
        res.status(400).send({ success: false, data: '', message: 'Internal Server Error', status: 400 });
    }
});

router.get('/get', async (req, res) => {
    try {
        res.status(200).send({ success: true, data: await db.Post.findAll(), message: 'Data fetched successfully', status: 200 });
    } catch (error) {
        console.error(error);
        res.status(400).send({ success: false, data: [], message: 'Internal Server Error', status: 400 });
    }
});

router.put('/update/:id', verifyUpdateReq, verifyData, async (req, res) => {
    try {
        await db.Post.update(req.body, { where: { id: req.params.id } });
        res.status(200).send({ success: true, data: await db.Post.findAll(), message: 'Data fetched successfully', status: 200 });
    } catch (error) {
        console.error(error);
        res.status(400).send({ success: false, data: [], message: 'Internal Server Error', status: 400 });
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        await db.Post.destroy({ where: { id: req.params.id }, truncate: false });
        res.status(200).send({ success: true, data: '', message: 'Data deleted successfully', status: 200 });
    } catch (error) {
        console.error(error);
        res.status(400).send({ success: false, data: '', message: 'Internal Server Error', status: 400 });
    }
});

module.exports = router;
