export default function fetchCharacters(){
  return fetch('https://rickandmortyapi.com/api/character/')
    .then(res=>([res.ok, res.json()]))
    .then(([ok, json])=>{
      if(!ok) throw 'cant fetch rick chars';
      return json; 
    });
}
