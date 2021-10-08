const { Pirate } = require('../models/pirate.models')

// module.exports = {
//     createPirate: (req, res) => {
//         Pirate.exists({name: req.body.name})
//         .then(pirateExists => {
//             if(pirateExists){
//                 return Promise.reject({errors: {name: {message: "A pirate with that name already exists."}}})
//             } 
//             return Pirate.create(req.body)
//         })
//         .then(data => res.json({message: "success", data: data}))
//         .catch(err => res.json({message: "error", data: err}))
//     }
// }
module.exports = { 
    createPirate : (req, res) => {
        const { name, img, catchphrase, chests, peg_leg, eye_patch, hook_hand, position } = req.body
        Pirate.create({
            name,
            img,
            catchphrase,
            chests,
            peg_leg,
            eye_patch,
            hook_hand,
            position
        })
        .then(data => res.json({ message: "success", data: data }))
            .catch(err => res.status(400).json(err));
    },
    getAllPirates: (req, res)=>{
        Pirate.find({})
        .then(data => res.json({ message: "success", data: data }))
            .catch(err => res.json({ message: "error", data: err }));
    },
    onePirate: (req, res) =>{
        Pirate.findOne({_id: req.params.id})
        .then(data => res.json({ message: "success", data: data }))
            .catch(err => res.json({ message: "error", data: err }));
    },

    deletePirate: (req, res) =>{
        Pirate.deleteOne({_id: req.params.id})
        .then(data => res.json({ message: "success", data: data }))
        .catch(err => res.json({ message: "error", data: err }));
    },
    


}
