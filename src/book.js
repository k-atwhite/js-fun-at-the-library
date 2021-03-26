function createTitle(title) {
 return `The ${title}`
};

//console.log(createTitle("Dragon in the Summer"));

function buildMainCharacter(name, age, pronouns) {
 var character = {
   name: name,
   age: age,
   pronouns: pronouns,
 }
return character
}

// NOTE TO SELF! MOVING PAST THIS ERROR FOR NOW. ADDED SKIP BACK TO THE TEST.

function saveReview(newReview, allReviews) {
  var redundant = false
  for (var i = 0; i < allReviews.length; i++) {
    if (newReview === allReviews[i]) {
      redundant = true
    }
  }
  if (!redundant) {
    allReviews.push(newReview)
  }
}


function calculatePageCount(title) {
    var titleLength = title.length*20
    return titleLength
}

function writeBook(title, bookCharacter, genre) {
  var book = {
    title: title,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(title),
    genre: genre,
  }
  return book
};

function editBook(book) {
  return book.pageCount = book.pageCount*.75
};


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
