INSERT INTO T_USER(VISA, FIRST_NAME, LAST_NAME, BIRTH_DATE)
VALUES
('TQP', 'firstname1', 'lastname1', '1999-11-25'),
('HNH', 'firstname2', 'lastname2', '1999-11-25'),
('NQN', 'firstname3', 'lastname3', '1999-11-25'),


INSERT INTO T_GROUP(NAME, GROUP_LEADER_ID)
VALUES
('Group1', 1),
('Group2', 2),
('Group3', 3),
('Group4', 4),
('Group5', 5);

INSERT INTO T_PROJECT(PROJECT_NUMBER, NAME, CUSTOMER, STATUS, START_DATE, END_DATE, GROUP_ID)
VALUES
(1, 'EFV', 'TRUNG', 'NEW', '2020-04-20','2020-05-25', 1),
(2, 'CXTRANET', 'PHAT', 'PLA', '2020-04-25','2020-05-25', 2),
(3, 'CRYSTAL BALL', 'MANH', 'NEW', '2020-04-28', '2020-06-30', 3),
(4, 'IOC CLIENT EXTRANET', 'LINH', 'INP', '2020-06-07','2020-07-09', 4),
(5, 'TRADEHAT', 'NGOC', 'NEW', '2020-06-08', '2020-07-09', 5),
(6, 'YHV', 'TRUNG', 'FIN', '2020-04-20','2020-05-25', 1),
(7, 'CXPOINET', 'PHAT', 'NEW', '2020-04-25','2020-05-25', 2),
(8, 'DYNAMOL BALL', 'MANH', 'INP', '2020-04-28', '2020-06-30', 3),
(9, 'YNV CLIENT EXTRANET', 'LINH', 'NEW', '2020-06-07','2020-07-09', 4),
(10, 'MLINCCO', 'NGOC', 'PLA', '2020-06-08', '2020-07-09', 5),
(11, 'XNY', 'TRUNG', 'NEW', '2020-04-20','2020-05-25', 1),
(12, 'CTTRANET', 'PHAT', 'FIN', '2020-04-25','2020-05-25', 2),
(13, 'GOLDENBALL', 'MANH', 'NEW', '2020-04-28', '2020-06-30', 3),
(14, 'YMN CLIENT INTERN', 'LINH', 'FIN', '2020-06-07','2020-07-09', 4),
(15, 'XOWDEECO', 'NGOC', 'NEW', '2020-06-08', '2020-07-09', 5);

INSERT INTO T_PROJECT_USER(PROJECT_ID, USER_ID)
VALUES
(1,1),
(1,2),
(2,3),
(2,4),
(2,5),
(3,6),
(3,7),
(4,8),
(5,9),
(5,10),
(6,11),
(6,12),
(7,13),
(7,14),
(8,15),
(8,16),
(9,17),
(9,18),
(9,19),
(10,20),
-- (11,1),
-- (11,3),
-- (12,5),
-- (13,7),
-- (14,9),
-- (14,11),
-- (15,13),
-- (15,15),
-- (15,17),
-- (15,19);

