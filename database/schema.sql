-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema ramp
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema ramp
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ramp
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ramp` DEFAULT CHARACTER SET utf8mb3 ;
USE `ramp` ;

-- -----------------------------------------------------
-- Table `ramp`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ramp`.`category` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `type` ENUM('RAMP', 'QUICKBOOKS') NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 16
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `ramp`.`category_rules`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ramp`.`category_rules` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `ramp_category_id` INT NOT NULL,
  `quickbooks_category_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_category_rules_category_idx` (`ramp_category_id` ASC) VISIBLE,
  INDEX `fk_category_rules_category1_idx` (`quickbooks_category_id` ASC) VISIBLE,
  CONSTRAINT `fk_category_rules_category`
    FOREIGN KEY (`ramp_category_id`)
    REFERENCES `ramp`.`category` (`id`),
  CONSTRAINT `fk_category_rules_category1`
    FOREIGN KEY (`quickbooks_category_id`)
    REFERENCES `ramp`.`category` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `ramp`.`merchant_rules`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ramp`.`merchant_rules` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `ramp_category_id` INT NOT NULL,
  `merchant_name` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_merchant_rules_category1_idx` (`ramp_category_id` ASC) VISIBLE,
  CONSTRAINT `fk_merchant_rules_category1`
    FOREIGN KEY (`ramp_category_id`)
    REFERENCES `ramp`.`category` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `ramp`.`payments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ramp`.`payments` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `vendor_name` VARCHAR(45) NULL DEFAULT NULL,
  `payment_type` VARCHAR(45) NULL DEFAULT NULL,
  `status` ENUM('SCHEDULED', ' COMPLETED') NULL DEFAULT NULL,
  `payment_date` DATETIME NULL DEFAULT NULL,
  `due_date` DATETIME NULL DEFAULT NULL,
  `invoice_no` VARCHAR(45) NULL DEFAULT NULL,
  `invoice_date` DATETIME NULL DEFAULT NULL,
  `quickbooks_location` VARCHAR(45) NULL DEFAULT NULL,
  `from_acc_no` DOUBLE NULL DEFAULT NULL,
  `to_acc_no` DOUBLE NULL DEFAULT NULL,
  `send_date` DATETIME NULL DEFAULT NULL,
  `recieve_date` DATETIME NULL DEFAULT NULL,
  `amount` DECIMAL(10,0) NULL DEFAULT NULL,
  `vendor_contact` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `ramp`.`transactions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ramp`.`transactions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `merchant_name` VARCHAR(45) NULL DEFAULT NULL,
  `brand_name` VARCHAR(45) NULL DEFAULT NULL,
  `amount` DECIMAL(10,0) NULL DEFAULT NULL,
  `date` DATETIME NULL DEFAULT NULL,
  `user_name` VARCHAR(45) NULL DEFAULT NULL,
  `virtual_id` VARCHAR(45) NULL DEFAULT NULL,
  `reciept_id` VARCHAR(45) NULL DEFAULT NULL,
  `memo` VARCHAR(45) NULL DEFAULT NULL,
  `category_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_transactions_category1_idx` (`category_id` ASC) VISIBLE,
  CONSTRAINT `fk_transactions_category1`
    FOREIGN KEY (`category_id`)
    REFERENCES `ramp`.`category` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
