const out = document.getElementById('output');

function addBook() {
    const book = {
        title:       document.getElementById('title').value,
        description: document.getElementById('description').value,
        imageLink:   document.getElementById('imageLink').value
    };

    fetch('/api/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book)
    })
        .then(r=>r.json()).then(data=>out.textContent=JSON.stringify(data, null, 2));
}

function getAllBooks() {
    fetch('/api/books').then(r=>r.json()).then(data=>out.textContent=JSON.stringify(data, null, 2));
}