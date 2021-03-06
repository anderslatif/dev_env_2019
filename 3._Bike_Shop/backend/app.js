const express = require('express');
const app = express();
const helmet = require('helmet');
app.use(helmet());  

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bikes', {useNewUrlParser: true});
// console.log(test);



const Bicycle = mongoose.model('Bicycle', {
    productName: String,
    productPrice: Number ,
    productCover: String,
    productListImage: [{type: String}],
    type: String,
    productId: String
  });

const User = mongoose.model('User', {
    user: String,
    password: String,
    role: String,
    bookings: [{type: String}]
});


app.post('/login', function(req, res) {
    const query = User.findOne({"user": req.body.user, "password": req.body.password});
    query.exec(function(error, user) {
        let response = {};
        if(error || !user){
            response = {statuscode:403, description:"Denied"};

        }else{
            response = {statuscode:200, description:"OK"};
        }
        res.send(response.statuscode, response.description);
    })
});

app.post('/signup', function(req, res) {
    let options = {upsert: true, new: true, setDefaultsOnInsert: true};
    const user = {"user": req.body.user, "password": req.body.password}
    const find = User.findOne(user);
    find.exec(function(error, foundUser) {
        let response = {};
        console.log(foundUser);
        console.log(error);
        if (foundUser) {
            //User exists and needs to be passed to frontend accordingly
            response = {statuscode:403, description:"User exists"};
            res.send(response);
        } else {
            const query = User.findOneAndUpdate(user, user, options);
            query.exec(function(error, persistedUser) {
                let response = {};
                console.log(persistedUser);
                if (error) {
                    response = {statuscode:403, description:"Denied"};
                } else {
                    response = {statuscode:200, description:"OK"};
                }
                res.send(response.statuscode, response.description);
            })
        }
    })
});

app.get('/purchases', function(req, res) {
    const query = User.find();
    query.exec(function(error, users) {
        const purchases = users.map(u => u.bookings)
        res.send(purchases);
    });
});

app.get('/bicycles', function(req, res) {
    const query = Bicycle.find();
    query.exec(function(error, bicycles) {
        console.log("query")
        console.log(error, bicycles);
        console.log(req);
        res.send(bicycles);
    });
});


app.listen('browser-test', async (req, res) => {
    const browsers = ['firefox', 'chrome'];
    await testBrowser(browsers);

});

async function testBrowser(browsers) {
    let errors = false;
    const {Builder, By, Key} = require('selenium-webdriver');

    browsers.forEach(async browser => {
        let driver = await new Builder().forBrowser(browser).build();
        try {
            await driver.get('localhost:3000');
            await driver.findElement(By.name('.products__component')).sendKeys('webdriver', Key.RETURN);
        } finally {
            await driver.quit();
        }
    });
}

app.listen(8080, (err) => {
    if (err) {
        console.log("Error ", err);
    } else {
        console.log("App is running on port 8080");
    }
});
