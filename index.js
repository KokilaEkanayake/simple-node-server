import express from 'express';
import morgan from 'morgan';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

const port = 3000;

app.get('/', (req, res) => {
    res.send({ "message": "GET request to homepage" })
});

app.get('/api', (req, res) => {
    res.status(200)
    res.json({ "message": "SUCCESS" });
})

app.use(function (req, res, next) {
    res.status(404);
    res.json({
        "message": `Cannot ${req.method} ${req.path}`,
        "error": "Not Found",
        "statusCode": res.statusCode
    });
});

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});