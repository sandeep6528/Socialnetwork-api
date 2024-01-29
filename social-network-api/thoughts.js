const { ThoughtModel } = require('./models.js');

initThoughts = function(app) {
    app.get('/api/thoughts', async (req, res) => {
        res.setHeader('content-type', 'application/json');
        res.send(await ThoughtModel.find({}));
    });
    
    app.get('/api/thoughts/:id', async (req, res) => {
        res.setHeader('content-type', 'application/json');
        const user = await ThoughtModel.findById(req.params.id);
        res.send(user, user ? 200 : 204);
    });
    
    app.post('/api/thoughts', async (req, res) => {
        res.setHeader('content-type', 'application/json');
        try {
            await ThoughtModel.create({
                ...req.body,
            });
    
            res.send({message: 'Added Successfully'})
        } catch {
            res.send({success: 'Failed to Add'}, 500)
        }
    });
    
    app.put('/api/thoughts/:id', async (req, res) => {
        res.setHeader('content-type', 'application/json');
        try {
            await ThoughtModel.findByIdAndUpdate(req.params.id,
                {
                    ...req.body,
                }
            );
    
            res.send({message: 'Updated Successfully'})
        } catch {
            res.send({success: 'Failed to Update'}, 500)
        }
    });
    
    app.delete('/api/thoughts/:id', async (req, res) => {
        try {
            res.setHeader('content-type', 'application/json');
            await ThoughtModel.findByIdAndDelete(req.params.id);
            res.send({message: 'Deleted Successfully'})
        } catch {
            res.send({success: 'Failed to Delete'}, 500)
        }
    });    
}

module.exports = {
    initThoughts
};
