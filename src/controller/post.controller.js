require('dotenv').config();
const router = require('express').Router(), db = require('../models'), { verifyName, verifyCost, verifyUpdateReq } = require('../middleware/verify-data.middleware');

router.post('/create', verifyName, verifyCost, async (req, res) => {
    try {
        res.status(201).send({ success: true, data: await db.Post.create(req.body), message: "Date inserted successfully", status: 201 });
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, data: {}, message: 'Internal Server Error', status: 500 });
    }
});

router.get('/get', async (req, res) => {
    try {
        res.status(200).send({ success: true, data: await db.Post.findAll(), message: 'Data fetched successfully', status: 200 });
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, data: [], message: 'Internal Server Error', status: 500 });
    }
});

router.put('/update/:id', verifyUpdateReq, verifyCost, async (req, res) => {
    try {
        const count = await db.Post.update(req.body, { where: { id: req.params.id } });
        let status = { success: true, message: 'Data updated successfully', status: 201 };
        if(count[0] === 0) {
            status = { success: false, message: 'No record found to update', status: 404 };
        }
        res.status(status.status).send(status);
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: 'Internal Server Error', status: 500 });
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const count = await db.Post.destroy({ where: { id: req.params.id }, truncate: false });
        let status = { success: true, message: 'Data deleted successfully', status: 200 };
        if (count === 0) {
            status = { success: false, message: 'No record found to delete', status: 404 };
        }
        res.status(status.status).send(status);
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: 'Internal Server Error', status: 500 });
    }
});

module.exports = router;
