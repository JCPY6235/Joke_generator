//https://api.blablagues.net/?rub=blagues//

const header = document.getElementById('header')
const  content = document.getElementById('content')


function getBlagues(){ 
    fetch("https://api.blablagues.net/?rub=blagues")
    .then((res)=> res.json())
    .then((data) =>
    {   const joke = data.data.content
        header.textContent = joke.text_head;
        content.textContent = joke.text !== ""
        ?joke.text
        :joke.text_hidden
        console.log(data);
        
    });
}

getBlagues();

document.body.addEventListener('click', getBlagues);


    
