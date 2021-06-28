require("../../src/app");
const {User} = require('../../src/models/index');  


async function newUser(){

    const user = new User({
        username: "user",
        password: 1,
        role: "User"
    })

    const user1 = await user.save();
}

newUser();