import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown,
  Users, 
  MapPin, 
  Calendar,
  Download,
  Filter,
  RefreshCw,
  AlertCircle,
  CheckCircle,
  Clock,
  Target,
  Star,
  Heart,
  Camera,
  Utensils,
  Music,
  Smartphone
} from 'lucide-react';
import Chart from './Chart';

const Analytics: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('30d');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const kpis = [
    {
      title: 'Satisfação Geral',
      value: '4.7/5',
      change: '+0.2',
      changeType: 'positive' as const,
      icon: Star,
      color: 'blue',
      description: 'Avaliação média dos visitantes'
    },
    {
      title: 'Taxa de Retorno',
      value: '68%',
      change: '+12%',
      changeType: 'positive' as const,
      icon: Users,
      color: 'green',
      description: 'Visitantes que retornaram'
    },
    {
      title: 'Engajamento Digital',
      value: '85%',
      change: '+8%',
      changeType: 'positive' as const,
      icon: Calendar,
      color: 'purple',
      description: 'Interação com eventos'
    },
    {
      title: 'Tempo Médio de Visita',
      value: '5.2 dias',
      change: '+0.8',
      changeType: 'positive' as const,
      icon: MapPin,
      color: 'orange',
      description: 'Duração média das estadias'
    }
  ];

  const satisfactionData = [
    { name: 'Jan', satisfacao: 4.2, retorno: 62, engajamento: 78 },
    { name: 'Fev', satisfacao: 4.3, retorno: 65, engajamento: 80 },
    { name: 'Mar', satisfacao: 4.4, retorno: 68, engajamento: 82 },
    { name: 'Abr', satisfacao: 4.5, retorno: 70, engajamento: 83 },
    { name: 'Mai', satisfacao: 4.6, retorno: 72, engajamento: 85 },
    { name: 'Jun', satisfacao: 4.7, retorno: 68, engajamento: 85 }
  ];

  const tourismTrends = [
    { name: 'Jan', visitantes: 8500, eventos: 12, receita: 450000 },
    { name: 'Fev', visitantes: 12000, eventos: 18, receita: 680000 },
    { name: 'Mar', visitantes: 15500, eventos: 15, receita: 720000 },
    { name: 'Abr', visitantes: 18200, eventos: 22, receita: 890000 },
    { name: 'Mai', visitantes: 14800, eventos: 16, receita: 650000 },
    { name: 'Jun', visitantes: 19500, eventos: 25, receita: 950000 }
  ];

  const eventPerformance = [
    { event: 'Festival de Chocolate', satisfaction: 4.8, attendance: 5200, revenue: 125000 },
    { event: 'Carnaval de Ilhéus', satisfaction: 4.6, attendance: 25000, revenue: 450000 },
    { event: 'Festival de Inverno', satisfaction: 4.9, attendance: 2100, revenue: 85000 },
    { event: 'Festa de São Sebastião', satisfaction: 4.4, attendance: 8500, revenue: 180000 },
    { event: 'Semana do Cacau', satisfaction: 4.7, attendance: 3200, revenue: 95000 }
  ];

  const userProfileInsights = [
    {
      profile: 'Mulheres 25-34',
      percentage: 32,
      preferences: ['Gastronomia', 'Arte & Cultura', 'Música'],
      avgStay: '4.2 dias',
      satisfaction: 4.8,
      spending: 'R$ 850'
    },
    {
      profile: 'Homens 35-44',
      percentage: 28,
      preferences: ['Esportes', 'Negócios', 'Gastronomia'],
      avgStay: '6.1 dias',
      satisfaction: 4.5,
      spending: 'R$ 1.200'
    },
    {
      profile: 'Casais 45+',
      percentage: 24,
      preferences: ['Cultura', 'Relaxamento', 'História'],
      avgStay: '7.3 dias',
      satisfaction: 4.9,
      spending: 'R$ 1.850'
    },
    {
      profile: 'Jovens 18-24',
      percentage: 16,
      preferences: ['Música', 'Aventura', 'Vida Noturna'],
      avgStay: '3.1 dias',
      satisfaction: 4.3,
      spending: 'R$ 420'
    }
  ];

  const insights = [
    {
      type: 'success',
      title: 'Alta Satisfação Feminina',
      description: 'Mulheres de 25-34 anos apresentam a maior satisfação (4.8/5) e preferem eventos gastronômicos.',
      impact: 'Alto',
      action: 'Expandir programação gastronômica'
    },
    {
      type: 'warning',
      title: 'Baixo Engajamento Jovem',
      description: 'Visitantes de 18-24 anos têm menor satisfação (4.3/5) e menor tempo de permanência.',
      impact: 'Médio',
      action: 'Criar eventos voltados ao público jovem'
    },
    {
      type: 'info',
      title: 'Potencial de Crescimento',
      description: 'Casais 45+ gastam 340% mais que jovens e ficam mais tempo na cidade.',
      impact: 'Alto',
      action: 'Focar marketing no público maduro'
    },
    {
      type: 'error',
      title: 'Sazonalidade Acentuada',
      description: 'Variação de 45% no fluxo turístico entre alta e baixa temporada.',
      impact: 'Alto',
      action: 'Desenvolver estratégias para baixa temporada'
    }
  ];

  const renderKPICard = (kpi: any, index: number) => {
    const Icon = kpi.icon;
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
          <div className={`w-12 h-12 rounded-lg ${colorClasses[kpi.color]} flex items-center justify-center`}>
            <Icon className="w-6 h-6" />
          </div>
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${changeClasses[kpi.changeType]}`}>
            {kpi.change}
          </span>
        </div>
        <div className="mb-2">
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{kpi.value}</h3>
          <p className="text-sm font-medium text-gray-900">{kpi.title}</p>
          <p className="text-xs text-gray-500 mt-1">{kpi.description}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Análises e Relatórios</h1>
          <p className="text-gray-600 mt-1">Insights estratégicos sobre turismo e perfil dos visitantes</p>
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
        {kpis.map((kpi, index) => renderKPICard(kpi, index))}
      </div>

      {/* Gráficos Principais */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Satisfação e Engajamento</h3>
            <button className="text-gray-400 hover:text-gray-600">
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
          <div className="h-64">
            <svg className="w-full h-full">
              {satisfactionData.map((item, index) => {
                const x = (index / (satisfactionData.length - 1)) * 300;
                const satisfacaoY = 220 - ((item.satisfacao - 4) / 1) * 180;
                const engajamentoY = 220 - (item.engajamento / 100) * 180;
                
                return (
                  <g key={index}>
                    <circle cx={x} cy={satisfacaoY} r="4" fill="#3B82F6" />
                    <circle cx={x} cy={engajamentoY} r="4" fill="#10B981" />
                    <text x={x} y={245} textAnchor="middle" className="text-xs fill-gray-600">
                      {item.name}
                    </text>
                  </g>
                );
              })}
              
              <path
                d={`M ${satisfactionData.map((item, index) => {
                  const x = (index / (satisfactionData.length - 1)) * 300;
                  const y = 220 - ((item.satisfacao - 4) / 1) * 180;
                  return `${index === 0 ? 'M' : 'L'} ${x},${y}`;
                }).join(' ')}`}
                stroke="#3B82F6"
                strokeWidth="2"
                fill="none"
              />
              
              <path
                d={`M ${satisfactionData.map((item, index) => {
                  const x = (index / (satisfactionData.length - 1)) * 300;
                  const y = 220 - (item.engajamento / 100) * 180;
                  return `${index === 0 ? 'M' : 'L'} ${x},${y}`;
                }).join(' ')}`}
                stroke="#10B981"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
          <div className="flex items-center justify-center space-x-6 mt-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Satisfação</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Engajamento</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Fluxo de Visitantes</h3>
          <Chart data={tourismTrends} type="area" color="#8B5CF6" />
        </div>
      </div>

      {/* Performance por Evento */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance dos Eventos</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Evento
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Satisfação
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Participantes
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Receita
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {eventPerformance.map((event, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{event.event}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-orange-500 fill-current mr-2" />
                      <span className="text-sm text-gray-900">{event.satisfaction}/5</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {event.attendance.toLocaleString('pt-BR')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    R$ {event.revenue.toLocaleString('pt-BR')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      event.satisfaction >= 4.7 
                        ? 'bg-green-100 text-green-800'
                        : event.satisfaction >= 4.5
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {event.satisfaction >= 4.7 ? 'Excelente' : 
                       event.satisfaction >= 4.5 ? 'Bom' : 'Precisa Atenção'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Análise de Perfil dos Usuários */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Análise por Perfil de Visitante</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {userProfileInsights.map((profile, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-semibold text-gray-900">{profile.profile}</h4>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                  {profile.percentage}%
                </span>
              </div>
              
              <div className="space-y-2 mb-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-600">Permanência:</span>
                  <span className="font-medium">{profile.avgStay}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-600">Satisfação:</span>
                  <div className="flex items-center">
                    <Star className="w-3 h-3 text-orange-500 fill-current mr-1" />
                    <span className="font-medium">{profile.satisfaction}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-600">Gasto médio:</span>
                  <span className="font-medium">{profile.spending}</span>
                </div>
              </div>
              
              <div>
                <p className="text-xs text-gray-500 mb-1">Preferências:</p>
                <div className="flex flex-wrap gap-1">
                  {profile.preferences.map((pref, prefIndex) => (
                    <span key={prefIndex} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      {pref}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Insights e Recomendações */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Insights Estratégicos</h3>
          <div className="space-y-4">
            {insights.map((insight, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    insight.type === 'success' ? 'bg-green-100' :
                    insight.type === 'warning' ? 'bg-yellow-100' :
                    insight.type === 'error' ? 'bg-red-100' : 'bg-blue-100'
                  }`}>
                    {insight.type === 'success' && <CheckCircle className="w-4 h-4 text-green-600" />}
                    {insight.type === 'warning' && <AlertCircle className="w-4 h-4 text-yellow-600" />}
                    {insight.type === 'error' && <AlertCircle className="w-4 h-4 text-red-600" />}
                    {insight.type === 'info' && <TrendingUp className="w-4 h-4 text-blue-600" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-medium text-gray-900">{insight.title}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        insight.impact === 'Alto' ? 'bg-red-100 text-red-800' :
                        insight.impact === 'Médio' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {insight.impact}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{insight.description}</p>
                    <p className="text-xs text-blue-600 font-medium">{insight.action}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Metas e Objetivos</h3>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-medium text-gray-900">Satisfação Geral</h4>
                <span className="text-sm text-gray-600">4.7 / 5.0</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '94%' }} />
              </div>
              <p className="text-xs text-gray-500 mt-1">Meta: 5.0/5 até dezembro</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-medium text-gray-900">Taxa de Retorno</h4>
                <span className="text-sm text-gray-600">68% / 75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-orange-600 h-2 rounded-full" style={{ width: '91%' }} />
              </div>
              <p className="text-xs text-gray-500 mt-1">Meta: 75% até junho</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-medium text-gray-900">Tempo Médio de Visita</h4>
                <span className="text-sm text-gray-600">5.2 / 6.0 dias</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '87%' }} />
              </div>
              <p className="text-xs text-gray-500 mt-1">Meta: 6.0 dias até setembro</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-medium text-gray-900">Engajamento Digital</h4>
                <span className="text-sm text-gray-600">85% / 90%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '94%' }} />
              </div>
              <p className="text-xs text-gray-500 mt-1">Meta: 90% até dezembro</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;