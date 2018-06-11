export function selectBook (book) {
    //this action Creator should return an action, an object with a type property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}