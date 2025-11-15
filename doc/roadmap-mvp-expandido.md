# Roadmap MVP Expandido – Diário do Cuidador

## Versão: 2.0 | Data: 2025

---

## 1. PROBLEMA E JUSTIFICATIVA

### Contexto
- **Cuidadores familiares sobrecarregados**: Alta sobrecarga física e emocional identificada em estudos (ZBI > 24)
- **Médicos têm pouco tempo para acompanhar**: "Janela curta" de observação em consultas ambulatoriais
- **Falta registro contínuo**: Relatos do cuidador incompletos e sujeitos a viés de recordação

### Evidências Científicas
- Diários digitais reduzem sintomas depressivos em cuidadores (Fuju et al., 2021)
- "Diário positivo" aumenta bem-estar e reduz sobrecarga (Kurinobu, 2024)
- Intervenções psicossociais eficazes para reduzir burden (Rodríguez-Alcázar et al., 2024)

---

## 2. SOLUÇÃO PROPOSTA

### Visão Geral
Plataforma móvel que combina:
- **Registro estruturado** de sintomas (BPSD) e bem-estar do cuidador
- **Alertas inteligentes** baseados em regras heurísticas (MVP) → IA preditiva (futuro)
- **Módulo de autocuidado** com práticas validadas cientificamente
- **Relatórios clínicos qualificados** para equipe médica
- **Integração com serviços de saúde** para resposta rápida

---

## 3. ESCOPO DO MVP (Fases 0-2)

### 3.1 Funcionalidades Core

#### **Registro Diário**
- **Para o paciente**: Sintomas BPSD, rotinas, medicações tomadas
- **Para o cuidador**: Humor (escala 1-10), estresse percebido, qualidade do sono
- **Interfaces**: Formulários simplificados, máximo 3 toques por tela
- **Validação**: Campos obrigatórios mínimos, salvamento automático

#### **Visualização de Tendências**
- Gráficos semanais de sintomas BPSD
- Evolução do humor e estresse do cuidador
- Comparativo mês a mês
- Exportação de gráficos em PDF

#### **Sistema de Alertas Heurísticos**
- **Regra 1**: 5 dias consecutivos com estresse ≥ 8/10 → Alerta amarelo
- **Regra 2**: 3 dias consecutivos sem registro → Lembrete amigável
- **Regra 3**: Aumento de 50% em frequência de sintomas BPSD na semana → Alerta laranja
- **Regra 4**: Estresse ≥ 9/10 por 2 dias → Alerta vermelho (crítico)
- **Notificações**: Push notifications no app, e-mail para cuidador e profissional vinculado

#### **Relatórios Clínicos**
- PDF estruturado com:
  - Resumo executivo (1 página)
  - Gráficos de tendências
  - Eventos críticos registrados
  - Recomendações sugeridas
- **Compartilhamento**: Via e-mail, integração com sistemas de saúde (futuro)

#### **Módulo de Autocuidado** ⭐ NOVO
- **Diário Positivo**: Registro diário de 3 coisas boas do dia
- **Lembretes de Pausa**: Notificações a cada 3 horas sugerindo pausa de 5 minutos
- **Exercícios de Respiração**: Vídeos guiados de 2-5 minutos
- **Links Úteis**: Portal com recursos educativos sobre demência e autocuidado
- **Gamificação**: Sistema de pontos por registros consecutivos (sem exageros)

---

## 4. ARQUITETURA TÉCNICA DETALHADA

### 4.1 Stack Tecnológico

#### **Frontend Mobile**
- **Framework**: React Native (suporte iOS e Android)
- **Estado**: Context API + React Query para cache
- **Navegação**: React Navigation
- **UI Components**: React Native Paper ou NativeBase
- **Offline-first**: SQLite local com sincronização automática

#### **Backend**
- **Runtime**: Node.js 20+ com TypeScript
- **Framework**: NestJS (modularidade e escalabilidade)
- **Banco de Dados**: PostgreSQL 15+ (RDS ou equivalente)
- **ORM**: Prisma ou TypeORM
- **Autenticação**: JWT + Refresh Tokens
- **API**: RESTful com OpenAPI/Swagger

#### **Infraestrutura**
- **Hospedagem**: AWS (EC2/ECS) ou GCP (Cloud Run)
- **Banco**: PostgreSQL gerenciado (RDS ou Cloud SQL)
- **Storage**: S3 compatível para PDFs e anexos
- **CDN**: CloudFront ou Cloudflare para assets estáticos
- **Monitoramento**: Datadog ou New Relic (lightweight)
- **Logs**: CloudWatch ou equivalente

