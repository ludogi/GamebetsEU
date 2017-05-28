-- MySQL dump 10.13  Distrib 5.7.17, for Linux (x86_64)
--
-- Host: localhost    Database: Gamebets
-- ------------------------------------------------------
-- Server version	5.7.18-0ubuntu0.16.10.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bets`
--

DROP TABLE IF EXISTS `bets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bets` (
  `idbet` int(11) NOT NULL AUTO_INCREMENT,
  `user` int(11) NOT NULL,
  `pending` varchar(45) DEFAULT NULL,
  `datestart` varchar(45) DEFAULT NULL,
  `datefinish` varchar(45) DEFAULT NULL,
  `betmatch` varchar(45) NOT NULL,
  PRIMARY KEY (`idbet`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bets`
--

LOCK TABLES `bets` WRITE;
/*!40000 ALTER TABLE `bets` DISABLE KEYS */;
INSERT INTO `bets` VALUES (1,34,'1','2013','2012','1'),(2,34,'1','2017-02-02','2017-03-02','1'),(3,34,'1','2017-02-02','2017-03-02','1'),(4,34,'1','2017-02-02','2017-03-02','1'),(5,35,'1','2017-02-02','2017-03-02','2'),(6,35,'1','2017-02-02','2017-03-02','2'),(7,35,'1','2017-02-02','2017-03-02','2'),(8,35,'1','2017-02-02','2017-03-02','2'),(9,34,'1','2017-02-02','2017-03-02','1'),(10,34,'1','2017-02-02','2017-03-02','1'),(11,34,'1','2017-02-02','2017-03-02','1'),(12,34,'1','2017-02-02','2017-03-02','1'),(13,34,'1','2017-08-04','2017-08-04','1'),(14,34,'1','2017-08-04','2017-08-04','2'),(15,34,'1','2017-08-04','2017-08-04','1'),(16,34,'1','2017-08-04','2017-08-04','1'),(17,39,'1','2017-08-04','2017-08-04','1'),(18,43,'1','2017-08-04','2017-08-04','1'),(19,34,'1','2017-08-04','2017-08-04','1'),(20,43,'1','2017-08-04','2017-08-04','1'),(21,34,'1','2017-08-04','2017-08-04','1'),(22,34,'1','2017-08-04','2017-08-04','1'),(23,34,'1','2017-08-04','2017-08-04','1'),(24,34,'1','2017-08-04','2017-08-04','1'),(25,34,'1','2017-08-04','2017-08-04','1'),(26,34,'1','2017-08-04','2017-08-04','1'),(27,49,'1','2017-08-04','2017-08-04','1'),(28,49,'1','2017-08-04','2017-08-04','1'),(29,34,'1','2017-08-04','2017-08-04','1'),(30,34,'1','2017-08-04','2017-08-04','1'),(31,49,'1','2017-08-04','2017-08-04','1');
/*!40000 ALTER TABLE `bets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `events` (
  `id` int(20) NOT NULL,
  `name` varchar(45) NOT NULL,
  `specialty` varchar(45) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `country` varchar(50) DEFAULT NULL,
  `description` varchar(50) DEFAULT NULL,
  `latitude` varchar(100) NOT NULL,
  `longitude` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` VALUES (0,'DreamHack Valencia','','Avinguda de les Fires, 3833','','https://dreamhack.es','39.5032909','-0.4267901'),(1,'Dreamhack Open Stockholm','','Telefonvägen 30, 126 26','','https://dreamhack.se','59.2980113','17.9914684'),(2,'DreamHack Atlanta','','Telefonvägen 30, 126 26','','https://dreamhack.se','59.2980113','17.9914684'),(3,'DreamHack Denver','','National Western Complex, 4655 Humboldt St 80216','','https://denver.dreamhack.com','39.7813616','-104.9703591'),(4,'DreamHack France',NULL,'',NULL,'https://dreamhack.fr','47.3913573','0.6911147'),(5,'Cologne 2017',NULL,'WillyBrandtPlatz 3','','https://en.esl-one.com/csgo/cologne-2017','50.9383376','6.9807624'),(6,'ELEAGUE ',NULL,'Fox Theatre',NULL,'https://eleague.com','33.7727618','-84.3875005');
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `match`
--

DROP TABLE IF EXISTS `match`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `match` (
  `idmatch` int(11) NOT NULL,
  `team1` varchar(45) DEFAULT NULL,
  `team2` varchar(45) DEFAULT NULL,
  `matchstart` varchar(45) DEFAULT NULL,
  `matchfinish` varchar(45) DEFAULT NULL,
  `winner` varchar(45) DEFAULT NULL,
  `cashteam1` varchar(45) DEFAULT NULL,
  `cashteam2` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idmatch`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `match`
--

LOCK TABLES `match` WRITE;
/*!40000 ALTER TABLE `match` DISABLE KEYS */;
INSERT INTO `match` VALUES (1,'Juventus','Madrid','2017-08-04','2017-08-04','Juventus','2,5','1,9'),(2,'Alaves','Barcelona','2017-08-04','2017-08-04','Barcelona','5','2'),(3,'Baskonia','Valencia CF','2017-08-16','2017-08-16','Baskonia','3','1,4'),(4,'Giants OTB','Origen España','2017-08-10','2017-08-10','Giants','1,3','5');
/*!40000 ALTER TABLE `match` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(64) NOT NULL,
  `message` text NOT NULL,
  `ip` varchar(15) NOT NULL,
  `date` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=280 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (264,'User_4843','asdasd','192.168.1.1','2017-4-25 20:37:53'),(265,'User_3377','Hola','192.168.1.1','2017-5-11 17:50:52'),(266,'User_4679','q','192.168.1.1','2017-5-11 17:51:14'),(267,'User_3202','asd','192.168.1.1','2017-5-12 13:11:57'),(268,'User_3202','asdasokd','192.168.1.1','2017-5-12 13:12:9'),(269,'User_7561','asd','192.168.1.1','2017-5-12 13:12:21'),(270,'User_9556','asd','192.168.1.1','2017-5-12 13:12:39'),(271,'User_3090','asdasd','192.168.1.1','2017-5-12 13:13:21'),(272,'User_2724','asd','192.168.1.1','2017-5-12 13:16:11'),(273,'User_4252','asd','192.168.1.1','2017-5-12 13:26:37'),(274,'User_3439','asd','192.168.1.1','2017-5-12 14:16:50'),(275,'User_5695','asd','192.168.1.1','2017-5-12 14:22:35'),(276,'User_5695','amfas','192.168.1.1','2017-5-12 14:22:38'),(277,'User_1134','qqwe7','192.168.1.1','2017-5-22 19:50:24'),(278,'User_2869','asd','192.168.1.1','2017-5-28 15:39:16'),(279,'User_6931','asd','192.168.1.1','2017-5-28 17:56:33');
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_test`
--

DROP TABLE IF EXISTS `user_test`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_test` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(200) DEFAULT NULL,
  `passwd` varchar(200) CHARACTER SET utf8 DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `usertype` varchar(45) DEFAULT NULL,
  `displayName` varchar(45) DEFAULT NULL,
  `picture` varchar(200) DEFAULT NULL,
  `coins` int(255) DEFAULT NULL,
  `dni` varchar(9) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_test`
--

LOCK TABLES `user_test` WRITE;
/*!40000 ALTER TABLE `user_test` DISABLE KEYS */;
INSERT INTO `user_test` VALUES (30,'296716476','','default','client','luissdonat','http://pbs.twimg.com/profile_images/833313552194748416/915URdgM_normal.jpg',500,''),(31,'209423986215389','',NULL,'client','Pedro','https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/15492520_132794347211687_8690816113792601658_n.jpg?oh=d06cfe35aec3177188f066b20f141d1c&oe=59A808B6',18500,''),(32,'1175718769241087','',NULL,'client','Luis','https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/16114609_1085831751563123_6984332268259213030_n.jpg?oh=30bb8cd17eb1cb294b1ffecb480d30e0&oe=59BC4D72',500,''),(33,'','$2a$10$2oUXW0j4jSS8XTGF1de5qektsgQ.zUBFAChAq/D3IIN2u15BxQEl2','ludogi@gmail.com','client','ludogi','https://qph.ec.quoracdn.net/main-thumb-221536082-50-eldrniuhgmwqcyhtpgnmyefaeqpuzbjn.jpeg',500,'73909991C'),(34,'220852091739245','',NULL,'client','Pedrosa','https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/15492520_132794347211687_8690816113792601658_n.jpg?oh=d06cfe35aec3177188f066b20f141d1c&oe=59A808B6',9999442,''),(35,'1187385378074426','',NULL,'client','Luis','https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/16114609_1085831751563123_6984332268259213030_n.jpg?oh=30bb8cd17eb1cb294b1ffecb480d30e0&oe=59BC4D72',5998468,''),(36,'107541803112512191807','','default','client','Ludogi','https://lh4.googleusercontent.com/-O0zNnRCYmf8/AAAAAAAAAAI/AAAAAAAAAV4/iSn13XLr1J0/photo.jpg?sz=50',500,''),(37,'','$2a$10$DRY41YEPemK9wjYXtVjsi.9uzJRnWdfCh7fKFM488RjPDb/kFErHW','donatgirones@gmail.com','client','adosdkasd','https://qph.ec.quoracdn.net/main-thumb-221536082-50-eldrniuhgmwqcyhtpgnmyefaeqpuzbjn.jpeg',500,'73909991C'),(38,'','$2a$10$5BLZeayxGJfzOmA0jiKIguGbXMYinrkqfmwCeszwaCIQ1zeb7GduW','pedrosinho@gmail.com','client','luisin','https://qph.ec.quoracdn.net/main-thumb-221536082-50-eldrniuhgmwqcyhtpgnmyefaeqpuzbjn.jpeg',500,'73909991C'),(39,'','$2a$10$IGTIv0JU7zWc3I5IaShNle4ePzb4oBQVDfYvgVsXo8TjByrmYLc7K','donatgirones_@gmail.com','client','asdsad','https://qph.ec.quoracdn.net/main-thumb-221536082-50-eldrniuhgmwqcyhtpgnmyefaeqpuzbjn.jpeg',477,'73909991C'),(40,'','$2a$10$3VOLTIlJS372gedqn2rkNeOXvXumcXCMaZRIa1p/RZ8QsO8XT3tT.','ludogifer@gmail.com','client','Pedroche','https://qph.ec.quoracdn.net/main-thumb-221536082-50-eldrniuhgmwqcyhtpgnmyefaeqpuzbjn.jpeg',500,'73909991C'),(41,'','$2a$10$NdDVIF3ccV3I4hNvCZ7.6OLMjGgnuvTfNOF3iL2XnuHGaLtB3l1p2','probando@gmail.com','client','Prueba','https://qph.ec.quoracdn.net/main-thumb-221536082-50-eldrniuhgmwqcyhtpgnmyefaeqpuzbjn.jpeg',500,'73909991C'),(42,'','$2a$10$hP/XiNiZPMa3clciODDwLejt/nYiiHH3g.kc4/pbrYjLj6/lZrXdG','donatgirojnes2@gmail.com','client','asdsadasda','https://qph.ec.quoracdn.net/main-thumb-221536082-50-eldrniuhgmwqcyhtpgnmyefaeqpuzbjn.jpeg',500,'73909991C'),(43,'','$2a$10$zY8kX7mbCz8AsOM3YidEhOXpDrZb.uRLP/OcohD2ITRFsqHMTmopa','donyket@gmail.com','client','Probando','https://qph.ec.quoracdn.net/main-thumb-221536082-50-eldrniuhgmwqcyhtpgnmyefaeqpuzbjn.jpeg',454,'73909991C'),(44,'','$2a$10$G5XicLVWZ1tQjqbwaK5GkO9qUIy2ewsqU4l/hX9DJcK8NrWqJz9Yi','Ludogai@gmail.com','client','perdaa','https://qph.ec.quoracdn.net/main-thumb-221536082-50-eldrniuhgmwqcyhtpgnmyefaeqpuzbjn.jpeg',500,'73909991C'),(45,'','$2a$10$kehvd5J/0dOmEGubKJ9CoOU9m6Cb7jEZNSU0U3BZzWu30UyGx/i62','donatgirojnesasd2@gmail.com','client','pruebas','https://qph.ec.quoracdn.net/main-thumb-221536082-50-eldrniuhgmwqcyhtpgnmyefaeqpuzbjn.jpeg',500,'73909991C'),(46,'','$2a$10$I0Q1ao0VTRGQXGngQovvyupfn7FqP0wIcR29CN9EVAQ.y7P1nlUVO','pedinho@gmail.com','client','asdsd','https://qph.ec.quoracdn.net/main-thumb-221536082-50-eldrniuhgmwqcyhtpgnmyefaeqpuzbjn.jpeg',500,'73909991C'),(47,'','$2a$10$gpVrNIkfp58hfLaI4bW/3eK/xlw4iqTVnOMscoV30CmDbp1hUVjDu','pedinho@gmail.com','client','asdsd','https://qph.ec.quoracdn.net/main-thumb-221536082-50-eldrniuhgmwqcyhtpgnmyefaeqpuzbjn.jpeg',500,'73909991C'),(48,'','$2a$10$AsqPnJANLLh1vzew2jIUBurn/834civpUqBwcaoVwRdn8tFkM67Sa','pedinho@gmail.com','client','asdsd','https://qph.ec.quoracdn.net/main-thumb-221536082-50-eldrniuhgmwqcyhtpgnmyefaeqpuzbjn.jpeg',500,'73909991C'),(49,'','$2a$10$ALJB4tgiSPoYbC5bzexFf.me5jZr5dXrUOdachkYYKuX93tlUxcWO','admin@gamebets.com','client','admin','https://qph.ec.quoracdn.net/main-thumb-221536082-50-eldrniuhgmwqcyhtpgnmyefaeqpuzbjn.jpeg',409,'78945612Z');
/*!40000 ALTER TABLE `user_test` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-05-28 21:08:15
