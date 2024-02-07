export const exerciseOptions = {
    method: 'GET',
    
    params: {limit: '10'},
    headers: {
      'X-RapidAPI-Key': '94209b6de8msh3d002fd0875a3ffp146191jsn46fa13d6ade6',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}