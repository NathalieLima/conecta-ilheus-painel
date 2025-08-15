import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Tourism from './components/Tourism';
import Analytics from './components/Analytics';
import Users from './components/Users';

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'tourism':
        return <Tourism />;
      case 'analytics':
        return <Analytics />;
      case 'users':
        return <Users />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="flex-1 overflow-hidden">
        <div className="h-full overflow-y-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

export default App;