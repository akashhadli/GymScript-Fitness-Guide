export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '320c18417amsh5340c820bc2ad2cp16e364jsnb6ba5fe76392',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}