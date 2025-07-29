// Configurações do Dashboard de Tráfego Pago
const DashboardConfig = {
  // Configurações de API
  api: {
    baseUrl: 'https://api.exemplo.com/v1',
    endpoints: {
      googleAds: '/google-ads/metrics',
      metaAds: '/meta-ads/metrics', 
      linkedin: '/linkedin-ads/metrics',
      tiktok: '/tiktok-ads/metrics',
      youtube: '/youtube-ads/metrics',
      twitter: '/twitter-ads/metrics'
    },
    refreshInterval: 30000, // 30 segundos
    timeout: 10000 // 10 segundos
  },

  // Métricas principais e metas
  metrics: {
    primary: {
      roas: {
        name: 'ROAS',
        target: 4.0,
        format: 'decimal',
        suffix: 'x',
        good: 4.0,
        excellent: 6.0
      },
      cpa: {
        name: 'CPA',
        target: 50.00,
        format: 'currency',
        prefix: 'R$ ',
        good: 50.00,
        excellent: 30.00,
        direction: 'lower' // lower is better
      },
      conversionRate: {
        name: 'Taxa de Conversão',
        target: 3.0,
        format: 'percentage',
        suffix: '%',
        good: 3.0,
        excellent: 5.0
      },
      ctr: {
        name: 'CTR',
        target: 2.5,
        format: 'percentage',
        suffix: '%',
        good: 2.5,
        excellent: 4.0
      }
    },
    secondary: {
      impressions: {
        name: 'Impressões',
        format: 'number'
      },
      clicks: {
        name: 'Cliques',
        format: 'number'
      },
      conversions: {
        name: 'Conversões',
        format: 'number'
      },
      spend: {
        name: 'Investimento',
        format: 'currency',
        prefix: 'R$ '
      }
    }
  },

  // Configurações de canais
  channels: {
    'google': {
      name: 'Google Ads',
      color: '#4285f4',
      icon: 'fab fa-google',
      weightFactor: 1.2
    },
    'meta': {
      name: 'Meta Ads',
      color: '#1877f2',
      icon: 'fab fa-facebook',
      weightFactor: 1.1
    },
    'instagram': {
      name: 'Instagram',
      color: '#e4405f',
      icon: 'fab fa-instagram',
      weightFactor: 1.0
    },
    'linkedin': {
      name: 'LinkedIn',
      color: '#0077b5',
      icon: 'fab fa-linkedin',
      weightFactor: 0.8
    },
    'tiktok': {
      name: 'TikTok',
      color: '#000000',
      icon: 'fab fa-tiktok',
      weightFactor: 0.9
    },
    'youtube': {
      name: 'YouTube',
      color: '#ff0000',
      icon: 'fab fa-youtube',
      weightFactor: 1.0
    },
    'twitter': {
      name: 'Twitter',
      color: '#1da1f2',
      icon: 'fab fa-twitter',
      weightFactor: 0.7
    }
  },

  // Configurações de alertas inteligentes
  alerts: {
    enabled: true,
    rules: {
      cpcIncrease: {
        threshold: 15, // % de aumento
        timeframe: '7d',
        priority: 'medium'
      },
      roasDecrease: {
        threshold: 20, // % de diminuição
        timeframe: '3d',
        priority: 'high'
      },
      budgetUtilization: {
        threshold: 90, // % do budget utilizado
        timeframe: '1d',
        priority: 'medium'
      },
      conversionDrop: {
        threshold: 25, // % de queda nas conversões
        timeframe: '2d',
        priority: 'high'
      }
    }
  },

  // Configurações de recomendações
  recommendations: {
    enabled: true,
    algorithms: {
      budgetOptimization: {
        enabled: true,
        weight: 0.3,
        minImprovement: 10 // % mínimo de melhoria esperada
      },
      audienceExpansion: {
        enabled: true,
        weight: 0.25,
        similarityThreshold: 0.8
      },
      timeOptimization: {
        enabled: true,
        weight: 0.2,
        minCostReduction: 15 // % mínimo de redução de custo
      },
      creativeTesting: {
        enabled: true,
        weight: 0.15,
        testDuration: 14 // dias
      },
      keywordOptimization: {
        enabled: true,
        weight: 0.1,
        qualityScoreMin: 7
      }
    }
  },

  // Configurações de visualização
  visualization: {
    theme: 'modern',
    animations: true,
    refreshIndicators: true,
    charts: {
      colors: {
        primary: '#3b82f6',
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444',
        info: '#06b6d4',
        purple: '#8b5cf6'
      },
      defaults: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    }
  },

  // Configurações de exportação
  export: {
    formats: ['json', 'csv', 'xlsx', 'pdf'],
    defaultFormat: 'json',
    includeCharts: true,
    compression: true
  },

  // Configurações de cache
  cache: {
    enabled: true,
    duration: 300000, // 5 minutos
    strategies: {
      metrics: 'memory',
      charts: 'localStorage',
      reports: 'sessionStorage'
    }
  },

  // Configurações de segurança
  security: {
    apiKeyRequired: true,
    rateLimiting: {
      requestsPerMinute: 60
    },
    dataRetention: {
      rawData: '90d',
      aggregatedData: '1y'
    }
  },

  // Configurações de localização
  localization: {
    currency: 'BRL',
    locale: 'pt-BR',
    timezone: 'America/Sao_Paulo',
    dateFormat: 'DD/MM/YYYY',
    timeFormat: '24h'
  },

  // Filtros predefinidos
  presetFilters: {
    'last7days': {
      name: 'Últimos 7 dias',
      timeRange: '7d',
      channels: 'all'
    },
    'last30days': {
      name: 'Últimos 30 dias',
      timeRange: '30d',
      channels: 'all'
    },
    'thisMonth': {
      name: 'Este mês',
      timeRange: 'thisMonth',
      channels: 'all'
    },
    'lastMonth': {
      name: 'Mês anterior',
      timeRange: 'lastMonth',
      channels: 'all'
    },
    'quarter': {
      name: 'Este trimestre',
      timeRange: 'thisQuarter',
      channels: 'all'
    }
  },

  // Configurações de notificações
  notifications: {
    enabled: true,
    types: {
      email: {
        enabled: false,
        frequency: 'daily'
      },
      push: {
        enabled: true,
        frequency: 'realtime'
      },
      sms: {
        enabled: false,
        frequency: 'critical'
      }
    }
  }
};

