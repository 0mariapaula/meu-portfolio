# V2 Roadmap

Plano técnico para evolução do portfólio na branch `v2/dev`.

## Objetivos

1. Melhorar arquitetura e organização de componentes.
2. Refinar conteúdo e narrativa profissional.
3. Elevar qualidade visual e performance.
4. Garantir deploy previsível com marcos claros.

## Fase 1 - Base técnica

1. Extrair dados estáticos de `App.jsx` para módulos dedicados.
2. Reduzir responsabilidade do componente raiz.
3. Padronizar nomenclatura e estrutura de pastas.
4. Garantir build limpo após cada refatoração.

Critério de aceite:
- Aplicação funcionando igual à v1, sem regressão visual relevante.

## Fase 2 - Conteúdo e UX

1. Revisar textos de apresentação e serviços.
2. Melhorar hierarquia visual das seções.
3. Fortalecer CTA de contato e currículo.
4. Revisar responsividade em mobile e desktop.

Critério de aceite:
- Leitura e navegação mais claras, mantendo identidade pessoal.

## Fase 3 - Projetos e credibilidade

1. Atualizar cards de projetos com contexto (problema, solução, impacto).
2. Incluir stack e papel desempenhado em cada projeto.
3. Adicionar links de demo e código quando disponíveis.

Critério de aceite:
- Seção de projetos comunica experiência de forma objetiva e profissional.

## Fase 4 - Qualidade e publicação

1. Revisar acessibilidade (alt, contraste, foco, semântica).
2. Otimizar assets de imagem.
3. Publicar marcos com tags (`v2.0.0-alpha.x`).

Critério de aceite:
- Build estável e versão publicável.

## Estratégia de release

1. Marcos intermediários: `v2.0.0-alpha.1`, `v2.0.0-alpha.2`, ...
2. Marco estável final: `v2.0.0`.
3. Cada release exige:
- Build local sem erro.
- Branch e tag publicadas no remoto.
- Verificação visual rápida do deploy.
