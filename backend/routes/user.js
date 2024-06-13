const express = require('express');
const app = express();

const router = express.Router();

router.get('/user', userRouter);

module.exports = {
    router
}