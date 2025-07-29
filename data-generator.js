// Gerador de Dados Realistas para Dashboard de Tráfego Pago
class TrafficDataGenerator {
  constructor() {
    this.baseDate = new Date();
    this.channels = ['google', 'meta', 'instagram', 'linkedin', 'tiktok', 'youtube', 'twitter'];
    this.campaigns = this.generateCampaigns();
    this.audiences = this.generateAudiences();
    this.geoData = this.generateGeoData();
  }

  // Gerar campanhas fictícias realistas
  generateCampaigns() {
    return [
      {
        id: 'camp_001',
        name: 'Black Friday 2024',
        channel: 'google',
        status: 'active',
        budget: 25000,
        startDate: new Date('2024-11-01'),
        endDate: new Date('2024-11-30'),
        objective: 'conversions',
        bidStrategy: 'target_cpa'
      },
      {
        id: 'camp_002',
        name: 'Promoção Verão',
        channel: 'meta',
        status: 'active',
        budget: 18000,
        startDate: new Date('2024-10-15'),
        endDate: new Date('2024-12-15'),
        objective: 'traffic',
        bidStrategy: 'lowest_cost'
      },
      {
        id: 'camp_003',
        name: 'Lançamento Produto Premium',
        channel: 'linkedin',
        status: 'active',
        budget: 12000,
        startDate: new Date('2024-11-01'),
        endDate: new Date('2024-12-31'),
        objective: 'lead_generation',
        bidStrategy: 'target_cost'
      },
      {
        id: 'camp_004',
        name: 'Remarketing Premium',
        channel: 'google',
        status: 'active',
        budget: 9500,
        startDate: new Date('2024-10-01'),
        endDate: new Date('2025-01-31'),
        objective: 'conversions',
        bidStrategy: 'maximize_conversions'
      },
      {
        id: 'camp_005',
        name: 'Expansão Mercado Jovem',
        channel: 'tiktok',
        status: 'active',
        budget: 8000,
        startDate: new Date('2024-11-01'),
        endDate: new Date('2024-12-15'),
        objective: 'app_installs',
        bidStrategy: 'lowest_cost'
      }
    ];
  }

  // Gerar audiências fictícias
  generateAudiences() {
    return [
      {
        id: 'aud_001',
        name: 'Tech Early Adopters',
        size: 2500000,
        conversionRate: 4.8,
        avgCPA: 32.50
      },
      {
        id: 'aud_002',
        name: 'Shopping Enthusiasts',
        size: 1800000,
        conversionRate: 3.2,
        avgCPA: 45.20
      },
      {
        id: 'aud_003',
        name: 'Business Professionals',
        size: 950000,
        conversionRate: 2.1,
        avgCPA: 78.90
      },
      {
        id: 'aud_004',
        name: 'Luxury Buyers',
        size: 420000,
        conversionRate: 1.8,
        avgCPA: 125.30
      }
    ];
  }

  // Gerar dados geográficos
  generateGeoData() {
    return {
      'SP': { weight: 0.35, multiplier: 1.2 },
      'RJ': { weight: 0.18, multiplier: 1.1 },
      'MG': { weight: 0.12, multiplier: 1.0 },
      'RS': { weight: 0.08, multiplier: 0.95 },
      'PR': { weight: 0.07, multiplier: 0.9 },
      'SC': { weight: 0.06, multiplier: 0.85 },
      'BA': { weight: 0.05, multiplier: 0.8 },
      'GO': { weight: 0.04, multiplier: 0.75 },
      'PE': { weight: 0.03, multiplier: 0.7 },
      'CE': { weight: 0.02, multiplier: 0.65 }
    };
  }

  // Gerar dados de performance por período
  generatePerformanceData(days = 30) {
    const data = [];
    const currentDate = new Date(this.baseDate);
    
    for (let i = days - 1; i >= 0; i--) {
      const date = new Date(currentDate);
      date.setDate(date.getDate() - i);
      
      const dayData = this.generateDayData(date);
      data.push(dayData);
    }
    
    return data;
  }

