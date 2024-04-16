import './assets/styles.css';

import SiteNavigation from './components/SiteNavigation/SiteNavigation';
import SiteChat from './components/SupportChat/SupportChat';

function App() {
  return (
    <>
      <SiteNavigation />
      <div className="container">
        <SiteChat />
      </div>
    </>
  )
}

export default App