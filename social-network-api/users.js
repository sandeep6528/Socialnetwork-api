const { UserModel } = require('./models.js');

initUsers = function(app) {
    app.get('/api/users', async (req, res) => {
        res.setHeader('content-type', 'application/json');
        res.send(await UserModel.find({}));
    });
    
    app.get('/api/users/:id', async (req, res) => {
        res.setHeader('content-type', 'application/json');
        const user = await UserModel.findById(req.params.id);
        res.send(user, user ? 200 : 204);
    });
    
    app.post('/api/users', async (req, res) => {
        res.setHeader('content-type', 'application/json');
        try {
            await UserModel.create({
                ...req.body,
            });
    
            res.send({message: 'Added Successfully'})
        } catch {
            res.send({success: 'Failed to Add'}, 500)
        }
    });
    
    app.put('/api/users/:id', async (req, res) => {
        res.setHeader('content-type', 'application/json');
        try {
            await UserModel.findByIdAndUpdate(req.params.id,
                {
                    ...req.body,
                }
            );
    
            res.send({message: 'Updated Successfully'})
        } catch {
            res.send({success: 'Failed to Update'}, 500)
        }
    });
    
    app.delete('/api/users/:id', async (req, res) => {
        try {
            res.setHeader('content-type', 'application/json');
            await UserModel.findByIdAndDelete(req.params.id);
            res.send({message: 'Deleted Successfully'})
        } catch {
            res.send({success: 'Failed to Delete'}, 500)
        }
    });    
}

module.exports = {
    initUsers
};
