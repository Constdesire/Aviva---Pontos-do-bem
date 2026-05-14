# Aviva - Pontos do Bem

O **Aviva** é uma plataforma digital de alto impacto focada em unir Organizações Não Governamentais (ONGs), voluntários e empresas em um único ecossistema colaborativo e orientado a dados. 

O objetivo do sistema é atuar como um facilitador completo de responsabilidade social corporativa e civil, centralizando e democratizando o acesso a ferramentas de gestão que hoje são fragmentadas ou de custo proibitivo. A criação da rede permitirá otimização de recursos, rastreabilidade de dados sociais, atração inteligente de parceiros e a remoção de barreiras tecnológicas para o Terceiro Setor.

A iniciativa apoia fortemente a **Agenda 2030 da ONU**, com foco central no **Objetivo de Desenvolvimento Sustentável (ODS) 17** (Fortalecimento de parcerias e meios de implementação), apoiando transversalmente a erradicação da pobreza (ODS 1), saúde (ODS 3), educação (ODS 4) e redução de desigualdades (ODS 10).

---

## 1. O Problema e o Cenário Atual
A concepção do Aviva baseia-se na análise crítica do Terceiro Setor brasileiro. Pesquisas de instituições como FGV e IPEA apontam que, apesar de existirem milhares de ONGs realizando trabalhos vitais, a falta de recursos aliada à **baixa maturidade digital** limita severamente a sobrevivência dessas instituições. Cria-se um gargalo: sem infraestrutura digital, há pouca visibilidade; com pouca visibilidade, a captação de recursos e voluntários é mínima.

Em contrapartida, há uma demanda corporativa e civil reprimida. Empresas com capital para investir em Responsabilidade Social e indivíduos dispostos a doar tempo esbarram na fragmentação das ferramentas. O mercado exige uma plataforma para mobilizar voluntariado, outra para doações com isenção fiscal, e uma terceira para auditoria e transparência. Essa descentralização gera redundância de esforços e afasta investimentos.

## 2. A Nossa Tese de Inovação (Benchmarking)
Avaliando o estado da arte e realizando o benchmarking de soluções existentes, mapeamos uma clara fragmentação:
* Plataformas de nível *Enterprise* (ex: *Benevity*) operam com excelência no controle corporativo, mas possuem custo extremamente elevado, restringindo-se a multinacionais.
* Soluções nacionais (ex: *Atados*, *Ribon*, *Transforma Brasil*) atuam em nichos isolados, focando ou apenas no engajamento "mão na massa" ou estritamente no fluxo financeiro e gamificação de doações.

A vantagem competitiva do **Aviva** é a **Centralização do Ecossistema**. Nosso diferencial é democratizar essas tecnologias de ponta, oferecendo, em um ambiente único e integrado, a gestão de campanhas, o motor de "match" de voluntários e a extração de métricas de impacto automatizadas.

---

## 3. Atores do Ecossistema
A arquitetura de negócio foi desenhada para atender três perfis, gerando uma rede de retroalimentação de valor:

* 🏢 **ONGs (Terceiro Setor):** Recebem um painel de gestão intuitivo para cadastramento de eventos, vagas e campanhas. Ganham uma vitrine digital confiável, com módulos de verificação para comprovação de conformidade (*compliance*).
* 🙋‍♀️ **Voluntários (Pessoas Físicas):** Acesso facilitado (cadastro em menos de 2 minutos). Através de geolocalização e cruzamento de habilidades, encontram projetos com alta afinidade para doar força de trabalho ou conhecimentos técnicos específicos (design, tecnologia, educação, etc.).
* 💼 **Empresas (Setor Privado):** Painel dedicado à gestão ESG (Environmental, Social, and Governance). Permite estruturar o voluntariado corporativo e o repasse de recursos, gerando valor direto para o balanço social da empresa.

![Versao 1 wireframe](documentacao/Primeiraversãowireframebasico.png)

---

## 4. Transparência Fiscal e Métricas ESG (Business Intelligence)
Para garantir a adesão do Setor Privado, o Aviva resolve a dor da burocracia na utilização de incentivos fiscais, operando sob três pilares analíticos:

