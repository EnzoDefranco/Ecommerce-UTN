import responseBooks from "../../mocks/withresults.json";
import noresults from "../../mocks/noresults.json";

export function useBooks () {
    const books = responseBooks.items;

    const mappedBooks = books?.map(book => ({
        id: book.id,
        title: book.volumeInfo.title.split(' / ')[0],
        poster: book.volumeInfo.imageLinks.thumbnail,
        paginas: book.volumeInfo.pageCount, 
        autor: book.volumeInfo.authors,
        editorial: book.volumeInfo.publisher,
        estrellas: book.volumeInfo.averageRating
        
        }))
        .filter(book => (
            book.title &&
            book.poster &&
            book.paginas > 0  &&
            book.autor &&
            book.editorial &&
            book.estrellas !== undefined
        ));
        ;
    
    
        return {books: mappedBooks}
}