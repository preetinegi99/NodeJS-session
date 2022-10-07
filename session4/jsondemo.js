//JSON
const book = {
    title: "Rich Dad Poor Dad",
    author: "Robert"
}

const bookJSON = JSON.stringify(book)
console.log(bookJSON);

//parse the JSON
const bookData = JSON.parse(bookJSON);
console.log(bookData);