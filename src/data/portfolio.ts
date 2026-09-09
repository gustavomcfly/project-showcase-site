import telaLogin from "@/assets/tela-login.jpg.asset.json";
import telaInicioOnline from "@/assets/tela-inicio-online.jpg.asset.json";
import telaInicioOffline from "@/assets/tela-inicio-offline.jpg.asset.json";
import telaDispositivo from "@/assets/tela-dispositivo.jpg.asset.json";
import telaConfigAvancadas from "@/assets/tela-config-avancadas.jpg.asset.json";
import telaSenhas from "@/assets/tela-senhas.png.asset.json";
import telaRfid from "@/assets/tela-rfid.png.asset.json";
import telaBiometrias from "@/assets/tela-biometrias.png.asset.json";
import telaMenu from "@/assets/tela-menu.jpg.asset.json";
import telaCiclagemEscopo from "@/assets/tela-ciclagem-escopo.png.asset.json";
import telaCiclagemAcomp from "@/assets/tela-ciclagem-acomp.png.asset.json";
import telaQualidadeEscopo from "@/assets/tela-qualidade-escopo.png.asset.json";
import telaQualidadeAcomp from "@/assets/tela-qualidade-acomp.png.asset.json";
import telaRelatorios from "@/assets/tela-relatorios.png.asset.json";
import telaConfigSistema from "@/assets/tela-config-sistema.png.asset.json";

import figCasoUso from "@/assets/fig01-caso-uso.jpg.asset.json";
import figDer from "@/assets/fig02-der.jpg.asset.json";
import figClasse from "@/assets/fig03-classe.png.asset.json";
import figSeqLogin from "@/assets/fig04-seq-login.png.asset.json";
import figSeqGerenciar from "@/assets/fig05-seq-gerenciar.jpg.asset.json";
import figSeqCiclagem from "@/assets/fig06-seq-ciclagem.jpg.asset.json";
import figSeqQualidade from "@/assets/fig07-seq-qualidade.png.asset.json";
import figSeqRelatorio from "@/assets/fig08-seq-relatorio.png.asset.json";
import figEstadoFechadura from "@/assets/fig09-estado-fechadura.png.asset.json";
import figEstadoCiclagem from "@/assets/fig10-estado-ciclagem.png.asset.json";
import figEstadoQualidade from "@/assets/fig11-estado-qualidade.png.asset.json";
import figImplantacao from "@/assets/fig12-implantacao.png.asset.json";
import figWorkflow from "@/assets/fig28-workflow.jpg.asset.json";
import figCronograma from "@/assets/fig29-cronograma.jpg.asset.json";

export type Shot = { src: string; title: string; caption: string };

export const telas: Shot[] = [
  {
    src: telaLogin.url,
    title: "Tela de login",
    caption:
      "Autenticação via API da conta Pado Digital Locking. O cadastro de novos usuários é feito pelo aplicativo oficial.",
  },
  {
    src: telaInicioOnline.url,
    title: "Início — dispositivos online (com gateway)",
    caption: "Listagem das fechaduras vinculadas à conta, com filtro por status e nível de bateria.",
  },
  {
    src: telaInicioOffline.url,
    title: "Início — dispositivos offline (sem gateway)",
    caption: "Mesma listagem na visão de dispositivos sem gateway conectado.",
  },
  {
    src: telaDispositivo.url,
    title: "Tela do dispositivo",
    caption:
      "Bateria, MAC e versão de firmware, abertura remota, métodos de acesso e histórico de aberturas da fechadura.",
  },
  {
    src: telaConfigAvancadas.url,
    title: "Configurações avançadas",
    caption: "Renomear o dispositivo, alterar senha de administrador, ativar modo de passagem e reiniciar a fechadura.",
  },
  {
    src: telaSenhas.url,
    title: "Registros de senha",
    caption: "Cadastro de senhas permanentes, temporárias, de uso único, cíclicas e de apagamento.",
  },
  {
    src: telaRfid.url,
    title: "Registros de cartões RFID",
    caption: "Cadastro e gerenciamento de cartões permanentes ou temporários.",
  },
  {
    src: telaBiometrias.url,
    title: "Registros de biometrias",
    caption: "Cadastro e gerenciamento de digitais permanentes ou temporárias.",
  },
  {
    src: telaMenu.url,
    title: "Menu de navegação",
    caption: "Acesso a Meus dispositivos, Teste de ciclagem, Auditoria de qualidade, Relatórios e Configurações.",
  },
  {
    src: telaCiclagemEscopo.url,
    title: "Teste de ciclagem — escopo",
    caption:
      "Definição da fechadura, quantidade de ciclos, intervalo entre comandos, falhas consecutivas e alerta de bateria.",
  },
  {
    src: telaCiclagemAcomp.url,
    title: "Teste de ciclagem — acompanhamento",
    caption: "Fila de testes e execução acompanhada em tempo real, com salvamento do relatório ao final.",
  },
  {
    src: telaQualidadeEscopo.url,
    title: "Teste de qualidade — escopo",
    caption: "Seleção de até 9 tipos de verificação, usando os parâmetros padrão definidos nas configurações.",
  },
  {
    src: telaQualidadeAcomp.url,
    title: "Teste de qualidade — acompanhamento",
    caption: "Execução do script de teste atualizada em tempo real até a conclusão e geração do relatório.",
  },
  {
    src: telaRelatorios.url,
    title: "Relatórios",
    caption: "Consulta dos relatórios gerados automaticamente após cada teste, com exportação em PDF.",
  },
  {
    src: telaConfigSistema.url,
    title: "Configurações do sistema",
    caption: "Definição dos dados de teste padrão injetados nos testes de ciclagem e de qualidade.",
  },
];

