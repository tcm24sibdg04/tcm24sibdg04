# REI01 : Introdução

**Grupo:** tcm24sibdg04  
**Autor:** Iris Correia ([irisCorreia](https://github.com/irisCorreia))

---

## Descrição do Trabalho

O objetivo deste projeto é desenvolver uma solução de base de dados que permita um controlo rigoroso e preciso do stock de produtos (cafés, leites e xaropes) utilizados na produção de bebidas num café. A base de dados foi desenhada para suportar a automatização do registo de consumos, perdas e reposições, bem como a geração de relatórios de apoio à gestão.

Num ambiente onde a rotatividade dos ingredientes é elevada e a exigência de qualidade do serviço é constante, é fundamental que os recursos sejam geridos com precisão. Assim, a base de dados implementada permite:
- O registo automático do consumo de produtos com base nos pedidos efetuados.
- O registo de perdas e desperdícios, com os respetivos motivos.
- A atualização contínua das quantidades disponíveis em stock.
- A geração de relatórios periódicos sobre padrões de consumo, produtos mais utilizados, fontes de desperdício e necessidades de reposição.

Esta solução contribui para a melhoria da eficiência operacional, redução do desperdício e aumento da rentabilidade do negócio, através da organização e integração dos dados.

---

## Modelação do Problema

A gestão de stock num café envolve múltiplos produtos e processos dinâmicos, tornando o controlo manual do inventário propenso a erros e ineficiências. Ingredientes como cafés, leites e xaropes são utilizados em diversas combinações, o que dificulta o acompanhamento preciso do consumo e das necessidades de reposição.

Problemas comuns incluem:
- Falta de registos consistentes dos pedidos e consumos.
- Não contabilização de perdas e desperdícios.
- Consumo excessivo ou anómalo de ingredientes.
- Dificuldade em identificar ruturas de stock e necessidades de reposição.
- Ausência de relatórios fiáveis para apoio à decisão.

Para ultrapassar estas limitações, foi concebida uma base de dados que integra toda a informação relevante ao ciclo de vida dos produtos — desde a entrada no inventário (reposição), passando pelo consumo (pedidos), até ao registo de perdas e desperdícios. O sistema permite ainda a recolha de dados em tempo real ou no final de cada turno, facilitando a atualização do inventário e a análise dos processos.

---

## Objetivos da Base de Dados

- Centralizar a informação sobre produtos, fornecedores, pedidos, perdas e reposições.
- Garantir integridade e rastreabilidade dos dados através de restrições e relações entre tabelas.
- Permitir consultas rápidas sobre o estado do stock, consumos, perdas e necessidades de reposição.
- Apoiar a tomada de decisão com relatórios periódicos e vistas específicas (ex: produtos abaixo do stock mínimo).
- Facilitar a integração com sistemas de front-end (ex: POS, tablets) e APIs REST para automatização dos processos.

---

## Utilizadores e Fluxos de Trabalho

- **Funcionários:** Registam pedidos, perdas e reposições através de interfaces simples (ex: tablet ou POS).
- **Gestores:** Consultam relatórios, analisam padrões de consumo e desperdício, e validam ajustes de stock.
- **Sistema:** Atualiza automaticamente o stock com base nos pedidos e perdas registados, e sugere reposições quando necessário.

---

## Considerações Técnicas

- A base de dados foi implementada em MySQL, com modelo relacional normalizado.
- O acesso e manipulação dos dados é feito através de uma API REST desenvolvida em Node.js (Loopback).
- Foram implementadas restrições de integridade referencial, domínios (ENUM), e pelo menos uma vista para apoio à gestão.
- A solução foi testada com dados reais e simulados, garantindo robustez e fiabilidade.

---

| [< Previous](REI00.md) | [^ Main](../../README.md) | [Next >](REI02.md) |
|:----------------------:|:------------------------:|:------------------:|
