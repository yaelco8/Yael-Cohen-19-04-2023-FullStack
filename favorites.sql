-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: אפריל 23, 2023 בזמן 08:39 AM
-- גרסת שרת: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `weatherdb`
--

-- --------------------------------------------------------

--
-- מבנה טבלה עבור טבלה `favorites`
--

CREATE TABLE `favorites` (
  `key` varchar(20) DEFAULT NULL,
  `localCity` varchar(150) DEFAULT NULL,
  `weatherText` varchar(100) DEFAULT NULL,
  `weatherIcon` int(20) DEFAULT NULL,
  `temperature` float DEFAULT NULL,
  `_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- הוצאת מידע עבור טבלה `favorites`
--

INSERT INTO `favorites` (`key`, `localCity`, `weatherText`, `weatherIcon`, `temperature`, `_id`) VALUES
('60454', 'Weinan', 'Cloudy', 7, 6.2, 6),
('224374', 'Yokohama-shi', 'Mostly cloudy', 38, 12.2, 7192),
('215854', 'Tel Aviv', 'Clouds and sun', 4, 20, 12345);

--
-- Indexes for dumped tables
--

--
-- אינדקסים לטבלה `favorites`
--
ALTER TABLE `favorites`
  ADD PRIMARY KEY (`_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
