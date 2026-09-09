import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Activity,
  AlertCircle,
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  CircuitBoard,
  Cpu,
  ExternalLink,
  FileText,
  GraduationCap,
  Layers,
  PlayCircle,
  ScrollText,
  ShieldCheck,
  Workflow,
} from "lucide-react";

import { Section } from "@/components/site/Section";
import { Lightbox } from "@/components/site/Lightbox";
import {
  casosDeUso,
  cronograma,
  cronogramaImg,
  diagramas,
  heroImg,
  tecnologias,
  telas,
  type Shot,
} from "@/data/portfolio";
import { aluno, links } from "@/data/links";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TestLock — Portfólio do Projeto de Estágio | Gustavo Montanini" },
      {
        name: "description",
        content:
          "Portfólio do TestLock: sistema web de integração com a API TTLock para automatizar testes de ciclagem e qualidade de fechaduras digitais na Pado S/A.",
      },
      { property: "og:title", content: "TestLock — Portfólio do Projeto de Estágio" },
      {
        property: "og:description",
        content:
          "Sistema de integração de APIs para testes em fechaduras digitais: casos de uso, diagramas, cronograma e telas do sistema.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const nav = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#casos-de-uso", label: "Casos de uso" },
  { href: "#documentacao", label: "Documentação" },
  { href: "#telas", label: "Telas e vídeo" },
  { href: "#relatorio", label: "Relatório" },
  { href: "#identificacao", label: "Identificação" },
];

const statusStyle: Record<string, string> = {
  Concluído: "border-primary/50 bg-primary/15 text-primary",
  "Em andamento": "border-foreground/25 bg-foreground/10 text-foreground",
  Previsto: "border-border bg-surface-2 text-muted-foreground",
};

function PendingLink({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-lg border border-dashed border-border bg-surface-2 px-4 py-2 text-sm text-muted-foreground">
      <AlertCircle className="size-4" /> {label} — link a inserir
    </span>
  );
}

