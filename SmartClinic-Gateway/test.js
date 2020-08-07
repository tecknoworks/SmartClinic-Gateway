const express =  require('express');
const router = express.Router()

let app = express();
app.use('/test', router)

router.route('/').get(function(req, res){
    res.send('Test ok')
})

router.route('/getInfo').get(function (req, res) {
    res.send([{
        test: 'first test',
        status: 'ok'
    }])
})

app.listen(9002, () => {
    console.log('Server running on 9002');
})