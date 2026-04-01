function solution(genres, plays) {
    const genreTotal = new Map();
    const songsByGenre = new Map();
    
    for (let i = 0; i < genres.length; i++) {
        const genre = genres[i];
        const play = plays[i];
        
        genreTotal.set(genre, (genreTotal.get(genre) || 0) + play);
        
        if (!songsByGenre.has(genre)) {
            songsByGenre.set(genre, []);
        }
        
        songsByGenre.get(genre).push({id: i, play: play,});
    }
    
    
    const sortedGenres = [...genreTotal.entries()].sort((a, b) => b[1] - a[1]).map(([genre]) => genre);
    
    const answer = [];
    
    for (const genre of sortedGenres) {
        console.log(songsByGenre.get(genre).entries());
        const sortedSongs = songsByGenre.get(genre).sort((a, b) => {
            if (b.play !== a.play) return b.play - a.play; 
            return a.id - b.id;});
        
        answer.push(...sortedSongs.slice(0, 2).map(song => song.id));
    }
    
    return answer;
}