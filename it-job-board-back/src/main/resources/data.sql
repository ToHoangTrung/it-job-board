INSERT INTO T_USER(USERNAME, PASSWORD, EMAIL, PHONE, AVATAR_URL, ROLE, CREATED_DATE, UPDATED_DATE)
VALUES
('candidate1', '$2a$10$lKQgrwnq8SzQF39QQB9NdegtX6d2iQ6TErLcqwZHsV2CqGX5yLA26', 'email1@gmail.com', 'phone1','avatar-url1.png', 'CAN', '2020-01-01','2020-01-01'),
('candidate2', '$2a$10$lKQgrwnq8SzQF39QQB9NdegtX6d2iQ6TErLcqwZHsV2CqGX5yLA26', 'email2@gmail.com', 'phone2','avatar-url2.png', 'CAN', '2020-01-01','2020-01-01'),
('candidate3', '$2a$10$lKQgrwnq8SzQF39QQB9NdegtX6d2iQ6TErLcqwZHsV2CqGX5yLA26', 'email3@gmail.com', 'phone3','avatar-url3.png', 'CAN', '2020-01-01','2020-01-01'),
('recruiter1', '$2a$10$lKQgrwnq8SzQF39QQB9NdegtX6d2iQ6TErLcqwZHsV2CqGX5yLA26', 'email4@gmail.com', 'phone4','avatar-url4.png', 'REC', '2020-01-01','2020-01-01'),
('recruiter2', '$2a$10$lKQgrwnq8SzQF39QQB9NdegtX6d2iQ6TErLcqwZHsV2CqGX5yLA26', 'email5@gmail.com', 'phone5','avatar-url5.png', 'REC', '2020-01-01','2020-01-01'),
('recruiter3', '$2a$10$lKQgrwnq8SzQF39QQB9NdegtX6d2iQ6TErLcqwZHsV2CqGX5yLA26', 'email6@gmail.com', 'phone6','avatar-url6.png', 'REC', '2020-01-01','2020-01-01'),
('recruiter4', '$2a$10$lKQgrwnq8SzQF39QQB9NdegtX6d2iQ6TErLcqwZHsV2CqGX5yLA26', 'email7@gmail.com', 'phone7','avatar-url7.png', 'REC', '2020-01-01','2020-01-01'),
('recruiter5', '$2a$10$lKQgrwnq8SzQF39QQB9NdegtX6d2iQ6TErLcqwZHsV2CqGX5yLA26', 'email8@gmail.com', 'phone8','avatar-url8.png', 'REC', '2020-01-01','2020-01-01'),
('recruiter6', '$2a$10$lKQgrwnq8SzQF39QQB9NdegtX6d2iQ6TErLcqwZHsV2CqGX5yLA26', 'email9@gmail.com', 'phone9','avatar-url9.png', 'REC', '2020-01-01','2020-01-01'),
('recruiter7', '$2a$10$lKQgrwnq8SzQF39QQB9NdegtX6d2iQ6TErLcqwZHsV2CqGX5yLA26', 'email10@gmail.com', 'phone10','avatar-url10.png', 'REC', '2020-01-01','2020-01-01'),
('recruiter8', '$2a$10$lKQgrwnq8SzQF39QQB9NdegtX6d2iQ6TErLcqwZHsV2CqGX5yLA26', 'email11@gmail.com', 'phone11','avatar-url11.png', 'REC', '2020-01-01','2020-01-01'),
('recruiter9', '$2a$10$lKQgrwnq8SzQF39QQB9NdegtX6d2iQ6TErLcqwZHsV2CqGX5yLA26', 'email12@gmail.com', 'phone12','avatar-url12.png', 'REC', '2020-01-01','2020-01-01'),
('admin1', '$2a$10$lKQgrwnq8SzQF39QQB9NdegtX6d2iQ6TErLcqwZHsV2CqGX5yLA26', 'email13@gmail.com', 'phone13','avatar-url13.png', 'ADM', '2020-01-01','2020-01-01');

