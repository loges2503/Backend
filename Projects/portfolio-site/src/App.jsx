import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppRouter from '@/router/AppRouter';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Header />
        <main className="flex-grow">
          <AppRouter />
        </main>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
