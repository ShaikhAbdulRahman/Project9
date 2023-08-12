const mongoose = require("mongoose");

const doctorsModel = mongoose.model("doctor",
    {
        name:{type:String },
        spl:{type:String },
        isActive: {type:Boolean }
    }
)
module.exports = doctorsModel;