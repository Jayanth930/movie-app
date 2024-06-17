const mongoose = require("mongoose");

const UserDetailsScehma = new mongoose.Schema(
{
uname: String,
email: String,
phonelno: String,
},
{
collection: "UserInfo",
},
);
const User= mongoose.model("UserInfo", UserDetailsScehma);

export default User;