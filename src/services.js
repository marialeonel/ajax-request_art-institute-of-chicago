async function fetchSingleProdutct(){
    const res = await fetch('https://api.artic.edu/api/v1/artworks');
    data = await res.json();

    console.log(data);
}