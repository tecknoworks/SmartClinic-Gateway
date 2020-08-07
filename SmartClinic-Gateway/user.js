const express =  require('express');
const router = express.Router()

let app = express();
app.use('/users', router)

router.route('/').get(function(req, res){
    res.send('It s ok')
})

router.route('/getUsers').get(function (req, res) {
    res.send([{
        username: 'username1',
        password: 'password1'
    },{
        username: 'username2',
        passwprd: 'password2'
    }])
})

app.listen(9001, () => {
    console.log('Server running on 9001');
})