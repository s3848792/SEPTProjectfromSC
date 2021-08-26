drop database if exists BOOKSHOP;
create database BOOKSHOP;
use BOOKSHOP;

CREATE TABLE `Admin` (
  `admin_id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(8) NOT NULL,
  `phone_number` varchar(14) NOT NULL,
  `dob` date NOT NULL,
  `name` varchar(70) NOT NULL,
  `preferred_name` varchar(70) NOT NULL,
  `address` varchar(100) NOT NULL,
  `is_admin` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE `Admin`
  ADD PRIMARY KEY (`Admin_id`);

ALTER TABLE `Admin`
  MODIFY `Admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=0;
COMMIT;


INSERT INTO `Admin` (`Admin_id`, `email`, `password`, `phone_number`, `dob`, `name`, `preferred_name`, `address`, `is_Admin`) VALUES (NULL, 'test@gmail.com', 'QWEasd!!', '0123456789', '2021-08-14', 'Test Admin', 'Admin Master', '123 Swanston St', '1');