### 4.2 Segurança e Compliance LGPD ⭐ EXPANDIDO

#### **Medidas Técnicas**
- **Criptografia**: TLS 1.3 em trânsito, AES-256 em repouso
- **Autenticação**: Passwordless (OTP via SMS/Email) ou biometric auth
- **Autorização**: RBAC (Role-Based Access Control)
- **Segregação**: Dados isolados por tenant (cuidador)
- **Backup**: Automático diário com retenção de 30 dias

#### **Conformidade LGPD**
- **DPIA (Data Protection Impact Assessment)**: Realizado antes do piloto
- **Consentimento Granular**: Checkboxes separados para cada finalidade
- **Direitos do Titular**: Portal para acesso, retificação, exclusão
- **Anonymização**: Dados identificáveis removidos após 5 anos
- **Relatório de Segurança**: Documentação de incidentes e mitigação

#### **Auditoria**
- **Logs Auditáveis**: Todas as ações registradas (quem, quando, o quê)
- **Retenção de Logs**: 12 meses
- **Política de Retenção**: Dados deletados após período definido

---

## 5. PARCERIAS E OPERAÇÃO CLÍNICA ⭐ EXPANDIDO

### 5.1 Parceria com Serviço Gerontológico

#### **Requisitos Mínimos**
- Equipe multidisciplinar (geriatra, enfermeiro, psicólogo)
- Atendimento ambulatorial ou domiciliar
- Interesse em inovação tecnológica
- Compromisso com SLA de resposta

#### **Plano B (Alternativas)**
- Parceria com universidade com programa de geriatria
- Consórcio de serviços de saúde para idosos
- Plataforma de telemedicina especializada

#### **Treinamento da Equipe**
- **Workshop de 4 horas**: Como ler e interpretar relatórios
- **Playbook de Procedimentos**:
  - Alerta Verde: Observar, próxima consulta regular
  - Alerta Amarelo: Agendar consulta em 7 dias
  - Alerta Laranja: Contato telefônico em 48h
  - Alerta Vermelho: Contato imediato (< 2h) ou encaminhamento urgente
- **Suporte contínuo**: Canal de dúvidas via WhatsApp ou e-mail

### 5.2 Fluxo de Integração Clínica ⭐ NOVO

```
Cuidador registra dados → Sistema gera alerta → Notificação para profissional
                                                      ↓
Profissional acessa relatório → Analisa situação → Define ação
                                                      ↓
Ação: Consulta agendada / Telefone / Visita domiciliar
                                                      ↓
Feedback registrado no sistema → Cuidador recebe confirmação
```

### 5.3 SLA de Resposta ⭐ DETALHADO

| Nível de Alerta | Cor | Tempo Máximo de Resposta | Ação Esperada |
|----------------|-----|--------------------------|---------------|
| Verde | - | - | Observação |
| Amarelo | 🟡 | 7 dias | Consulta agendada |
| Laranja | 🟠 | 48 horas | Contato telefônico |
| Vermelho | 🔴 | 2 horas | Contato imediato ou urgência |

---

## 6. CRONOGRAMA DETALHADO

### 6.1 Cronograma Técnico (MVP)

#### **Fase 0: Protótipo Navegável (4 semanas)**
- **Semana 1-2**: Setup do projeto, arquitetura base, telas principais
- **Semana 3**: Integração com backend mock, fluxo básico de registro
- **Semana 4**: Testes internos, ajustes de UX, validação de conceito

#### **Fase 1: Release Interno (8 semanas)**
- **Semana 1-2**: Backend completo (API, autenticação, banco de dados)
- **Semana 3-4**: Sistema de alertas heurísticos implementado
- **Semana 5-6**: Módulo de autocuidado, geração de PDFs
- **Semana 7**: Testes de integração, correções de bugs
- **Semana 8**: Testes de usabilidade com 5-7 cuidadores, refinamentos

#### **Fase 2: Piloto Controlado (6 semanas)**
- **Semana 1**: Recrutamento de 20-30 cuidadores (parceria clínica)
- **Semana 2-4**: Uso em produção com suporte ativo
- **Semana 5**: Coleta de feedback qualitativo
- **Semana 6**: Análise de dados, relatório de resultados

