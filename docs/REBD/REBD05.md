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

---
[< Previous](REBD04.md) | [^ Main](/../../) | [Next >](REID00.md)
:--- | :---: | ---: 
