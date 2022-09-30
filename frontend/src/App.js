import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CoursePage from './pages/CoursePage';
import CourseDetailPage from './pages/CourseDetailPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage'; 


function App() {
  return (
    <Router>
      <Header /> 
      <main className='py-0'>
        <Container fluid>
          <Routes>
            <Route path='/' element={ <HomePage />} exact></Route>
            <Route path='/Courses' element={ <CoursePage/> }></Route>
            <Route path='/courses/:id' element={ <CourseDetailPage/> }></Route>
            <Route path='/blog' element={ <BlogPage/> }></Route>
            <Route path='/blog/:id' element={ <BlogDetailPage/> }></Route>
            
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
