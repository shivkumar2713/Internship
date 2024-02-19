// Array to store books
let library = [];

// Function to add book to the library
function addBook(title, author, pages, genre) {
    library.push({ title, author, pages, genre });
}

// Function to display books in the library
function displayBooks(books) {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';

    books.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.innerHTML = `
            <p>Title: ${book.title}</p>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Genre: ${book.genre}</p>
        `;
        bookList.appendChild(bookElement);
    });
}

// Function to search for books by title
function searchBooksByTitle(query) {
    const filteredBooks = library.filter(book => book.title.toLowerCase().includes(query.toLowerCase()));
    return filteredBooks;
}

// Function to handle form submission
document.getElementById('addBookForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const genre = document.getElementById('genre').value;

    if (title && author && pages && genre) {
        addBook(title, author, pages, genre);
        displayBooks(library);
        this.reset();
    } else {
        alert('Please fill in all required fields.');
    }
});

// Function to handle search input
document.getElementById('searchInput').addEventListener('input', function() {
    const query = this.value.trim();
    const searchResults = searchBooksByTitle(query);
    displayBooks(searchResults);

    // Show or hide message for no results found
    const noResultsMessage = document.getElementById('noResultsMessage');
    if (searchResults.length === 0) {
        noResultsMessage.style.display = 'block';
    } else {
        noResultsMessage.style.display = 'none';
    }
});
