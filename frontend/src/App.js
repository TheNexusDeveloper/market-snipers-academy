// import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CoursePage from './pages/CoursePage';
import CourseDetailPage from './pages/CourseDetailPage';
import CartPage from './pages/CartPage'
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import PaymentPage from './pages/PaymentPage'
import PlaceOrderPage from './pages/PlaceOrderPage'

import UserListPage from './pages/UserListPage'
import UserEditPage from './pages/UserEditPage'
import CourseListPage from './pages/CourseListPage'
import CourseEditPage from './pages/CourseEditPage'



function App() {
  return (
    <Router>
      <Header /> 
      <main className='py-0'> 
        <switch>
            <Route path='/' component={HomePage} exact></Route>
            <Route path='/login' component={LoginPage}></Route>
            <Route path='/register' component={RegisterPage}></Route>
            <Route path='/profile' component={ProfilePage}></Route>
            <Route path='/payment' component={PaymentPage}></Route>
            <Route path='/placeorder' component={PlaceOrderPage}></Route>
            <Route path='/Courses' component={CoursePage}></Route>
            <Route path='/course/:id' component={CourseDetailPage} exact></Route>
            <Route path='/cart/:id?' component={CartPage}></Route>

            <Route path='/admin/userList' component={UserListPage}></Route>
            <Route path='/admin/user/:id/edit' component={UserEditPage}></Route>

            <Route path='/admin/courselist' component={CourseListPage}></Route>
            <Route path='/admin/course/:id/edit' component={CourseEditPage}></Route>

            <Route path='/blog' component={BlogPage}></Route>
            <Route path='/blog/:id' component={BlogDetailPage}></Route>
            
        
        </switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
