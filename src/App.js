import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GalleryList from './GalleryListScreen/GalleryListScreen';
import Photo from './PhotoScreen/PhotoScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/testTask_Agora" element={<GalleryList />} />
        <Route path="/photo/:id" element={<Photo />} />
      </Routes>
    </Router>
  );
}

export default App;
