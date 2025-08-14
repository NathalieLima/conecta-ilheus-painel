import React, { useState } from 'react';
import { 
  Bus, 
  Clock, 
  MapPin, 
  Thermometer, 
  Users, 
  Gauge,
  Plus,
  Edit,
  Trash2,
  Filter,
  Search,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

const Mobility: React.FC = () => {
  const [activeTab, setActiveTab] = useState('buses');

  const buses = [
    {
      id: '2847',
      route: '405 - Centro/Pontal',
      status: 'ativo',
      passengers: 35,
      capacity: 50,
      temperature: 24,
      speed: 35,
      lastUpdate: '10:45',
      location: 'Av. Soares Lopes'
    },
    {
      id: '1923',
      route: '201 - Ilhéus/Itabuna',
      status: 'manutencao',
      passengers: 0,
      capacity: 80,
      temperature: 22,
      speed: 0,
      lastUpdate: '09:30',
      location: 'Garagem Central'
    },
    {
      id: '3156',
      route: '302 - Circular Norte',
      status: 'ativo',
      passengers: 42,
      capacity: 50,
      temperature: 26,
      speed: 28,
      lastUpdate: '10:44',
      location: 'Rua Jorge Amado'
    }
  ];

  const schedules = [
    {
      id: 1,
      route: '405 - Centro/Pontal',
      firstDeparture: '05:30',
      lastDeparture: '22:00',
      frequency: '20 min',
      status: 'ativo',
      stops: 15
    },
    {
      id: 2,
      route: '201 - Ilhéus/Itabuna',
      firstDeparture: '06:00',
      lastDeparture: '21:30',
      frequency: '30 min',
      status: 'ativo',
      stops: 8
    },
    {
      id: 3,
      route: '302 - Circular Norte',
      firstDeparture: '05:45',
      lastDeparture: '22:30',
      frequency: '15 min',
      status: 'suspenso',
      stops: 12
    }
  ];

  const alerts = [
    {
      id: 1,
      type: 'warning',
      title: 'Atraso na Linha 405',
      description: 'Ônibus 2847 com 15 minutos de atraso devido ao trânsito',
      time: '10:30',
      route: '405'
    },
    {
      id: 2,
      type: 'error',
      title: 'Falha no GPS',
      description: 'Ônibus 1923 sem sinal de localização',
      time: '09:20',
      route: '201'
    },
    {
      id: 3,
      type: 'info',
      title: 'Manutenção Concluída',
      description: 'Ônibus 3156 retornou à operação',
      time: '08:45',
      route: '302'
    }
  ];

  const renderBuses = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar ônibus..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="w-4 h-4" />
            <span>Filtrar</span>
          </button>
        </div>
        <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Plus className="w-4 h-4" />
          <span>Novo Ônibus</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {buses.map((bus) => (
          <div key={bus.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Bus className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">#{bus.id}</h3>
                  <p className="text-sm text-gray-600">{bus.route}</p>
                </div>
              </div>
              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                bus.status === 'ativo' 
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {bus.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">{bus.passengers}/{bus.capacity}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Thermometer className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">{bus.temperature}°C</span>
              </div>
              <div className="flex items-center space-x-2">
                <Gauge className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">{bus.speed} km/h</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">{bus.lastUpdate}</span>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center space-x-2 mb-2">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">{bus.location}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${(bus.passengers / bus.capacity) * 100}%` }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Lotação: {Math.round((bus.passengers / bus.capacity) * 100)}%
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <button className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-blue-700">
                Visualizar
              </button>
              <button className="text-gray-600 hover:text-gray-900">
                <Edit className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSchedules = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Horários das Linhas</h3>
        <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Plus className="w-4 h-4" />
          <span>Nova Linha</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Linha
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Primeiro
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Último
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Frequência
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Paradas
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {schedules.map((schedule) => (
                <tr key={schedule.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{schedule.route}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {schedule.firstDeparture}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {schedule.lastDeparture}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {schedule.frequency}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {schedule.stops}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      schedule.status === 'ativo' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {schedule.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderAlerts = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Alertas do Sistema</h3>
      
      <div className="space-y-3">
        {alerts.map((alert) => (
          <div key={alert.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-start space-x-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                alert.type === 'error' ? 'bg-red-100' :
                alert.type === 'warning' ? 'bg-orange-100' : 'bg-blue-100'
              }`}>
                {alert.type === 'error' && <AlertTriangle className="w-4 h-4 text-red-600" />}
                {alert.type === 'warning' && <Clock className="w-4 h-4 text-orange-600" />}
                {alert.type === 'info' && <CheckCircle className="w-4 h-4 text-blue-600" />}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-gray-900">{alert.title}</h4>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500">Linha {alert.route}</span>
                    <span className="text-xs text-gray-500">{alert.time}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-1">{alert.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const tabs = [
    { id: 'buses', label: 'Ônibus', icon: Bus },
    { id: 'schedules', label: 'Horários', icon: Clock },
    { id: 'alerts', label: 'Alertas', icon: AlertTriangle }
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Mobilidade Urbana</h1>
        <p className="text-gray-600 mt-1">Monitore e gerencie o transporte público da cidade</p>
      </div>

      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      <div>
        {activeTab === 'buses' && renderBuses()}
        {activeTab === 'schedules' && renderSchedules()}
        {activeTab === 'alerts' && renderAlerts()}
      </div>
    </div>
  );
};

export default Mobility;