export default function fetchCharacters(page = 1){
  const url = `https://rickandmortyapi.com/api/character/?page=${page}`;
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  console.log('url', url);
  return fetch(proxyUrl + url)
    .then(res=>([res.ok, res.json()]))
    .then(([ok, json])=>{
      if(!ok) throw 'cant fetch rick chars';
      return json; 
    });
}
