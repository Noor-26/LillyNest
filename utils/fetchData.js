export async function fetchData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      return {
        loading: false,
        data,
        error: null,
      };
    } catch (error) {
      console.error('Error fetching data:', error);
  
      return {
        loading: false,
        data: null,
        error: 'Failed to fetch data',
      };
    }
  }
  