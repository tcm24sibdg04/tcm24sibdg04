# C3: Normalização

**Grupo:** tcm24sibdg04  
**Autor:** Iris Correia ([irisCorreia](https://github.com/irisCorreia))

---

## Tabelas Principais

### PRODUTO
| id_produto (PK) | nome         | tipo    | unidade_medida | stock_atual | stock_minimo |
|-----------------|--------------|---------|---------------|-------------|-------------|

### FORNECEDOR
| id_fornecedor (PK) | nome         | contacto      |
|--------------------|--------------|---------------|

### PEDIDO
| id_pedido (PK) | data       | total    |
|----------------|------------|----------|

### ITEMPEDIDO
| id_item (PK) | id_pedido (FK) | id_produto (FK) | quantidade |
|--------------|----------------|-----------------|------------|

### PERDA
| id_perda (PK) | id_produto (FK) | data       | quantidade | id_motivo (FK) |
|---------------|-----------------|------------|------------|----------------|

### MOTIVOPERDA
| id_motivo (PK) | descricao      |
|----------------|---------------|

### REPOSICAO
| id_reposicao (PK) | id_produto (FK) | id_fornecedor (FK) | data       | quantidade |
|-------------------|-----------------|--------------------|------------|------------|

---

## Normalização do Esquema Relacional

### Primeira Forma Normal (1NF)
- Todas as tabelas têm atributos atómicos (sem repetições ou grupos de atributos).
- Cada campo contém apenas um valor por registo.

### Segunda Forma Normal (2NF)
- Todas as tabelas estão na 1NF.
- Todos os atributos não-chave dependem da chave primária completa (aplicável a tabelas com chaves compostas, como ITEMPEDIDO).

### Terceira Forma Normal (3NF)
- Todas as tabelas estão na 2NF.
- Não existem dependências transitivas: todos os atributos não-chave dependem apenas da chave primária.

**Conclusão:**  
Não é necessário proceder a mais normalização, pois todas as tabelas já se encontram na 3ª Forma Normal (3NF).  
Além disso, não há necessidade de desnormalizar devido à:
- Garantia da integridade dos dados
- Minimização de redundâncias
- Manutenção do desempenho
- Simplicidade do sistema

---

[< Previous](REBD02.md) | [^ Main](../../README.md) | [Next >](REBD04.md)
:--- | :---: | ---: 
