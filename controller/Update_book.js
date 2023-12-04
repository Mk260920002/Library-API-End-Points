const Joi = require('joi');
const model = require('../model');

function validateBook(book) {
    const schema = Joi.object({
       
        Title: Joi.string().required(),
        Author: Joi.string().required(),
        Year_of_publication:Joi.date().required()
      
    });
    const result=schema.validate(book);
    console.log('Validation',result);
    return result ;
}


function update_book() {
    return {
        modify: async (req, res) => {
            const bookId = req.params.id;

            try {
                const existingBook = await model.findById(bookId);

                if (!existingBook) {
                    return res.status(404).json({ error: 'Book not found' });
                }

                const { error } = validateBookUpdate(req.body);

                if (error) {
                    return res.status(400).json({ error: error.details[0].message });
                }

                const updatedBook = await model.findByIdAndUpdate(
                    bookId,
                    { $set: req.body },
                    { new: true } 
                );

                return res.json(updatedBook);
            } catch (error) {
                console.error(error);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
        }
    };
}

module.exports=update_book