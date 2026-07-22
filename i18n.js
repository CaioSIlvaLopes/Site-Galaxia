/**
 * i18n.js - Sistema Completo e Inteligente de Tradução (PT-BR <-> EN-UK)
 * Galáxia - Navegação de Apoio Marítimo e Offshore
 */

(function() {
  'use strict';

  // Dicionário Completo de Mapeamento de Strings e Parágrafos (PT -> EN)
  const DICTIONARY_EN = {
    // =========================================================================
    // 1. NAVEGAÇÃO & CABEÇALHO (HEADER - COMUM A TODAS AS PÁGINAS)
    // =========================================================================
    
    // == Itens do Menu Principal ==
    "Home": "Home",
    "Quem Somos": "About Us",
    "Frota": "Fleet",
    "Responsabilidade Social": "Social Responsibility",
    "Serviços": "Services",
    "QSMS": "QHSE",
    "Autoridade de Parar o Trabalho": "Stop Work Authority",
    "Princípios Éticos": "Ethical Principles",
    "Política de QSMS": "QHSE Policy",
    "Política de Álcool, Drogas e Tabaco": "Alcohol, Drugs & Tobacco Policy",
    "Programa de Gestão Ambiental": "Environmental Management Program",
    "Programa de Qualidade de Vida": "Quality of Life Program",
    "Política de ESG": "ESG Policy",
    "Fale conosco": "Contact Us",
    "FALE CONOSCO": "CONTACT US",
    "Código de Conduta": "Code of Conduct",

    // =========================================================================
    // 2. RODAPÉ (FOOTER - COMUM A TODAS AS PÁGINAS)
    // =========================================================================
    
    // == Descrição da Empresa & Slogan ==
    "Sobre a Galáxia": "About Galáxia",
    "Navegação de apoio marítimo de excelência para operações offshore no território nacional, comprometida com a segurança, a qualidade e o meio ambiente.":
      "Excellence in maritime support navigation for offshore operations across Brazil, firmly committed to safety, quality, and environmental protection.",
    "Empresa Brasileira de Navegação com foco em apoio marítimo, apoio portuário e logística. Navegando com excelência desde 2002.":
      "Brazilian Navigation Company focusing on maritime support, port operations, and logistics. Navigating with operational excellence since 2002.",
    
    // == Colunas de Links Rápidos ==
    "Links Rápidos": "Quick Links",
    "Nossa Frota": "Our Fleet",
    "Ética e Conduta": "Ethics & Conduct",
    "Sustentabilidade": "Sustainability",
    "Política de Qualidade": "Quality Policy",
    "Portal do Colaborador": "Employee Portal",
    "SGI & SMS": "IMS & HSE",

    // == Informações de Contato e Bases Operacionais ==
    "Contato & Base": "Contact & Base",
    "Base Macaé - RJ": "Macaé Base - RJ",
    "Rio de Janeiro - RJ": "Rio de Janeiro - RJ",
    "Guarujá — São Paulo, Brasil": "Guarujá — São Paulo, Brazil",

    // == Direitos Autorais & Legal (Copyright) ==
    "Todos os direitos reservados.": "All rights reserved.",
    "© 2026 Galáxia . Todos os direitos reservados.": "© 2026 Galáxia . All rights reserved.",
    "Política de Privacidade": "Privacy Policy",
    "Termos de Uso": "Terms of Use",

    // =========================================================================
    // 3. COMUNS / BOTÕES / CTAS GERAIS
    // =========================================================================
    
    // == Botões de Ação e Redirecionamento ==
    "Saiba mais": "Learn more",
    "Conheça a Frota": "Explore our Fleet",
    "Nossos Serviços": "Our Services",
    "Entre em Contato": "Get in Touch",
    "Enviar Mensagem": "Send Message",
    "Voltar para Frota": "Back to Fleet",
    "Voltar": "Back",
    "Ver Detalhes": "View Details",
    "Conhecer Trajetória Completa": "Explore the Complete Journey",

    // == Títulos de Badges e Legendas Compartilhadas ==
    "Diretrizes em Vigor — Alta Administração": "Active Guidelines — Senior Management",

    // =========================================================================
    // 4. HOME (INDEX.HTML)
    // =========================================================================
    
    // == Sessão Hero (Destaque Principal) ==
    "O mar nos move. A excelência nos guia.": 
      "The sea moves us. Excellence guides us.",
    "Navegando com Segurança e Compromisso para Fornecer Soluções de Alta Qualidade.": 
      "Navigating with Safety and Commitment to Provide High-Quality Solutions.",

    // == Sessão Introdução / Sobre a Galáxia ==
    "Sobre a Empresa": 
      "About the company",
    "Fundada em maio de 2002, a Galáxia é uma Empresa Brasileira de Navegação (EBN), com foco principal na navegação de apoio marítimo. Com uma equipe de gestão altamente experiente, fornecemos um elevado padrão operacional, de acordo com as melhores práticas do mercado.": 
      "Founded in May 2002, Galáxia is a Brazilian Shipping Company (EBN) primarily focused on offshore support operations. Backed by a highly experienced management team, we deliver high operational standards in line with industry best practices.",
    "Anos de Experiência": 
      "Years of Experience",
    "Empresa Brasileira": 
      "Brazilian Company",
    "Compromisso": 
      "Commitment",
    
    // == Sessão Nossos Pilares Operacionais ==
    "Nossos Pilares": 
      "Our Pillars",
    "Missão, Visão e Valores": 
      "Mission, Vision and Values",
    "Compromisso com o Mar e a Segurança": 
      "Commitment to the Sea and Safety",
    "Tecnologia e Frota Especializada": 
      "Technology and Specialized Fleet",
    "Liderança e Confiabilidade Operacional": 
      "Leadership and Operational Reliability",
    "Ser reconhecida pela excelência na prestação de serviços nos segmentos de apoio marítimo, portuário e logística, no mercado nacional e internacional.":
      "To be recognized for excellence in service delivery within the maritime support, port, and logistics sectors in both domestic and international markets.",
    "Operar com segurança e rentabilidade com responsabilidade social e ambiental nos segmentos de navegação de apoio marítimo, apoio portuário e logística.":
      "To operate safely and profitably, with social and environmental responsibility, in the offshore support, port support, and logistics sectors.",
    "Comprometimento em assegurar a satisfação de nossos clientes prestando serviço de alta qualidade, confiabilidade, eficiência, disponibilidade e segurança de nossos colaboradores.":
      "Commitment to ensuring customer satisfaction by providing high-quality, reliable, and efficient service, while maintaining availability and ensuring the safety of our employees.",
    
    // == Áreas de Atuação ==
    "Atuação Operacional":
      "Operational Activity",
    "Áreas de Atuação": 
      "Areas of Operation",
    "Afretamento e Operação de embarcações destinadas a:":
      "Chartering and operation of vessels intended for:",
    "Suprimento de unidades offshore de exploração e produção":
      "Supply of offshore exploration and production units",
    "Operação contínua de embarcações de apoio marítimo (PSV/AHTS) para transporte de cargas, água, combustível e equipamentos essenciais para plataformas offshore.":
      "Continuous operation of offshore support vessels (PSV/AHTS) for the transport of cargo, water, fuel, and essential equipment to offshore platforms.",

    // == Sessão Serviços e Apoio Marítimo ==
    "Apoio Logístico Marítimo": 
      "Maritime Logistics Support",
    "Transporte de cargas, suprimentos e equipamentos entre as bases continentais e as plataformas de perfuração e produção com pontualidade e segurança.":
      "Transportation of cargo, supplies, and equipment between mainland bases and drilling/production platforms with strict punctuality and safety.",
    "Manuseio de Âncoras e Reboque": 
      "Anchor Handling and Towing (AHTS)",
    "Embarcações de alta potência equipadas para operações complexas de posicionamento de sondas, manuseio de espias e reboque oceanográfico.":
      "High-powered vessels equipped for complex rig positioning, anchor handling, and oceanographic towing operations.",
    "Combate a Emergências Ambientais": 
      "Oil Spill Recovery & Emergency Response",
    "Prontidão 24/7 com embarcações especializadas na contenção e recolhimento de derramamentos de óleo (OSRV), protegendo a vida marinha.":
      "24/7 readiness with specialized Oil Spill Recovery Vessels (OSRV) for offshore containment and recovery, safeguarding marine life.",

    // =========================================================================
    // 5. QUEM SOMOS (QUEM-SOMOS.HTML)
    // =========================================================================
    
    "Quem Somos - Galáxia": "About Us - Galáxia",
    "Tradição, Segurança e Liderança nas Águas Brasileiras": "Tradition, Safety, and Leadership in Brazilian Waters",
    "Conheça nossa trajetória, nossa excelência operacional e os princípios inegociáveis que guiam a Galáxia em cada milha navegada.":
      "Discover our trajectory, our operational excellence, and the non-negotiable principles that guide Galáxia every nautical mile navigated.",
    "Ano de Fundação": "Founded Year",
    "Certificação Brasileira": "Brazilian Certification",
    "Padrão Global": "Global Standard",
    "Nossa História": "Our History",
    "Fundada em maio de 2002, a Galáxia orgulha-se de ser uma Empresa Brasileira de Navegação (EBN) consolidada e de excelência.":
      "Founded in May 2002, Galáxia takes pride in being a consolidated Brazilian Navigation Company (EBN) dedicated to operational excellence.",
    "Fundada com o propósito de suprir a crescente demanda da indústria de energia offshore, a Galáxia consolidou-se como referência nacional no fornecimento de embarcações especializadas e tripulações altamente qualificadas.":
      "Founded to meet the growing demand of the offshore energy industry, Galáxia has established itself as a national benchmark in specialized vessels and highly skilled crews.",
    "Nosso foco principal e nossa grande força residem na navegação de apoio marítimo, onde entregamos soluções robustas e confiáveis para os desafios operacionais de nossos clientes.":
      "Our main focus and greatest strength lie in maritime support navigation, where we deliver robust and reliable solutions for our clients' offshore operational challenges.",
    "Para garantir resultados superiores, contamos com uma equipe de gestão altamente experiente e qualificada. Essa expertise nos permite fornecer um elevado padrão operacional, sempre em rigorosa conformidade com as melhores e mais seguras práticas do mercado global.":
      "To ensure superior results, we rely on a highly experienced and qualified management team. This expertise allows us to provide a high operational standard, always in strict compliance with the best and safest global market practices.",
    "Missão": "Mission",
    "“Atuar de maneira segura e rentável com responsabilidade social e ambiental, no setor de navegação de apoio marítimo, apoio portuário e logística.”":
      "“To operate safely and profitably with social and environmental responsibility in the maritime support navigation, port support, and logistics sector.”",
    "Prestar serviços de navegação e apoio marítimo offshore com excelência, segurança e respeito ao meio ambiente, garantindo a satisfação de nossos clientes e o desenvolvimento sustentável.":
      "To provide offshore maritime support and navigation services with excellence, safety, and environmental stewardship, ensuring client satisfaction and sustainable growth.",
    "Visão": "Vision",
    "“Ser reconhecida pela excelência na prestação de serviços nos segmentos de apoio marítimo, portuário e logística, atuando com protagonismo tanto no mercado nacional quanto no internacional.”":
      "“To be recognized for excellence in providing services in the maritime support, port, and logistics segments, acting with leadership in both national and international markets.”",
    "Ser reconhecida entre as líderes de apoio marítimo no Brasil, destacando-se pela modernidade da frota, integridade operacional e valorização do capital humano.":
      "To be recognized among the top maritime support leaders in Brazil, standing out for fleet modernization, operational integrity, and human capital appreciation.",
    "Valores": "Values",
    "Para guiar nossas operações diárias e nosso crescimento futuro, baseamo-nos em pilares fundamentais sólidos que norteiam todas as nossas decisões.":
      "To guide our daily operations and future growth, we rely on solid fundamental pillars that direct all our decisions.",
    "O nosso maior comprometimento é assegurar a total satisfação de nossos clientes. Para isso, pautamos nossas operações em quatro pilares essenciais:":
      "Our greatest commitment is ensuring total client satisfaction. To achieve this, our operations are built on four essential pillars:",
    "Excelência na entrega de cada serviço prestado, superando expectativas operacionais com rigor técnico.":
      "Excellence in the delivery of every service provided, exceeding operational expectations with strict technical rigor.",
    "Parcerias sólidas e transparentes, construídas sobre ética, compromisso de longo prazo e respeito aos prazos.":
      "Solid and transparent partnerships built on ethics, long-term commitment, and strict respect for deadlines.",
    "Prontidão para atender às demandas do setor com agilidade, frota preparada e gestão otimizada de tempo e recursos.":
      "Readiness to meet industry demands with agility, a fully prepared fleet, and optimized time and resource management.",
    "Proteção e cuidado inegociável com a vida, o meio ambiente e a integridade física de todos os nossos colaboradores.":
      "Non-negotiable protection and care for human life, the environment, and the physical integrity of all our employees.",
    "Descubra nossas embarcações de apoio marítimo e portuário ou fale diretamente com nossos especialistas para planejar a logística da sua operação.":
      "Discover our maritime and port support vessels or speak directly with our specialists to plan your operational logistics.",

    // =========================================================================
    // 6. FROTA (FROTA.HTML)
    // =========================================================================
    
    "Conheça Nossa Frota": "Explore Our Fleet",
    "Conheça as embarcações que impulsionam nossas operações com segurança, eficiência e alta tecnologia em alto mar.":
      "Meet the modern vessels that drive our offshore operations with safety, efficiency, and high technology at sea.",
    "Nossas embarcações são mantidas sob rigorosos padrões internacionais de segurança e certificação EBN, prontas para missões offshore de alta complexidade.":
      "Our vessels are maintained under strict international safety standards and EBN certification, fully ready for high-complexity offshore missions.",
    "Embarcações modernas com tecnologia de ponta, projetadas para atender as mais exigentes operações na Bacia de Campos, Santos e Espírito Santo.":
      "Modern vessels featuring state-of-the-art technology, engineered to fulfill the most demanding offshore operations in the Campos, Santos, and Espírito Santo basins.",
    "Embarcação robusta e versátil projetada para operações contínuas de apoio marítimo e suprimento de plataformas em águas profundas.":
      "Robust and versatile vessel designed for continuous maritime support and offshore platform supply operations in deep waters.",
    "Navio de alta capacidade operacional com tecnologia avançada de posicionamento dinâmico e suporte integral a missões em mar aberto.":
      "High-capacity operational vessel with advanced dynamic positioning technology and full support for open-sea missions.",
    "Embarcação desenhada para máxima estabilidade e agilidade na entrega de cargas e apoio logístico de emergência em instalações marítimas.":
      "Vessel designed for maximum stability and agility in cargo delivery and emergency logistical support across offshore installations.",
    "Especificações Técnicas Completas & Data-Sheet": "Complete Technical Specifications & Data-Sheet",
    "Especificações Técnicas": "Technical Specifications",
    "Comprimento Total": "Overall Length",
    "Boca (Largura)": "Breadth (Width)",
    "Calado Máximo": "Maximum Draft",
    "Capacidade de Carga": "Deadweight / Cargo Capacity",
    "Área de Convés": "Deck Area",
    "Acomodações": "Accommodations",
    "Potência Principal": "Main Power / Engines",
    "Propulsão & Manobrabilidade": "Propulsion & Maneuverability",
    "Classificação & Bandeira": "Class & Flag",
    "Bandeira Brasileira": "Brazilian Flag",

    // =========================================================================
    // 7. POLÍTICA DE ESG (POLITICA-ESG.HTML)
    // =========================================================================
    
    "Princípios e Compromissos da Galáxia": "Galáxia Principles and Commitments",
    "A GALÁXIA, empresa atuante no setor de navegação e serviços marítimos, reconhece a importância da integração dos princípios Ambientais, Sociais e de Governança (ESG) em suas operações, visando a sustentabilidade e a criação de valor para seus colaboradores, clientes, parceiros e demais partes interessadas.":
      "GALÁXIA, a leading company in navigation and maritime support services, recognizes the paramount importance of integrating Environmental, Social, and Governance (ESG) principles into its operations, driving sustainability and long-term value for its employees, clients, partners, and stakeholders.",
    "Nosso compromisso é conduzir os negócios com responsabilidade socioambiental, transparência e ética, minimizando impactos negativos, promovendo o desenvolvimento sustentável e garantindo a conformidade com as melhores práticas do setor marítimo.":
      "Our commitment is to conduct business with strict socio-environmental responsibility, transparency, and ethics, actively minimizing environmental footprint, promoting sustainable development, and ensuring compliance with global maritime best practices.",
    "Diretrizes operacionais e estratégicas para a condução sustentável de nossas atividades abaixo:":
      "Operational and strategic guidelines for the sustainable conduct of our corporate activities below:",
    "Dimensão Ambiental (E - Environmental)": "Environmental Dimension (E)",
    "Dimensão Social (S - Social)": "Social Dimension (S)",
    "Governança Corporativa (G - Governance)": "Corporate Governance (G)",

    // =========================================================================
    // 8. POLÍTICA DE QSMS (POLITICA-QSMS.HTML)
    // =========================================================================
    
    "Política de Gestão Integrada (QSMS)": "Integrated Management Policy (QHSE)",
    "Qualidade, Segurança, Meio Ambiente e Saúde Ocupacional": "Quality, Health, Safety, and Environment",
    "A Galáxia estabelece esta Política de QSMS com o propósito de garantir a condução segura, sustentável e eficaz de todos os seus negócios e operações marítimas.":
      "Galáxia establishes this QHSE Policy to guarantee the safe, sustainable, and effective conduct of all its business and maritime operations.",
    "A GALÁXIA, empresa de navegação de apoio marítimo que atua em território nacional nas atividades de exploração e produção de petróleo, estabelece esta Política de QSMS com o propósito de garantir a condução segura, sustentável e eficaz de seus negócios. Nossos compromissos fundamentais estão baseados nas diretrizes das normas NBR ISO 9001, NBR ISO 14001, ISO 45001, ISM Code e ISPS Code:":
      "GALÁXIA, a maritime offshore support company operating nationwide in oil exploration and production activities, establishes this QHSE Policy with the purpose of ensuring the safe, sustainable, and effective conduct of its business. Our core commitments are grounded in the guidelines of NBR ISO 9001, NBR ISO 14001, ISO 45001, ISM Code, and ISPS Code standards:",
    "Nossos compromissos fundamentais estão alinhados aos mais rigorosos padrões internacionais e baseados nas diretrizes das normas NBR ISO 9001, NBR ISO 14001, ISO 45001, ISM Code e ISPS Code, assegurando que a qualidade e a segurança da vida humana no mar sejam sempre a nossa prioridade máxima.":
      "Our core commitments are fully aligned with the strictest international standards and based on the guidelines of NBR ISO 9001, NBR ISO 14001, ISO 45001, ISM Code, and ISPS Code, ensuring that quality and safety of life at sea remain our highest priority.",
    "Excelência operacional, segurança de vidas no mar e conformidade rigorosa com normas internacionais.":
      "Operational excellence, safety of human life at sea, and strict compliance with global standards.",
    "Segurança operacional, proteção da vida e excelência na gestão ambiental em todas as nossas embarcações.":
      "Operational safety, protection of life, and excellence in environmental management across our vessels.",

    // =========================================================================
    // 9. CÓDIGO DE CONDUTA (CODIGO-CONDUTA.HTML)
    // =========================================================================
    
    "Código de Conduta - Galáxia": "Code of Conduct - Galáxia",
    "Código de Conduta": "Code of Conduct",
    "Nosso Código de Conduta estabelece os Princípios Éticos fundamentais que orientam o comportamento e as decisões institucionais de todos os colaboradores, lideranças, parceiros comerciais e terceirizados da Galáxia.":
      "Our Code of Conduct establishes the fundamental Ethical Principles that guide the behavior and institutional decisions of all employees, leadership, business partners, and contractors at Galáxia.",
    "O respeito inegociável à vida em todas as suas formas, a excelência em nossas operações marítimas e a conformidade irrestrita com a legalidade constituem a base moral de nosso Sistema de Gestão Integrado (SGI). Garantimos um ambiente de dignidade, confiança mútua e transparência absoluta.":
      "The non-negotiable respect for life in all its forms, operational excellence, and strict legal compliance form the moral foundation of our Integrated Management System (IMS). We guarantee an environment of dignity, mutual trust, and total transparency.",
    "Os 4 Pilares de Integridade da Galáxia": "The 4 Pillars of Galáxia's Integrity",
    "Respeito à Vida, QSMS e Sustentabilidade": "Respect for Life, QHSE & Sustainability",
    "O respeito à vida em todas as suas formas, pautado pela Qualidade de Vida, Saúde, Meio Ambiente e Segurança nas operações marítimas.":
      "Respect for life in all its forms, guided by Quality of Life, Health, Environmental Protection, and Safety across all maritime operations.",
    "Integridade, Legalidade e Transparência": "Integrity, Legality & Transparency",
    "A integridade, a verdade, a honestidade, a justiça, a equidade, a lealdade, a responsabilidade, o zelo, o mérito, a transparência, a legalidade, a impessoalidade e a coerência entre o discurso e a prática.":
      "Integrity, truth, honesty, fairness, equity, loyalty, responsibility, diligence, merit, transparency, legality, impartiality, and strict coherence between speech and practice.",
    "Diversidade, Equidade e Respeito Mútuo": "Diversity, Equity & Mutual Respect",
    "O respeito às diferenças e diversidades de condição étnica, religiosa, social, cultural, linguística, convicção filosófica ou política, estética, etária, física, mental e psíquica, de gênero, de orientação sexual e outras, referenciam as relações interpessoais com clientes internos e externos, que garantem um ambiente saudável, com confiança mútua, cooperação, solidariedade, dignidade e respeito.":
      "Respect for differences and diversity of ethnic, religious, social, cultural, linguistic, philosophical or political conviction, aesthetic, age, physical, mental, gender, sexual orientation, and other conditions guide our interpersonal relationships with internal and external clients, guaranteeing a healthy workplace characterized by mutual trust, cooperation, solidarity, dignity, and respect.",
    "Mérito e Liderança pelo Exemplo": "Merit and Leadership by Example",
    "O mérito é o critério decisivo para todas as formas de reconhecimento, recompensa, promoção e valorização profissional dentro da nossa organização.":
      "Merit is the decisive criterion for all forms of recognition, reward, professional advancement, and appreciation within our organization.",

    // =========================================================================
    // 10. AUTORIDADE DE PARAR O TRABALHO (AUTORIDADE-PARAR-TRABALHO.HTML)
    // =========================================================================
    
    "O Poder e a Obrigação de Parar o Trabalho": "The Authority and Obligation to Stop Work",
    "A Segurança de Todas as Vidas em Primeiro Lugar": "Safety of All Lives First",
    "A Galáxia estabelece a \"Autoridade e Obrigação\" de qualquer indivíduo suspender uma única tarefa ou operação de grupo quando o controle de risco de SMS não está claramente estabelecido ou compreendido.":
      "Galáxia establishes the \"Authority and Obligation\" of any individual to stop a single task or group operation whenever HSE risk controls are not clearly established or understood.",
    "Todos os colaboradores da Galáxia e de empresas parceiras têm a autoridade incondicional e o dever de interromper qualquer atividade ou tarefa se perceberem risco iminente de acidente, lesão, dano ambiental ou comprometimento operacional.":
      "All employees of Galáxia and partner companies have the unconditional authority and strict obligation to stop any activity or task immediately upon observing an imminent risk of accident, personal injury, environmental damage, or operational hazard.",
    "Etapas do Fluxo de Parada": "Stop Work Flow Steps",
    "1. Identificar o Risco": "1. Identify the Hazard",
    "2. Interromper a Atividade": "2. Stop the Activity",
    "3. Comunicar a Supervisão": "3. Notify Supervision",
    "4. Corrigir e Retomar com Segurança": "4. Correct & Resume Safely",
    "Qualquer colaborador tem o direito e o dever de interromper qualquer operação que considere insegura — sem receio de represálias.":
      "Any employee has the unconditional right and duty to stop any operation deemed unsafe — without any fear of retaliation.",

    // =========================================================================
    // 11. PROGRAMA DE GESTÃO AMBIENTAL (PROGRAMA-GESTAO-AMBIENTAL.HTML)
    // =========================================================================
    
    "Programa de Gestão Ambiental (PGA)": "Environmental Management Program (EMP)",
    "Programa de Gestão Ambiental (PGA) - Galáxia": "Environmental Management Program (EMP) - Galáxia",
    "Preservação dos Oceanos e Sustentabilidade Offshore": "Ocean Conservation and Offshore Sustainability",
    "Comprometidos com a proteção dos oceanos e a minimização de resíduos gerados durante as operações marítimas e portuárias.":
      "Committed to protecting ocean ecosystems and minimizing waste generation throughout our offshore maritime and port operations.",
    "Mitigação e Proteção dos Oceanos": "Ocean Protection & Mitigation",
    "A Galáxia orienta suas atividades pelo rigoroso cumprimento das normas ambientais internacionais (MARPOL) e regulamentações da Marinha do Brasil, priorizando a prevenção da poluição marinha.":
      "Galáxia guides its operations by strict compliance with international environmental standards (MARPOL) and Brazilian Navy regulations, prioritizing the total prevention of marine pollution.",
    "Gerenciamento Zero Resíduos": "Zero Waste Management",
    "Monitoramento e controle estrito de resíduos sólidos e oleosos, garantindo descarte zero no mar e encaminhamento adequado em terra através de parceiros certificados.":
      "Strict monitoring and control of solid and oily waste, ensuring zero discharge at sea and proper onshore disposal through certified environmental partners.",
    "Descarbonização e Eficiência Energética": "Decarbonization & Energy Efficiency",
    "Investimento contínuo na otimização de rotas offshore e manutenção preventiva de motores para redução de emissões de Gases de Efeito Estufa (GEE).":
      "Continuous investment in offshore route optimization and preventive engine maintenance to steadily reduce Greenhouse Gas (GHG) emissions.",

    // =========================================================================
    // 12. PROGRAMA DE QUALIDADE DE VIDA (PROGRAMA-QUALIDADE-VIDA.HTML)
    // =========================================================================
    
    "Programa de Qualidade de Vida (PQV)": "Quality of Life Program (QLP)",
    "Um programa voltado à saúde e a qualidade de vida no trabalho para nossos colaboradores, com o intuito de tornar a empresa mais saudável, competitiva e produtiva.":
      "A dedicated workplace health and quality of life program for our employees, designed to make the company healthier, more competitive, and highly productive.",
    "Foco na Saúde & Segurança": "Focus on Health & Safety",
    "Tolerância ao Desgaste / Fadiga": "Tolerance for Strain / Fatigue",
    "Cuidado Integral (Onshore & Offshore)": "Comprehensive Care (Onshore & Offshore)",
    "Competitividade & Produtividade": "Competitiveness & Productivity",

    // =========================================================================
    // 13. RESPONSABILIDADE SOCIAL (RESPONSABILIDADE-SOCIAL.HTML)
    // =========================================================================
    
    "A responsabilidade social é parte integrante das políticas e do DNA da Galáxia.":
      "Social responsibility is an integral part of the policies and corporate DNA of Galáxia.",
    "Repudiamos e combatemos o trabalho infantil e escravo.":
      "We strictly reject and combat child and forced labor across our entire supply chain.",
    "Rejeitamos qualquer discriminação racial, social e religiosa.":
      "We reject any form of racial, social, religious, or gender discrimination.",
    "Buscamos transparência e honestidade em nossas relações com parceiros, investidores, fornecedores e colaboradores.":
      "We pursue transparency and absolute honesty in our relationships with partners, investors, suppliers, and employees.",

    // =========================================================================
    // 14. POLÍTICA DE ÁLCOOL, DROGAS E TABACO (POLITICA-ALCOOL-DROGAS.HTML)
    // =========================================================================
    
    "Política de Álcool, Drogas e Tabaco": "Alcohol, Drugs, and Tobacco Policy",
    "Tolerância Zero para Risco e Fadiga Operacional": "Zero Tolerance for Operational Risk and Impairment",
    "A Galáxia reconhece que o consumo de álcool e uso de drogas ilegais é prejudicial à saúde e estabelece que a posse, venda, distribuição e consumo de quaisquer dessas substâncias nas instalações e embarcações é estritamente proibida pela Alta Administração.":
      "Galáxia recognizes that alcohol and illegal drug consumption is harmful to human health and strictly establishes that the possession, sale, distribution, or consumption of such substances across any vessels or corporate premises is strictly forbidden by Senior Management.",
    "A Galáxia, empresa de navegação de apoio marítimo, atuando nas atividades de exploração e produção de petróleo, estabelece esta Política na condução dos seus negócios, através dos seguintes princípios e compromissos:":
      "Galáxia, a maritime offshore support company operating in oil exploration and production activities, establishes this Policy in the conduct of its business through the following principles and commitments:",
    "Adota esta Política visando responsabilidade social, segurança e bem-estar de vidas, patrimônio e meio ambiente, como garantia de trabalhos executados nos mais altos padrões de segurança e eficiência.":
      "Adopts this Policy seeking social responsibility, safety, and well-being of human life, corporate assets, and the environment as a guarantee of operations executed to the highest standards of safety and efficiency.",
    "Incorpora esta Política, os Termos e Condições de Contratação de todos os colaboradores da Galáxia. A quebra destas diretrizes estará sujeita a procedimentos disciplinares.":
      "Incorporates this Policy into the Terms and Conditions of Employment of all Galáxia staff. Any breach of these strict guidelines will be subject to disciplinary procedures.",

    // =========================================================================
    // 15. FALE CONOSCO (FALE-CONOSCO.HTML)
    // =========================================================================
    
    "Fale Conosco - Galáxia": "Contact Us - Galáxia",
    "Entre em Contato com a Galáxia": "Get in Touch with Galáxia",
    "Estamos à disposição para atender suas necessidades de navegação e apoio marítimo offshore.":
      "We are ready to support all your offshore navigation and maritime support operational requirements.",
    "Endereço e Bases Operacionais": "Address & Operational Bases",
    "Macaé - RJ (Base Operacional)": "Macaé - RJ (Operational Base)",
    "Rio de Janeiro - RJ (Escritório Central)": "Rio de Janeiro - RJ (Headquarters)",
    "Telefone & Contato": "Phone & Contact Info",
    "Ouvidoria & Canal de Ética": "Ombudsman & Ethics Channel",
    "Envie uma Mensagem": "Send Us a Message",
    "Nome Completo": "Full Name",
    "Seu e-mail corporativo": "Your corporate email",
    "Empresa": "Company",
    "Assunto": "Subject",
    "Mensagem": "Message",

    // =========================================================================
    // 16. STRINGS COMUNS / COMPLEMENTARES (TODAS AS PÁGINAS)
    // =========================================================================

    // == Footer ==
    "Navegação": "Navigation",
    "Soluções": "Solutions",
    "Contato": "Contact",
    "© 2026 Galáxia. Todos os direitos reservados.": "© 2026 Galáxia. All rights reserved.",
    "© 2026 Galáxia . Todos os direitos reservados.": "© 2026 Galáxia . All rights reserved.",
    "Logística Naval": "Naval Logistics",
    "Fale Conosco": "Contact Us",

    // == Fleet Status & Meta Tags ==
    "Em Operação": "In Operation",
    "EBN Certificada": "EBN Certified",
    "Alta Potência": "High Power",
    "Resgate & Suprimento": "Rescue & Supply",
    "Eficiência Energética": "Energy Efficiency",
    "Longo Alcance": "Long Range",
    "Bandeira Brasileira": "Brazilian Flag",
    "Multipropósito": "Multi-Purpose",
    "Tecnologia GNL": "LNG Technology",
    "Sustentável": "Sustainable",
    "Posicionamento Dinâmico": "Dynamic Positioning",
    "Multi-Missão": "Multi-Mission",
    "Foto Aérea": "Aerial Photo",
    "Embarcações Especializadas": "Specialized Vessels",
    "Frota em Destaque": "Featured Fleet",
    "PSV / AHTS": "PSV / AHTS",
    "Suporte Logístico": "Logistics Support",
    "Apoio MPSV": "MPSV Support",
    "Especializada": "Specialized",
    "Destaque Operacional": "Operational Highlight",
    "Mais Informações": "More Information",
    "Consultar Disponibilidade": "Check Availability",
    "Solicitar Orçamento da Frota": "Request Fleet Quote",

    // == Fleet Descriptions ==
    "Navio de apoio multipropósito integrado à nossa frota nacional, ideal para missões de logística marinha, inspeção e suporte naval.":
      "Multi-purpose support vessel integrated into our national fleet, ideal for marine logistics, inspection, and naval support missions.",
    "Unidade especializada equipada com os mais modernos sistemas de controle e adequação ambiental para operações logísticas específicas.":
      "Specialized unit equipped with the most modern control and environmental compliance systems for specific logistics operations.",
    "Embarcação de ponta da nossa frota, aliando grande capacidade de carga de convés, velocidade e segurança inegociável para a tripulação.":
      "The flagship of our fleet, combining large deck cargo capacity, speed, and non-negotiable crew safety.",
    "Embarcação de apoio marítimo integrada à frota operacional da Galáxia, com imagens aéreas exclusivas registradas em operação real.":
      "Maritime support vessel integrated into Galáxia's operational fleet, with exclusive aerial images captured during real operations.",

    // == Fleet CTA ==
    "Soluções Customizadas para Sua Operação": "Custom Solutions for Your Operation",
    "Precisa de especificações técnicas detalhadas ou fretamento dedicado? Nossa equipe planeja a alocação perfeita da nossa frota.":
      "Need detailed technical specifications or dedicated chartering? Our team plans the perfect fleet allocation for your project.",
    "Fretamento e Apoio Marítimo de Alta Confiabilidade": "High-Reliability Chartering and Maritime Support",
    "Entre em contato com nossa diretoria comercial para solicitar cotações, especificações técnicas detalhadas (bollard pull, deck area) e disponibilidade da frota.":
      "Contact our commercial directorate to request quotations, detailed technical specifications (bollard pull, deck area) and fleet availability.",
    "Tecnologia & Operação Naval": "Technology & Naval Operations",

    // == Home Services ==
    "Nossos Serviços & Atuação": "Our Services & Operations",
    "Soluções Integradas para o Setor Marítimo": "Integrated Solutions for the Maritime Sector",
    "Oferecemos serviços especializados para atender às demandas do mercado de apoio marítimo, portuário e logística com excelência operacional.":
      "We offer specialized services to meet the demands of the maritime support, port, and logistics market with operational excellence.",
    "Operações de suporte a plataformas e unidades offshore com embarcações especializadas, garantindo segurança e eficiência em alto mar.":
      "Support operations for platforms and offshore units with specialized vessels, ensuring safety and efficiency on the high seas.",
    "Serviços de reboque, manobra e suporte em operações portuárias com segurança operacional e atendimento às normas regulatórias.":
      "Towing, maneuvering, and support services in port operations with operational safety and regulatory compliance.",
    "Soluções completas de logística integrada, otimizando a cadeia de suprimentos com eficiência e controle operacional.":
      "Complete integrated logistics solutions, optimizing the supply chain with efficiency and operational control.",
    "Afretamento e operação de embarcações de suporte e suprimentos preparadas para alta complexidade operacional em alto mar.":
      "Chartering and operation of support and supply vessels prepared for high operational complexity on the high seas.",
    "Logística": "Logistics",
    "Frota Especializada": "Specialized Fleet",

    // == Home CTA ==
    "Parceria — Atendimento Comercial": "Partnership — Commercial Support",
    "Pronto para Parceria?": "Ready for a Partnership?",
    "Entre em contato diretamente com a equipe comercial da Galáxia  e descubra como nossas soluções podem atender às demandas operacionais da sua frota ou terminal.":
      "Contact the Galáxia commercial team directly and discover how our solutions can meet the operational demands of your fleet or terminal.",

    // == Home Areas de Atuação ==
    "Reboque e manuseio de âncoras": "Towing and anchor handling",
    "Operações especializadas em ancoragem, manobra de alta precisão, posicionamento dinâmico e reboque pesado de plataformas e unidades s.":
      "Specialized operations in anchoring, high-precision maneuvering, dynamic positioning, and heavy towing of platforms and offshore units.",
    "Resposta rápida e recolhimento de óleo derramado": "Rapid response and oil spill recovery",
    "Prontidão emergencial (OSRV) 24/7 com embarcações equipadas para contenção, recolhimento de vazamentos e proteção ambiental no mar.":
      "24/7 emergency readiness (OSRV) with vessels equipped for containment, spill recovery, and marine environmental protection.",
    "Monitoramento ambiental e sísmica": "Environmental monitoring and seismic surveys",
    "Apoio a pesquisas oceanográficas, aquisição e levantamento de dados sísmicos de precisão e monitoramento contínuo da fauna e ecossistema marinho.":
      "Support for oceanographic research, precision seismic data acquisition and surveying, and continuous monitoring of marine fauna and ecosystems.",
    "Engenharia submarina": "Subsea engineering",
    "Suporte de embarcações especializadas (RSV/ROV) para operações de inspeção, reparo, intervenção e manutenção em dutos e estruturas submarinas.":
      "Support of specialized vessels (RSV/ROV) for inspection, repair, intervention, and maintenance operations on subsea pipelines and structures.",
    "Conheça Nossa Frota": "Explore Our Fleet",
    "Entre em contato": "Get in Touch",

    // == Responsabilidade Social ==
    "Valores que orientam cada decisão e cada operação da Galáxia, refletindo nosso compromisso inabalável com a sociedade e o planeta.":
      "Values that guide every decision and every operation at Galáxia, reflecting our unwavering commitment to society and the planet.",
    "Investimos na segurança e saúde de nossos funcionários.":
      "We continuously invest in the occupational safety, health, and well-being of our employees.",
    "Garantimos o desenvolvimento sustentável, protegendo o meio ambiente para gerações futuras.":
      "We ensure sustainable development, actively protecting the marine environment for future generations.",
    "Respeitamos e praticamos a transparência e a igualdade salarial entre mulheres e homens.":
      "We respect and actively practice transparency and equal pay between women and men across all levels.",
    "A Galáxia trabalha em harmonia com o meio ambiente, adotando práticas e tecnologias modernas, tornando as operações mais eficientes, a fim de minimizar os impactos ambientais.":
      "Galáxia works in harmony with the environment by adopting modern practices and technologies, making operations more efficient to minimize environmental impact.",
    "Clique abaixo para acessar o relatório emitido pelo MTE — Ministério do Trabalho e Emprego, reafirmando nosso compromisso com a igualdade e a transparência.":
      "Click below to access the official report issued by the Brazilian Ministry of Labor and Employment (MTE), reaffirming our commitment to equity and transparency.",

    // == Autoridade de Parar o Trabalho - Complementar ==
    "Todos os funcionários, da empresa e terceirizados, têm o poder e espera-se que parem o trabalho de colegas ou de contratados se houver qualquer risco à segurança pessoal, risco ambiental, danos materiais ou à reputação da Empresa.":
      "All employees, internal or contractors, have the unconditional authority and are expected to stop the work of colleagues or contractors if there is any risk to personal safety, environmental hazard, property damage, or company reputation.",
    "Em termos gerais, o processo de Autoridade de Parar o Trabalho envolve uma parada, notificação, correção e retomada da abordagem para a resolução de uma condição percebida como insegura, um ato, erro, omissão, ou falta de compreensão que poderia resultar em um evento indesejado. A Autoridade de Parar o Trabalho deve ser usada conforme a metodologia descrita no procedimento.":
      "In general terms, the Stop Work Authority process involves stopping, notifying, correcting, and resuming operations to resolve any condition perceived as unsafe, an act, error, omission, or lack of understanding that could result in an undesired event. Stop Work Authority must be exercised according to formal procedural methodology.",
    "Identificação imediata da condição insegura, ato subpadrão ou dúvida técnica. O colaborador suspende a tarefa e alerta a equipe ao redor.":
      "Immediate identification of an unsafe condition, substandard act, or technical doubt. The employee halts the task and alerts the surrounding team.",
    "Comunicação formal ao supervisor responsável, oficial de segurança ou líder da operação sobre o motivo da interrupção do trabalho.":
      "Formal notification to the responsible supervisor, safety officer, or operations leader regarding the specific reason for stopping work.",
    "Avaliação conjunta dos riscos de SMS, investigação da causa raiz e implementação imediata dos controles e barreiras de proteção necessários.":
      "Joint HSE risk assessment, root cause investigation, and immediate implementation of necessary protective controls and barriers.",
    "Verificação das correções aplicadas e autorização formal pelo supervisor responsável para o reinício seguro e consciente das atividades.":
      "Verification of applied corrective actions and formal authorization by the responsible supervisor for the safe and conscious resumption of activities.",
    "Obrigação e direito de interromper imediatamente qualquer operação percebida como insegura.":
      "Authority and strict obligation to immediately stop any operation perceived as unsafe.",
    "Direito e dever de interromper qualquer operação considerada insegura.":
      "Authority and duty to stop any operation deemed unsafe.",
    "Diretrizes de Qualidade, Segurança, Meio Ambiente e Saúde da Galáxia.":
      "Galáxia's Quality, Health, Safety, and Environmental Guidelines.",
    "Normas rigorosas para a preservação de ambientes operacionais seguros e saudáveis.":
      "Strict standards for maintaining safe and healthy operational environments.",
    "Normas de conduta para ambientes operacionais seguros e saudáveis.":
      "Conduct guidelines for safe and healthy operational environments.",
    "Compromisso com a preservação dos oceanos e práticas sustentáveis.":
      "Commitment to ocean conservation and sustainable offshore practices.",
    "Compromisso com a preservação do meio ambiente marítimo e práticas sustentáveis.":
      "Commitment to marine environment protection and sustainable practices.",
    "Responsabilidade social, ambiental e de governança integradas à nossa frota.":
      "Social, environmental, and governance responsibility integrated across our fleet.",
    "Responsabilidade social, ambiental e de governança integradas à nossa operação.":
      "Social, environmental, and governance responsibility integrated into our operation.",
    "Metodologia avançada e compromisso contínuo para Zero Acidentes na navegação.":
      "Advanced methodology and continuous commitment to Zero Accidents at sea.",
    "Valores, princípios e diretrizes éticas que norteiam nossas relações e decisões.":
      "Values, principles, and ethical guidelines that guide our relationships and decisions.",
    "Compromisso com a qualidade, segurança, saúde e meio ambiente em nossas operações.":
      "Commitment to quality, safety, health, and environment in our operations.",
    "Diretrizes de conformidade e tolerância zero para proteção integral à vida.":
      "Compliance guidelines and zero tolerance for the total protection of life.",
    "Programa de bem-estar, saúde e vitalidade no trabalho marítimo e administrativo.":
      "Workplace well-being, health, and vitality program for maritime and onshore staff.",
    "Prevenção de poluição e redução do consumo de recursos em nossas embarcações.":
      "Pollution prevention and resource consumption optimization across our fleet.",

    // == Código de Conduta - Diretrizes Detalhadas ==
    "1. O respeito à vida em todas as suas formas, pautado pela Qualidade de Vida, Saúde, Meio Ambiente e Segurança;":
      "1. Respect for life in all its forms, guided by Quality of Life, Health, Environment, and Safety;",
    "2. A integridade, a verdade, a honestidade, a justiça, a equidade, a lealdade, a responsabilidade, o zelo, o mérito, a transparência, a legalidade, a impessoalidade e a coerência entre o discurso e a prática;":
      "2. Integrity, truth, honesty, fairness, equity, loyalty, responsibility, diligence, merit, transparency, legality, impartiality, and strict coherence between speech and practice;",
    "3. O respeito às diferenças e diversidades de condição étnica, religiosa, social, cultural, linguística, convicção filosófica ou política, estética, etária, física, mental e psíquica, de gênero, de orientation sexual e outras, referenciam as relações interpessoais com clientes internos e externos, que garantem um ambiente saudável, com confiança mútua, cooperação, solidariedade, dignidade e respeito;":
      "3. Respect for differences and diversity across all conditions guide interpersonal relationships with internal and external clients, guaranteeing a healthy environment with mutual trust, cooperation, solidarity, dignity, and respect;",
    "4. O mérito é o critério decisivo para todas as formas":
      "4. Merit is the decisive criterion for all forms of professional recognition and career development",
    "A integridade, a equidade, a impessoalidade e a coerência entre o discurso e a prática são compromissos inegociáveis de toda a equipe.":
      "Integrity, fairness, impartiality, and strict coherence between speech and action are non-negotiable commitments of our entire team.",
    "O mérito é o critério decisivo para todas as formas de reconhecimento, recompensa, avaliação e investimento em pessoas, sendo o favorecimento e o nepotismo inaceitáveis;":
      "Merit is the decisive criterion for all forms of recognition, reward, evaluation, and investment in people, making favoritism and nepotism completely unacceptable;",
    "A legalidade e a impessoalidade, princípios constitucionais, determinam a distinção entre interesses pessoais e profissionais, na conduta dos colaboradores da Galáxia;":
      "Legality and impartiality determine the clear distinction between personal and professional interests in the conduct of Galáxia's employees;",
    "As atividades do nosso negócio são desenvolvidas, reconhecendo e valorizando os interesses e direitos de todas as partes interessadas;":
      "Our business operations are developed recognizing and valuing the interests and rights of all stakeholders;",
    "A atuação proativa em busca de níveis crescentes de competitividade, excelência e rentabilidade, com responsabilidade social e ambiental, contribuem para o desenvolvimento sustentável do país, conduzindo nosso negócio com integridade e nos moldes da lei;":
      "Proactive performance in search of increasing levels of competitiveness, excellence, and profitability, alongside socio-environmental responsibility, contributes to the sustainable development of the country while conducting our business with strict legal integrity;",
    "A busca da excelência em Qualidade, Segurança, Meio Ambiente, Saúde e Recursos Humanos, promovem a educação, a capacitação e o comprometimento dos colaboradores, com uma cidadania global e responsável.":
      "The pursuit of excellence in Quality, Safety, Environment, Health, and Human Resources promotes the education, training, and commitment of employees toward global citizenship.",

    // == Programa de Qualidade de Vida - Complementar ==
    "Programa de Qualidade de Vida - Galáxia": "Quality of Life Program - Galáxia",
    "A implementação de um Programa de Qualidade de Vida Galáxia pretende obter os seguintes benefícios com a implementação do mesmo:":
      "The implementation of Galáxia's Quality of Life Program aims to achieve the following key corporate and human benefits:",
    "+ Alta": "+ High",
    "• Reconhecimento dos funcionários de que a empresa investe na saúde no trabalho;":
      "• Employee recognition and trust that the company actively invests in occupational health and well-being;",
    "• Retenção dos colaboradores;":
      "• Higher talent retention and team loyalty across offshore and onshore staff;",
    "• Redução de afastamentos;":
      "• Significant reduction in medical leaves and absenteeism;",
    "• Motivação e comprometimento dos funcionários;":
      "• Increased motivation, engagement, and employee commitment;",
    "• Redução da fadiga;":
      "• Mitigation and prevention of operational and mental fatigue;",
    "• Maior produtividade;":
      "• Higher operational productivity and performance consistency;",
    "• Diminuição do número de casos de LER-DORT;":
      "• Reduction in cases of Repetitive Strain Injury (RSI / WRMSD);",
    "• Redução com custos de assistência médica e psicológica;":
      "• Optimization and reduction of medical and psychological healthcare costs;",
    "Reconhecimento dos funcionários de que a empresa investe na saúde no trabalho.":
      "Employee recognition and trust that the company actively invests in occupational health and safety.",
    "Retenção dos colaboradores, consolidando equipes experientes, leais e engajadas nas operações marítimas.":
      "Higher talent retention, consolidating experienced, loyal, and highly engaged crews in maritime operations.",
    "Redução de afastamentos médicos e licenças de saúde através de acompanhamento preventivo contínuo.":
      "Significant reduction in medical leaves and absenteeism through continuous preventive medical tracking.",
    "Motivação e comprometimento dos funcionários para alcançar e superar os objetivos estratégicos e de segurança da empresa.":
      "Increased employee motivation and commitment to achieve and exceed the company's strategic and safety goals.",
    "Redução da fadiga física e mental, promovendo rotinas equilibradas, bom descanso e agilidade cognitiva a bordo.":
      "Mitigation of physical and mental fatigue, fostering balanced routines, proper rest, and cognitive agility onboard.",
    "Maior produtividade geral, com times atuando em sua plenitude de vigor e harmonia operacional.":
      "Higher overall productivity, with teams performing at their full operational vigor and harmony.",
    "Diminuição do número de casos de LER-DORT (Lesões por Esforço Repetitivo e Distúrbios Osteomusculares) através de ergonomia orientada.":
      "Reduction in RSI/WRMSD (Repetitive Strain Injury and Musculoskeletal Disorders) cases through guided workplace ergonomics.",
    "Redução com custos de assistência médica e psicológica, otimizando investimentos em saúde preventiva e bem-estar mental.":
      "Optimization and reduction of medical and psychological healthcare costs by focusing on preventive health and mental well-being.",
    "Como estruturamos nossas ações diárias nas embarcações e na base administrativa para garantir saúde em todas as dimensões da vida humana.":
      "How we structure our daily actions onboard vessels and at the administrative base to ensure health across all dimensions of human life.",
    "Alimentação balanceada a bordo, incentivo à prática regular de exercícios e check-ups ocupacionais preventivos periódicos.":
      "Balanced nutrition onboard, active encouragement of regular physical exercise, and periodic preventive occupational health check-ups.",
    "Apoio psicológico de escuta ativa, programas de descompressão do estresse e valorização da saúde mental na rotina de escala.":
      "Active listening psychological support, stress decompression programs, and mental health appreciation during shift routines.",
    "Integração social entre tripulantes, canais de comunicação com familiares durante embarques prolongados e respeito às datas comemorativas.":
      "Social integration among crew members, dedicated communication channels with families during extended shifts, and respect for commemorative dates.",
    "Camarotes climatizados, isolamento acústico adequado nas áreas de repouso e estações de trabalho adaptadas para prevenir lesões posturais.":
      "Air-conditioned cabins, proper acoustic insulation in rest areas, and ergonomic workstations adapted to prevent postural strain.",
    "Acreditamos que o bem-estar da nossa equipe é o motor fundamental para o sucesso e a segurança de todas as nossas missões de apoio marítimo no Brasil.":
      "We firmly believe that our team's well-being is the core driving force behind the safety and success of all our maritime support missions in Brazil.",

    // == Gestão Ambiental - Complementar ==
    "Nossa Gestão e Compromisso Ambiental": "Our Environmental Management & Commitment",

    // == Formulário - Placeholders ==
    "Seu nome ou empresa": "Your name or company",
    "Seu e-mail profissional": "Your professional email",
    "Assunto ou tipo de serviço": "Subject or type of service",
    "Como podemos ajudar no seu projeto marítimo?": "How can we help with your maritime project?",
    "Mensagem Enviada com Sucesso!": "Message Sent Successfully!"
  };

  // Prepara lista ordenada por comprimento (do maior parágrafo para a menor palavra)
  // para que a substituição de frases completas não seja prejudicada por palavras curtas.
  const sortedKeys = Object.keys(DICTIONARY_EN).sort((a, b) => b.length - a.length);

  // Função para normalizar texto, removendo tags HTML, espaços duplos e quebras de linha
  function normalizeText(text) {
    if (!text) return '';
    return text.replace(/<[^>]*>/g, ' ')
               .replace(/\s+/g, ' ')
               .replace(/[.၊,;:"'“”]/g, '')
               .trim()
               .toLowerCase();
  }

  // Mapeamento normalizado para buscas rápidas
  const normalizedMap = new Map();
  sortedKeys.forEach(key => {
    const norm = normalizeText(key);
    if (norm.length > 1) {
      normalizedMap.set(norm, DICTIONARY_EN[key]);
    }
  });

  // Armazena os textos originais em português no primeiro carregamento
  const originalTexts = new Map();
  const originalPlaceholders = new Map();

  function getSavedLanguage() {
    return localStorage.getItem('glx_lang') || 'pt';
  }

  function setSavedLanguage(lang) {
    localStorage.setItem('glx_lang', lang);
  }

  // Função principal para traduzir ou restaurar a página com precisão e robustez
  function applyLanguage(lang) {
    const isEnglish = (lang === 'en');
    document.documentElement.lang = isEnglish ? 'en' : 'pt-BR';

    // 1. Atualiza visual das bandeiras no Header
    const langFlags = document.querySelectorAll('.lang-flag, .lang-selector a');
    langFlags.forEach(flag => {
      const isFlagBr = flag.querySelector('img[src*="flag-br"]') || flag.getAttribute('title')?.includes('Português') || flag.dataset.lang === 'pt';
      const isFlagUk = flag.querySelector('img[src*="flag-uk"]') || flag.getAttribute('title')?.includes('English') || flag.dataset.lang === 'en';

      if (isEnglish && isFlagUk) {
        flag.classList.add('active');
      } else if (!isEnglish && isFlagBr) {
        flag.classList.add('active');
      } else {
        flag.classList.remove('active');
      }
    });

    // 2. Percorre todos os elementos contendo texto (inclusive parágrafos longos, títulos, cards e rótulos de estatísticas)
    const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, button, span, li, strong, b, em, label, th, td, dt, dd, figcaption, blockquote, div.stat-label, div.stat-number, div.pqv-stat-label, div.pqv-stat-num, div.card-title, div.subtitle, div.esg-intro-banner, div.qsms-guidelines-item, div.media-badge, div[class*="-label"], div[class*="-title"], div[class*="-subtitle"], div[class*="badge"]');

    textElements.forEach(el => {
      // Ignora containers de scripts, styles ou a própria logo/seletor de idiomas
      if (el.closest('script, style, .lang-selector, .header-logo')) return;

      // Salva o original em português na primeira passagem do script
      if (!originalTexts.has(el)) {
        originalTexts.set(el, el.innerHTML);
      }

      if (!isEnglish) {
        // Restaura para o Português original exatamente como foi carregado
        if (originalTexts.has(el)) {
          const orig = originalTexts.get(el);
          if (el.innerHTML !== orig) {
            el.innerHTML = orig;
          }
        }
        return;
      }

      // === SE É INGLÊS (EN) ===
      
      // A) Primeiro por atributo data-i18n se houver
      const i18nKey = el.getAttribute('data-i18n');
      if (i18nKey && DICTIONARY_EN[i18nKey]) {
        el.innerHTML = DICTIONARY_EN[i18nKey];
        return;
      }

      // B) Correspondência por texto limpo normalizado (ignora quebras de linha e tags)
      const rawContent = originalTexts.get(el) || el.textContent || '';
      const normContent = normalizeText(rawContent);

      if (normalizedMap.has(normContent)) {
        el.innerHTML = normalizedMap.get(normContent);
        return;
      }

      // C) Se o elemento for um parágrafo (<p>) ou contêiner de texto que possui várias frases ou tags
      // Substituição Inteligente por Frases: busca no dicionário frases chave que apareçam no texto
      let updatedHTML = rawContent;
      let hasChange = false;

      // Primeiro testamos substituição por string exata no dicionário
      sortedKeys.forEach(key => {
        if (key.length >= 8 && updatedHTML.includes(key)) {
          updatedHTML = updatedHTML.split(key).join(DICTIONARY_EN[key]);
          hasChange = true;
        }
      });

      // Se não houver correspondência exata de string (por conta de quebras de linha no meio da frase no HTML),
      // fazemos uma normalização comparativa para parágrafos
      if (!hasChange && el.tagName.toLowerCase() === 'p') {
        for (const [keyNorm, enVal] of normalizedMap.entries()) {
          if (keyNorm.length > 15 && (normContent.includes(keyNorm) || keyNorm.includes(normContent))) {
            updatedHTML = enVal;
            hasChange = true;
            break;
          }
        }
      }

      if (hasChange) {
        el.innerHTML = updatedHTML;
      }
    });

    // 3. Traduz Placeholders em campos de input e textarea
    const inputs = document.querySelectorAll('input[placeholder], textarea[placeholder]');
    inputs.forEach(input => {
      if (!originalPlaceholders.has(input)) {
        originalPlaceholders.set(input, input.getAttribute('placeholder'));
      }
      if (!isEnglish) {
        input.setAttribute('placeholder', originalPlaceholders.get(input));
      } else {
        const origPh = originalPlaceholders.get(input) || '';
        const cleanPh = origPh.trim();
        if (DICTIONARY_EN[cleanPh]) {
          input.setAttribute('placeholder', DICTIONARY_EN[cleanPh]);
        } else if (cleanPh.toLowerCase().includes('nome')) {
          input.setAttribute('placeholder', 'Your full name');
        } else if (cleanPh.toLowerCase().includes('e-mail') || cleanPh.toLowerCase().includes('email')) {
          input.setAttribute('placeholder', 'Your corporate email address');
        } else if (cleanPh.toLowerCase().includes('assunto')) {
          input.setAttribute('placeholder', 'Subject / Inquiry');
        } else if (cleanPh.toLowerCase().includes('mensagem')) {
          input.setAttribute('placeholder', 'How can we help your offshore operations?');
        }
      }
    });

    // Dispara evento informando mudança de idioma para scripts externos
    window.dispatchEvent(new CustomEvent('glxLanguageChanged', { detail: { language: lang } }));
  }

  // Configura os cliques das bandeiras no Header
  function setupLanguageSelector() {
    document.addEventListener('click', function(e) {
      const flagLink = e.target.closest('.lang-flag, .lang-selector a');
      if (!flagLink) return;

      e.preventDefault();

      let targetLang = 'pt';
      if (flagLink.querySelector('img[src*="flag-uk"]') || flagLink.getAttribute('title')?.includes('English') || flagLink.dataset.lang === 'en') {
        targetLang = 'en';
      } else if (flagLink.querySelector('img[src*="flag-br"]') || flagLink.getAttribute('title')?.includes('Português') || flagLink.dataset.lang === 'pt') {
        targetLang = 'pt';
      }

      setSavedLanguage(targetLang);
      applyLanguage(targetLang);
    });
  }

  // Inicializa o sistema ao carregar a página
  function init() {
    setupLanguageSelector();
    const currentLang = getSavedLanguage();
    applyLanguage(currentLang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expõe API global
  window.GlxI18n = {
    setLanguage: function(lang) {
      setSavedLanguage(lang);
      applyLanguage(lang);
    },
    getCurrentLanguage: getSavedLanguage,
    applyLanguage: applyLanguage
  };

})();
