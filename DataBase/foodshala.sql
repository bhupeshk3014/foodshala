-- MySQL dump 10.13  Distrib 8.0.19, for macos10.15 (x86_64)
--
-- Host: localhost    Database: foodshala
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `additem`
--

DROP TABLE IF EXISTS `additem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `additem` (
  `add_id` int NOT NULL AUTO_INCREMENT,
  `restaurant_id` int NOT NULL,
  `customer_id` int NOT NULL,
  `dish` varchar(45) NOT NULL,
  `type` varchar(45) DEFAULT NULL,
  `price` varchar(45) NOT NULL,
  PRIMARY KEY (`add_id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `additem`
--

LOCK TABLES `additem` WRITE;
/*!40000 ALTER TABLE `additem` DISABLE KEYS */;
INSERT INTO `additem` VALUES (13,11,49,'Chicken Popcorn','nonveg','284'),(14,11,49,'Chizza','nonveg','265'),(15,11,49,'Pepsi','no','57'),(16,11,49,'Fries','veg','200'),(17,11,49,'Chicken Rice Bowl','nonveg','142'),(18,11,49,'Pepsi','no','57'),(19,14,49,'Chicken Whopper','nonveg','139'),(20,14,49,'Veggie Strips','veg','39'),(21,14,49,'Pepsi Float','no','39'),(22,17,49,'7UP','no','120'),(23,17,48,'Spring Rolls','veg','295'),(24,17,48,'Thai Red Curry','veg','385'),(26,17,48,'Pepsi','-','100'),(27,17,50,'7UP','-','120'),(28,17,50,'Thai Red Curry','veg','385'),(29,9,50,'Chicken Momo','nonveg','200'),(30,9,50,'Chicken Thupka','nonveg','309'),(31,19,50,'Butter Milk','-','50'),(32,19,50,'Onion Dosa','veg','110'),(33,18,49,'Fresh Lime Soda','-','160'),(34,18,49,'Cheesy Festa Fries','veg','160'),(35,9,49,'Chicken Thupka','nonveg','309'),(36,16,50,'Classic Frappe','-','149'),(37,14,49,'Pepsi Float','-','39'),(38,14,49,'Crispy Veg Burger','veg','45'),(39,14,49,'Chicken Whopper','nonveg','139'),(40,15,49,'Rockstar Shake','-','219'),(41,11,49,'Chizza','nonveg','265'),(42,11,49,'Chicken Rice Bowl','nonveg','142'),(43,11,49,'Red Bull Energy Drink','-','150'),(44,14,49,'Pepsi Float','-','39'),(45,14,49,'Limey Fizz','-','39'),(46,17,49,'7UP','-','120'),(47,13,49,'7UP','-','60'),(48,18,50,'Cataplana Algarve','veg','530'),(49,11,50,'Chicken Popcorn','nonveg','284'),(50,15,50,'Crinkle Fries','veg','70'),(51,14,49,'Pepsi Float','-','39'),(52,12,49,'Masala Dosa','veg','165');
/*!40000 ALTER TABLE `additem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `beverages`
--

DROP TABLE IF EXISTS `beverages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `beverages` (
  `beverages_id` int NOT NULL AUTO_INCREMENT,
  `id` int NOT NULL,
  `dish` varchar(45) NOT NULL,
  `price` varchar(45) NOT NULL,
  PRIMARY KEY (`beverages_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `beverages`
--

LOCK TABLES `beverages` WRITE;
/*!40000 ALTER TABLE `beverages` DISABLE KEYS */;
INSERT INTO `beverages` VALUES (1,6,'milkshake','290'),(2,6,'mojito','110'),(3,7,'lassi','100'),(4,11,'Pepsi','57'),(5,11,'Red Bull Energy Drink','150'),(6,12,'Cold Coffee','150'),(7,12,'Sweet Lassi','90'),(8,9,'Pepsi','50'),(9,13,'7UP','60'),(10,14,'Pepsi Float','39'),(11,14,'Limey Fizz','39'),(12,15,'Rockstar Shake','219'),(13,16,'Classic Frappe','149'),(14,17,'Pepsi','100'),(15,18,'Fresh Lime Soda','160'),(16,19,'Butter Milk','50'),(17,17,'7UP','120');
/*!40000 ALTER TABLE `beverages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `customer_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  `address` varchar(100) DEFAULT NULL,
  `pnumber` varchar(30) NOT NULL,
  `preference` varchar(45) DEFAULT NULL,
  `joined` datetime NOT NULL,
  PRIMARY KEY (`customer_id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (1,'Naresh','Naresh@gmail.com','6171 regar nagar','99999999',NULL,'2020-03-17 12:37:38'),(3,'Naresh','rajat@gmail.com','6171 regar nagar','999999',NULL,'2020-03-17 12:38:51'),(5,'Naresh','rohitt@gmail.com','6171 regar nagar','9999999999',NULL,'2020-03-17 12:41:49'),(6,'Naresh','rohit@gmail.com','6171 regar nagar','9999999999',NULL,'2020-03-17 12:42:05'),(7,'archit','archit@gmail.com','green park','987654321','veg','2020-03-17 13:05:27'),(8,'Nareh','roit@gmail.com','6171 regar nagar','9999999999',NULL,'2020-03-17 13:16:50'),(10,'Nareh','roi@gmail.com','6171 regar nagar','999999999',NULL,'2020-03-17 13:27:11'),(11,'Nareh','ro@gmail.com','6171 regar nagar','999999999',NULL,'2020-03-17 13:27:40'),(12,'Nareh','r@gmail.com','6171 regar nagar','999999999','Non Veg','2020-03-17 13:37:38'),(13,'Nareh','r2@gmail.com','6171 regar nagar','999999999','Non Veg','2020-03-17 13:38:16'),(14,'Nareh','r23@gmail.com','6171 regar nagar','999999999','Non Veg','2020-03-17 13:42:30'),(15,'Nareh','r23e@gmail.com','6171 regar nagar','999999999','Non Veg','2020-03-17 13:44:54'),(16,'Nareh','r233e@gmail.com','6171 regar nagar','999999999','Non Veg','2020-03-17 13:45:19'),(17,'Nareh','r2333e@gmail.com','6171 regar nagar','999999999','Non Veg','2020-03-17 13:45:52'),(18,'Nareh','r23933e@gmail.com','6171 regar nagar','999999999','Non Veg','2020-03-17 13:48:20'),(19,'Nareh','r2393nm3e@gmail.com','6171 regar nagar','999999999','Non Veg','2020-03-17 13:50:08'),(20,'Nareh','r239ee3nm3e@gmail.com','6171 regar nagar','999999999','Non Veg','2020-03-17 13:55:15'),(21,'Nareh','r23934ee3nm3e@gmail.com','6171 regar nagar','999999999','Non Veg','2020-03-17 13:59:44'),(24,'stalin','stalin@gmail.com','324','4233','veg','2020-03-17 14:05:34'),(26,'Naresh','1','6171 regar nagar','9999999999',NULL,'2020-03-17 16:14:57'),(27,'Naresh','99','6171 regar nagar','9999999999',NULL,'2020-03-17 16:24:38'),(31,'Naresh','0','6171 regar nagar','9999999999',NULL,'2020-03-17 16:34:46'),(38,'Naresh','aman@gmail.com','6171 regar nagar','9999999999',NULL,'2020-03-17 16:49:54'),(39,'Naresh','aman772@gmail.com','6171 regar nagar','9999999999',NULL,'2020-03-17 16:51:12'),(40,'Naresh','am2@gmail.com','6171 regar nagar','9999999999','Non Veg','2020-03-17 16:51:59'),(41,'lalita','lalita@gmail.com','6171 nagar','99323999','Non Veg','2020-03-17 17:15:25'),(42,'lalita','lal@gmail.com','6171 nagar','99323999','Non Veg','2020-03-17 17:16:50'),(43,'lalita','la3@gmail.com','6171 nagar','99323999','Non Veg','2020-03-17 17:17:26'),(44,'monarch','monarch@gmail.com','dwarka','2323','nonveg','2020-03-17 18:05:58'),(45,'monu','monu@gmail.com','6171 nagar','99323999','Non Veg','2020-03-17 18:08:23'),(46,'monu1','monu1@gmail.com','6171 nagar','99323999','Non Veg','2020-03-17 18:10:20'),(47,'paridhi','pari@gmail.com','pura','3434','nonveg','2020-03-17 18:12:07'),(48,'hitesh','h@gmail.com','mig','34','nonveg','2020-03-18 02:59:01'),(49,'Bhupesh','bhupeshkumar@gmail.com','Karol Bagh','90909090','nonveg','2020-03-18 17:22:05'),(50,'Abhishek','abhishek@gmail.com','Bangalore','989887765','nonveg','2020-03-20 02:27:12');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customerLogin`
--

DROP TABLE IF EXISTS `customerLogin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customerLogin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `hash` varchar(100) NOT NULL,
  `email` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customerLogin`
--

LOCK TABLES `customerLogin` WRITE;
/*!40000 ALTER TABLE `customerLogin` DISABLE KEYS */;
INSERT INTO `customerLogin` VALUES (1,'$2a$10$B.1rXBJKxgP1xRvxJW4I3u1dDgEz9X1aGOVNhxwgY2iOpr4JPxaGC','rohi332t@gmail.com'),(3,'$2a$10$K9iXodL7Bfb38/0z7Kqw6uSBAa4CxxT33QP8OraZlEBDE6dGxAuVW','rpunu32t@gmail.com'),(8,'$2a$10$Yqu0RkOZ4UfaTlBAvHsoO.RNLz52n5wmgtkjuZP48mn3NTpq87Mty','rajatnnt@gmail.com'),(16,'$2a$10$X02zwcoduo6cLEEa09CDy.hZGboFklcxRG.8AoUO2gJcGqntuh/9a','aman@gmail.com'),(19,'$2a$10$fo7Q/i03QwXe/DWAouehk.MOeftZbgzEAbzbFvi1v7ojvqy6WIF3e','aman772@gmail.com'),(20,'$2a$10$28oV7.eaNw/uzX7vKN.6iecbBGYALP4h/uk7Ll3Mc5pZ9Dnr2VNS6','am2@gmail.com'),(35,'$2a$10$u4Vh0.42L1fmD6ODoT0GJOLcKmqtrDThLQkmISqr.WIMPAPlFixti','lalita@gmail.com'),(40,'$2a$10$0H1hLyPSwd5m5nDspWBDoeWRUpXj5NKqN4v3yZeByov0nCWAohLSO','lal@gmail.com'),(41,'$2a$10$EYaIaOuAhaclT6I4FD4yFuSjt9H9KT.nTEh8IdRtfJDTEVVknNipq','la3@gmail.com'),(42,'$2a$10$VaxXWXxI5ZgKRQEIJZPYue7x2D0cmGtdb8LjEwHXcwLNlLAJXzIGi','monarch@gmail.com'),(43,'$2a$10$4Kx.7KBU8JjSldcwSJ2eNOr5/C8Dl5AFu9nxx8M79k6xXrsKWJDDW','monu@gmail.com'),(44,'$2a$10$VME0jzEFMhjMd29dlD8rGOXZDF4pLZjE7k951c9M5qBawVpQoDIJi','monu1@gmail.com'),(45,'$2a$10$tjMl8OhnkJbOh6fLNIQybOl9.PQUDg3Rd4TkrjvhET8LZqZZc.uh6','pari@gmail.com'),(46,'$2a$10$d9aR8iUq4NMlG2ZFah3KleFDUisjXFWXrnlFcmczA7nfw/jPhm2le','h@gmail.com'),(47,'$2a$10$KhzmcYzii2uUPsrwxeQM7Ov6qxb.BtK3jwQ7jXIu.uTW5y7apBf.S','bhupeshkumar@gmail.com'),(58,'$2a$10$ue2wgMhmKl/jfiFSfY6XGeaOAKnD3jHVh8vMAHh9jBVY3pD3RA/4S','abhishek@gmail.com');
/*!40000 ALTER TABLE `customerLogin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `maincourse`
--

DROP TABLE IF EXISTS `maincourse`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `maincourse` (
  `maincourse_id` int NOT NULL AUTO_INCREMENT,
  `id` int NOT NULL,
  `dish` varchar(45) NOT NULL,
  `type` varchar(45) NOT NULL,
  `price` varchar(45) NOT NULL,
  PRIMARY KEY (`maincourse_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `maincourse`
--

LOCK TABLES `maincourse` WRITE;
/*!40000 ALTER TABLE `maincourse` DISABLE KEYS */;
INSERT INTO `maincourse` VALUES (1,6,'chicken curry','nonveg','300'),(2,6,'dal makhani','veg','160'),(3,7,'paneer butter masala','veg','210'),(4,11,'Chicken Rice Bowl','nonveg','142'),(5,11,'Chizza','nonveg','265'),(6,12,'Masala Dosa','veg','165'),(7,12,'Noodles','veg','155'),(8,9,'Chicken Thupka','nonveg','309'),(9,13,'Chicken Sausage Pizza','nonveg','300'),(10,14,'Chicken Whopper','nonveg','139'),(11,14,'Crispy Veg Burger','veg','45'),(12,15,'Devil Veg Club Burger','veg','169'),(13,16,'The Messy Burger','nonveg','259'),(14,17,'Thai Red Curry','veg','385'),(15,18,'Cataplana Algarve','veg','530'),(16,19,'Onion Dosa','veg','110');
/*!40000 ALTER TABLE `maincourse` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orderitem`
--

DROP TABLE IF EXISTS `orderitem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orderitem` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `restaurant_id` int NOT NULL,
  `customer_id` int NOT NULL,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderitem`
--

LOCK TABLES `orderitem` WRITE;
/*!40000 ALTER TABLE `orderitem` DISABLE KEYS */;
INSERT INTO `orderitem` VALUES (1,12,125,'jatin'),(2,6,48,'hitesh'),(3,7,48,'hitesh'),(4,11,49,'Bhupesh'),(5,11,49,'Bhupesh'),(6,14,49,'Bhupesh'),(7,17,49,'Bhupesh'),(8,17,48,'hitesh'),(9,17,48,'hitesh'),(10,17,50,'Abhishek'),(11,9,50,'Abhishek'),(12,19,50,'Abhishek'),(13,18,49,'Bhupesh'),(14,9,49,'Bhupesh'),(15,16,50,'Abhishek'),(16,14,49,'Bhupesh'),(17,15,49,'Bhupesh'),(18,11,49,'Bhupesh'),(19,14,49,'Bhupesh'),(20,17,49,'Bhupesh'),(21,13,49,'Bhupesh'),(22,18,50,'Abhishek'),(23,11,50,'Abhishek'),(24,15,50,'Abhishek'),(25,14,49,'Bhupesh'),(26,12,49,'Bhupesh');
/*!40000 ALTER TABLE `orderitem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `restaurant`
--

DROP TABLE IF EXISTS `restaurant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurant` (
  `restaurant_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `rname` varchar(45) NOT NULL,
  `pnumber` varchar(30) NOT NULL,
  `address` varchar(45) NOT NULL,
  `cuisines` varchar(45) NOT NULL,
  `cf2` int NOT NULL,
  `tfrom` int NOT NULL,
  `tto` int NOT NULL,
  `joined` datetime NOT NULL,
  PRIMARY KEY (`restaurant_id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `rname_UNIQUE` (`rname`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurant`
--

LOCK TABLES `restaurant` WRITE;
/*!40000 ALTER TABLE `restaurant` DISABLE KEYS */;
INSERT INTO `restaurant` VALUES (9,'Naresh','naresh@gmail.com','Wow Momo','9999990099','Patel Nagar','Chinese',100,9,9,'2020-03-18 14:33:09'),(11,'amit','amit@gmail.com','KFC','88888888','green park','Fast Food',400,11,10,'2020-03-18 16:56:07'),(12,'Ajay','ajay123@gmail.com','Haldiram\'s','8080808080','Dwarka','Chinese, South indian',500,8,11,'2020-03-18 17:03:21'),(13,'Rupav','rupav@gmail.com','Domino\'s Pizza','98989898','Paschim Vihar','Fast Food',450,9,11,'2020-03-18 17:20:19'),(14,'Stalin','stalin@gmail.com','Burger King','987789870','Patel Nagar','Fast Food',300,10,11,'2020-03-18 17:40:40'),(15,'Puneet','puneet@gmail.com','The Burger Club','9876556789','Kamla Nagar','Fast Food',600,7,11,'2020-03-18 17:42:45'),(16,'Monarch','monarch@gmail.com','Burgrill','9098909890','Dwarka','Fast Food',500,10,10,'2020-03-18 17:44:36'),(17,'Himanshu','himanshu@gmail.com','Berco\'s','9876543210','Punjabi Bagh','Chinese',600,11,10,'2020-03-18 17:48:42'),(18,'Sachin','sachin@gmail.com','Nando\'s','9898989090','Nehru Place','Portuguese',1000,10,10,'2020-03-18 17:51:13'),(19,'Suraj','suraj@gmail.com','Southy','9887766554','Rohini','South Indian',400,9,10,'2020-03-18 17:52:25');
/*!40000 ALTER TABLE `restaurant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `restaurantLogin`
--

DROP TABLE IF EXISTS `restaurantLogin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurantLogin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `hash` varchar(100) NOT NULL,
  `email` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurantLogin`
--

LOCK TABLES `restaurantLogin` WRITE;
/*!40000 ALTER TABLE `restaurantLogin` DISABLE KEYS */;
INSERT INTO `restaurantLogin` VALUES (22,'$2a$10$OE8Lc3AeyqJj.Sgb1nkk3eMXf.HQVuhLT6C3192hrfT9KV5a7GoeC','naresh@gmail.com'),(24,'$2a$10$hlfqxg7cWQXeaURNkapT2uTRr0ZwyTv3FExMbIj8v61odMZMZpkwG','amit@gmail.com'),(25,'$2a$10$A7nD52yS46FkDeamJVq20uv55ciBadJXSnmeuzUYTSZJHLWJU6Zk.','ajay123@gmail.com'),(26,'$2a$10$yo18IMsnFG3gI8BO6qXZBOv4EzFRHT3.4/pvOuRENtQFyhRtenePO','rupav@gmail.com'),(27,'$2a$10$MEn3YGeuWg9vjW4VAeYHp.UFyAMTpqo/sOiYcAJtLMo6LV/yOa1c.','stalin@gmail.com'),(28,'$2a$10$I3FIdHhEhxJn6WJeFhO13.32fvpXSsuIow067sScQ6bFgqqAyDptq','puneet@gmail.com'),(29,'$2a$10$1zBsM5InxyEMNwR.pOsj5.Zdo6pd6SK0rEeUr/2/QbOHX3bQ3BNX6','monarch@gmail.com'),(30,'$2a$10$Mstt3thkaY97fSm7Vw1k2.68XNyzIzSs6WsLM2Ihs8M5Ot/EGOIqG','himanshu@gmail.com'),(31,'$2a$10$9Ffx1vZcAZi1z1hJd4SoJOSiQ/Ubz8PeF13SDvBxKi5eWPN2uQ/m2','sachin@gmail.com'),(32,'$2a$10$R8394qErk4BFazHjtIB3nORWK0suceXd9KqqvJDkmquogKnZHGTd6','suraj@gmail.com');
/*!40000 ALTER TABLE `restaurantLogin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `starter`
--

DROP TABLE IF EXISTS `starter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `starter` (
  `starter_id` int NOT NULL AUTO_INCREMENT,
  `id` int NOT NULL,
  `dish` varchar(45) NOT NULL,
  `type` varchar(45) NOT NULL,
  `price` varchar(45) NOT NULL,
  PRIMARY KEY (`starter_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `starter`
--

LOCK TABLES `starter` WRITE;
/*!40000 ALTER TABLE `starter` DISABLE KEYS */;
INSERT INTO `starter` VALUES (1,123,'pizza','veg','500'),(2,123,'tikka','non veg','500'),(3,123,'sandwich','non veg','50'),(4,1,'sandwich','non veg','50'),(5,6,'nuggets','nonveg','200'),(6,6,'malai chaap','veg','140'),(7,7,'fish tikka','nonveg','190'),(8,11,'Chicken Popcorn','nonveg','284'),(9,11,'Fries','veg','200'),(10,12,'Aloo Tikki','veg','88'),(11,12,'Raj Kachori','veg','120'),(12,9,'Chicken Momo','nonveg','200'),(13,13,'Garlic Bread','veg','99'),(14,14,'Cheesy Fries','veg','99'),(15,14,'Veggie Strips','veg','39'),(16,15,'Crinkle Fries','veg','70'),(17,16,'Potato Tots','veg','109'),(18,17,'Spring Rolls','veg','295'),(19,18,'Cheesy Festa Fries','veg','160'),(20,19,'Papad','veg','10');
/*!40000 ALTER TABLE `starter` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-20 12:13:49
