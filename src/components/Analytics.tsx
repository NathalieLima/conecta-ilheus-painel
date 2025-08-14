import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown,
  Users, 
  Bus, 
  MapPin, 
  Calendar,
  Download,
  Filter,
  RefreshCw,
  AlertCircle,
  CheckCircle,
  Clock,
  Target,
  Activity,
  Zap
} from 'lucide-react';
import Chart from './Chart';

const Analytics: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('30d');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const kpis = [
    {
      title: 'Eficiência do Transporte',
      value: '87%',
      change: '+5%',
      changeType: 'positive' as const,
      icon: Bus,
      color: 'blue',
      description: 'Pontualidade média dos ônibus'
    },
    {
      title: 'Satisfação Turística',
      value: '4.6/5',
      change: '+0.3',
      changeType: 'positive' as const,
      icon: Users,
      color: 'green',
      description: 'Avaliação média dos visitantes'
    },
    {
      title: 'Ocupação de Eventos',
      value: '92%',
      change: '-2%',
      changeType: 'negative' as const,
      icon: Calendar,
      color: 'purple',
      description: 'Taxa média de ocupação'
    },
    {
      title: 'Cobertura de Rotas',
      value: '78%',
      change: '+12%',
      changeType: 'positive' as const,
      icon: MapPin,
      color: 'orange',
      description: 'Áreas atendidas pelo transporte'
    }
  ];

  const transportData = [
    { name: 'Jan', pontualidade: 82, lotacao: 65, satisfacao: 4.2 },
    { name: 'Fev', pontualidade: 85, lotacao: 72, satisfacao: 4.3 },
    { name: 'Mar', pontualidade: 88, lotacao: 68, satisfacao: 4.4 },
    { name: 'Abr', pontualidade: 87, lotacao: 75, satisfacao: 4.5 },
    { name: 'Mai', pontualidade: 90, lotacao: 70, satisfacao: 4.6 },
    { name: 'Jun', pontualidade: 87, lotacao: 78, satisfacao: 4.6 }
  ];

  const tourismTrends = [
    { name: 'Jan', visitantes: 8500, eventos: 12, receita: 450000 },
    { name: 'Fev', visitantes: 12000, eventos: 18, receita: 680000 },
    { name: 'Mar', visitantes: 15500, eventos: 15, receita: 720000 },
    { name: 'Abr', visitantes: 18200, eventos: 22, receita: 890000 },
    { name: 'Mai', visitantes: 14800, eventos: 16, receita: 650000 },
    { name: 'Jun', visitantes: 19500, eventos: 25, receita: 950000 }
  ];

  const routePerformance = [
    { route: 'Linha 405', efficiency: 92, passengers: 1250, revenue: 15600 },
    { route: 'Linha 201', efficiency: 88, passengers: 980, revenue: 12250 },
    { route: 'Linha 302', efficiency: 85, passengers: 1100, revenue: 13750 },
    { route: 'Linha 150', efficiency: 79, passengers: 850, revenue: 10625 },
    { route: 'Linha 220', efficiency: 91, passengers: 1050, revenue: 13125 }
  ];

  const insights = [
    {
      type: 'success',
      title: 'Melhoria na Pontualidade',
      description: 'A Linha 405 apresentou 15% de melhoria na pontualidade após otimização de rotas.',
      impact: 'Alto',
      action: 'Replicar estratégia para outras linhas'
    },
    {
      type: 'warning',
      title: 'Sobrecarga em Horários de Pico',
      description: 'Linhas do centro apresentam 95% de lotação entre 17h-19h.',
      impact: 'Médio',
      action: 'Considerar aumento de frota'
    },
    {
      type: 'info',
      title: 'Crescimento do Turismo',
      description: 'Aumento de 23% no fluxo turístico comparado ao mesmo período do ano anterior.',
      impact: 'Alto',
      action: 'Expandir infraestrutura turística'
    },
    {
      type: 'error',
      title: 'Baixa Cobertura Rural',
      description: 'Apenas 45% das áreas rurais possuem acesso ao transporte público.',
      impact: 'Alto',
      action: 'Planejar expansão de rotas'
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
          <p className="text-gray-600 mt-1">Insights estratégicos para melhoria da infraestrutura urbana</p>
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
            <h3 className="text-lg font-semibold text-gray-900">Performance do Transporte</h3>
            <button className="text-gray-400 hover:text-gray-600">
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
          <div className="h-64">
            <svg className="w-full h-full">
              {transportData.map((item, index) => {
                const x = (index / (transportData.length - 1)) * 300;
                const pontualidadeY = 220 - (item.pontualidade / 100) * 180;
                const lotacaoY = 220 - (item.lotacao / 100) * 180;
                
                return (
                  <g key={index}>
                    <circle cx={x} cy={pontualidadeY} r="4" fill="#3B82F6" />
                    <circle cx={x} cy={lotacaoY} r="4" fill="#10B981" />
                    <text x={x} y={245} textAnchor="middle" className="text-xs fill-gray-600">
                      {item.name}
                    </text>
                  </g>
                );
              })}
              
              <path
                d={`M ${transportData.map((item, index) => {
                  const x = (index / (transportData.length - 1)) * 300;
                  const y = 220 - (item.pontualidade / 100) * 180;
                  return `${index === 0 ? 'M' : 'L'} ${x},${y}`;
                }).join(' ')}`}
                stroke="#3B82F6"
                strokeWidth="2"
                fill="none"
              />
              
              <path
                d={`M ${transportData.map((item, index) => {
                  const x = (index / (transportData.length - 1)) * 300;
                  const y = 220 - (item.lotacao / 100) * 180;
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
              <span className="text-sm text-gray-600">Pontualidade</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Lotação</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Tendências do Turismo</h3>
          <Chart data={tourismTrends} type="area" color="#8B5CF6" />
        </div>
      </div>

      {/* Performance por Rota */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance por Linha de Ônibus</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Linha
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Eficiência
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Passageiros/Dia
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Receita Mensal
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {routePerformance.map((route, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{route.route}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-3">
                        <div 
                          className={`h-2 rounded-full ${
                            route.efficiency >= 90 ? 'bg-green-500' :
                            route.efficiency >= 80 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${route.efficiency}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-900">{route.efficiency}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {route.passengers.toLocaleString('pt-BR')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    R$ {route.revenue.toLocaleString('pt-BR')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      route.efficiency >= 90 
                        ? 'bg-green-100 text-green-800'
                        : route.efficiency >= 80
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {route.efficiency >= 90 ? 'Excelente' : 
                       route.efficiency >= 80 ? 'Bom' : 'Precisa Atenção'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
                <h4 className="text-sm font-medium text-gray-900">Pontualidade do Transporte</h4>
                <span className="text-sm text-gray-600">87% / 90%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '97%' }} />
              </div>
              <p className="text-xs text-gray-500 mt-1">Meta: 90% até dezembro</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-medium text-gray-900">Cobertura de Rotas</h4>
                <span className="text-sm text-gray-600">78% / 85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-orange-600 h-2 rounded-full" style={{ width: '92%' }} />
              </div>
              <p className="text-xs text-gray-500 mt-1">Meta: 85% até junho</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-medium text-gray-900">Satisfação Turística</h4>
                <span className="text-sm text-gray-600">4.6 / 4.8</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '96%' }} />
              </div>
              <p className="text-xs text-gray-500 mt-1">Meta: 4.8/5 até setembro</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-medium text-gray-900">Eventos Realizados</h4>
                <span className="text-sm text-gray-600">108 / 120</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '90%' }} />
              </div>
              <p className="text-xs text-gray-500 mt-1">Meta: 120 eventos no ano</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;