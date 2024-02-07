// App.js

import Layout from './components/Layout';
import LeftColumn from './components/LeftColumn';
import MiddleColumn from './components/MiddleColumn';
import RightColumn from './components/RightColumn';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Hero from './components/Hero';

function App() {
  return (
    <div>
      <NavigationBar/>
      <Hero/>
      <Layout>
        <LeftColumn />
        <MiddleColumn />
        <RightColumn />
      </Layout>
      <Footer/>
    </div>
  );
}

export default App;
