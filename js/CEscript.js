let options = {
    1:"motivational",
    2:"success",
    3:"positive"
};
    let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    let option = random(1,4);
    console.log(option)
     fetch(`https://hindi-quotes.vercel.app/random/${options[option]}`)
     .then(promise=>promise.json())
     .then(data=>{
        quote = data["quote"];
        document.getElementById('quotes').innerText=quote;
     })
     
    


