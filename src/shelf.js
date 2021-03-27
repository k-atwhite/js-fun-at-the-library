function shelfBook(book, shelf) {
  if (shelf.length<3) {
    shelf.unshift(book)
  }
};

// unshelfBook("Dune", sciFiShelf);
// var sciFiShelf = [hyperion, dune, endersGame];

function unshelfBook(bookTitle, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === bookTitle) {
      shelf.splice(i, 1)
    }
  }
}

function listTitles(shelf) {
  var titles = ""
  for (var i = 0; i < shelf.length; i++) {
    titles += shelf[i].title + ", "
  }
var editedTitles = titles.slice(0,-2)
return editedTitles
}

function searchShelf(shelf, title) {
  for (var i = 0; i < shelf.length; i++) {
    if (title === shelf[i].title) {
      return true
    }
  }
  return false
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
