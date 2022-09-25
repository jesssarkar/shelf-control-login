const deleteText = document.querySelectorAll('.bi-trash')
const thumbText = document.querySelectorAll('.vote')

Array.from(deleteText).forEach((element)=>{
    element.addEventListener('click', deleteBook)
})

Array.from(thumbText).forEach((element)=>{
    element.addEventListener('click', addLike)
})


async function deleteBook(){
    const bName = this.parentNode.childNodes[3].innerText
    const bAuthor = this.parentNode.childNodes[5].innerText

    console.log(bName)
    console.log(bAuthor)
    try{
        const response = await fetch('books/deleteBook', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'name': bName,
                'author': bAuthor
            })
          })
        const data = await response.json()
        location.reload()

    }catch(err){
        console.log(err)
    }
}

async function addLike(){
    const bName = this.parentNode.childNodes[3].innerText
    const bAuthor = this.parentNode.childNodes[5].innerText
    const tLikes = Number(this.parentNode.childNodes[7].innerText)
    
    try{
        const response = await fetch('books/addLike', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'name': bName,
                'author': bAuthor,
                'likes': tLikes
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}