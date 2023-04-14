interface AudioPlayer {
    audioVolume: number
    songDuration: number
    song: string
    details: Details
}

interface Details {
    author: string
    year: number
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: 'La Durango',
    details: {
        author: 'Dharius',
        year: 2020
    }
}

const { song, details } = audioPlayer
const { author } = details
// console.log('song: ' + song)
// console.log('Author: ' + author)

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks']
const [,,trunks] = dbz;
console.log('Personaje 3',trunks);
