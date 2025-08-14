import React, { useState } from 'react';
import { 
  Users as UsersIcon, 
  User, 
  UserCheck, 
  TrendingUp, 
  TrendingDown,
  Calendar,
  MapPin,
  Star,
  Filter,
  Download,
  RefreshCw,
  Heart,
  Music,
  Utensils,
  Camera,
  Gamepad2,
  BookOpen,
  Briefcase,
  GraduationCap,
  Home,
  Building,
  Smartphone,
  Clock,
  Eye
} from 'lucide-react';

const Users: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('30d');
  const [selectedSegment, setSelectedSegment] = useState('all');

  const userStats = [
    {
      title: 'Total de Usuários',
      value: '47,832',
      change: '+12%',
      changeType: 'positive' as const,
      icon: UsersIcon,
      color: 'blue',
      description: 'Usuários ativos no último mês'
    },
    {
      title: 'Novos Usuários',
      value: '3,247',
      change: '+8%',
      changeType: 'positive' as const,
      icon: UserCheck,
      color: 'green',
      description: 'Cadastros nos últimos 30 dias'
    },
    {
      title: 'Engajamento',
      value: '73%',
      change: '+5%',
      changeType: 'positive' as const,
      icon: TrendingUp,
      color: 'purple',
      description: 'Taxa de usuários ativos'
    },
    {
      title: 'Tempo Médio',
      value: '12min',
      change: '+2min',
      changeType: 'positive' as const,
      icon: Clock,
      color: 'orange',
      description: 'Sessão média no aplicativo'
    }
  ];

  const genderData = [
    { gender: 'Mulheres', count: 25847, percentage: 54, color: '#EC4899' },
    { gender: 'Homens', count: 21985, percentage: 46, color: '#3B82F6' }
  ];

  const ageGroups = [
    { range: '18-24', count: 8650, percentage: 18, growth: '+15%' },
    { range: '25-34', count: 14350, percentage: 30, growth: '+8%' },
    { range: '35-44', count: 12200, percentage: 26, growth: '+12%' },
    { range: '45-54', count: 8900, percentage: 19, growth: '+5%' },
    { range: '55+', count: 3732, percentage: 8, growth: '+22%' }
  ];

  const educationData = [
    { level: 'Ensino Superior', count: 18500, percentage: 39 },
    { level: 'Ensino Médio', count: 16200, percentage: 34 },
    { level: 'Pós-graduação', count: 8900, percentage: 19 },
    { level: 'Ensino Fundamental', count: 4232, percentage: 9 }
  ];

  const womenPreferences = [
    { category: 'Gastronomia', percentage: 78, icon: Utensils, color: '#F59E0B' },
    { category: 'Arte & Cultura', percentage: 72, icon: Camera, color: '#8B5CF6' },
    { category: 'Música', percentage: 68, icon: Music, color: '#EC4899' },
    { category: 'Eventos Familiares', percentage: 65, icon: Heart, color: '#10B981' },
    { category: 'Workshops', percentage: 58, icon: BookOpen, color: '#6366F1' }
  ];

  const menPreferences = [
    { category: 'Esportes', percentage: 82, icon: Gamepad2, color: '#3B82F6' },
    { category: 'Tecnologia', percentage: 75, icon: Smartphone, color: '#059669' },
    { category: 'Negócios', percentage: 68, icon: Briefcase, color: '#DC2626' },
    { category: 'Gastronomia', percentage: 62, icon: Utensils, color: '#F59E0B' },
    { category: 'Música', percentage: 58, icon: Music, color: '#8B5CF6' }
  ];

  const locationData = [
    { area: 'Centro Histórico', users: 12500, percentage: 26 },
    { area: 'Pontal', users: 8900, percentage: 19 },
    { area: 'Cidade Nova', users: 7800, percentage: 16 },
    { area: 'São Francisco', users: 6200, percentage: 13 },
    { area: 'Outros Bairros', users: 12432, percentage: 26 }
  ];

  const usagePatterns = [
    { time: '06:00', users: 1200 },
    { time: '09:00', users: 3500 },
    { time: '12:00', users: 5800 },
    { time: '15:00', users: 4200 },
    { time: '18:00', users: 7500 },
    { time: '21:00', users: 6800 },
    { time: '00:00', users: 2100 }
  ];

  const deviceData = [
    { type: 'Android', count: 28700, percentage: 60 },
    { type: 'iOS', count: 19132, percentage: 40 }
  ];

  const renderKPICard = (stat: any, index: number) => {
    const Icon = stat.icon;
    const colorClasses = {
      blue: 'bg-blue-50 text-blue-600',
      green: 'bg-green-50 text-green-600',
      orange: 'bg-orange-50 text-orange-600',
      purple: 'bg-purple-50 text-purple-600'
    };

    const changeClasses = {
      positive: 'text-green-600 bg-green-50',
      negative: 'text-red-600 bg-red-50',
      neutral: 'text-gray-600 bg-gray-50'
    };

    return (
      <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between mb-4">
          <div className={`w-12 h-12 rounded-lg ${colorClasses[stat.color]} flex items-center justify-center`}>
            <Icon className="w-6 h-6" />
          </div>
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${changeClasses[stat.changeType]}`}>
            {stat.change}
          </span>
        </div>
        <div className="mb-2">
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
          <p className="text-sm font-medium text-gray-900">{stat.title}</p>
          <p className="text-xs text-gray-500 mt-1">{stat.description}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Análise de Usuários</h1>
          <p className="text-gray-600 mt-1">Perfil demográfico e comportamental dos usuários do aplicativo</p>
        </div>
        <div className="flex items-center space-x-3">
          <select 
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="7d">Últimos 7 dias</option>
            <option value="30d">Últimos 30 dias</option>
            <option value="90d">Últimos 3 meses</option>
            <option value="1y">Último ano</option>
          </select>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="w-4 h-4" />
            <span>Filtros</span>
          </button>
          <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            <Download className="w-4 h-4" />
            <span>Exportar</span>
          </button>
        </div>
      </div>

      {/* KPIs Principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {userStats.map((stat, index) => renderKPICard(stat, index))}
      </div>

      {/* Demografia Geral */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Distribuição por Gênero */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Distribuição por Gênero</h3>
          <div className="space-y-4">
            {genderData.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">{item.gender}</span>
                  <span className="text-sm text-gray-600">{item.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="h-3 rounded-full transition-all duration-500"
                    style={{ 
                      width: `${item.percentage}%`,
                      backgroundColor: item.color
                    }}
                  />
                </div>
                <p className="text-xs text-gray-500">{item.count.toLocaleString('pt-BR')} usuários</p>
              </div>
            ))}
          </div>
        </div>

        {/* Faixa Etária */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Distribuição por Idade</h3>
          <div className="space-y-3">
            {ageGroups.map((group, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <span className="text-sm font-medium text-gray-900">{group.range} anos</span>
                  <p className="text-xs text-gray-500">{group.count.toLocaleString('pt-BR')} usuários</p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-gray-900">{group.percentage}%</span>
                  <p className="text-xs text-green-600">{group.growth}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Escolaridade */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Nível de Escolaridade</h3>
          <div className="space-y-3">
            {educationData.map((edu, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">{edu.level}</span>
                  <span className="text-sm text-gray-600">{edu.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${edu.percentage}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500">{edu.count.toLocaleString('pt-BR')} usuários</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Preferências por Gênero */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Preferências das Mulheres */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Preferências das Mulheres</h3>
          <div className="space-y-4">
            {womenPreferences.map((pref, index) => {
              const Icon = pref.icon;
              return (
                <div key={index} className="flex items-center space-x-4">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${pref.color}20`, color: pref.color }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-900">{pref.category}</span>
                      <span className="text-sm font-bold text-gray-900">{pref.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full transition-all duration-500"
                        style={{ 
                          width: `${pref.percentage}%`,
                          backgroundColor: pref.color
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Preferências dos Homens */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Preferências dos Homens</h3>
          <div className="space-y-4">
            {menPreferences.map((pref, index) => {
              const Icon = pref.icon;
              return (
                <div key={index} className="flex items-center space-x-4">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${pref.color}20`, color: pref.color }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-900">{pref.category}</span>
                      <span className="text-sm font-bold text-gray-900">{pref.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full transition-all duration-500"
                        style={{ 
                          width: `${pref.percentage}%`,
                          backgroundColor: pref.color
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Análises Complementares */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Distribuição Geográfica */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Distribuição por Região</h3>
          <div className="space-y-3">
            {locationData.map((location, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-sm font-medium text-gray-900">{location.area}</span>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-gray-900">{location.percentage}%</span>
                  <p className="text-xs text-gray-500">{location.users.toLocaleString('pt-BR')}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Padrão de Uso por Horário */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Uso por Horário</h3>
          <div className="h-48">
            <svg className="w-full h-full">
              {usagePatterns.map((pattern, index) => {
                const maxUsers = Math.max(...usagePatterns.map(p => p.users));
                const height = (pattern.users / maxUsers) * 150;
                const x = (index / (usagePatterns.length - 1)) * 250;
                const y = 170 - height;
                
                return (
                  <g key={index}>
                    <rect
                      x={x - 10}
                      y={y}
                      width="20"
                      height={height}
                      fill="#3B82F6"
                      rx="2"
                      className="hover:fill-blue-700 transition-colors"
                    />
                    <text
                      x={x}
                      y={190}
                      textAnchor="middle"
                      className="text-xs fill-gray-600"
                    >
                      {pattern.time}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Dispositivos */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Dispositivos Utilizados</h3>
          <div className="space-y-4">
            {deviceData.map((device, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Smartphone className="w-4 h-4 text-gray-400" />
                    <span className="text-sm font-medium text-gray-900">{device.type}</span>
                  </div>
                  <span className="text-sm text-gray-600">{device.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full transition-all duration-500 ${
                      device.type === 'Android' ? 'bg-green-500' : 'bg-gray-800'
                    }`}
                    style={{ width: `${device.percentage}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500">{device.count.toLocaleString('pt-BR')} usuários</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Insights e Recomendações */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Insights e Recomendações</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center space-x-2 mb-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <h4 className="font-medium text-blue-900">Crescimento Feminino</h4>
            </div>
            <p className="text-sm text-blue-800">
              Mulheres representam 54% dos usuários e mostram maior interesse em eventos gastronômicos e culturais.
            </p>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center space-x-2 mb-2">
              <UsersIcon className="w-5 h-5 text-green-600" />
              <h4 className="font-medium text-green-900">Público Jovem Adulto</h4>
            </div>
            <p className="text-sm text-green-800">
              56% dos usuários têm entre 25-44 anos, indicando foco em público economicamente ativo.
            </p>
          </div>
          
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <div className="flex items-center space-x-2 mb-2">
              <GraduationCap className="w-5 h-5 text-purple-600" />
              <h4 className="font-medium text-purple-900">Alta Escolaridade</h4>
            </div>
            <p className="text-sm text-purple-800">
              58% possuem ensino superior ou pós-graduação, sugerindo público com maior poder aquisitivo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
