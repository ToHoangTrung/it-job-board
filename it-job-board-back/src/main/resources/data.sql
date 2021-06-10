INSERT INTO T_USER(USERNAME, PASSWORD, EMAIL, PHONE, AVATAR_URL, ROLE, CREATED_DATE, UPDATED_DATE)
VALUES
('candidate1', '$2a$10$lKQgrwnq8SzQF39QQB9NdegtX6d2iQ6TErLcqwZHsV2CqGX5yLA26', 'email1@gmail.com', 'phone1','avatar-url1.png', 'ROLE_CAN', '2020-01-01','2020-01-01'),
('candidate2', '$2a$10$lKQgrwnq8SzQF39QQB9NdegtX6d2iQ6TErLcqwZHsV2CqGX5yLA26', 'email2@gmail.com', 'phone2','avatar-url2.png', 'ROLE_CAN', '2020-01-01','2020-01-01'),
('candidate3', '$2a$10$lKQgrwnq8SzQF39QQB9NdegtX6d2iQ6TErLcqwZHsV2CqGX5yLA26', 'email3@gmail.com', 'phone3','avatar-url3.png', 'ROLE_CAN', '2020-01-01','2020-01-01'),
('recruiter1', '$2a$10$lKQgrwnq8SzQF39QQB9NdegtX6d2iQ6TErLcqwZHsV2CqGX5yLA26', 'email4@gmail.com', 'phone4','grab-(vietnam)-ltd.png', 'ROLE_REC', '2020-01-01','2020-01-01'),
('recruiter2', '$2a$10$lKQgrwnq8SzQF39QQB9NdegtX6d2iQ6TErLcqwZHsV2CqGX5yLA26', 'email5@gmail.com', 'phone5','bocasay.png', 'ROLE_REC', '2020-01-01','2020-01-01'),
('recruiter3', '$2a$10$lKQgrwnq8SzQF39QQB9NdegtX6d2iQ6TErLcqwZHsV2CqGX5yLA26', 'email6@gmail.com', 'phone6','knorex.png', 'ROLE_REC', '2020-01-01','2020-01-01'),
('recruiter4', '$2a$10$lKQgrwnq8SzQF39QQB9NdegtX6d2iQ6TErLcqwZHsV2CqGX5yLA26', 'email7@gmail.com', 'phone7','zalora-group.png', 'ROLE_REC', '2020-01-01','2020-01-01'),
('recruiter5', '$2a$10$lKQgrwnq8SzQF39QQB9NdegtX6d2iQ6TErLcqwZHsV2CqGX5yLA26', 'email8@gmail.com', 'phone8','haravan.png', 'ROLE_REC', '2020-01-01','2020-01-01'),
('recruiter6', '$2a$10$lKQgrwnq8SzQF39QQB9NdegtX6d2iQ6TErLcqwZHsV2CqGX5yLA26', 'email9@gmail.com', 'phone9','cinnamon-ai-labs.png', 'ROLE_REC', '2020-01-01','2020-01-01'),
('recruiter7', '$2a$10$lKQgrwnq8SzQF39QQB9NdegtX6d2iQ6TErLcqwZHsV2CqGX5yLA26', 'email10@gmail.com', 'phone10','restaff.png', 'ROLE_REC', '2020-01-01','2020-01-01'),
('recruiter8', '$2a$10$lKQgrwnq8SzQF39QQB9NdegtX6d2iQ6TErLcqwZHsV2CqGX5yLA26', 'email11@gmail.com', 'phone11','kpmg-digital-enablement.png', 'ROLE_REC', '2020-01-01','2020-01-01'),
('recruiter9', '$2a$10$lKQgrwnq8SzQF39QQB9NdegtX6d2iQ6TErLcqwZHsV2CqGX5yLA26', 'email12@gmail.com', 'phone12','techbase-vietnam.png', 'ROLE_REC', '2020-01-01','2020-01-01'),
('admin1', '$2a$10$lKQgrwnq8SzQF39QQB9NdegtX6d2iQ6TErLcqwZHsV2CqGX5yLA26', 'email13@gmail.com', 'phone13','avatar-url13.png', 'ROLE_ADM', '2020-01-01','2020-01-01');