function Portfolio() {
  const [aberta, setAberta] = useState<Shot | null>(null);

  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <a href="#inicio" className="flex items-baseline gap-2">
            <span className="font-display text-lg font-extrabold tracking-tight text-primary">PADO</span>
            <span className="font-display text-lg font-extrabold tracking-tight">TestLock</span>
          </a>
          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#telas"
            className="rounded-lg bg-primary px-4 py-2 font-display text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Ver o sistema
          </a>
        </div>
      </header>

      {/* 1. Página inicial */}
      <section id="inicio" className="mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 lg:pb-24 lg:pt-24">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-display text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          Portfólio de Projeto de Estágio · 2026
        </span>
        <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.05] sm:text-6xl">
          <span className="text-gradient">TestLock</span> — sistema de integração de APIs para testes em fechaduras
          digitais
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Sistema web desenvolvido na <strong className="text-foreground">Pado S/A</strong> para automatizar e monitorar
          o controle de qualidade de fechaduras digitais, integrando-se diretamente à API TTLock para executar testes de
          ciclagem, auditorias de qualidade e gerar relatórios rastreáveis.
        </p>

        <dl className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: Activity,
              termo: "Objetivo do sistema",
              def: "Automatizar a rotina de testes e centralizar as aprovações de qualidade em uma única plataforma.",
            },
            {
              icon: ShieldCheck,
              termo: "Rastreabilidade",
              def: "Nenhum produto é expedido sem o devido log de aprovação registrado pelo sistema.",
            },
            {
              icon: CircuitBoard,
              termo: "Integração",
              def: "Comunicação direta com a API TTLock para comandos remotos e leitura de firmware.",
            },
          ].map(({ icon: Icon, termo, def }) => (
            <div key={termo} className="panel p-6">
              <Icon className="size-6 text-primary" />
              <dt className="mt-4 font-display text-sm font-semibold uppercase tracking-wide">{termo}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{def}</dd>
            </div>
          ))}
        </dl>

        <figure className="mt-12 overflow-hidden rounded-2xl border border-border shadow-glow">
          <img
            src={heroImg}
            alt="Tela inicial do TestLock com a listagem de fechaduras digitais conectadas"
            className="w-full"
          />
        </figure>
      </section>

      {/* 2. Sobre o projeto */}
      <Section
        id="sobre"
        eyebrow="Sobre o projeto"
        title="Do controle manual em planilhas ao fluxo digital automatizado"
        description="O TestLock nasce da necessidade de modernizar a inspeção e a liberação de lotes de fechaduras digitais na Pado S/A."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="panel p-7">
            <h3 className="flex items-center gap-2 text-xl font-bold">
              <AlertCircle className="size-5 text-primary" /> Problema
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              O controle de inspeção e a liberação de lotes são feitos de forma manual e fragmentada, dependendo de
              planilhas e anotações físicas. Esse método é passível de erro humano, gera gargalos operacionais e limita
              a rastreabilidade imediata dos dados de firmware e dos ciclos de teste, comprometendo a agilidade da
              esteira de produção.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              {[
                "Interface centralizada para lotes, amostras e resultados",
                "Integração via API TTLock para ciclagem e validação de firmware",
                "Logs de aprovação e histórico detalhado de testes",
                "Parametrização das regras de conformidade pelo P&D",
                "Substituição das planilhas por um fluxo digital único",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <BadgeCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="panel p-7">
            <h3 className="flex items-center gap-2 text-xl font-bold">
              <Layers className="size-5 text-primary" /> Arquitetura da solução
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Aplicação web cliente-servidor: o front-end em JavaScript modular consome uma API REST em Node.js com
              Express, que atua como proxy autenticado para a API TTLock e persiste usuários, configurações, testes e
              relatórios em um banco PostgreSQL. Os testes são executados por scripts do servidor e acompanhados em
              tempo real pela interface.
            </p>
            <div className="mt-6 space-y-2 font-display text-sm">
              {[
                "Navegador — interface Vanilla JS + Tailwind CSS",
                "API REST — Node.js + Express 5",
                "Banco de dados — PostgreSQL",
                "Serviço externo — API TTLock / fechaduras Pado",
              ].map((camada, i) => (
                <div
                  key={camada}
                  className="flex items-center gap-3 rounded-xl border border-border bg-surface-2 px-4 py-3"
                >
                  <span className="font-mono text-xs text-primary">0{i + 1}</span>
                  {camada}
                </div>
              ))}
            </div>
          </article>
        </div>

        <h3 className="mt-12 flex items-center gap-2 text-xl font-bold">
          <Cpu className="size-5 text-primary" /> Tecnologias utilizadas
        </h3>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {tecnologias.map((t) => (
            <div key={t.nome} className="panel p-5">
              <p className="font-display font-semibold">{t.nome}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{t.papel}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 3. Casos de uso e cronograma */}
      <Section
        id="casos-de-uso"
        eyebrow="Casos de uso e cronograma"
        title="Funcionalidades previstas e evolução do desenvolvimento"
        description="Casos de uso levantados no diagrama do projeto e o cronograma alinhado ao planejamento do estágio."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {casosDeUso.map((uc) => (
            <article key={uc.id} className="panel p-6">
              <p className="font-mono text-xs text-primary">{uc.id}</p>
              <h3 className="mt-2 text-lg font-bold">{uc.nome}</h3>
              <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">{uc.ator}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{uc.descricao}</p>
              {uc.relacionamento ? (
                <p className="mt-4 inline-block rounded-lg border border-border bg-surface-2 px-3 py-1.5 font-mono text-xs text-foreground">
                  {uc.relacionamento}
                </p>
              ) : null}
            </article>
          ))}
        </div>

        <h3 className="mt-14 text-xl font-bold">Cronograma de desenvolvimento</h3>
        <div className="mt-5 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[46rem] border-collapse text-left text-sm">
            <thead className="bg-surface-2 font-display text-xs uppercase tracking-wide text-muted-foreground">
              <tr>
                <th className="px-5 py-4">Fase</th>
                <th className="px-5 py-4">Entregas / casos de uso</th>
                <th className="px-5 py-4">Período</th>
                <th className="px-5 py-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {cronograma.map((e) => (
                <tr key={e.fase} className="border-t border-border bg-surface/60 align-top">
                  <td className="px-5 py-4 font-display font-semibold">{e.fase}</td>
                  <td className="px-5 py-4 text-muted-foreground">{e.entregas}</td>
                  <td className="whitespace-nowrap px-5 py-4 text-muted-foreground">{e.periodo}</td>
                  <td className="px-5 py-4">
                    <span
                      className={`inline-block whitespace-nowrap rounded-full border px-3 py-1 text-xs font-semibold ${statusStyle[e.status]}`}
                    >
                      {e.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <figure className="mt-8">
          <button
            type="button"
            onClick={() =>
              setAberta({
                src: cronogramaImg,
                title: "Cronograma do projeto (gráfico de Gantt)",
                caption: "Planejamento original do projeto TestLock — Pado S/A.",
              })
            }
            className="block w-full overflow-hidden rounded-2xl border border-border transition-colors hover:border-primary"
          >
            <img src={cronogramaImg} alt="Gráfico de Gantt com o cronograma do projeto TestLock" className="w-full" />
          </button>
          <figcaption className="mt-3 text-sm text-muted-foreground">
            Figura 29 — Cronograma original do projeto, em formato de gráfico de Gantt.
          </figcaption>
        </figure>
      </Section>

      {/* 4. Documentação */}
      <Section
        id="documentacao"
        eyebrow="Documentação"
        title="Diagramas desenvolvidos no projeto"
        description="Casos de uso, entidade e relacionamento, classes, sequência, estados, implantação e o workflow AS IS em BPMN. Clique em qualquer diagrama para ampliar."
      >
        {links.diagramas ? (
          <a
            href={links.diagramas}
            target="_blank"
            rel="noreferrer"
            className="mb-8 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 font-display text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Abrir pasta com todos os diagramas <ExternalLink className="size-4" />
          </a>
        ) : (
          <div className="mb-8">
            <PendingLink label="Pasta com todos os diagramas" />
          </div>
        )}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {diagramas.map((d) => (
            <button
              key={d.nome}
              type="button"
              onClick={() => setAberta({ src: d.src, title: d.nome, caption: d.descricao })}
              className="group panel overflow-hidden text-left transition-colors hover:border-primary"
            >
              <div className="aspect-4/3 overflow-hidden bg-surface-2">
                <img
                  src={d.src}
                  alt={d.nome}
                  loading="lazy"
                  className="size-full object-contain p-3 transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="border-t border-border p-5">
                <p className="text-xs uppercase tracking-wide text-primary">{d.grupo}</p>
                <h3 className="mt-1 font-display font-semibold">{d.nome}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{d.descricao}</p>
              </div>
            </button>
          ))}
        </div>
      </Section>

      {/* 5. Telas e vídeo */}
      <Section
        id="telas"
        eyebrow="Telas e vídeo"
        title="Evidências do funcionamento do sistema"
        description="Capturas das principais funcionalidades já implementadas no TestLock e vídeo de demonstração do sistema em execução."
      >
        <div className="panel mb-10 flex flex-wrap items-center justify-between gap-4 p-6">
          <div className="flex items-center gap-3">
            <PlayCircle className="size-8 text-primary" />
            <div>
              <p className="font-display font-semibold">Vídeo de demonstração</p>
              <p className="text-sm text-muted-foreground">Sistema em funcionamento, com duração máxima de 5 minutos.</p>
            </div>
          </div>
          {links.video ? (
            <a
              href={links.video}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 font-display text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Assistir ao vídeo <ArrowUpRight className="size-4" />
            </a>
          ) : (
            <PendingLink label="Vídeo de demonstração" />
          )}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {telas.map((t) => (
            <button
              key={t.title}
              type="button"
              onClick={() => setAberta(t)}
              className="group panel overflow-hidden text-left transition-colors hover:border-primary"
            >
              <div className="aspect-16/10 overflow-hidden bg-surface-2">
                <img
                  src={t.src}
                  alt={t.title}
                  loading="lazy"
                  className="size-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="border-t border-border p-5">
                <h3 className="font-display font-semibold">{t.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{t.caption}</p>
              </div>
            </button>
          ))}
        </div>
      </Section>

      {/* 6. Relatório de estágio */}
      <Section
        id="relatorio"
        eyebrow="Relatório de estágio"
        title="Documento atualizado das atividades desenvolvidas"
        description="Relatório de Estágio correspondente às atividades realizadas até a data de entrega deste portfólio."
      >
        <div className="panel flex flex-wrap items-center justify-between gap-6 p-7">
          <div className="flex items-start gap-4">
            <ScrollText className="size-8 shrink-0 text-primary" />
            <div>
              <p className="font-display text-lg font-bold">Relatório de Estágio — TestLock (v3)</p>
              <p className="mt-1 max-w-xl text-sm text-muted-foreground">
                Introdução, proposta e objetivos, justificativa, diagramas, telas, workflow AS IS, recursos de
                desenvolvimento e cronograma.
              </p>
            </div>
          </div>
          {links.relatorioPdf ? (
            <a
              href={links.relatorioPdf}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 font-display text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <FileText className="size-4" /> Abrir PDF do relatório
            </a>
          ) : (
            <PendingLink label="PDF do relatório" />
          )}
        </div>

        {links.repositorio ? (
          <a
            href={links.repositorio}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm text-primary hover:underline"
          >
            <Workflow className="size-4" /> Repositório do código-fonte
          </a>
        ) : null}
      </Section>

      {/* 7. Identificação */}
      <Section id="identificacao" eyebrow="Identificação" title="Aluno, curso e orientação">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: GraduationCap, rotulo: "Nome completo", valor: aluno.nome },
            { icon: BadgeCheck, rotulo: "Matrícula", valor: aluno.matricula || "A informar" },
            { icon: Boxes, rotulo: "Professores orientadores", valor: aluno.orientadores },
            { icon: Layers, rotulo: "Curso", valor: aluno.curso },
            { icon: CircuitBoard, rotulo: "Instituição", valor: aluno.instituicao },
            { icon: ShieldCheck, rotulo: "Empresa concedente", valor: aluno.empresa },
          ].map(({ icon: Icon, rotulo, valor }) => (
            <div key={rotulo} className="panel p-6">
              <Icon className="size-5 text-primary" />
              <p className="mt-4 text-xs uppercase tracking-wide text-muted-foreground">{rotulo}</p>
              <p className="mt-1 font-display font-semibold">{valor}</p>
            </div>
          ))}
        </div>
      </Section>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 text-sm text-muted-foreground sm:px-8">
          <p>
            <span className="font-display font-bold text-primary">PADO</span> TestLock · Portfólio do Projeto de Estágio
          </p>
          <p>{aluno.nome} — UniFil, 2026</p>
        </div>
      </footer>

      {aberta ? (
        <Lightbox src={aberta.src} title={aberta.title} caption={aberta.caption} onClose={() => setAberta(null)} />
      ) : null}
    </main>
  );
}
