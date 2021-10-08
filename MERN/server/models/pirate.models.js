const mongoose = require('mongoose')

mongoose.Schema.Types.Boolean.convertToFalse.add('null');
mongoose.Schema.Types.Boolean.convertToTrue.add('on');
const PirateSchema = new mongoose.Schema({
    
    name : {
        type: String,
        required: [true, "A pirate must have a name, matey!"],
        minlength: [3, "Your pirate name must be longer than 'Arr'!!"]
    },
    img: {
        type: String,
        required: [true, "You need a selfie!"],
        minlength:[5, "You need a url!"]
    },
    catchphrase: {
        type: String,
        required: [true, "A true pirate has words to live by!"],
        minlength: [3, "Make sure it's meaningful (more than 2 letters)!"]
    },
    chests: {
        type: Number,
        required: [true, "You must have gotten SOME treasure before...right?"],
        min: [0, "You must have stolen some bit of treasure before...right?"],
        max: [6, "6 treasure is the max amount of trasures you can tell us you have."]
    },
    peg_leg:{
        type: Boolean,
        required: [true, "Do ya have it or not?"]
    },
    eye_patch:{
        type: Boolean,
        required: [true, "Do ya have it or not?"]
    },
    hook_hand:{
        type: Boolean,
        required: [true, "Do ya have it or not?"]
    },
    position:{
        type: String,
        required:[true, "You aren't a pirate if you dont have a position!!"],
        allowedValues: ['Captain', 'First Mate', 'Quarter Master', 'Bootswain', 'Powder Monkey'],
        autoform: {
            options:[
                {label: 'Captain', value: 'Captain'},
                {label: 'First Mate', value: 'First Mate'},
                {label: 'Quarter Master', value: 'Quarter Master'},
                {label: 'Bootswain', value: 'Bootswain'},
                {label: 'Powder Monkey', value: 'Powder Monkey'},
                ]
                
            }
        }

    }, {timestamps: true})

    module.exports.Pirate = mongoose.model('Pirate', PirateSchema)
