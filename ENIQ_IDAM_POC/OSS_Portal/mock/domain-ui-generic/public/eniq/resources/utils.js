


const urls = 'http://ieatrcx3909.athtem.eei.ericsson.se:8091/am/json/serverinfo/cookieDomains#1.1_read';

async function fetchData(urls) {
  const response = await fetch(urls);
    if (!response.ok) {
      throw new Error(
         `Error - the server responded with the following status: ${response.status}`,
      );
    }
    const data = await response.json();
    return data;
}










export { fetchData };