  // Gerar dados para um dia específico
  generateDayData(date) {
    const dayOfWeek = date.getDay();
    const hour = date.getHours();
    
    // Fatores sazonais
    const weekendFactor = (dayOfWeek === 0 || dayOfWeek === 6) ? 0.7 : 1.0;
    const hourlyFactor = this.getHourlyFactor(hour);
    const seasonalFactor = this.getSeasonalFactor(date);
    
    const baseImpressions = 180000;
    const baseCTR = 3.2;
    const baseConversionRate = 2.8;
    const baseCPC = 1.85;
    
    const impressions = Math.round(baseImpressions * weekendFactor * seasonalFactor * this.addNoise(0.15));
    const ctr = baseCTR * hourlyFactor * this.addNoise(0.25);
    const clicks = Math.round(impressions * (ctr / 100));
    const conversionRate = baseConversionRate * weekendFactor * this.addNoise(0.3);
    const conversions = Math.round(clicks * (conversionRate / 100));
    const cpc = baseCPC * (1 + this.addNoise(0.2));
    const spend = clicks * cpc;
    const revenue = conversions * this.getAverageOrderValue();
    const roas = revenue / spend;
    const cpa = spend / conversions;

    return {
      date: date.toISOString().split('T')[0],
      impressions,
      clicks,
      conversions,
      ctr: parseFloat(ctr.toFixed(2)),
      conversionRate: parseFloat(conversionRate.toFixed(2)),
      cpc: parseFloat(cpc.toFixed(2)),
      cpa: parseFloat(cpa.toFixed(2)),
      spend: parseFloat(spend.toFixed(2)),
      revenue: parseFloat(revenue.toFixed(2)),
      roas: parseFloat(roas.toFixed(2))
    };
  }

  // Fator de performance por horário
  getHourlyFactor(hour) {
    const hourlyFactors = {
      0: 0.3, 1: 0.2, 2: 0.15, 3: 0.1, 4: 0.1, 5: 0.15,
      6: 0.4, 7: 0.7, 8: 0.9, 9: 1.1, 10: 1.2, 11: 1.1,
      12: 1.0, 13: 1.1, 14: 1.2, 15: 1.1, 16: 1.0, 17: 0.9,
      18: 0.8, 19: 0.9, 20: 1.0, 21: 1.1, 22: 0.8, 23: 0.5
    };
    return hourlyFactors[hour] || 1.0;
  }

  // Fator sazonal baseado na data
  getSeasonalFactor(date) {
    const month = date.getMonth();
    const day = date.getDate();
    
    // Black Friday boost
    if (month === 10 && day >= 25 && day <= 29) return 1.8;
    
    // Cyber Monday
    if (month === 10 && day >= 30) return 1.6;
    
    // December holidays
    if (month === 11) return 1.4;
    
    // Back to school (March)
    if (month === 2) return 1.2;
    
    // Mother's Day (May)
    if (month === 4 && day >= 8 && day <= 14) return 1.3;
    
    // Father's Day (August)
    if (month === 7 && day >= 8 && day <= 14) return 1.2;
    
    return 1.0;
  }

  // Adicionar ruído realista aos dados
  addNoise(variance) {
    return 1 + (Math.random() - 0.5) * variance;
  }

  // Valor médio do pedido
  getAverageOrderValue() {
    return 285 + (Math.random() - 0.5) * 100; // AOV entre R$ 235-335
  }

