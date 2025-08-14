import React, { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  Star, 
  Plus, 
  Edit, 
  Trash2,
  Filter,
  Search,
  Users,
  Clock
} from 'lucide-react';

const Tourism: React.FC = () => {
  const [activeTab, setActiveTab] = useState('events');

  const events = [
    {
      id: 1,
      name: 'Festival de Chocolate',
      date: '2024-01-15',
      location: 'Centro Histórico',
      attendees: 5000,
      status: 'ativo',
      category: 'Gastronomia'
    },
    {
      id: 2,
      name: 'Carnaval de Ilhéus',
      date: '2024-02-10',
      location: 'Avenida Soares Lopes',
      attendees: 25000,
      status: 'planejamento',
      category: 'Cultura'
    },
    {
      id: 3,
      name: 'Festival de Inverno',
      date: '2024-07-20',
      location: 'Teatro Municipal',
      attendees: 2000,
      status: 'ativo',
      category: 'Arte'
    }
  ];

  const routes = [
    {
      id: 1,
      name: 'Roteiro Histórico',
      duration: '4 horas',
      stops: 8,
      difficulty: 'Fácil',
      rating: 4.8,
      category: 'História'
    },
    {
      id: 2,
      name: 'Praias do Sul',
      duration: '6 horas',
      stops: 5,
      difficulty: 'Moderado',
      rating: 4.6,
      category: 'Natureza'
    },
    {
      id: 3,
      name: 'Rota do Cacau',
      duration: '8 horas',
      stops: 12,
      difficulty: 'Difícil',
      rating: 4.9,
      category: 'Rural'
    }
  ];

  const restaurants = [
    {
      id: 1,
      name: 'Casa da Moqueca',
      category: 'Frutos do Mar',
      rating: 4.7,
      price: '$$',
      specialty: 'Moqueca Baiana',
      status: 'ativo'
    },
    {
      id: 2,
      name: 'Chocolateria Ilhéus',
      category: 'Doces',
      rating: 4.9,
      price: '$',
      specialty: 'Chocolate Artesanal',
      status: 'ativo'
    },
    {
      id: 3,
      name: 'Boteco do Jorge',
      category: 'Regional',
      rating: 4.5,
      price: '$',
      specialty: 'Acarajé',
      status: 'inativo'
    }
  ];

  const renderEvents = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar eventos..."
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
          <span>Novo Evento</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Evento
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Data
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Local
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Participantes
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
              {events.map((event) => (
                <tr key={event.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{event.name}</div>
                      <div className="text-sm text-gray-500">{event.category}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(event.date).toLocaleDateString('pt-BR')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {event.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {event.attendees.toLocaleString('pt-BR')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      event.status === 'ativo' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {event.status}
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

  const renderRoutes = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Roteiros Turísticos</h3>
        <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Plus className="w-4 h-4" />
          <span>Novo Roteiro</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {routes.map((route) => (
          <div key={route.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                {route.category}
              </span>
              <div className="flex items-center space-x-1 text-orange-500">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm font-medium">{route.rating}</span>
              </div>
            </div>
            
            <h4 className="text-lg font-semibold text-gray-900 mb-2">{route.name}</h4>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="w-4 h-4 mr-2" />
                <span>{route.duration}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{route.stops} paradas</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Users className="w-4 h-4 mr-2" />
                <span>Dificuldade: {route.difficulty}</span>
              </div>
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

  const renderRestaurants = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Restaurantes</h3>
        <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Plus className="w-4 h-4" />
          <span>Novo Restaurante</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Restaurante
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Categoria
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Avaliação
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Preço
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
              {restaurants.map((restaurant) => (
                <tr key={restaurant.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{restaurant.name}</div>
                      <div className="text-sm text-gray-500">{restaurant.specialty}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {restaurant.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-orange-500 fill-current mr-1" />
                      <span className="text-sm text-gray-900">{restaurant.rating}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {restaurant.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      restaurant.status === 'ativo' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {restaurant.status}
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

  const tabs = [
    { id: 'events', label: 'Eventos', icon: Calendar },
    { id: 'routes', label: 'Roteiros', icon: MapPin },
    { id: 'restaurants', label: 'Restaurantes', icon: Star }
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Gestão de Turismo</h1>
        <p className="text-gray-600 mt-1">Gerencie eventos, roteiros e estabelecimentos turísticos</p>
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
        {activeTab === 'events' && renderEvents()}
        {activeTab === 'routes' && renderRoutes()}
        {activeTab === 'restaurants' && renderRestaurants()}
      </div>
    </div>
  );
};

export default Tourism;