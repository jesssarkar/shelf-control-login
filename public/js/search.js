document.querySelector('button').addEventListener('click', getBook)

function getBook(){
    let title = document.getElementById('titleInput').value
    let author = document.getElementById('authorInput').value

    fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${title}+inauthor:${author}`)
        .then(res => res.json())
        .then(data => {
          
            document.querySelector('#bookimg').src = data.items[0].volumeInfo.imageLinks.thumbnail
            document.querySelector('h2').innerText = data.items[0].volumeInfo.title
            document.querySelector('h4').innerText = data.items[0].volumeInfo.authors
            document.querySelector('h3').innerText = data.items[0].volumeInfo.description
            
            const button = document.createElement('button')
                document.querySelector(".bookResult").appendChild(button)
                button.classList.add("btn", "btn-info", "btn-lg", "text-light")
                button.textContent = "Add Book"
                button.addEventListener('click', addBook)
        }
            
    
        )
        .catch(err => {
            console.log(`error ${err}`)
        });
}

async function addBook(){
    try{
    const response = await fetch('books/addBook', {
        
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: document.querySelector('h2').innerText,
            author: document.querySelector('h4').innerText,
            thumbnail: document.querySelector('#bookimg').src,
            
        })
    })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
    console.log(err)
    }
}