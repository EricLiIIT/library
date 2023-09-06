export async function getBookData(title) {
  let formattedTitle = title.split(' ').join('+');
  const url = `https://openlibrary.org/search.json?q=${formattedTitle}`;
  const response = await fetch(url);
  const data = await response.json();
  return data
}