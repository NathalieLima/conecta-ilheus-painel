import React from 'react';
import { 
  LayoutDashboard, 
  MapPin, 
  Bus, 
  Calendar, 
  Users, 
  BarChart3,
  Settings,
  Bell
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'tourism', label: 'Turismo', icon: MapPin },
    { id: 'mobility', label: 'Mobilidade', icon: Bus },
  ];

  const secondaryItems = [
    { id: 'analytics', label: 'Análises', icon: BarChart3 },
    { id: 'users', label: 'Usuários', icon: Users },
    { id: 'notifications', label: 'Notificações', icon: Bell },
    { id: 'settings', label: 'Configurações', icon: Settings },
  ];

  return (
    <div className="w-64 bg-white shadow-lg border-r border-gray-200 flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Ilhéus</h1>
            <p className="text-sm text-gray-500">Gestão Municipal</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 px-4 py-6">
        <div className="space-y-2">
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-3">
            Principal
          </h2>
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <Icon className="mr-3 h-5 w-5" />
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="mt-8 space-y-2">
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-3">
            Ferramentas
          </h2>
          {secondaryItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <Icon className="mr-3 h-5 w-5" />
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <Users className="w-4 h-4 text-gray-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Admin</p>
            <p className="text-xs text-gray-500">Prefeitura de Ilhéus</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;