-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-07-2022 a las 08:02:08
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `paises`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pais`
--

CREATE TABLE `pais` (
  `id` int(11) NOT NULL,
  `Nombre_Pais` varchar(100) NOT NULL,
  `Capital_Pais` varchar(150) NOT NULL,
  `Region_Pais` varchar(255) NOT NULL,
  `Poblacion_Pais` int(11) NOT NULL,
  `TipoMoneda_Pais` varchar(100) NOT NULL,
  `Lengua_Pais` varchar(100) NOT NULL,
  `Zona_Horaria` varchar(100) NOT NULL,
  `Bandera_Pais` varchar(200) NOT NULL,
  `SubReg_Pais` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pais`
--

INSERT INTO `pais` (`id`, `Nombre_Pais`, `Capital_Pais`, `Region_Pais`, `Poblacion_Pais`, `TipoMoneda_Pais`, `Lengua_Pais`, `Zona_Horaria`, `Bandera_Pais`, `SubReg_Pais`) VALUES
(1, 'Colombia', 'Bogota', 'Sur america', 50882884, 'Peso Colombiano', 'Español', 'UTF-5', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Flag_of_the_Gran_Colombia.svg/1200px-Flag_of_the_Gran_Colombia.svg.png', 'Amazonas, Antioquia, Arauca, Atlantico, Bogota, Bolivar, Boyaca, Caldas, Caqueta, Casanare, Cauca, Cesar, Choco, Cordoba, Cundinamarca, Guainía, Guaviare, Huila, La Guajira, Magdalena, Meta, Nariño, Norte de Santander, Putumayo, Quindio, Risaralda, San Andres y Providencia, Santander, Sucre, Tolima, Valle del Cauca, Vaupes, Vichada'),
(2, 'Francia', 'Paris', 'El itsmo', 67842582, 'Euro', 'Frances', 'GMT+2', 'https://image.shutterstock.com/image-vector/france-flag-official-vector-illustration-260nw-1575627670.jpg', 'Alta francia, Gran Este, Nueva Aquitania, Auvernia-Ródano-Alpes, Borgoña-Franco Condado, Bretaña, Centro-Valle de Loira, Corcega, Occitania, Isla de Francia, Normandia, Paises del Loira, Provenza-Alpes-Costa Azul, Guayana Francesa'),
(3, 'Brasil', 'Brasilia', 'Este de América del Sur', 213993441, 'Real Brasileño', 'Portugues', 'GMT-3', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/300px-Flag_of_Brazil.svg.png', 'meio-norte, sertão, agreste, zona da mata'),
(4, 'Mexico', 'Ciudad de Mexico', 'Extremo Meridional de América del Norte', 128900000, 'Peso Mexicano', 'Español(Mexico)', 'GMT-5', 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg', 'CENTRO\r\n-Distrito Federal.\r\n-Estado de México.\r\n-Morelos.\r\n-Hidalgo.\r\n-Puebla.\r\n-Tlaxcala.\r\n-Veracruz.\r\n-Querétaro.\r\n\r\nNORTE\r\n-Chihuahua.\r\n-Coahuila.\r\n-Nuevo León.\r\n-Tamaulipas.\r\n-San Luis Potosí.\r\n-Zacatecas.\r\n-Durango.\r\n-Sonora.\r\n\r\nOCCIDENTE & PACIFICO\r\n-Baja California.\r\n-Baja California Sur.\r\n-Sinaloa.\r\n-Nayarit.\r\n-Jalisco.\r\n-Colima.\r\n-Aguascalientes.\r\n-Guanajuato.\r\n\r\nSUR\r\n-Chiapas.\r\n-Guerrero.\r\n-Oaxaca.\r\n-Michoacán.\r\n-Campeche.\r\n-Quintana Roo.\r\n-Tabasco.\r\n-Yucatán.');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `pais`
--
ALTER TABLE `pais`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `pais`
--
ALTER TABLE `pais`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
