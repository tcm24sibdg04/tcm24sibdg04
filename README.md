# Sistema de Gestão de Stock para Café

**Grupo:** tcm24sibdg04  
**Autor:** Iris Correia ([irisCorreia](https://github.com/irisCorreia))  
**Ano letivo:** 2024/2025

---

## Descrição

Este projeto consiste numa solução de base de dados e API REST para o controlo rigoroso do stock de produtos (cafés, leites e xaropes) utilizados na produção de bebidas num café. O sistema permite o registo automático de consumos, perdas, reposições e a geração de relatórios de apoio à gestão.

---

## Funcionalidades

- Registo de produtos, fornecedores, pedidos, perdas e reposições.
- Atualização automática do stock com base nos pedidos e perdas registados.
- Consulta de produtos abaixo do stock mínimo.
- Geração de relatórios de consumo e desperdício.
- API RESTful desenvolvida em Node.js (Loopback).
- Testes e demonstração via Postman.


## Como executar o projeto

1. **Pré-requisitos:**
   - Node.js e npm instalados
   - MySQL/MariaDB instalado e em execução

2. **Clonar o repositório:**
   ```bash
   git clone https://github.com/tcm24sibdg04/tcm24sibdg04.git
   cd tcm24sibdg04
   ```

3. **Instalar dependências:**
   ```bash
   npm i
   ```

4. **Configurar a base de dados:**
   - Executa o ficheiro SQL em `/docs/REBD05.md` ou usa o script fornecido para criar as tabelas e inserir dados de exemplo.
   - Atualiza as credenciais da base de dados em `src/datasources/cafetaria.datasource.ts` se necessário.

5. **Iniciar a API:**
   ```bash
   npm start
   ```

6. **Aceder à documentação:**
   - [http://localhost:3000/explorer](http://localhost:3000/explorer)

7. **Testar com o Postman:**
   - Importa a coleção Postman disponível em `/postman/colecao-cafe.postman_collection.json`.

---

## Documentação

- [Relatório de Especificação da Informação (REI)](docs/REI)
- [Relatório de Especificação da Base de Dados (REBD)](docs/REBD)

---

## Créditos

Projeto desenvolvido para a unidade curricular de **Sistemas de Informação e Bases de Dados**  
Universidade da Maia — Tecnologias de Comunicação Multimédia

---

## Licença

Este projeto é apenas para fins académicos.
