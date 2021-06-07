INSERT INTO T_USER(USERNAME, PASSWORD, EMAIL, PHONE, AVATAR_URL, ROLE, CREATED_DATE, UPDATED_DATE)
VALUES
('candidate1', '$2a$10$lKQgrwnq8SzQF39QQB9NdegtX6d2iQ6TErLcqwZHsV2CqGX5yLA26', 'email1@gmail.com', 'phone1','avatar-url1.png', 'ROLE_CAN', '2020-01-01','2020-01-01'),
('candidate2', '$2a$10$lKQgrwnq8SzQF39QQB9NdegtX6d2iQ6TErLcqwZHsV2CqGX5yLA26', 'email2@gmail.com', 'phone2','avatar-url2.png', 'ROLE_CAN', '2020-01-01','2020-01-01'),
('candidate3', '$2a$10$lKQgrwnq8SzQF39QQB9NdegtX6d2iQ6TErLcqwZHsV2CqGX5yLA26', 'email3@gmail.com', 'phone3','avatar-url3.png', 'ROLE_CAN', '2020-01-01','2020-01-01'),
('recruiter1', '$2a$10$lKQgrwnq8SzQF39QQB9NdegtX6d2iQ6TErLcqwZHsV2CqGX5yLA26', 'email4@gmail.com', 'phone4','avatar-url4.png', 'ROLE_REC', '2020-01-01','2020-01-01'),
('recruiter2', '$2a$10$lKQgrwnq8SzQF39QQB9NdegtX6d2iQ6TErLcqwZHsV2CqGX5yLA26', 'email5@gmail.com', 'phone5','avatar-url5.png', 'ROLE_REC', '2020-01-01','2020-01-01'),
('recruiter3', '$2a$10$lKQgrwnq8SzQF39QQB9NdegtX6d2iQ6TErLcqwZHsV2CqGX5yLA26', 'email6@gmail.com', 'phone6','avatar-url6.png', 'ROLE_REC', '2020-01-01','2020-01-01'),
('recruiter4', '$2a$10$lKQgrwnq8SzQF39QQB9NdegtX6d2iQ6TErLcqwZHsV2CqGX5yLA26', 'email7@gmail.com', 'phone7','avatar-url7.png', 'ROLE_REC', '2020-01-01','2020-01-01'),
('recruiter5', '$2a$10$lKQgrwnq8SzQF39QQB9NdegtX6d2iQ6TErLcqwZHsV2CqGX5yLA26', 'email8@gmail.com', 'phone8','avatar-url8.png', 'ROLE_REC', '2020-01-01','2020-01-01'),
('recruiter6', '$2a$10$lKQgrwnq8SzQF39QQB9NdegtX6d2iQ6TErLcqwZHsV2CqGX5yLA26', 'email9@gmail.com', 'phone9','avatar-url9.png', 'ROLE_REC', '2020-01-01','2020-01-01'),
('recruiter7', '$2a$10$lKQgrwnq8SzQF39QQB9NdegtX6d2iQ6TErLcqwZHsV2CqGX5yLA26', 'email10@gmail.com', 'phone10','avatar-url10.png', 'ROLE_REC', '2020-01-01','2020-01-01'),
('recruiter8', '$2a$10$lKQgrwnq8SzQF39QQB9NdegtX6d2iQ6TErLcqwZHsV2CqGX5yLA26', 'email11@gmail.com', 'phone11','avatar-url11.png', 'ROLE_REC', '2020-01-01','2020-01-01'),
('recruiter9', '$2a$10$lKQgrwnq8SzQF39QQB9NdegtX6d2iQ6TErLcqwZHsV2CqGX5yLA26', 'email12@gmail.com', 'phone12','avatar-url12.png', 'ROLE_REC', '2020-01-01','2020-01-01'),
('admin1', '$2a$10$lKQgrwnq8SzQF39QQB9NdegtX6d2iQ6TErLcqwZHsV2CqGX5yLA26', 'email13@gmail.com', 'phone13','avatar-url13.png', 'ROLE_ADM', '2020-01-01','2020-01-01');

INSERT INTO T_CANDIDATE(FIRST_NAME, LAST_NAME, CV_URL, DESCRIPTION, USER_ID)
VALUES
('firstname1', 'lastname1', 'cv-url1.pdf', 'description1','1'),
('firstname2', 'lastname2', 'cv-url2.pdf', 'description2','2'),
('firstname3', 'lastname3', 'cv-url3.pdf', 'description3','3');

INSERT INTO T_RECRUITER(NAME, TYPE, WEBSITE, FACEBOOK, USER_ID)
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

INSERT INTO T_CATALOG(NAME)
VALUES
('Bất động sản - Bảo hiểm - Chứng khoán'),
('Công nghệ thông tin - Viễn thông'),
('Dịch vụ du lịch - Khách sạn - Nhà hàng - Cafe'),
('Giáo dục - Đào tạo - Nghiên cứu khoa học'),
('Hành chánh tổng hợp - Luật'),
('Kế toán - Tài chính - Thuế - Ngân hàng'),
('Khoa học - Công nghệ - Kỹ thuật'),
('Marketing - Bán hàng - Chăm sóc khách hàng'),
('Ngôn ngữ - Khoa học xã hội'),
('Sản xuất - Thu mua'),
('Xuất nhập khẩu - Logistics');

INSERT INTO T_SUB_CATALOG(NAME, CATALOG_ID)
VALUES
('Bảo hiểm', 1),
('Bất động sản', 1),
('Chứng khoán', 1),
('Hệ thống thông tin', 2),
('Kỹ thuật phần mềm', 2),
('Mạng máy tính và viễn thông', 2),
('Trí tuệ nhân tạo', 2),
('Khoa học máy tính', 2),
('Web development', 2),
('Mobile development', 2),
('Thiết kế đồ họa', 2),
('Freelancer', 2),
('Dịch vụ thực phẩm - Đồ uống F&B', 3),
('Du lịch', 3),
('Khách sạn', 3),
('Gia sư', 4),
('Giảng viên', 4),
('Trợ giảng', 4),
('Đào tạo', 4);

