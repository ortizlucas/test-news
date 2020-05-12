const fetchData = async () => {
  let response = await fetch(`https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=nbx7R2M80K9v9SuEjHQoIjwUxsL2yp6J`, { method: 'GET' })
  let json = await response.json()
  let data = json
  
  return data.response
}

export default fetchData