export type Diagrama = { src: string; nome: string; grupo: string; descricao: string };

export const diagramas: Diagrama[] = [
  {
    src: figCasoUso.url,
    nome: "Diagrama de Casos de Uso",
    grupo: "Casos de uso",
    descricao: "Interações do Analista de P&D, Inspetor e Analista de Qualidade com o TestLock.",
  },
  {
    src: figDer.url,
    nome: "Diagrama de Entidade e Relacionamento",
    grupo: "Dados",
    descricao: "Entidades User, Lock, Cyclic_Test, Quality_Test, Test_Config, Reports e Developer.",
  },
  {
    src: figClasse.url,
    nome: "Diagrama de Classes",
    grupo: "Estrutura",
    descricao: "Arquitetura orientada a objetos e métodos de integração com a API externa.",
  },
  {
    src: figSeqLogin.url,
    nome: "Sequência — Realizar Login",
    grupo: "Sequência",
    descricao: "Fluxo de autenticação do usuário pela API TTLock.",
  },
  {
    src: figSeqGerenciar.url,
    nome: "Sequência — Gerenciar Fechadura",
    grupo: "Sequência",
    descricao: "Envio de comandos remotos e sincronização do estado do dispositivo.",
  },
  {
    src: figSeqCiclagem.url,
    nome: "Sequência — Teste de Ciclagem",
    grupo: "Sequência",
    descricao: "Configuração dos parâmetros e execução dos ciclos de durabilidade.",
  },
  {
    src: figSeqQualidade.url,
    nome: "Sequência — Teste de Qualidade",
    grupo: "Sequência",
    descricao: "Validação das amostras da esteira conforme os critérios definidos.",
  },
  {
    src: figSeqRelatorio.url,
    nome: "Sequência — Gerar Relatório",
    grupo: "Sequência",
    descricao: "Consolidação dos resultados e exportação do relatório técnico.",
  },
  {
    src: figEstadoFechadura.url,
    nome: "Estado — Gerenciar Fechadura",
    grupo: "Estado",
    descricao: "Da seleção do dispositivo até o estado sincronizado com a API TTLock.",
  },
  {
    src: figEstadoCiclagem.url,
    nome: "Estado — Teste de Ciclagem",
    grupo: "Estado",
    descricao: "Configurando, executando, tratamento de falhas e registro do relatório.",
  },
  {
    src: figEstadoQualidade.url,
    nome: "Estado — Teste de Qualidade",
    grupo: "Estado",
    descricao: "Ciclo de vida da auditoria de qualidade da fechadura.",
  },
  {
    src: figImplantacao.url,
    nome: "Diagrama de Implantação",
    grupo: "Infraestrutura",
    descricao: "Dispositivo do usuário, servidor da aplicação, banco PostgreSQL e API TTLock.",
  },
  {
    src: figWorkflow.url,
    nome: "Workflow AS IS (BPMN)",
    grupo: "Processo",
    descricao: "Fluxo atual de inspeção e liberação de lotes antes da automação.",
  },
];

