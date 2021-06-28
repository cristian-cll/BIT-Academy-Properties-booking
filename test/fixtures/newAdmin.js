require("../../src/app");
const {User} = require('../../src/models/index');  


async function newAdmin(){

    const user = new User({
        username: "admin",
        password: 1,
        role: "Admin"
    })

    const admin = await user.save();
}

newAdmin();