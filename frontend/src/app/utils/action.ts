'use server';

export const fetchAnime = async (page: number, keyword: string) =>{
    const response = await fetch(`https://api-aniwatch.onrender.com/anime/search?q=${keyword}&page=${page}&limit=8`);

    const data = await response.json();
    console.log(data);
    return data;
}