export const cronogramaImg = figCronograma.url;
export const heroImg = telaInicioOnline.url;

export type CasoDeUso = {
  id: string;
  nome: string;
  ator: string;
  descricao: string;
  relacionamento?: string;
};

export const casosDeUso: CasoDeUso[] = [
  {
    id: "suc_fazer_login",
    nome: "Fazer Login no Sistema",
    ator: "Analista de P&D · Inspetor de Qualidade",
    descricao:
      "Garante o acesso seguro e restrito à plataforma, autenticando o usuário no ambiente de testes pela API TTLock.",
  },
  {
    id: "suc_gerenciamento_fechadura",
    nome: "Gerenciamento da Fechadura",
    ator: "Analista de P&D",
    relacionamento: "«include» Enviar comandos remotos via API",
    descricao:
      "Controle direto sobre os dispositivos: abertura remota, métodos de acesso, configurações avançadas e histórico.",
  },
  {
    id: "suc_teste_de_ciclagem",
    nome: "Realizar Teste de Ciclagem",
    ator: "Analista de P&D",
    relacionamento: "«include» Configurar parâmetros de ciclagem",
    descricao:
      "Execução de ensaios de durabilidade com número de ciclos, intervalo e limite de falhas consecutivas definidos.",
  },
  {
    id: "suc_teste_de_qualidade",
    nome: "Realizar Teste de Qualidade",
    ator: "Inspetor de Qualidade",
    relacionamento: "«include» Configurar parâmetros de teste de qualidade",
    descricao:
      "Rotina de validação de lotes na esteira de produção, com definição do nível de rigor para aprovação do produto.",
  },
  {
    id: "suc_gerar_relatorio",
    nome: "Gerar Relatório Técnico de Teste",
    ator: "Inspetor de Qualidade · Analista de Qualidade",
    relacionamento: "«extend» Exportar relatório em PDF",
    descricao:
      "Consolidação dos resultados das inspeções, com exportação para armazenamento e compartilhamento externo.",
  },
];

export type EtapaCronograma = {
  fase: string;
  entregas: string;
  periodo: string;
  status: "Concluído" | "Em andamento" | "Previsto";
};

export const cronograma: EtapaCronograma[] = [
  {
    fase: "1 · Elaboração e início do projeto",
    entregas:
      "Cronograma, Documento de Visão, Pedido dos Investidores, Protótipo de telas, Diagrama de Casos de Uso e Workflow (As-Is)",
    periodo: "Fev — Mar/2026",
    status: "Concluído",
  },
  {
    fase: "2 · Definição e plano do projeto",
    entregas: "Glossário, Especificação Suplementar, Plano de Estágio Parcial 1 e CRUD",
    periodo: "Abr — Mai/2026",
    status: "Concluído",
  },
  {
    fase: "3 · Lançamento e execução",
    entregas:
      "Especificação e implementação dos casos de uso 1 e 2 (Login e Gerenciamento da Fechadura), diagramas restantes e Plano de Estágio Parcial 2",
    periodo: "Jun — Ago/2026",
    status: "Concluído",
  },
  {
    fase: "4 · Controle e desempenho",
    entregas:
      "Implementação dos casos de uso restantes (Teste de Ciclagem, Teste de Qualidade e Geração de Relatórios) e Plano de Estágio Parcial 3",
    periodo: "Set — Nov/2026",
    status: "Em andamento",
  },
  {
    fase: "5 · Fechamento do projeto",
    entregas: "Testes finais, ajustes de homologação e entrega do relatório final de estágio",
    periodo: "Dez/2026",
    status: "Previsto",
  },
];

export const tecnologias = [
  { nome: "JavaScript", papel: "Linguagem única de front-end e back-end" },
  { nome: "Node.js", papel: "Ambiente de execução assíncrono no servidor" },
  { nome: "Express.js 5.x", papel: "Framework de APIs e servidor proxy" },
  { nome: "Vanilla JS + Vite", papel: "Front-end modular, leve e de build rápido" },
  { nome: "Tailwind CSS 4.x", papel: "Design responsivo da interface" },
  { nome: "PostgreSQL", papel: "Banco relacional de testes, lotes e relatórios" },
  { nome: "API TTLock", papel: "Comunicação direta com as fechaduras digitais" },
  { nome: "HTML & CSS", papel: "Estrutura e estilização das páginas" },
];
