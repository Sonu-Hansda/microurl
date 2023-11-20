export default async function shorten (url: string){
  
  const response = await fetch('https://api.tinyurl.com/create?api_token=3kaEVeCytIUgrsgxx8BKRplYsy9bUc7MTcxAKpq7zy6L4nXwnmCWeaZpYgJN', 
  {
    method:'POST',
    headers:{
      'Content-Type':'application/json',
    },
    body:JSON.stringify({
      "url":url,
      "domain":"tiny.one"
    }),
  })
const result = await response.json();
console.log(result.data.tiny_url);

  return result.data.tiny_url;
  
}