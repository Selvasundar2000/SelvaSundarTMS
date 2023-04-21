-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 01, 2023 at 05:41 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `TMS`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_login`
--

CREATE TABLE `admin_login` (
  `user_name` text NOT NULL,
  `user_pass` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin_login`
--

INSERT INTO `admin_login` (`user_name`, `user_pass`) VALUES
('admin@gmail.com', '$elva123');

-- --------------------------------------------------------

--
-- Table structure for table `a_cl`
--

CREATE TABLE `a_cl` (
  `id` int(11) NOT NULL,
  `nme` text NOT NULL,
  `gen` text NOT NULL,
  `qual` text NOT NULL,
  `phno` int(11) NOT NULL,
  `email` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `a_cl`
--

INSERT INTO `a_cl` (`id`, `nme`, `gen`, `qual`, `phno`, `email`) VALUES
(3, 'selva', 'Male', 'MBA', 12345, 'sundar@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `a_int`
--

CREATE TABLE `a_int` (
  `id` int(11) NOT NULL,
  `nme` text NOT NULL,
  `gen` text NOT NULL,
  `qual` text NOT NULL,
  `phno` text NOT NULL,
  `email` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `a_int`
--

INSERT INTO `a_int` (`id`, `nme`, `gen`, `qual`, `phno`, `email`) VALUES
(1, 'Selva sundar', 'Male', 'MCA', '123456', 'sundar@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `a_openp`
--

CREATE TABLE `a_openp` (
  `id` int(11) NOT NULL,
  `depart` text NOT NULL,
  `post` text NOT NULL,
  `dat` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `a_openp`
--

INSERT INTO `a_openp` (`id`, `depart`, `post`, `dat`) VALUES
(3, 'MCA', 'professor', '2023-03-19'),
(4, 'Mechanical', 'lab', '2023-03-04');

-- --------------------------------------------------------

--
-- Table structure for table `a_prof`
--

CREATE TABLE `a_prof` (
  `id` int(11) NOT NULL,
  `regid` text NOT NULL,
  `nme` text NOT NULL,
  `gen` text NOT NULL,
  `qual` text NOT NULL,
  `panid` text NOT NULL,
  `exp` text NOT NULL,
  `email` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `a_prof`
--

INSERT INTO `a_prof` (`id`, `regid`, `nme`, `gen`, `qual`, `panid`, `exp`, `email`) VALUES
(8, '21MCA003', 'Selva sundar', 'Male', 'MCA', 'JIY12345', '3 yrs', 'selva@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `a_salary`
--

CREATE TABLE `a_salary` (
  `id` int(11) NOT NULL,
  `regid` text NOT NULL,
  `nme` text NOT NULL,
  `year` text NOT NULL,
  `bpay` text NOT NULL,
  `deduct` text NOT NULL,
  `total` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `a_salary`
--

INSERT INTO `a_salary` (`id`, `regid`, `nme`, `year`, `bpay`, `deduct`, `total`) VALUES
(1, '21MCA0011', 'Selva sundar', '2022', '30000', '6000', '24000');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `a_cl`
--
ALTER TABLE `a_cl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `a_int`
--
ALTER TABLE `a_int`
  ADD KEY `id` (`id`);

--
-- Indexes for table `a_openp`
--
ALTER TABLE `a_openp`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `a_prof`
--
ALTER TABLE `a_prof`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `a_salary`
--
ALTER TABLE `a_salary`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `a_cl`
--
ALTER TABLE `a_cl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `a_int`
--
ALTER TABLE `a_int`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `a_openp`
--
ALTER TABLE `a_openp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `a_prof`
--
ALTER TABLE `a_prof`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `a_salary`
--
ALTER TABLE `a_salary`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