INSERT INTO T_CANDIDATE(FIRST_NAME, LAST_NAME, CV_URL, DESCRIPTION, USER_ID)
VALUES
('firstname1', 'lastname1', 'cv-url1.pdf', 'description1','1'),
('firstname2', 'lastname2', 'cv-url2.pdf', 'description2','2'),
('firstname3', 'lastname3', 'cv-url3.pdf', 'description3','3');

INSERT INTO T_RECRUITER(NAME, TYPE, WEBSITE_URL, FACEBOOK_URL, USER_ID)
VALUES
('name1', 'PRO', 'website_url1', 'facebook_url1','4'),
('name2', 'PRO', 'website_url2', 'facebook_url2','5'),
('name3', 'OUT', 'website_url3', 'facebook_url3','6'),
('name4', 'PRO', 'website_url4', 'facebook_url4','7'),
('name5', 'PRO', 'website_url5', 'facebook_url5','8'),
('name6', 'OUT', 'website_url6', 'facebook_url6','9'),
('name7', 'PRO', 'website_url7', 'facebook_url7','10'),
('name8', 'PRO', 'website_url8', 'facebook_url8','11'),
('name9', 'OUT', 'website_url9', 'facebook_url9','12');

-- INSERT INTO T_GROUP(NAME, GROUP_LEADER_ID)
-- VALUES
-- ('Group1', 1),
-- ('Group2', 2),
-- ('Group3', 3),
-- ('Group4', 4),
-- ('Group5', 5);
--
-- INSERT INTO T_PROJECT(PROJECT_NUMBER, NAME, CUSTOMER, STATUS, START_DATE, END_DATE, GROUP_ID)
-- VALUES
-- (1, 'EFV', 'TRUNG', 'NEW', '2020-04-20','2020-05-25', 1),
-- (2, 'CXTRANET', 'PHAT', 'PLA', '2020-04-25','2020-05-25', 2),
-- (3, 'CRYSTAL BALL', 'MANH', 'NEW', '2020-04-28', '2020-06-30', 3),
-- (4, 'IOC CLIENT EXTRANET', 'LINH', 'INP', '2020-06-07','2020-07-09', 4),
-- (5, 'TRADEHAT', 'NGOC', 'NEW', '2020-06-08', '2020-07-09', 5),
-- (6, 'YHV', 'TRUNG', 'FIN', '2020-04-20','2020-05-25', 1),
-- (7, 'CXPOINET', 'PHAT', 'NEW', '2020-04-25','2020-05-25', 2),
-- (8, 'DYNAMOL BALL', 'MANH', 'INP', '2020-04-28', '2020-06-30', 3),
-- (9, 'YNV CLIENT EXTRANET', 'LINH', 'NEW', '2020-06-07','2020-07-09', 4),
-- (10, 'MLINCCO', 'NGOC', 'PLA', '2020-06-08', '2020-07-09', 5),
-- (11, 'XNY', 'TRUNG', 'NEW', '2020-04-20','2020-05-25', 1),
-- (12, 'CTTRANET', 'PHAT', 'FIN', '2020-04-25','2020-05-25', 2),
-- (13, 'GOLDENBALL', 'MANH', 'NEW', '2020-04-28', '2020-06-30', 3),
-- (14, 'YMN CLIENT INTERN', 'LINH', 'FIN', '2020-06-07','2020-07-09', 4),
-- (15, 'XOWDEECO', 'NGOC', 'NEW', '2020-06-08', '2020-07-09', 5);
--
-- INSERT INTO T_PROJECT_USER(PROJECT_ID, USER_ID)
-- VALUES
-- (1,1),
-- (1,2),
-- (2,3),
-- (2,4),
-- (2,5),
-- (3,6),
-- (3,7),
-- (4,8),
-- (5,9),
-- (5,10),
-- (6,11),
-- (6,12),
-- (7,13),
-- (7,14),
-- (8,15),
-- (8,16),
-- (9,17),
-- (9,18),
-- (9,19),
-- (10,20),
-- -- (11,1),
-- -- (11,3),
-- -- (12,5),
-- -- (13,7),
-- -- (14,9),
-- -- (14,11),
-- -- (15,13),
-- -- (15,15),
-- -- (15,17),
-- -- (15,19);