  // Gerar dados por canal
  generateChannelData() {
    const channels = {};
    
    this.channels.forEach(channel => {
      const baseData = this.generateDayData(new Date());
      const multiplier = this.getChannelMultiplier(channel);
      
      channels[channel] = {
        name: this.getChannelName(channel),
        impressions: Math.round(baseData.impressions * multiplier.impressions),
        clicks: Math.round(baseData.clicks * multiplier.clicks),
        conversions: Math.round(baseData.conversions * multiplier.conversions),
        spend: parseFloat((baseData.spend * multiplier.spend).toFixed(2)),
        ctr: parseFloat((baseData.ctr * multiplier.ctr).toFixed(2)),
        conversionRate: parseFloat((baseData.conversionRate * multiplier.conversionRate).toFixed(2)),
        cpa: parseFloat((baseData.cpa * multiplier.cpa).toFixed(2)),
        roas: parseFloat((baseData.roas * multiplier.roas).toFixed(2))
      };
    });
    
    return channels;
  }

  // Multiplicadores específicos por canal
  getChannelMultiplier(channel) {
    const multipliers = {
      google: {
        impressions: 1.0, clicks: 1.0, conversions: 1.0, spend: 1.0,
        ctr: 1.0, conversionRate: 1.2, cpa: 0.9, roas: 1.3
      },
      meta: {
        impressions: 0.8, clicks: 0.9, conversions: 0.8, spend: 0.7,
        ctr: 1.1, conversionRate: 0.9, cpa: 1.1, roas: 1.1
      },
      instagram: {
        impressions: 0.6, clicks: 0.7, conversions: 0.6, spend: 0.5,
        ctr: 1.2, conversionRate: 0.8, cpa: 1.2, roas: 0.9
      },
      linkedin: {
        impressions: 0.3, clicks: 0.2, conversions: 0.25, spend: 0.4,
        ctr: 0.7, conversionRate: 1.4, cpa: 1.8, roas: 0.8
      },
      tiktok: {
        impressions: 0.4, clicks: 0.5, conversions: 0.3, spend: 0.3,
        ctr: 1.3, conversionRate: 0.6, cpa: 1.5, roas: 0.7
      },
      youtube: {
        impressions: 0.5, clicks: 0.4, conversions: 0.4, spend: 0.3,
        ctr: 0.8, conversionRate: 1.0, cpa: 1.0, roas: 1.2
      },
      twitter: {
        impressions: 0.2, clicks: 0.3, conversions: 0.2, spend: 0.2,
        ctr: 1.5, conversionRate: 0.7, cpa: 1.3, roas: 0.8
      }
    };
    
    return multipliers[channel] || multipliers.google;
  }

  // Nome amigável do canal
  getChannelName(channel) {
    const names = {
      google: 'Google Ads',
      meta: 'Meta Ads',
      instagram: 'Instagram',
      linkedin: 'LinkedIn',
      tiktok: 'TikTok',
      youtube: 'YouTube',
      twitter: 'Twitter'
    };
    return names[channel] || channel;
  }

  // Gerar dados de funil de conversão
  generateFunnelData() {
    return {
      impressions: 100,
      clicks: 3.2,
      landingPageViews: 2.8,
      addToCart: 1.2,
      checkout: 0.8,
      purchase: 0.6
    };
  }

  // Gerar dados de dispositivos
  generateDeviceData() {
    return {
      mobile: 58.3 + this.addNoise(0.1) * 10,
      desktop: 35.2 + this.addNoise(0.1) * 10,
      tablet: 6.5 + this.addNoise(0.2) * 5
    };
  }

  // Gerar dados de análise de coorte
  generateCohortData() {
    const cohorts = [];
    const weeks = 8;
    const periods = 7;
    
    for (let week = 0; week < weeks; week++) {
      const cohort = {
        week: `Semana ${week + 1}`,
        data: []
      };
      
      for (let period = 0; period < periods; period++) {
        const baseRetention = 100;
        const decayFactor = Math.pow(0.85, period);
        const retention = baseRetention * decayFactor * this.addNoise(0.15);
        cohort.data.push(Math.max(0, Math.round(retention)));
      }
      
      cohorts.push(cohort);
    }
    
    return cohorts;
  }

  // Gerar dados de atribuição
  generateAttributionData() {
    return {
      firstTouch: 1245,
      lastTouch: 2890,
      linear: 2156,
      positionBased: 2034,
      timeDecay: 1876,
      dataDriver: 2234
    };
  }

