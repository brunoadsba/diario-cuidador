# Documentação do Projeto Diário do Cuidador

## Índice de Documentos

### 📋 Documentos Principais

1. **[Pré-Projeto de Pesquisa](./pesquida.md)**
   - Contexto científico e justificativa
   - Pergunta de pesquisa e hipóteses
   - Métodos e resultados esperados
   - Referências bibliográficas

2. **[Resumo Executivo do Roadmap](./resumo-executivo-roadmap.md)** ⭐ NOVO
   - Visão geral executiva
   - Cronograma e investimento resumidos
   - Métricas de sucesso e riscos
   - Próximos passos imediatos

3. **[Roadmap MVP Expandido](./roadmap-mvp-expandido.md)** ⭐ NOVO
   - Especificação técnica completa
   - Arquitetura detalhada
   - Cronograma expandido
   - Estimativas de custos
   - Métricas e validações

4. **[Justificativa do Investimento](../investimento.md)** ⭐ NOVO
   - Explicação detalhada do investimento para leigos
   - Comparação com alternativas
   - Retorno sobre investimento (ROI)
   - Perguntas frequentes

### 📊 Recursos Visuais

- **[Roadmap Visual (PNG)](../fluxo/mvp-roadmap.png)**
  - Fluxo executivo em formato visual
  - 9 etapas principais do MVP
  - Ideal para apresentações

- **[Apresentação Web Interativa](../index.html)** ⭐ NOVO
  - Landing page moderna para apresentação executiva
  - 11 seções navegáveis com navegação por teclado
  - Design responsivo para desktop e mobile
  - Acesse: `http://localhost:8000/index.html` (servidor local)

- **[Protótipos Visuais do App](../mockup.html)** ⭐ NOVO
  - Mockups interativos das 6 telas principais do aplicativo
  - Navegação entre telas simulada
  - Visualização do design mobile-first
  - Acesse: `http://localhost:8000/mockup.html` (servidor local)

---

## Como Usar Esta Documentação

### Para Apresentação Executiva
1. Comece pelo **Resumo Executivo** (2 páginas)
2. Use a **Apresentação Web Interativa** (`index.html`) como ferramenta principal
3. Explore os **Protótipos Visuais** (`mockup.html`) para mostrar o app
4. Use o **Roadmap Visual (PNG)** como apoio visual adicional
5. Consulte o **Roadmap Expandido** para detalhes técnicos se necessário

### Para Desenvolvimento Técnico
1. Leia o **Roadmap Expandido** completo
2. Consulte o **Pré-Projeto** para contexto científico
3. Use o roadmap visual como referência rápida

### Para Pesquisa Científica
1. Foque no **Pré-Projeto de Pesquisa**
2. Consulte as referências bibliográficas
3. Use o roadmap para entender o escopo técnico

---

## Estrutura do Projeto

```
diario-cuidador/
├── doc/                          # Documentação
│   ├── pesquida.md              # Pré-projeto científico
│   ├── resumo-executivo-roadmap.md  # Resumo executivo
│   └── roadmap-mvp-expandido.md     # Roadmap completo
├── fluxo/                       # Recursos visuais
│   ├── mvp-roadmap.png         # Roadmap visual
│   └── exemplo-fluxo.png       # Referência de design
├── index.html                   # Apresentação web interativa ⭐ NOVO
├── mockup.html                 # Protótipos visuais do app ⭐ NOVO
├── investimento.md             # Justificativa do investimento ⭐ NOVO
├── styles.css                   # Estilos da apresentação ⭐ NOVO
├── mockup-styles.css           # Estilos dos mockups ⭐ NOVO
├── script.js                    # JavaScript da apresentação ⭐ NOVO
├── mockup-script.js            # JavaScript dos mockups ⭐ NOVO
└── README.md                    # Documentação principal do projeto
```

---

## Versões dos Documentos

- **Pré-Projeto**: Versão original (2025)
- **Roadmap MVP**: Versão 2.0 (Novembro 2025)
- **Resumo Executivo**: Versão 2.0 (Novembro 2025)
- **Apresentação Web**: Versão 2.0 (Novembro 2025) ⭐ NOVO
- **Protótipos Visuais**: Versão 1.0 (Novembro 2025) ⭐ NOVO

## Como Executar Localmente

### Requisitos
- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Servidor HTTP local (opcional, mas recomendado)

### Opção 1: Servidor HTTP Local (Recomendado)

**Python:**
```bash
cd /home/brunoadsba/diario-cuidador
python3 -m http.server 8000
```

**Node.js:**
```bash
cd /home/brunoadsba/diario-cuidador
npx http-server -p 8000
```

**PHP:**
```bash
cd /home/brunoadsba/diario-cuidador
php -S localhost:8000
```

Depois acesse:
- Apresentação: `http://localhost:8000/index.html`
- Protótipos: `http://localhost:8000/mockup.html`

### Opção 2: Abrir Diretamente no Navegador
- Abra `index.html` ou `mockup.html` diretamente no navegador (algumas funcionalidades podem não funcionar perfeitamente)

---

## Contato e Manutenção

**Equipe**: Diário do Cuidador  
**Última atualização**: Novembro 2025  
**Status**: Em desenvolvimento (MVP)