* **Compliance e Validação Legal:** O sistema possui flags no banco de dados que categorizam ONGs com projetos aprovados em Leis de Incentivo (Lei Rouanet, FUMCAD, Pronon, etc.). Isso permite que empresas filtrem diretamente iniciativas passíveis de dedução de impostos.
* **Rastreabilidade (Tracking):** Cada ação (seja horas doadas por um colaborador da empresa ou um aporte financeiro) é registrada em tabelas relacionais com *timestamps* rigorosos, garantindo a lisura do processo.
* **Geração de Dashboards de Impacto:** Estruturamos a extração de dados para alimentar módulos de *Business Intelligence* na plataforma corporativa. A empresa parceira tem acesso a gráficos que consolidam indicadores (ex: Total de Horas Doadas, Distribuição por ODS, CO2 Neutralizado), podendo exportar relatórios prontos para compor auditorias e seus Relatórios de Sustentabilidade anuais.

---

## 5. Arquitetura do Sistema e Tecnologias
O desenho de software prioriza acessibilidade, escalabilidade e leveza, operando através de uma arquitetura orientada a serviços:

* **Front-end Mobile & Web:** Interfaces construídas com **React Native** (para o App do voluntário) e componentes React modernos (para a Web de ONGs/Empresas), proporcionando uma experiência imersiva e responsiva.
* **Back-end Central:** Orquestração de rotas, lógicas de autenticação e comunicação estruturadas em **Node.js**, consumindo APIs RESTful seguras.
* **Banco de Dados & Cloud:** Estrutura sustentada como *Backend-as-a-Service (BaaS)* utilizando a Google Cloud Platform através do **Firebase**. Empregamos o *Firestore* para a sincronização ágil de dados em tempo real e o *Firebase Auth* para segurança de identidades.
* **Análise de Dados:** Lógicas de consultas avançadas para suporte aos relatórios ESG e ao ranqueamento da Inteligência Artificial.

![Diagrama de implantação](documentacao/Diagrama-de-Implantação.png)
![Diagrama de implementação](documentacao/Implementacao.jpeg)

*Acesse nossa prototipação inicial em alta fidelidade no [Figma do Projeto](https://www.figma.com/team_invite/redeem/ftTJuakpvc2KcnhCnmtMav?t=2LOvTr6cmx9lM8q3-21).*

---

## 6. Cronograma e Plano de Trabalho (Sprints 2026)
O desenvolvimento do projeto segue as premissas das metodologias ágeis (Scrum/Kanban), dividindo o ciclo de vida do software em quatro grandes *Sprints* de entrega para este ano:

* **Fase 1: Fundamentação e Modelagem UI/UX (Maio)**
  * Conclusão da pesquisa mercadológica (SWOT/Benchmark).
  * Estruturação do Design System, Wireframes de Alta Definição (Figma) e modelagem relacional inicial do banco de dados (Firebase).
* **Fase 2: Desenvolvimento do Core MVP (Junho - Julho)**
  * Codificação das interfaces front-end (React Native).
  * Estabelecimento das conexões de banco de dados, fluxos de cadastro unificados e rotas de back-end (Node.js).
* **Fase 3: Algoritmos Avançados e Dashboards (Agosto - Setembro)**
  * Implementação matemática do *Motor de Recomendação (IA)*.
  * Estruturação das consultas analíticas para a consolidação dos *Dashboards ESG* voltados ao ambiente corporativo.
* **Fase 4: Testes Unitários e Lançamento Piloto (Outubro)**
  * Rotinas de QA (Quality Assurance), *bug fixing* e otimização de performance.
  * *Soft Launch* (Lançamento Oficial Inicial) restrito, com foco operacional em cadastrar até 50 ONGs pioneiras para validação em ambiente real.

---

## 7. Equipe Desenvolvedora
Projeto acadêmico idealizado, pesquisado e desenvolvido por alunas do curso superior de tecnologia em **Análise e Desenvolvimento de Sistemas (AMS)** pela **FATEC Zona Leste**:
* Desirée Constantino
* Isabelle Gomes
* Nicole Milanez
