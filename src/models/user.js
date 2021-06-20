const {Schema, model} = require("mongoose");
const bcrypt = require("bcryptjs")

const UserSchema = new Schema({
    username: {type: String, required: true, unique:true},
    password: {type: String, required: true},
    bookings: [{ type: Schema.Types.ObjectId, ref: 'Booking' }],
    role: {type: String, required: true, default: "User"},

}, {
    timestamps: true
})

//Definimos metodo para la clase UserSchema que encripte la contrasña
UserSchema.methods.encryptPassword = async (password) => {
    //String para generar el cifrado y por defecto se ejecuta 10 veces el algoritmo
    //Contra más veces se ejecuta, más seguro será el cifrado. Consume servidor.
    const salt = await bcrypt.genSalt(10);
    //retonra la contraseña cifrada
    return await bcrypt.hash(password, salt)
}

//Definimos metodo para la clase UserSchema que compare la contraseña
UserSchema.methods.matchPassword = async function(password) {
    //La contraseña a comparar debe ser previamente cifrada, de esto se encarga:
    //Metodo de bcrypt que compara la contraseña introducida con la del esquema de la base de datos
    return await bcrypt.compare(password, this.password) //Boleano
}



module.exports = model("User", UserSchema);