INSERT INTO T_RECRUITMENT(HEADLINE, OVERVIEW_CONTENT_URL, BENEFIT_CONTENT_URL, REQUIREMENT_CONTENT_URL, RESPONSIBILITY_CONTENT_URL, SALARY, START_DATE, END_DATE, TYPE, RECRUITER_ID)
VALUES
('Product Owner','overview-content-1.txt','benefit-content-1.txt','requirement-content-1.txt', 'responsibility-content-1.txt',3000000, '2020-07-06', '2020-08-06', 'FUL', 1),
('Thực Tập Sinh Đào Tạo Và Phát Triển','overview-content-2.txt','benefit-content-2.txt','requirement-content-2.txt', 'responsibility-content-2.txt',2000000, '2020-07-06', '2020-08-06', 'INT', 1),
('JAVA INTERNSHIP PROGRAM','overview-content-3.txt','benefit-content-3.txt','requirement-content-3.txt', 'responsibility-content-3.txt',4000000, '2020-07-06', '2020-08-06', 'FRE', 2),
('Thực Tập Sinh Thiết Kế','overview-content-4.txt','benefit-content-4.txt','requirement-content-4.txt', 'responsibility-content-4.txt',3000000, '2020-07-06', '2020-08-06', 'PAR', 2),
('Thực Tập Sinh Quản Trị Nhân Sự','overview-content-5.txt','benefit-content-5.txt','requirement-content-5.txt', 'responsibility-content-5.txt',5000000, '2020-07-06', '2020-08-06', 'FUL', 3),
('Internship Robotics Process Automation (RPA)','overview-content-6.txt','benefit-content-6.txt','requirement-content-6.txt', 'responsibility-content-6.txt',6000000, '2020-07-06', '2020-08-06', 'INT', 3),
('Product Owner','overview-content-7.txt','benefit-content-7.txt','requirement-content-7.txt', 'responsibility-content-7.txt',4000000, '2020-07-06', '2020-08-06', 'FRE', 4),
('Thực Tập Sinh Đào Tạo Và Phát Triển','overview-content-8.txt','benefit-content-8.txt','requirement-content-8.txt', 'responsibility-content-8.txt',5000000, '2020-07-06', '2020-08-06', 'PAR', 4),
('JAVA INTERNSHIP PROGRAM','overview-content-9.txt','benefit-content-9.txt','requirement-content-9.txt', 'responsibility-content-9.txt',7000000, '2020-07-06', '2020-08-06', 'FUL', 5),
('Thực Tập Sinh Thiết Kế','overview-content-10.txt','benefit-content-10.txt','requirement-content-10.txt', 'responsibility-content-10.txt',8000000, '2020-07-06', '2020-08-06', 'INT', 5),
('Thực Tập Sinh Quản Trị Nhân Sự','overview-content-11.txt','benefit-content-11.txt','requirement-content-11.txt', 'responsibility-content-11.txt',3000000, '2020-07-06', '2020-08-06', 'FRE', 6),
('Product Owner','overview-content-12.txt','benefit-content-12.txt','requirement-content-12.txt', 'responsibility-content-12.txt',2000000, '2020-07-06', '2020-08-06', 'PAR', 6),
('Thực Tập Sinh Đào Tạo Và Phát Triển','overview-content-13.txt','benefit-content-13.txt','requirement-content-13.txt', 'responsibility-content-13.txt',4000000, '2020-07-06', '2020-08-06', 'FUL', 7),
('JAVA INTERNSHIP PROGRAM','overview-content-14.txt','benefit-content-14.txt','requirement-content-14.txt', 'responsibility-content-14.txt',8000000, '2020-07-06', '2020-08-06', 'INT', 7),
('Thực Tập Sinh Thiết Kế','overview-content-15.txt','benefit-content-15.txt','requirement-content-15.txt', 'responsibility-content-15.txt',1000000, '2020-07-06', '2020-08-06', 'FRE', 8),
('Thực Tập Sinh Quản Trị Nhân Sự','overview-content-16.txt','benefit-content-16.txt','requirement-content-16.txt', 'responsibility-content-16.txt',4000000, '2020-07-06', '2020-08-06', 'FUL', 8),
('Internship Robotics Process Automation (RPA)','overview-content-17.txt','benefit-content-17.txt','requirement-content-17.txt', 'responsibility-content-17.txt',6000000, '2020-07-06', '2020-08-06', 'INT', 9),
('Product Owner','overview-content-18.txt','benefit-content-18.txt','requirement-content-18.txt', 'responsibility-content-18.txt',3000000, '2020-07-06', '2020-08-06', 'INT', 9);

INSERT INTO T_RECRUITMENT_SUB_CATALOG(RECRUITMENT_ID, SUB_CATALOG_ID)
VALUES
(1,1),
(1,2),
(1,3),
(2,2),
(3,1),
(3,2),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(4, 10),
(5, 11),
(5, 12),
(7, 5),
(8, 6),
(4, 7),
(5, 8),
(8, 9),
(9, 10),
(10, 11),
(11, 12);

INSERT INTO T_RECRUITER_SUB_CATALOG(RECRUITER_ID, SUB_CATALOG_ID)
VALUES
(1,1),
(1,2),
(1,3),
(2,2),
(3,1),
(3,2),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(1,10),
(1,11),
(1,12),
(2,13),
(3,14),
(3,15),
(4, 16),
(5, 17),
(6, 18),
(7, 19);