**Total: 18 semanas (4,5 meses)**

### 6.2 Cronograma de Pesquisa Clínica (Paralelo)

#### **Fase Preparatória (8 semanas antes do piloto)**
- **Semana 1-2**: Submissão ao CEP (Comitê de Ética em Pesquisa)
- **Semana 3-4**: Aprovação ética, obtenção de CAAE
- **Semana 5-6**: Preparação de materiais de consentimento
- **Semana 7-8**: Treinamento de equipe de pesquisa

#### **Fase de Coleta (Durante e após piloto)**
- **Baseline**: Aplicação de ZBI, CES-D/PHQ-9 antes do uso
- **Mensal**: Reaplicação dos instrumentos durante uso
- **Follow-up**: Aplicação final após 3 meses

#### **Fase de Análise (4 semanas após coleta)**
- Análise estatística (SPSS ou R)
- Redação de relatório científico
- Preparação para publicação (opcional)

**Total: ~12 semanas adicionais (3 meses)**

---

## 7. MÉTRICAS DE SUCESSO ⭐ EXPANDIDAS

### 7.1 Métricas de Adoção

| Métrica | Meta MVP | Benchmark* | Fonte |
|---------|----------|------------|-------|
| Retenção semanal | ≥ 60% | 40-50% | Estudos similares |
| Taxa de preenchimento | ≥ 5 registros/semana | 3-4/semana | Diários digitais |
| Tempo médio de uso | ≥ 2 min/dia | 1-2 min | Apps de saúde |
| Taxa de conclusão de onboarding | ≥ 80% | 60-70% | Apps mobile |

*Benchmarks baseados em estudos de apps de saúde digital

### 7.2 Métricas Clínicas (Validação)

| Métrica | Instrumento | Frequência | Desfecho Esperado |
|---------|-------------|------------|-------------------|
| Sobrecarga do cuidador | ZBI (Zarit Burden Interview) | Mensal | Redução de ≥ 5 pontos |
| Sintomas depressivos | CES-D ou PHQ-9 | Mensal | Redução de ≥ 2 pontos |
| Sintomas BPSD | NPI-Q (Neuropsychiatric Inventory) | Mensal | Redução de frequência |
| Satisfação do cuidador | Escala Likert 1-5 | Final | ≥ 4/5 |

### 7.3 Métricas de Qualidade Técnica

- **Uptime**: ≥ 99.5% (infraestrutura)
- **Tempo de resposta API**: < 500ms (p95)
- **Taxa de erro**: < 1% de requisições
- **Sincronização offline**: < 5 segundos após reconexão

### 7.4 Métricas de Impacto Clínico ⭐ NOVO

- **Taxa de alertas válidos**: ≥ 70% dos alertas geram ação clínica
- **Tempo de resposta médica**: Conformidade com SLA ≥ 80%
- **Redução de consultas de emergência**: Comparar com grupo controle
- **Melhoria na qualidade dos relatos**: Avaliação qualitativa da equipe médica

---

## 8. IA PREDITIVA (FASE FUTURA) ⭐ DETALHADO

### 8.1 Pré-requisitos

- **Dados históricos**: Mínimo de 3 meses de uso contínuo
- **Volume mínimo**: 50+ cuidadores com dados completos
- **Equipe**: Data scientist ou parceria com universidade
- **Infraestrutura**: Serviços de ML (AWS SageMaker, GCP AI Platform)

### 8.2 Modelos Propostos

#### **Modelo 1: Predição de Exaustão do Cuidador**
- **Input**: Dados de humor, estresse, padrões de sono (últimas 2 semanas)
- **Output**: Probabilidade de exaustão em 7 dias
- **Algoritmo**: Random Forest ou XGBoost
- **Validação**: Correlação com ZBI (meta: r > 0.7)

#### **Modelo 2: Predição de Piora Clínica do Paciente**
- **Input**: Frequência e intensidade de sintomas BPSD (últimas 2 semanas)
- **Output**: Probabilidade de piora em 14 dias
- **Algoritmo**: LSTM (Long Short-Term Memory) para séries temporais
- **Validação**: Correlação com NPI-Q (meta: r > 0.6)

### 8.3 Implementação Futura

- **Fase 3**: Coleta de dados (3-6 meses)
- **Fase 4**: Desenvolvimento e treinamento de modelos (8 semanas)
- **Fase 5**: Validação clínica dos modelos (4 semanas)
- **Fase 6**: Integração no sistema e testes A/B (6 semanas)

