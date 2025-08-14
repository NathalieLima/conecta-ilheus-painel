import React from 'react';
import { 
  Users, 
  MapPin, 
  Bus, 
  TrendingUp, 
  Calendar,
  AlertTriangle,
  Activity,
  Clock
} from 'lucide-react';
import StatsCard from './StatsCard';
import Chart from './Chart';

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Visitantes Hoje',
      value: '12,847',
      change: '+12%',
      changeType: 'positive' as const,
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Eventos Ativos',
      value: '23',
      change: '+3',
      changeType: 'positive' as const,
      icon: Calendar,
      color: 'green'
    },
    {
      title: 'Ônibus em Operação',
      value: '156',
      change: '-2',
      changeType: 'negative' as const,
      icon: Bus,
      color: 'orange'
    },
    {
      title: 'Pontos de Interesse',
      value: '89',
      change: '+5',
      changeType: 'positive' as const,
      icon: MapPin,
      color: 'purple'
    }
  ];

  const recentAlerts = [
    { id: 1, type: 'warning', message: 'Linha 405 - Atraso de 15 minutos', time: '10:30' },
    { id: 2, type: 'info', message: 'Novo evento cadastrado: Festival de Chocolate', time: '09:45' },
    { id: 3, type: 'error', message: 'Ônibus 2847 - Falha no sistema de localização', time: '09:20' },
  ];

  const busData = [
    { name: 'Seg', onTime: 85, delayed: 15 },
    { name: 'Ter', onTime: 82, delayed: 18 },
    { name: 'Qua', onTime: 88, delayed: 12 },
    { name: 'Qui', onTime: 90, delayed: 10 },
    { name: 'Sex', onTime: 87, delayed: 13 },
    { name: 'Sáb', onTime: 92, delayed: 8 },
    { name: 'Dom', onTime: 95, delayed: 5 },
  ];

  const tourismData = [
    { name: 'Jan', visitors: 8500 },
    { name: 'Fev', visitors: 12000 },
    { name: 'Mar', visitors: 15500 },
    { name: 'Abr', visitors: 18200 },
    { name: 'Mai', visitors: 14800 },
    { name: 'Jun', visitors: 19500 },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Visão geral da cidade de Ilhéus</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Clock className="w-4 h-4" />
          <span>Atualizado às 10:45</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Fluxo de Visitantes</h3>
          <Chart data={tourismData} type="area" color="#3B82F6" />
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Pontualidade dos Ônibus</h3>
          <Chart data={busData} type="bar" color="#10B981" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Alertas Recentes</h3>
          <div className="space-y-3">
            {recentAlerts.map((alert) => (
              <div key={alert.id} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50">
                <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                  alert.type === 'error' ? 'bg-red-500' :
                  alert.type === 'warning' ? 'bg-orange-500' : 'bg-blue-500'
                }`} />
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{alert.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Status do Sistema</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">API Turismo</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs text-green-600">Online</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">GPS Ônibus</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs text-green-600">Online</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Base de Dados</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-xs text-orange-600">Lento</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;