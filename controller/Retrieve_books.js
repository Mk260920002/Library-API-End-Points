const model = require('../model');

function retrieve_book() {
    return {
        extract: async (req, res) => {
            try {
                const detail = await model.find({});
                return res.json(detail); 
            } catch (error) {
                console.error(error);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
        }
    };
}

module.exports=retrieve_book