**Total estimado**: 6-8 meses após conclusão do MVP

---

## 9. UX/UI E ACESSIBILIDADE ⭐ NOVO

### 9.1 Princípios de Design

- **Simplicidade**: Máximo 3 toques para qualquer ação
- **Legibilidade**: Fonte ≥ 16px, contraste ≥ 4.5:1 (WCAG AA)
- **Feedback Visual**: Confirmações claras para cada ação
- **Offline-first**: Funcionalidade mesmo sem internet

### 9.2 Testes de Usabilidade

#### **Fase de Protótipo (Fase 0)**
- **Teste com 5 cuidadores**: Tarefas principais (registro, visualização)
- **Métricas**: Taxa de conclusão, tempo de tarefa, erros
- **Iterações**: 2-3 rodadas de refinamento

#### **Fase de Piloto (Fase 2)**
- **Teste com 10-15 cuidadores**: Uso real por 1 semana
- **Coleta**: Questionários SUS (System Usability Scale)
- **Meta**: SUS Score ≥ 70 (bom) ou 80+ (excelente)

### 9.3 Acessibilidade

- **Suporte a leitores de tela**: VoiceOver (iOS), TalkBack (Android)
- **Navegação por teclado**: Todas as ações acessíveis via teclado
- **Idioma**: Português brasileiro (BR), possibilidade de expansão
- **Idade-alvo**: Otimizado para usuários 40-70 anos

---

## 10. ESTIMATIVA DE CUSTOS ⭐ NOVO

### 10.1 Custos de Desenvolvimento (18 semanas)

| Item | Quantidade | Custo Mensal | Total |
|------|------------|--------------|-------|
| Desenvolvedor Full-stack | 1,5 FTE | R$ 12.000 | R$ 81.000 |
| Designer UX/UI | 0,5 FTE | R$ 8.000 | R$ 18.000 |
| QA/Tester | 0,3 FTE | R$ 6.000 | R$ 8.100 |
| **Subtotal Desenvolvimento** | | | **R$ 107.100** |

### 10.2 Custos de Infraestrutura (Mensal)

| Item | Especificação | Custo Mensal |
|------|---------------|--------------|
| Hospedagem (AWS/GCP) | t3.medium (2 vCPU, 4GB RAM) | R$ 300 |
| Banco de Dados | PostgreSQL gerenciado (20GB) | R$ 200 |
| Storage (S3) | 100GB para PDFs | R$ 50 |
| CDN | CloudFront/Cloudflare | R$ 100 |
| Monitoramento | Datadog básico | R$ 150 |
| **Subtotal Infraestrutura** | | **R$ 800/mês** |

**Projeção anual**: R$ 9.600

### 10.3 Custos de Pesquisa Clínica (Opcional)

| Item | Quantidade | Custo |
|------|------------|-------|
| Bolsas de pesquisa | 2 pesquisadores (6 meses) | R$ 24.000 |
| Materiais de pesquisa | Consentimentos, impressos | R$ 2.000 |
| Análise estatística | Consultoria externa | R$ 5.000 |
| **Subtotal Pesquisa** | | **R$ 31.000** |

### 10.4 Resumo Financeiro

| Categoria | Custo Total |
|-----------|-------------|
| Desenvolvimento MVP | R$ 107.100 |
| Infraestrutura (6 meses) | R$ 4.800 |
| Pesquisa Clínica (opcional) | R$ 31.000 |
| **TOTAL MVP** | **R$ 142.900** |

*Valores em R$ (Brasil, 2025). Ajustar conforme região e contexto.

---

## 11. PRÓXIMAS AÇÕES IMEDIATAS

### 11.1 Aprovação Executiva
- [ ] Apresentação do roadmap para stakeholders
- [ ] Aprovação de orçamento (R$ 142.900)
- [ ] Definição de patrocinador executivo

### 11.2 Formação da Equipe
- [ ] Contratação/alocação de desenvolvedor full-stack
- [ ] Contratação/alocação de designer UX/UI
- [ ] Definição de Product Owner (preferencialmente clínico)
- [ ] Definição de Scrum Master

### 11.3 Setup Inicial
- [ ] Criação de repositório Git (branch `mvp-plataforma`)
- [ ] Setup de ambiente de desenvolvimento
- [ ] Definição de processos (Git flow, code review)
- [ ] Setup de ferramentas (Jira/Trello, Slack)

