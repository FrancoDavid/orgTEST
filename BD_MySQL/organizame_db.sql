-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 01-05-2018 a las 05:44:13
-- Versión del servidor: 10.1.30-MariaDB
-- Versión de PHP: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `organizame_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Detalle`
--

CREATE TABLE `Detalle` (
  `detail_id` int(11) NOT NULL,
  `detail_unit` varchar(45) NOT NULL,
  `detail_price` int(16) NOT NULL,
  `detail_amount` int(6) NOT NULL,
  `detail_subtotal` int(16) NOT NULL,
  `detail_description` varchar(256) DEFAULT NULL,
  `detail_doc_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Detalle`
--

INSERT INTO `Detalle` (`detail_id`, `detail_unit`, `detail_price`, `detail_amount`, `detail_subtotal`, `detail_description`, `detail_doc_id`) VALUES
(1, 'kg', 25000, 3, 25000, 'test number 1', 1),
(2, 'kg', 999, 1, 999, 'test number 2', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Documento`
--

CREATE TABLE `Documento` (
  `doc_id` int(11) NOT NULL,
  `doc_date` date DEFAULT NULL,
  `doc_folio` int(16) NOT NULL,
  `doc_name_client` varchar(45) DEFAULT NULL,
  `doc_total` int(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Documento`
--

INSERT INTO `Documento` (`doc_id`, `doc_date`, `doc_folio`, `doc_name_client`, `doc_total`) VALUES
(1, '2018-04-13', 66, 'Melisa Estay', 2000),
(2, '2018-04-29', 2, 'Edreil Aguirre', 1000),
(3, '2018-04-23', 4, 'Franco', 25000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Usuario`
--

CREATE TABLE `Usuario` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(64) NOT NULL,
  `user_fullname` varchar(45) NOT NULL,
  `user_password` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Usuario`
--

INSERT INTO `Usuario` (`user_id`, `user_name`, `user_fullname`, `user_password`) VALUES
(1, 'fra.avalos', 'Franco David', '123');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Detalle`
--
ALTER TABLE `Detalle`
  ADD PRIMARY KEY (`detail_id`),
  ADD UNIQUE KEY `detail_id_UNIQUE` (`detail_id`),
  ADD KEY `fk_Detalle_Documento_idx` (`detail_doc_id`);

--
-- Indices de la tabla `Documento`
--
ALTER TABLE `Documento`
  ADD PRIMARY KEY (`doc_id`),
  ADD UNIQUE KEY `doc_id_UNIQUE` (`doc_id`);

--
-- Indices de la tabla `Usuario`
--
ALTER TABLE `Usuario`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `usuario_id_UNIQUE` (`user_id`),
  ADD UNIQUE KEY `user_name_UNIQUE` (`user_name`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Detalle`
--
ALTER TABLE `Detalle`
  MODIFY `detail_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `Documento`
--
ALTER TABLE `Documento`
  MODIFY `doc_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `Usuario`
--
ALTER TABLE `Usuario`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `Detalle`
--
ALTER TABLE `Detalle`
  ADD CONSTRAINT `fk_Detalle_Documento` FOREIGN KEY (`detail_doc_id`) REFERENCES `Documento` (`doc_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
