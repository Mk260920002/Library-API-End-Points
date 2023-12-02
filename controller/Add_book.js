const Joi = require('joi');
const model = require('../model');

function validateBook(book) {
    const schema = Joi.object({
        id:Joi.number().required(),
        Title: Joi.string().required(),
        Author: Joi.string().required(),
        Year_of_publication:Joi.string().required()
      
    });

    return schema.validate(book);
}

function add_book() {
    return {
        insert: async (req, res) => {
            const { error } = validateBook(req.body);

            if (error) {
                return res.status(400).json({ error: error.details[0].message });
            }

            try {
                const newBook = await model.create(req.body);
                return res.status(201).json(newBook);
            } catch (error) {
                if (error.code === 11000) {
                    return res.status(400).json({ error: 'Duplicate entry. Book already exists.' });
                }

                console.error(error);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
        }
    };
}
module.exports=add_book