  // Gerar alertas baseados nos dados
  generateAlerts(data) {
    const alerts = [];
    
    if (data.ctr < 2.0) {
      alerts.push({
        type: 'warning',
        title: 'CTR Baixo',
        message: 'CTR abaixo de 2% pode indicar baixa relevância dos anúncios',
        priority: 'medium',
        action: 'Revisar creative e targeting'
      });
    }
    
    if (data.roas < 3.0) {
      alerts.push({
        type: 'danger',
        title: 'ROAS Baixo',
        message: 'ROAS abaixo da meta pode comprometer a rentabilidade',
        priority: 'high',
        action: 'Otimizar lances e pausar campanhas não rentáveis'
      });
    }
    
    if (data.cpa > 60) {
      alerts.push({
        type: 'warning',
        title: 'CPA Alto',
        message: 'Custo por aquisição acima da meta',
        priority: 'medium',
        action: 'Ajustar estratégia de lances'
      });
    }
    
    return alerts;
  }

  // Gerar recomendações inteligentes
  generateRecommendations(channelData) {
    const recommendations = [];
    
    // Recomendação de realocação de budget
    const bestChannel = Object.keys(channelData).reduce((a, b) => 
      channelData[a].roas > channelData[b].roas ? a : b
    );
    
    const worstChannel = Object.keys(channelData).reduce((a, b) => 
      channelData[a].roas < channelData[b].roas ? a : b
    );
    
    if (channelData[bestChannel].roas > channelData[worstChannel].roas * 1.5) {
      recommendations.push({
        type: 'budget',
        title: 'Otimização de Budget',
        description: `Realocar 15% do budget de ${this.getChannelName(worstChannel)} para ${this.getChannelName(bestChannel)} pode aumentar o ROAS em 22%`,
        impact: 'high',
        effort: 'low',
        expectedImprovement: '22%'
      });
    }
    
    // Recomendação de público
    const highPerformingAudience = this.audiences[0];
    recommendations.push({
      type: 'audience',
      title: 'Expansão de Público',
      description: `Audiência "${highPerformingAudience.name}" mostra ${((highPerformingAudience.conversionRate / 2.8) * 100).toFixed(0)}% mais conversões que a média`,
      impact: 'high',
      effort: 'medium',
      expectedImprovement: '15%'
    });
    
    // Recomendação de horário
    recommendations.push({
      type: 'timing',
      title: 'Otimização de Horário',
      description: 'Pausar anúncios entre 2h-6h pode reduzir CPA em 18% sem perder conversões significativas',
      impact: 'medium',
      effort: 'low',
      expectedImprovement: '18%'
    });
    
    return recommendations;
  }

  // Método principal para gerar todos os dados
  generateCompleteDataset(days = 30) {
    const performanceData = this.generatePerformanceData(days);
    const channelData = this.generateChannelData();
    const currentData = performanceData[performanceData.length - 1];
    
    return {
      performance: performanceData,
      channels: channelData,
      funnel: this.generateFunnelData(),
      devices: this.generateDeviceData(),
      cohort: this.generateCohortData(),
      attribution: this.generateAttributionData(),
      alerts: this.generateAlerts(currentData),
      recommendations: this.generateRecommendations(channelData),
      campaigns: this.campaigns,
      audiences: this.audiences,
      geoData: this.geoData,
      summary: {
        totalSpend: performanceData.reduce((sum, day) => sum + day.spend, 0),
        totalConversions: performanceData.reduce((sum, day) => sum + day.conversions, 0),
        avgROAS: performanceData.reduce((sum, day) => sum + day.roas, 0) / performanceData.length,
        avgCPA: performanceData.reduce((sum, day) => sum + day.cpa, 0) / performanceData.length
      }
    };
  }
}

// Exportar para uso global
if (typeof window !== 'undefined') {
  window.TrafficDataGenerator = TrafficDataGenerator;
}

// Para uso em Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TrafficDataGenerator;
}