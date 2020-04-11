var express = require('express');
var cors = require('cors');
var uuidv4 = require('uuid/v4');
var squareConnect = require('square-connect')
var port = process.env.PORT || 8080;
var app = express();
app.use(express.json());
app.use(cors())
const defaultClient = squareConnect.ApiClient.instance;
defaultClient.basePath = 'https://connect.squareupsandbox.com'
oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "EAAAEFUv7oUBP6S6603wYwXwKDZh23Dlx-FWcQvWYhutG35hy9B_DOq8HUUJuAEo"

app.post('/payments', async (req, res) => {
    const request_params = req.body;

    const idempotency_key = uuidv4();
  
    // Charge the customer's card
    const payments_api = new squareConnect.PaymentsApi();
    const request_body = {
      source_id: request_params.nonce,
      amount_money: {
        amount: 100, // $1.00 charge
        currency: 'USD'
      },
      idempotency_key: idempotency_key
    };
  
    try {
      const respone = await payments_api.createPayment(request_body);
      const json = JSON.stringify(respone);
      res.send(json)
    } catch (error) {
      res.send(error)
    } 
})

app.listen(port, function () {
 console.log('Example app listening on port ' + port);
});