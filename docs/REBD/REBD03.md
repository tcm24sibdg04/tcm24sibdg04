# C3: Normalização

CATEGORIA
| id |   | nome |
| -- | - | ---- |

PRODUTO
| id |   | stock | nome\_modelo | preco | data | descricao | id\_categoria → CATEGORIA |
| -- | - | ----- | ------------ | ----- | ---- | --------- | ------------------------- |

STOCK
| id\_produto → PRODUTO | quantidade\_disponivel | status |
| --------------------- | ---------------------- | ------ |

PEDIDO
| id |   | data | id\_produto → PRODUTO | quantidade\_usada |
| -- | - | ---- | --------------------- | ----------------- |

DESPERDICIO
| id |   | data | id\_produto → PRODUTO | quantidade\_perdida | motivo |
| -- | - | ---- | --------------------- | ------------------- | ------ |

# Normalização do Esquema Relacional

Não é necessário proceder à normalização da base de dados, pois todas as tabelas já se encontram na 3ª Forma Normal (3NF).
Além disso, não há necessidade de desnormalizar devido à:

- Garantia da integridade dos dados
- Minimização de redundâncias
- Manutenção do desempenho
- Simplicidade do sistema
  
---
[< Previous](rebd02.md) | [^ Main](/../../) | [Next >](rebd04.md)
:--- | :---: | ---: 