### 11.4 Parcerias
- [ ] Identificação de serviço gerontológico parceiro
- [ ] Reunião inicial para alinhamento
- [ ] Assinatura de termo de parceria
- [ ] Definição de SLA de resposta

---

## 12. RISCOS E MITIGAÇÕES

| Risco | Probabilidade | Impacto | Mitigação |
|-------|---------------|---------|-----------|
| Falta de parceria clínica | Média | Alto | Plano B: Universidades, consórcios |
| Baixa adoção de cuidadores | Média | Alto | Testes de UX, onboarding simplificado |
| Infraestrutura instável | Baixa | Médio | Monitoramento proativo, backup automático |
| Dados insuficientes para IA | Média | Baixo | Expectativa realista, foco em heurísticos |
| Não conformidade LGPD | Baixa | Alto | DPIA prévio, consultoria jurídica |
| Cronograma estourado | Média | Médio | Buffer de 20%, priorização rigorosa |

---

## 13. FUNCIONALIDADES FUTURAS (PÓS-MVP)

### 13.1 IA Educativa
- Recomendações personalizadas baseadas em evidências científicas
- Integração com bases de dados (PubMed, SciELO)
- Sugestões de intervenções não-farmacológicas

### 13.2 Círculo de Cuidado
- Rede colaborativa entre familiares
- Divisão de tarefas e comunicação
- Sistema de "revezar" entre cuidadores

### 13.3 Integração com Sistemas de Saúde
- Conexão com prontuários eletrônicos (EPIC, Tasy, etc.)
- APIs para sistemas de gestão
- Notificações automáticas para equipe médica

### 13.4 Telemedicina Integrada
- Agendamento de consultas via app
- Videochamadas com profissionais vinculados
- Prescrição digital integrada

---

## 14. REFERÊNCIAS E EVIDÊNCIAS

1. **CHEN, W.-L., et al. (2025)**. The efficacy of psychosocial interventions in relieving family caregiver burden. *Age and Ageing*, 54(6), 816-793.

2. **FUJU, T., et al. (2021)**. A randomized controlled trial of the "positive diary" for family caregivers of persons with dementia. *BMC Geriatrics*, 21, Article 756.

3. **KURINOBU, T. (2024)**. Effects of family caregivers keeping a "good things diary" on wellbeing and caregiving burden. *International Journal of Geriatric Psychiatry*.

4. **RODRÍGUEZ-ALCÁZAR, F. J., et al. (2024)**. Interventions effective in decreasing burden in caregivers of persons with dementia: a systematic review. *Journal of Alzheimer's Disease*, 89(2), 321-339.

---

## ANEXOS

### Anexo A: Mapa de Telas (Wireframes)
**Status**: ✅ Protótipos visuais criados (`mockup.html`)

- 6 telas principais do aplicativo mobile visualizadas
- Mockups interativos com navegação simulada
- Design mobile-first implementado
- Disponível em: `/mockup.html`

**Telas incluídas:**
1. Home/Dashboard - Visão geral do dia
2. Registro Diário - Formulário simplificado (máximo 3 toques)
3. Gráficos/Tendências - Visualização de dados semanais
4. Alertas - Sistema de notificações automáticas
5. Autocuidado - Diário positivo e exercícios
6. Relatórios - Documentos clínicos para compartilhamento

### Anexo B: Especificação Técnica da API
*[Documento separado a ser criado]*

### Anexo C: Modelo de Dados (Schema)
*[Documento separado a ser criado]*

### Anexo D: Playbook Clínico Detalhado
*[Documento separado a ser criado]*

### Anexo E: Apresentação Executiva ⭐ NOVO
**Status**: ✅ Criada (`index.html`)

- Landing page moderna para apresentação
- 11 seções navegáveis com conteúdo completo
- Design responsivo e profissional
- Navegação por teclado (setas ↑↓) e botões
- Disponível em: `/index.html`

**Seções incluídas:**
1. Visão Geral
2. Problema
3. Solução
4. Visualização do App (com previews)
5. Funcionalidades
6. Cronograma Resumido
7. Cronograma Detalhado
8. Métricas de Sucesso
9. Investimento
10. Diferenciais Competitivos
11. Próximos Passos

---

**Documento mantido por**: Equipe de Desenvolvimento Diário do Cuidador  
**Última atualização**: Novembro 2025  
**Versão**: 2.0
