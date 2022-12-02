import './App.css';
import Table from './components/Table.js';

function App() {
  return (
    <div>
      <Table animes={animes}/>
    </div>
  );
}

const animes = [
  {name: "Bocchi The Rock!", eps: 12, category: "Watching", image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx130003-5Y8rYzg982sq.png', key: 1},
  {name: "Bleach", eps: 366, category: "Completed", image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx269-KxkqTIuQgJ6v.png', key: 2},
  {name: "Akira", eps: 1, category: "Planning", image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx47-Sjkc8RDBjqwT.jpg', key: 3}
]


export default App;
