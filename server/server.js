const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
const feedbackRouter = require('./routes/feedback.router');
app.use('/api/feedback', feedbackRouter);

/// ERROR RECEIVED WITH THE EXPRESS ROUTE ⬇️
/// throw new TypeError('Router.use() requires a middleware function

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});