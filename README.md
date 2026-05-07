# Aviva - Pontos do bem

## Sobre o Projeto
O Brasil possui inúmeros desafios sociais, e o Terceiro Setor atua de forma essencial na sociedade preenchendo lacunas onde o poder público muitas vezes não alcança [cite: 58]. Apesar da existência de milhares de Organizações Não Governamentais (ONGs) trabalhando em áreas vitais, muitas enfrentam obstáculos severos para se manterem devido à falta de recursos financeiros e à baixa digitalização [cite: 59, 60]. Essa falta de estrutura digital gera pouca visibilidade para os projetos, o que dificulta imensamente a atração de voluntários e empresas parceiras [cite: 61].

Por outro lado, existe uma demanda reprimida composta por pessoas e empresas dispostas a investir em responsabilidade social, mas que frequentemente esbarram na fragmentação e complexidade das plataformas atuais [cite: 62, 63]. Diante desse cenário, o **Aviva - Pontos do bem** (documentado em sua base inicial como ConectaBem) surge como uma solução digital inovadora para unificar este ecossistema [cite: 31, 68]. O projeto busca centralizar, em um único ambiente colaborativo e acessível, as necessidades vitais das ONGs, o forte desejo de engajamento dos voluntários e as exigências corporativas de métricas ESG e incentivos fiscais [cite: 32]. A iniciativa está fortemente alinhada à Agenda 2030 da ONU, com foco central no ODS 17 (fortalecimento de parcerias para o desenvolvimento global), apoiando também de maneira transversal a erradicação da pobreza, saúde, educação e a redução de desigualdades [cite: 66, 67].

## Nossa Tese de Inovação e Diferencial de Mercado
Ao analisarmos o ecossistema atual por meio de benchmarking, fica claro que o mercado de engajamento social sofre profundamente com a descentralização tecnológica [cite: 28, 75]. Hoje, se uma empresa quer engajar seus funcionários, ela precisa de uma ferramenta específica; se quer focar na doação de dinheiro com isenção fiscal, utiliza outra; e, na outra ponta, a ONG acaba sendo sobrecarregada ao administrar repasses por diversas vias diferentes [cite: 29, 30, 64, 65].

Enquanto plataformas globais e líderes como a Benevity oferecem uma gestão completa corporativa, elas operam com um custo elevadíssimo voltado estritamente para grandes corporações multinacionais [cite: 23, 79]. No cenário nacional, as soluções costumam focar em nichos muito específicos, cobrindo apenas o voluntariado físico ou exclusivamente o fluxo financeiro de doações corporativas, deixando lacunas no engajamento prático ou na consultoria fiscal independente [cite: 13, 17, 76, 77, 78].

O grande diferencial estratégico do Aviva é justamente democratizar o acesso à tecnologia e centralizar todas essas frentes em uma experiência coesa [cite: 80]. O sistema oferece nativamente um painel de ações robusto para ONGs, a capacidade de realizar o "match" tanto para voluntariado físico quanto digital, além de gerar relatórios automáticos de ESG e orientação fiscal para o setor privado [cite: 26, 31, 32]. Com isso, quebramos a barreira de entrada, permitindo que pequenas e médias empresas e instituições do terceiro setor utilizem recursos de alto nível sem a necessidade de contratar consultorias externas caríssimas [cite: 24, 32].

## Arquitetura do Sistema e Tecnologias Utilizadas
Para garantir que o aplicativo atue de forma fluida, segura e extremamente leve, adotamos uma pilha de tecnologias modernas e um desenho arquitetural orientado a serviços em nuvem [cite: 85]. O foco técnico sempre foi a acessibilidade, assegurando que até mesmo organizações com baixíssima maturidade digital naveguem pelo painel sem exigir conhecimentos avançados [cite: 92].

A interface visual e toda a experiência móvel nativa são desenvolvidas com o **React Native**, proporcionando uma resposta ágil e familiar aos usuários [cite: 86]. Todo o processamento de regras de negócio, a gestão de dados e o controle de entidades ocorrem no lado do servidor, que opera sobre um ambiente **Node.js** [cite: 86]. A comunicação entre o aplicativo e o servidor é mediada por uma API RESTful segura via protocolo HTTPS, responsável por orquestrar módulos essenciais como a Gestão de ONGs e Voluntários e o Gestor de Impacto Social (ESG) [cite: 86].

Nossa infraestrutura de dados e autenticação é totalmente ancorada e escalada através do Google Cloud Platform (atuando como Backend as a Service). Para o gerenciamento seguro de identidades e acessos, utilizamos o **Firebase Authentication**, enquanto o armazenamento e sincronização de dados ocorrem em tempo real no **Cloud Firestore** [cite: 87].

Um pilar central e inovador de nossa arquitetura é o **Motor de Recomendação Inteligente** baseado em Inteligência Artificial. Essa ferramenta atua silenciosamente como um assistente dinâmico de parcerias. Sempre que um voluntário ou corporação preenche o cadastro, a IA analisa minuciosamente seus interesses, habilidades específicas (como programação, ensino ou culinária) e os objetivos propostos de ESG [cite: 89, 90]. Após essa leitura, o sistema varre a base do Firestore e emite notificações automáticas criando o "match" perfeito, unindo quem quer ajudar diretamente com a ONG que possui aquela exata demanda no momento [cite: 91].

## Metodologia de Construção e Progresso
A evolução do Aviva afasta-se completamente de processos engessados e unilaterais. Empregamos integralmente os preceitos das metodologias ágeis no dia a dia da equipe [cite: 83]. Trabalhamos sob a lógica de ciclos curtos, promovendo entregas semanais [cite: 84]. Essa abordagem permite a construção iterativa do aplicativo, possibilitando que funcionalidades sejam testadas empiricamente com usuários reais para ajustes imediatos de usabilidade antes de escalarem [cite: 84].

O fluxo de design e prototipação das telas é totalmente desenhado no Figma para validação prévia de experiência (UX), enquanto a organização colaborativa do código-fonte é versionada no repositório do GitHub [cite: 88]. A eficácia deste método já foi comprovada em nossos testes de laboratório iniciais: os usuários levaram um tempo médio inferior a dois minutos para localizar uma ação social de interesse e efetuar o cadastro com sucesso, validando a premissa de simplicidade e comprovando o alto potencial de adesão do software [cite: 96, 97].

## Equipe Idealizadora
Este Projeto Integrador (PI) foi idealizado, pesquisado e desenvolvido através da colaboração integral das seguintes integrantes:
* Desirée Constantino [cite: 56]
* Isabelle Gomes [cite: 56]
* Nicole Milanez [cite: 56]
