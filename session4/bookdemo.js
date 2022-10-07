const saveBook = (book)=>{
    const fs = require ('fs');
    const bookJSON = JSON.stringify(book);
    fs.writeFileSync('book.json',bookJSON);
} 

const readBook = ()=>{
    try {
    const fs = require ('fs');
    const databuffer = fs.readFileSync('book.json','utf-8');
    return JSON.parse(databuffer);
    }
    catch (err) {
        return []
    }
    
}

const addBook = (title,author)=>{
    var books = readBook()
    const duplicatebooks = books.filter((book) => book.title === title);

    if (duplicatebooks.length === 0) {
        books.push({
            title: title,
            author:author
        }) 
        
        console.log(`${title} is added`);
    }
    else {
        console.log('The book is already added!!');
    }
        
    saveBook(books);
}

const listBook = () =>{
    const book = readBook();
    for (let i = 0; i < book.length ; i++){
        console.log(` ${i + 1} ${book[i].title} by ${book[i].author} `);
    }
       
}
  const RemoveBook = (title1) => {
       const book = readBook();   
       const indexToRemove = book.findIndex((pl) => pl.title === 'title1');
        book.splice(indexToRemove, 1);
        console.log(`${title1} is removed.`)
        saveBook(book);    
 }
 
//addBook("Think and grow Rich","Napolean");
//listBook();
//RemoveBook("W");

module.exports = {
    addBook,
    listBook,
    RemoveBook

}

