DROP DATABASE IF EXISTS proyectoWEB;
CREATE DATABASE IF NOT EXISTS proyectoWEB;
USE proyectoWEB;

--DROP TABLE IF EXISTS Administrador;
CREATE TABLE Administrador(
  contrasenaAdmin VARCHAR(60) NOT NULL,
  noCuentaAdmin VARCHAR(15) NOT NULL,
  PRIMARY KEY (noCuentaAdmin)
);

--DROP TABLE IF EXISTS Infante;
CREATE TABLE Infante(
    cendi VARCHAR(60) NOT NULL,
    foto VARBINARY(max) NOT NULL, --imagen (?)
    folio INT(10) NOT NULL, --boleta
    grupo VARCHAR(10) NOT NULL,

    paternoInf VARCHAR(60) NOT NULL,
    maternoInf VARCHAR(60) NOT NULL, 
    nombreInf VARCHAR(60) NOT NULL,
    fechaNacimiento DATE DEFAULT '2017-01-01',
    curpInf VARCHAR(18) NOT NULL,
    PRIMARY KEY (folio)
);

--DROP TABLE IF EXISTS Derechohabiente;
CREATE TABLE Derechohabiente(
    paternoDer VARCHAR(60) NOT NULL,
    maternoDer VARCHAR(60) NOT NULL, 
    nombreDer VARCHAR(60) NOT NULL,
    --DOMICILIO
    calle VARCHAR(40) NOT NULL,
    noExt INT(5) DEFAULT 0,
    noInt INT(5) DEFAULT 0,
    colonia VARCHAR (40) NOT NULL,
    alcMun VARCHAR (40) NOT NULL,
    estado VARCHAR (40) NOT NULL,
    cp INT(5) NOT NULL,
    telFijo VARCHAR(15) NOT NULL,
    telCel VARCHAR(15) NOT NULL,
    email VARCHAR (60) NOT NULL,
    ocupacion VARCHAR (60) NOT NULL,
    curpDer VARCHAR(18) NOT NULL,
    puesto VARCHAR (60) NOT NULL,
    sueldo VARCHAR (20) NOT NULL,
    numEmpleado VARCHAR (10) NOT NULL,
    adscripcion VARCHAR (60) NOT NULL, 
    horarioTrabajo VARCHAR(20) NOT NULL,
    nombreJefe VARCHAR(60) NOT NULL,
    extension VARCHAR(10) NOT NULL,

    PRIMARY KEY (curpDer)
);

--DROP TABLE IF EXISTS Conyuge;
CREATE TABLE Conyuge(
    paternoCon VARCHAR(60) NOT NULL,
    maternoCon VARCHAR(60) NOT NULL, 
    nombreCon VARCHAR(60) NOT NULL,
    --DOMICILIO
    calle VARCHAR(40) NOT NULL,
    noExt INT(5) DEFAULT 0,
    noInt INT(5) DEFAULT 0,
    colonia VARCHAR (40) NOT NULL,
    alcMun VARCHAR (40) NOT NULL,
    estado VARCHAR (40) NOT NULL,
    cp INT(5) NOT NULL,
    telFijo VARCHAR(15) NOT NULL,
    telCel VARCHAR(15) NOT NULL,
    lugarTrabajo VARCHAR(60) NOT NULL,
    ocupacion VARCHAR (60) NOT NULL,
    domicilioTrabajo VARCHAR(200) NOT NULL,
    telTrabajo VARCHAR(15) NOT NULL,
    extension VARCHAR(10) NOT NULL,
    religion VARCHAR(20) NOT NULL,

    PRIMARY KEY (nombreCon)
);

--inserts
INSERT INTO Administrador (contrasenaAdmin, noCuentaAdmin) VALUES ( 'admin123', 'adminESCOM');
--prueba
--INSERT INTO Infante (cendi, foto, folio, grupo, paternoInf, maternoInf, nombreInf, fechaNacimiento, curpInf) VALUES ('');
