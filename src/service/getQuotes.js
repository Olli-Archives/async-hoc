
export default function getQuotes(count = 10){
  
  return fetch(`https://futuramaapi.herokuapp.com/api/quotes/${count}`)
    .then(res=> ([res.ok, res.json()]))
    .then(([ok, json])=>{
      if(!ok) throw 'unable to fetch';
      return json;
    });
 
}



