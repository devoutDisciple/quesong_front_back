-- MySQL dump 10.13  Distrib 8.0.15, for macos10.14 (x86_64)
--
-- Host: localhost    Database: quesong
-- ------------------------------------------------------
-- Server version	8.0.15

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `openid` varchar(255) NOT NULL,
  `shop_detail` varchar(500) NOT NULL,
  `order_list` varchar(10000) NOT NULL COMMENT '商品id',
  `desc` varchar(45) DEFAULT NULL COMMENT '备注',
  `total_price` int(11) DEFAULT NULL COMMENT '总价',
  `discount_price` int(11) DEFAULT NULL,
  `order_time` varchar(45) DEFAULT NULL COMMENT '下单时间',
  `status` varchar(45) DEFAULT '5' COMMENT '1-未支付 2-商家未接单 3-商家接单 4-派送中 5-订单完成 6-已取消 7-已评价',
  `is_delete` int(11) DEFAULT '1' COMMENT '1 存在 2 删除',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` VALUES (71,'oah4447vOWQegN1z544JfDtqbZuY','{\"id\":1,\"name\":\"一点点奶茶\",\"address\":null,\"url\":\"https://quesong.top/attachment/images/2/2019/05/jAT1cacd9TeX82Ww2aWA5waiKizE0r.jpeg\",\"package_cost\":1,\"send_price\":\"3\"}','[{\"id\":1,\"name\":\"肉末茄子\",\"url\":\"https://quesong.top/attachment/images/2/2019/05/ToZ63oc5758n77CBzKYNY7kn353J6K.jpeg\",\"desc\":\"好吃的茄子\",\"sales\":60,\"price\":10,\"discount\":75,\"shopid\":\"1\",\"type\":\"套餐\",\"package_cost\":\"1\",\"specification\":\"\",\"is_delete\":1,\"num\":7}]',NULL,66,8,'1559482317331','7',1),(72,'oah4447vOWQegN1z544JfDtqbZuY','{\"id\":1,\"name\":\"一点点奶茶\",\"address\":null,\"url\":\"https://quesong.top/attachment/images/2/2019/05/jAT1cacd9TeX82Ww2aWA5waiKizE0r.jpeg\",\"package_cost\":1,\"send_price\":\"3\"}','[{\"id\":1,\"name\":\"肉末茄子\",\"url\":\"https://quesong.top/attachment/images/2/2019/05/ToZ63oc5758n77CBzKYNY7kn353J6K.jpeg\",\"desc\":\"好吃的茄子\",\"sales\":67,\"price\":10,\"discount\":75,\"shopid\":\"1\",\"type\":\"套餐\",\"package_cost\":\"1\",\"specification\":\"\",\"is_delete\":1,\"num\":3},{\"id\":3,\"name\":\"回锅肉\",\"url\":\"https://quesong.top/attachment/images/2/2019/05/ToZ63oc5758n77CBzKYNY7kn353J6K.jpeg\",\"desc\":\"好吃的回锅肉\",\"sales\":103,\"price\":20,\"discount\":80,\"shopid\":\"1\",\"type\":\"套餐\",\"package_cost\":\"3\",\"specification\":null,\"is_delete\":1,\"num\":4}]','',94,20,'1559484122740','5',1),(73,'oah4447vOWQegN1z544JfDtqbZuY','{\"id\":1,\"name\":\"一点点奶茶\",\"address\":null,\"url\":\"https://quesong.top/attachment/images/2/2019/05/jAT1cacd9TeX82Ww2aWA5waiKizE0r.jpeg\",\"package_cost\":1,\"send_price\":\"3\"}','[{\"id\":1,\"name\":\"肉末茄子\",\"url\":\"https://quesong.top/attachment/images/2/2019/05/ToZ63oc5758n77CBzKYNY7kn353J6K.jpeg\",\"desc\":\"好吃的茄子\",\"sales\":70,\"price\":10,\"discount\":75,\"shopid\":\"1\",\"type\":\"套餐\",\"package_cost\":\"1\",\"specification\":\"\",\"is_delete\":1,\"num\":9}]','hello text',86,8,'1559484152923','7',1),(74,'oah4447vOWQegN1z544JfDtqbZuY','{\"id\":1,\"name\":\"一点点奶茶\",\"address\":null,\"url\":\"https://quesong.top/attachment/images/2/2019/05/jAT1cacd9TeX82Ww2aWA5waiKizE0r.jpeg\",\"package_cost\":1,\"send_price\":\"3\"}','[{\"id\":1,\"name\":\"肉末茄子\",\"url\":\"https://quesong.top/attachment/images/2/2019/05/ToZ63oc5758n77CBzKYNY7kn353J6K.jpeg\",\"desc\":\"好吃的茄子\",\"sales\":79,\"price\":10,\"discount\":75,\"shopid\":\"1\",\"type\":\"套餐\",\"package_cost\":\"1\",\"specification\":\"\",\"is_delete\":1,\"num\":9}]','fdfdghg',86,8,'1559484586206','7',1),(75,'oah4447vOWQegN1z544JfDtqbZuY','{\"id\":1,\"name\":\"一点点奶茶\",\"address\":null,\"url\":\"https://quesong.top/attachment/images/2/2019/05/jAT1cacd9TeX82Ww2aWA5waiKizE0r.jpeg\",\"package_cost\":1,\"send_price\":\"3\"}','[{\"id\":1,\"name\":\"肉末茄子\",\"url\":\"https://quesong.top/attachment/images/2/2019/05/ToZ63oc5758n77CBzKYNY7kn353J6K.jpeg\",\"desc\":\"好吃的茄子\",\"sales\":88,\"price\":10,\"discount\":75,\"shopid\":\"1\",\"type\":\"套餐\",\"package_cost\":\"1\",\"specification\":\"\",\"is_delete\":1,\"num\":7}]','要中辣',66,8,'1559488160966','7',1),(76,'oah4447vOWQegN1z544JfDtqbZuY','{\"id\":1,\"name\":\"一点点奶茶\",\"address\":null,\"url\":\"https://quesong.top/attachment/images/2/2019/05/jAT1cacd9TeX82Ww2aWA5waiKizE0r.jpeg\",\"package_cost\":1,\"send_price\":\"3\"}','[{\"id\":1,\"name\":\"肉末茄子\",\"url\":\"https://quesong.top/attachment/images/2/2019/05/ToZ63oc5758n77CBzKYNY7kn353J6K.jpeg\",\"desc\":\"好吃的茄子\",\"sales\":95,\"price\":10,\"discount\":75,\"shopid\":\"1\",\"type\":\"套餐\",\"package_cost\":\"1\",\"specification\":\"\",\"is_delete\":1,\"num\":5},{\"id\":3,\"name\":\"回锅肉\",\"url\":\"https://quesong.top/attachment/images/2/2019/05/ToZ63oc5758n77CBzKYNY7kn353J6K.jpeg\",\"desc\":\"好吃的回锅肉\",\"sales\":107,\"price\":20,\"discount\":80,\"shopid\":\"1\",\"type\":\"套餐\",\"package_cost\":\"3\",\"specification\":null,\"is_delete\":1,\"num\":4}]','发的发的是',114,20,'1559489474215','5',1);
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-06-03  0:56:55
