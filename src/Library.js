function createLibrary(libraryName) {
  var library = {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
  }
  return library
}

function addBook(library, bookTitle) {
 library.shelves[bookTitle.genre].push(bookTitle)
}

function checkoutBook(library, title, genre) {
  for (var i = 0; i < library.shelves[genre].length; i++) {
    var book = library.shelves[genre][i]
    if (book.title === title) {
      library.shelves[genre].splice(i,1)
      return  `You have now checked out ${title} from the ${library.name}`
    }
  }
  return `Sorry, there are currently no copies of ${title} available at the ${library.name}`
}


module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
