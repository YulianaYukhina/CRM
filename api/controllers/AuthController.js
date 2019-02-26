module.exports = { 
    AddUser: (req, res) => {
        // User.create({
        //     login: 'test',
        //     password: 'P@ssw0rd',
        //     salt: 'salt',
        //     role: 'Admin'
        // });
        console.log('Add user!');

        console.log(User.test());
        res.status(200).send({
            success: true
        })
    }
}