# Meu Portfólio

Portfólio pessoal desenvolvido com React + Vite.

## Estado atual do projeto

- Versão histórica preservada: `v1.0.0`
- Branch de arquivo da versão histórica: `archive/v1`
- Trilha ativa da nova evolução: `v2/dev`

## Stack

- React
- Vite
- CSS3
- JavaScript (ES Modules)

## Execução local

1. Instalar dependências:

```bash
npm install
```

2. Rodar ambiente de desenvolvimento:

```bash
npm run dev
```

3. Gerar build de produção:

```bash
npm run build
```

4. Publicar no GitHub Pages:

```bash
npm run deploy
```

## Estrutura principal

```text
src/
   components/
      About/
      Contact/
      Header/
      Projects/
      shared/
   assets/
      icons/
      images/
   styles/
   App.jsx
   main.jsx
```

## Fluxo de versionamento

1. Desenvolvimento contínuo na branch `v2/dev`.
2. Marcos estáveis com tags (`v2.0.0-alpha.x`, `v2.0.0`, etc).
3. `v1.0.0` e `archive/v1` permanecem como registro histórico.

## Checkpoints de segurança

Antes de cada publicação:

1. Executar `npm run build` sem erros.
2. Confirmar branch correta (`git status -sb`).
3. Criar tag do marco.
4. Publicar branch e tag no remoto.

## Roadmap

Roadmap técnico da nova versão em `docs/V2-ROADMAP.md`.
