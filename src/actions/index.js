// const SELECT_BOOK = 'SELECT_BOOK'
export function selectBook(book) {
  //selectBook is an action creator, needs to return an action, an obect with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
