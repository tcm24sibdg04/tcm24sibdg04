# C3 : SQL

## DDL

```sql
CREATE DATABASE IF NOT EXISTS cafe;
USE cafe;

-- Drop tables if they exist
DROP TABLE IF EXISTS Produto;
DROP TABLE IF EXISTS Receita;
DROP TABLE IF EXISTS Utilizador;
DROP TABLE IF EXISTS Turno;
DROP TABLE IF EXISTS Pedido;
DROP TABLE IF EXISTS Desperdicio;
DROP TABLE IF EXISTS IngredienteReceita;

-- Create tables
CREATE TABLE Produto (
    idProduto INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    tipo VARCHAR(50),
    quantidadeStock DECIMAL(10,2) NOT NULL DEFAULT 0,
    unidadeMedida VARCHAR(20),
    limiteAlerta DECIMAL(10,2) NOT NULL DEFAULT 10
);

CREATE TABLE Receita (
    idReceita INT PRIMARY KEY AUTO_INCREMENT,
    nomeBebida VARCHAR(100) NOT NULL,
    descricao TEXT
);

CREATE TABLE Utilizador (
    idFuncionario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    perfil ENUM('gestor', 'funcionario') NOT NULL,
    login VARCHAR(50) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL
);

CREATE TABLE Turno (
    idTurno INT PRIMARY KEY AUTO_INCREMENT,
    data DATE NOT NULL,
    horaInicio TIME NOT NULL,
    horaFim TIME NOT NULL,
    idResponsavel INT,
    FOREIGN KEY (idResponsavel) REFERENCES Utilizador(idFuncionario)
);

CREATE TABLE Pedido (
    idPedido INT PRIMARY KEY AUTO_INCREMENT,
    dataHora DATETIME NOT NULL,
    idReceita INT NOT NULL,
    idFuncionario INT NOT NULL,
    idTurno INT NOT NULL,
    FOREIGN KEY (idReceita) REFERENCES Receita(idReceita),
    FOREIGN KEY (idFuncionario) REFERENCES Utilizador(idFuncionario),
    FOREIGN KEY (idTurno) REFERENCES Turno(idTurno)
);

CREATE TABLE Desperdicio (
    idDesperdicio INT PRIMARY KEY AUTO_INCREMENT,
    dataHora DATETIME NOT NULL,
    quantidade DECIMAL(10,2) NOT NULL CHECK (quantidade >= 0),
    motivo TEXT NOT NULL,
    idProduto INT NOT NULL,
    idFuncionario INT NOT NULL,
    FOREIGN KEY (idProduto) REFERENCES Produto(idProduto),
    FOREIGN KEY (idFuncionario) REFERENCES Utilizador(idFuncionario)
);

CREATE TABLE IngredienteReceita (
    idReceita INT,
    idProduto INT,
    quantidadeUtilizada DECIMAL(10,2) NOT NULL CHECK (quantidadeUtilizada > 0),
    PRIMARY KEY (idReceita, idProduto),
    FOREIGN KEY (idReceita) REFERENCES Receita(idReceita),
    FOREIGN KEY (idProduto) REFERENCES Produto(idProduto)
);

## DML

INSERT INTO Produto (nome, tipo, quantidadeStock, unidadeMedida, limiteAlerta) VALUES
('Café em Grão', 'Ingrediente', 50.00, 'kg', 10.00),
('Leite', 'Ingrediente', 30.00, 'L', 5.00),
('Açúcar', 'Ingrediente', 20.00, 'kg', 3.00),
('Canela', 'Ingrediente', 5.00, 'kg', 1.00),
('Chocolate', 'Ingrediente', 10.00, 'kg', 2.00),
('Chá Preto', 'Ingrediente', 15.00, 'kg', 3.00),
('Chá Verde', 'Ingrediente', 12.00, 'kg', 3.00),
('Mel', 'Ingrediente', 8.00, 'kg', 2.00),
('Limão', 'Ingrediente', 25.00, 'kg', 5.00),
('Água', 'Ingrediente', 100.00, 'L', 20.00),
('Copos', 'Consumo', 200.00, 'un', 50.00),
('Tampas', 'Consumo', 180.00, 'un', 50.00),
('Guardanapos', 'Consumo', 500.00, 'un', 100.00),
('Café Solúvel', 'Ingrediente', 10.00, 'kg', 2.00),
('Creme de Leite', 'Ingrediente', 7.00, 'L', 1.50),
('Baunilha', 'Ingrediente', 3.00, 'kg', 0.50),
('Caramelo', 'Ingrediente', 4.00, 'kg', 1.00),
('Essência de Amêndoas', 'Ingrediente', 1.00, 'kg', 0.20),
('Morango', 'Ingrediente', 6.00, 'kg', 1.50),
('Biscoito', 'Consumo', 100.00, 'un', 20.00),
('Papel Toalha', 'Consumo', 50.00, 'un', 10.00),
('Copo Térmico', 'Consumo', 80.00, 'un', 15.00),
('Xarope de Menta', 'Ingrediente', 2.00, 'L', 0.50),
('Noz Moscada', 'Ingrediente', 0.50, 'kg', 0.10),
('Gelo', 'Ingrediente', 200.00, 'kg', 30.00),
('Café Descafeinado', 'Ingrediente', 9.00, 'kg', 2.00),
('Creme Chantilly', 'Ingrediente', 3.00, 'kg', 1.00),
('Canudo', 'Consumo', 300.00, 'un', 100.00),
('Saco de Lixo', 'Consumo', 60.00, 'un', 10.00),
('Esponja', 'Consumo', 30.00, 'un', 5.00);

--
INSERT INTO Receita (nomeBebida, descricao) VALUES
('Café Expresso', 'Café curto e forte'),
('Cappuccino', 'Café com leite vaporizado e espuma'),
('Latte', 'Café com bastante leite'),
('Mocha', 'Café com leite e chocolate'),
('Chá Preto com Limão', 'Chá preto com limão fresco'),
('Chá Verde com Mel', 'Chá verde adoçado com mel'),
('Café Gelado', 'Café servido com gelo'),
('Café Descafeinado', 'Café sem cafeína'),
('Chocolate Quente', 'Bebida quente com chocolate e leite'),
('Latte Baunilha', 'Latte com essência de baunilha'),
('Latte Caramelo', 'Latte com calda de caramelo'),
('Chá de Hibisco', 'Chá de hibisco natural'),
('Café com Canela', 'Café com toque de canela'),
('Café com Chantilly', 'Café finalizado com chantilly'),
('Café Americano', 'Café mais diluído'),
('Espresso Duplo', 'Dose dupla de expresso'),
('Matcha Latte', 'Bebida de chá verde em pó e leite'),
('Café com Leite Condensado', 'Café adocicado com leite condensado'),
('Café Vienense', 'Café com chantilly e canela'),
('Frappuccino', 'Café gelado com creme e sabor'),
('Chá Mate', 'Chá mate natural'),
('Chá de Frutas Vermelhas', 'Chá adoçado de frutas'),
('Smoothie de Morango', 'Morango com leite e mel'),
('Café com Noz Moscada', 'Café com especiarias'),
('Latte de Amêndoas', 'Leite de amêndoas com café'),
('Latte Gelado', 'Latte com gelo'),
('Chá com Menta', 'Chá gelado com menta'),
('Affogato', 'Sorvete com café expresso'),
('Latte de Mel', 'Latte adoçado com mel'),
('Chá de Camomila', 'Chá calmante tradicional');


```
---
[< Previous](REBD04.md) | [^ Main](/../../) | [Next >](REI00.md)
:--- | :---: | ---: 
