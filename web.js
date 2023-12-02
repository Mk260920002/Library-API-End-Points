const add_book=require('./controller/Add_book')
const retrieve_book=require('./controller/Retrieve_books')
const update_book=require('./controller/Update_book')

function init_rounte(app){
    app.get('/api/books',retrieve_book().extract);
    app.post('/api/books',add_book().insert);
    app.put('/api/books/:id',update_book().modify);

}