INSERT INTO T_CANDIDATE(FIRST_NAME, LAST_NAME, CV_URL, DESCRIPTION, USER_ID)
VALUES
('firstname1', 'lastname1', 'cv-url1.pdf', 'description1','1'),
('firstname2', 'lastname2', 'cv-url2.pdf', 'description2','2'),
('firstname3', 'lastname3', 'cv-url3.pdf', 'description3','3');

INSERT INTO T_RECRUITER(NAME, TYPE, WEBSITE, FACEBOOK, USER_ID, OVERTIME, COUNTRY, EMPLOYEE_QUANTITY, WORk_START_DAY, WORk_END_DAY, LOCATION)
VALUES
('Grab (Vietnam) Ltd', 'PRODUCT', 'website_url1', 'facebook_url1','4', 'NO', 'VN', '500', 'MONDAY', 'FRIDAY', 'location1'),
('BOCASAY', 'PRODUCT', 'website_url2', 'facebook_url2','5', 'NO', 'VN', '500', 'MONDAY', 'FRIDAY', 'location1'),
('Knorex', 'OUTSOURCE', 'website_url3', 'facebook_url3','6', 'NO', 'VN', '500', 'MONDAY', 'FRIDAY', 'location1'),
('ZALORA Group', 'PRODUCT', 'website_url4', 'facebook_url4','7', 'NO', 'VN', '500', 'MONDAY', 'FRIDAY', 'location1'),
('HARAVAN', 'PRODUCT', 'website_url5', 'facebook_url5','8', 'NO', 'VN', '500', 'MONDAY', 'FRIDAY', 'location1'),
('Cinnamon AI Labs', 'OUTSOURCE', 'website_url6', 'facebook_url6','9', 'NO', 'VN', '500', 'MONDAY', 'FRIDAY', 'location1'),
('Restaff', 'PRODUCT', 'website_url7', 'facebook_url7','10', 'NO', 'VN', '500', 'MONDAY', 'FRIDAY', 'location1'),
('KPMG Digital Enablement', 'PRODUCT', 'website_url8', 'facebook_url8','11', 'NO', 'VN', '500', 'MONDAY', 'FRIDAY', 'location1'),
('Techbase Vietnam', 'OUTSOURCE', 'website_url9', 'facebook_url9','12', 'NO', 'VN', '500', 'MONDAY', 'FRIDAY', 'location1');

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

