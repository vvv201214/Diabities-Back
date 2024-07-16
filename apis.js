const User = require('./models/users');
const Diabities = require('./models/diabities');
const {ObjectId} = require('mongodb');

exports.apis = async(app)=>{
    app.get('/user', async (req, res)=>{
        try{
            const user = await User.find();
            res.status(200).json({message: 'success', data: user})
        } catch(err){
            res.status(400).json({message: 'error', data: err})
        }
    })

    app.get('/diabities/:id', async (req, res)=>{
        try{
            const {id} = req.params;
            const data = await Diabities.find({patient: new ObjectId(id)}).sort({_id: -1});
            res.status(200).json({message: 'success', data: data})
        } catch(err){
            res.status(400).json({message: 'error', data: err})
        }
    })

    app.post('/diabities', async (req, res)=>{
        try{
            const {diabities, remark, patient} = req.body;
            const diabitiesCreate = await Diabities.create([{
                diabities, date: new Date(), remark, patient
            }]);
            res.status(201).json({message: 'success', data: diabitiesCreate})
        } catch(err){
            console.log(err)
            res.status(400).json({message: 'error', data: err})
        }
    })
}