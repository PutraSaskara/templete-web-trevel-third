import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Tours from './pages/Tours';
import TourDetail from './pages/TourDetail';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

function App() {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="packages" element={<Tours />} />
                    <Route path="packages/:slug" element={<TourDetail />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="blog/:slug" element={<BlogPost />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