INSERT INTO T_RECRUITMENT(HEADLINE, BENEFIT_CONTENT_URL, REQUIREMENT_CONTENT_URL, RESPONSIBILITY_CONTENT_URL, SALARY, START_DATE, END_DATE, POSITION , RECRUITER_ID, LOCATION)
VALUES
('Product Owner', 'benefit-content-1.txt','requirement-content-1.txt', 'responsibility-content-1.txt','From $2,500', '2020-07-06', '2020-08-06', 'INTERN', 1, '21-23 Nguyễn Thị Minh Khai, Bến Nghé, District 1, Ho Chi Minh'),
('Thực Tập Sinh Đào Tạo Và Phát Triển', 'benefit-content-2.txt','requirement-content-2.txt', 'responsibility-content-2.txt','From $2,500', '2020-07-06', '2020-08-06', 'INTERN', 1, '21-23 Nguyễn Thị Minh Khai, Bến Nghé, District 1, Ho Chi Minh'),
('JAVA INTERNSHIP PROGRAM', 'benefit-content-3.txt','requirement-content-3.txt', 'responsibility-content-3.txt','From $2,500', '2020-07-06', '2020-08-06', 'FRESHER', 2, '21-23 Nguyễn Thị Minh Khai, Bến Nghé, District 1, Ho Chi Minh'),
('Thực Tập Sinh Thiết Kế', 'benefit-content-4.txt','requirement-content-4.txt', 'responsibility-content-4.txt','From $2,500', '2020-07-06', '2020-08-06', 'INTERN', 2, '21-23 Nguyễn Thị Minh Khai, Bến Nghé, District 1, Ho Chi Minh'),
('Thực Tập Sinh Quản Trị Nhân Sự', 'benefit-content-5.txt','requirement-content-5.txt', 'responsibility-content-5.txt','From $2,500', '2020-07-06', '2020-08-06', 'INTERN', 3, '21-23 Nguyễn Thị Minh Khai, Bến Nghé, District 1, Ho Chi Minh'),
('Internship Robotics Process Automation (RPA)', 'benefit-content-6.txt','requirement-content-6.txt', 'responsibility-content-6.txt','From $2,500', '2020-07-06', '2020-08-06', 'INTERN', 3, '21-23 Nguyễn Thị Minh Khai, Bến Nghé, District 1, Ho Chi Minh'),
('Product Owner', 'benefit-content-7.txt','requirement-content-7.txt', 'responsibility-content-7.txt','From $2,500', '2020-07-06', '2020-08-06', 'FRESHER', 4, '21-23 Nguyễn Thị Minh Khai, Bến Nghé, District 1, Ho Chi Minh'),
('Thực Tập Sinh Đào Tạo Và Phát Triển', 'benefit-content-8.txt','requirement-content-8.txt', 'responsibility-content-8.txt','From $2,500', '2020-07-06', '2020-08-06', 'INTERN', 4, '21-23 Nguyễn Thị Minh Khai, Bến Nghé, District 1, Ho Chi Minh'),
('JAVA INTERNSHIP PROGRAM', 'benefit-content-9.txt','requirement-content-9.txt', 'responsibility-content-9.txt','From $2,500', '2020-07-06', '2020-08-06', 'INTERN', 5, '21-23 Nguyễn Thị Minh Khai, Bến Nghé, District 1, Ho Chi Minh'),
('Thực Tập Sinh Thiết Kế', 'benefit-content-10.txt','requirement-content-10.txt', 'responsibility-content-10.txt','From $2,500', '2020-07-06', '2020-08-06', 'INTERN', 5, '21-23 Nguyễn Thị Minh Khai, Bến Nghé, District 1, Ho Chi Minh'),
('Thực Tập Sinh Quản Trị Nhân Sự', 'benefit-content-11.txt','requirement-content-11.txt', 'responsibility-content-11.txt','From $2,500', '2020-07-06', '2020-08-06', 'FRESHER', 6, '21-23 Nguyễn Thị Minh Khai, Bến Nghé, District 1, Ho Chi Minh'),
('Product Owner', 'benefit-content-12.txt','requirement-content-12.txt', 'responsibility-content-12.txt','From $2,500', '2020-07-06', '2020-08-06', 'INTERN', 6, '21-23 Nguyễn Thị Minh Khai, Bến Nghé, District 1, Ho Chi Minh'),
('Thực Tập Sinh Đào Tạo Và Phát Triển', 'benefit-content-13.txt','requirement-content-13.txt', 'responsibility-content-13.txt','From $2,500', '2020-07-06', '2020-08-06', 'INTERN', 7, '21-23 Nguyễn Thị Minh Khai, Bến Nghé, District 1, Ho Chi Minh'),
('JAVA INTERNSHIP PROGRAM', 'benefit-content-14.txt','requirement-content-14.txt', 'responsibility-content-14.txt','From $2,500', '2020-07-06', '2020-08-06', 'INTERN', 7, '21-23 Nguyễn Thị Minh Khai, Bến Nghé, District 1, Ho Chi Minh'),
('Thực Tập Sinh Thiết Kế', 'benefit-content-15.txt','requirement-content-15.txt', 'responsibility-content-15.txt','From $2,500', '2020-07-06', '2020-08-06', 'FRESHER', 8, '21-23 Nguyễn Thị Minh Khai, Bến Nghé, District 1, Ho Chi Minh'),
('Thực Tập Sinh Quản Trị Nhân Sự', 'benefit-content-16.txt','requirement-content-16.txt', 'responsibility-content-16.txt','From $2,500', '2020-07-06', '2020-08-06', 'INTERN', 8, '21-23 Nguyễn Thị Minh Khai, Bến Nghé, District 1, Ho Chi Minh'),
('Internship Robotics Process Automation (RPA)', 'benefit-content-17.txt','requirement-content-17.txt', 'responsibility-content-17.txt','From $2,500', '2020-07-06', '2020-08-06', 'INTERN', 9, '21-23 Nguyễn Thị Minh Khai, Bến Nghé, District 1, Ho Chi Minh'),
('Product Owner', 'benefit-content-18.txt','requirement-content-18.txt', 'responsibility-content-18.txt','From $2,500', '2020-07-06', '2020-08-06', 'INTERN', 9, '21-23 Nguyễn Thị Minh Khai, Bến Nghé, District 1, Ho Chi Minh');

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