// Utilitários de configuração
const ConfigUtils = {
  // Obter configuração por caminho
  get(path) {
    return path.split('.').reduce((obj, key) => obj && obj[key], DashboardConfig);
  },

  // Verificar se uma feature está habilitada
  isEnabled(feature) {
    const config = this.get(feature);
    return config && config.enabled === true;
  },

  // Obter cores do tema
  getColors() {
    return this.get('visualization.charts.colors');
  },

  // Obter configurações de canal
  getChannelConfig(channelId) {
    return this.get(`channels.${channelId}`);
  },

  // Obter meta de métrica
  getMetricTarget(metricId) {
    const primary = this.get(`metrics.primary.${metricId}`);
    const secondary = this.get(`metrics.secondary.${metricId}`);
    return primary || secondary;
  },

  // Formatar valor baseado na configuração da métrica
  formatMetric(metricId, value) {
    const config = this.getMetricTarget(metricId);
    if (!config) return value;

    let formatted = value;

    switch (config.format) {
      case 'currency':
        formatted = new Intl.NumberFormat(this.get('localization.locale'), {
          style: 'currency',
          currency: this.get('localization.currency')
        }).format(value);
        break;
      case 'percentage':
        formatted = value.toFixed(2) + (config.suffix || '%');
        break;
      case 'decimal':
        formatted = value.toFixed(1) + (config.suffix || '');
        break;
      case 'number':
        formatted = new Intl.NumberFormat(this.get('localization.locale')).format(value);
        break;
    }

    if (config.prefix) {
      formatted = config.prefix + formatted;
    }

    return formatted;
  },

  // Determinar status da performance baseado na meta
  getPerformanceStatus(metricId, value) {
    const config = this.getMetricTarget(metricId);
    if (!config) return 'unknown';

    const isLowerBetter = config.direction === 'lower';
    
    if (isLowerBetter) {
      if (value <= config.excellent) return 'excellent';
      if (value <= config.good) return 'good';
      return 'poor';
    } else {
      if (value >= config.excellent) return 'excellent';
      if (value >= config.good) return 'good';
      return 'poor';
    }
  }
};

// Exportar para uso global
if (typeof window !== 'undefined') {
  window.DashboardConfig = DashboardConfig;
  window.ConfigUtils = ConfigUtils;
}

// Para uso em Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DashboardConfig, ConfigUtils };
}