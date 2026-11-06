# KẾ HOẠCH BẢNG PHÂN CÔNG TỪNG NGÀY (28-DAY TASK BREAKDOWN)

**Dự án:** Hệ thống Quản lý Trung tâm Thể thao (Sports Center Management System)  
**Thời gian:** 4 Tuần (28 Ngày) \| **Quy mô:** 2 Lập trình viên (Hoàng Đạt & Đức Tài)  
**Phương pháp:** Fullstack Feature-based (Phụ trách trọn gói DB \- BE \- FE \- Test)

---

## 📌 TUẦN 1: REQUIREMENT, core ARCHITECTURE & AUTHENTICATION (MODULE 0\)

### 🔹 Ngày 1: Setup Môi trường & Khởi tạo Base Source Code

* **\[Chung\]**  
  - [x] Thống nhất Tech Stack (FE: React/Vite/Tailwind, BE: Node.js/Express, DB: PostgreSQL/MySQL).  
  - [ ] Tạo Git Repository, thiết lập `main` (Protected), `dev` và quy tắc đặt tên branch (`feature/name-task`).  
* **\[Hoàng Đạt\]**  
  - [ ] Setup cấu trúc thư mục Backend Base (Controllers, Routes, Middlewares, Services, Configs, DB Client).  
  - [ ] Thiết lập file `.env.example` và cấu hình kết nối CSDL Local.  
* **\[Đức Tài\]**  
  - [ ] Setup cấu trúc thư mục Frontend Base (Pages, Components, Layouts, Services, Hooks, Store).  
  - [ ] Cấu hình TailwindCSS, React Router DOM, và Alias Path (`@/`).

### 🔹 Ngày 2: Phân tích Yêu cầu & Thiết kế CSDL (Requirements & DB Modeling)

* **\[Chung\]**  
  - [ ] Thiết kế ERD Database tổng thể cho 7 entities cốt lõi: `Users`, `Roles`, `Courts`, `Slots`, `Bookings`, `Services`, `Payments`.  
* **\[Hoàng Đạt\]**  
  - [ ] Viết tài liệu Use Case Specification & User Stories (kèm AC) cho Module 1 (Facilities) & Module 3 (Staffing).  
* **\[Đức Tài\]**  
  - [ ] Viết tài liệu Use Case Specification & User Stories (kèm AC) cho Module 2 (Booking) & Module 4 (Customer/Analytics).

### 🔹 Ngày 3: Triển khai Authentication & Base UI Layout

* **\[Hoàng Đạt\]**  
  - [ ] Tạo Migration/Schema cho bảng `Users` và `Roles`.  
  - [ ] Viết API Backend cho Đăng ký (`POST /api/v1/auth/register`) & Đăng nhập (`POST /api/v1/auth/login`) kèm mã hóa mật khẩu (`bcrypt`).  
* **\[Đức Tài\]**  
  - [ ] Dựng khung UI cơ bản (Base Layout): Navigation Bar, Sidebar Dashboard, Top Header, Footer.  
  - [ ] Dựng Responsive Main Content Container cho cả 3 vai trò (Admin, Staff, Customer).

### 🔹 Ngày 4: JWT, Authorization & State Management Integration

* **\[Hoàng Đạt\]**  
  - [ ] Triển khai JWT Token (Access Token \+ Refresh Token logic).  
  - [ ] Viết Middleware phân quyền Role-based Authorization (`verifyTokenAndRole(['Admin', 'Staff', 'Customer'])`).  
* **\[Đức Tài\]**  
  - [ ] Dựng State Management (`Zustand` hoặc `Redux Toolkit`) lưu thông tin `AuthStore` (user info, token, login state).  
  - [ ] Cấu hình `Axios Interceptor` tự động gắn Bearer Token vào Request Header và bắt lỗi $401$/$403$.

### 🔹 Ngày 5: Kiểm thử Nền tảng (Testing Base Architecture)

* **\[Hoàng Đạt\]**  
  - [ ] Viết Unit Test cho Auth Controller, Password Hashing và JWT Generation (sử dụng Jest / Supertest).  
* **\[Đức Tài\]**  
  - [ ] Xây dựng tài liệu Master Test Plan tổng quan (Test Strategy, Test Scope, Test Environment, Entry/Exit Criteria).

### 🔹 Ngày 6: Ghép Nối UI Auth & Backend API (End-to-End Auth)

* **\[Chung\]**  
  - [ ] Ghép UI Đăng nhập/Đăng ký (sử dụng React Hook Form \+ Zod validation) với API Auth Backend.  
  - [ ] Kiểm thử luồng Đăng nhập \-\> Lưu Token \-\> Route Guards (Chặn người dùng chưa đăng nhập vào Dashboard).

### 🔹 Ngày 7: Code Review Tuần 1 & Báo cáo Tiến độ Sprint 1

* **\[Chung\]**  
  - [ ] Code Review chéo: Hoàng Đạt review FE của Tài, Đức Tài review BE của Đạt.  
  - [ ] Lập bảng RTM (Requirement Traceability Matrix) ban đầu cho Module 0\.  
  - [ ] Merge code tuần 1 vào nhánh `dev`.

---

## ⚽ TUẦN 2: SPRINT 1 \- MASTER DATA & CORE BOOKING FLOW (MODULE 1 & 2\)

### 🔹 Ngày 8: Chốt API Contract & Migration Data

* **\[Hoàng Đạt\]**  
  - [ ] Tạo Migration Schema cho `CourtTypes`, `Courts`, `Slots`, `PriceRules`.  
  - [ ] Viết Swagger/Postman API Documentation cho các API Quản lý Sân.  
* **\[Đức Tài\]**  
  - [ ] Tạo Migration Schema cho `Bookings`, `BookingDetails`.  
  - [ ] Thống nhất API Contract tìm kiếm sân và tạo đơn đặt sân.

### 🔹 Ngày 9: Backend Feature Implementation (Facilities & Search API)

* **\[Hoàng Đạt\]**  
  - [ ] Viết API CRUD Sân thể thao (`/api/v1/courts`) & Khung giờ (`/api/v1/slots`).  
  - [ ] Viết API thiết lập bảng giá theo giờ Cao điểm / Thường (Peak/Off-peak).  
* **\[Đức Tài\]**  
  - [ ] Viết API Lọc và Tìm kiếm Sân trống theo Ngày, Loại sân, Khung giờ (`GET /api/v1/bookings/search`).  
  - [ ] Viết Thuật toán kiểm tra trùng lịch đặt sân (Overlapping Booking Validation).

### 🔹 Ngày 10: Frontend UI Implementation (Facilities Management & Booking Grid)

* **\[Hoàng Đạt\]**  
  - [ ] Dựng UI Admin/Staff Quản lý Sân (Danh sách sân, Modal Thêm/Sửa/Xóa, Tải ảnh sân).  
  - [ ] Dựng UI Cấu hình Khung giờ và Thiết lập Bảng giá theo ca.  
* **\[Đức Tài\]**  
  - [ ] Dựng UI Khách hàng xem Sơ đồ sân trống (Grid View/Calendar View dạng Time-slot Matrix).  
  - [ ] Dựng Form Đặt lịch nhanh (Chọn sân, chọn slot, hiển thị tổng tiền thời gian thực).

### 🔹 Ngày 11: Tích hợp Luồng Đặt Sân Cốt Lõi (Core Booking Integration)

* **\[Hoàng Đạt\]**  
  - [ ] Xử lý Edge Cases trên Backend: Chặn xóa sân đang có lịch đặt active, khóa slot bảo trì.  
* **\[Đức Tài\]**  
  - [ ] Ghép UI Đặt sân với API Backend. Xử lý trạng thái UI khi Slot vừa bị người khác chọn (Real-time hoặc Optimistic Locking).

### 🔹 Ngày 12: Thiết kế & Thực thi Test Case (Testing Sprint 1\)

* **\[Hoàng Đạt\]**  
  - [ ] Áp dụng Kỹ thuật **Boundary Value Analysis (BVA)** & **Equivalence Partitioning (EP)** viết Test Case kiểm thử Form thêm sân và Giá tiền (giá âm, giá $0$, số lượng sân biên).  
* **\[Đức Tài\]**  
  - [ ] Áp dụng Kỹ thuật **Equivalence Partitioning (EP)** viết Test Case kiểm thử logic trùng lịch (Trùng 1 phần slot, trùng toàn bộ slot, đặt thời gian quá khứ).

### 🔹 Ngày 13: Cross-Testing & Bug Fixing Tuần 2

* **\[Chung\]**  
  - [ ] Hoàng Đạt test toàn bộ UI/API Đặt sân của Đức Tài.  
  - [ ] Đức Tài test toàn bộ UI/API Quản lý Sân của Hoàng Đạt.  
  - [ ] Log Bug vào Bug Tracker và tiến hành sửa lỗi khẩn cấp.

### 🔹 Ngày 14: Sprint 1 Review & Merge Code

* **\[Chung\]**  
  - [ ] Đánh giá hoàn thành Sprint 1 (Đạt yêu cầu Đặt sân không trùng lịch).  
  - [ ] Cập nhật RTM Matrix cho Module 1 & 2\.  
  - [ ] Merge nhánh tính năng vào `dev`.

---

## 💳 TUẦN 3: SPRINT 2 \- EXTENDED SERVICES, PAYMENT & ANALYTICS (MODULE 3 & 4\)

### 🔹 Ngày 15: Schema Migration & API Contract cho Dịch vụ Phụ trợ & Thanh toán

* **\[Hoàng Đạt\]**  
  - [ ] Tạo Migration Schema cho `Services` (Nước uống, cho thuê vợt/bóng), `StaffSchedules` (Lịch ca làm), `PTSchedules` (Lịch HLV).  
* **\[Đức Tài\]**  
  - [ ] Tạo Migration Schema cho `Payments`, `Memberships`, `Promotions`.  
  - [ ] Thiết kế API Payload tích hợp Thanh toán (VNPay / MoMo Sandbox / VietQR Static).

### 🔹 Ngày 16: Backend Implementation (Staffing, Services & Payment Gateway)

* **\[Hoàng Đạt\]**  
  - [ ] Viết API CRUD Dịch vụ đi kèm & API Phân công Lịch dạy/Lịch trực cho Nhân viên/HLV.  
  - [ ] Viết API Check-in khách hàng tại sân (`POST /api/v1/checkin`).  
* **\[Đức Tài\]**  
  - [ ] Viết API Khởi tạo Thanh toán (`POST /api/v1/payments/create-url`).  
  - [ ] Viết API IPN/Webhook nhận kết quả phản hồi từ Cổng thanh toán để cập nhật trạng thái Booking.

### 🔹 Ngày 17: Frontend UI Implementation (Staff Workspace & Payment Flow)

* **\[Hoàng Đạt\]**  
  - [ ] Dựng UI Màn hình Staff Check-in khách hàng (Nhập mã booking hoặc quét QR mã đặt sân).  
  - [ ] Dựng UI Quản lý Lịch dạy HLV và Phụ thu dịch vụ đi kèm tại sân.  
* **\[Đức Tài\]**  
  - [ ] Dựng UI Màn hình Thanh toán (Chọn phương thức: VNPay, Mã VietQR, Tiền mặt).  
  - [ ] Dựng UI Màn hình Lịch sử Giao dịch và Chi tiết Đơn đặt sân của Khách hàng.

### 🔹 Ngày 18: Dashboard Analytics & Membership Management

* **\[Đức Tài\]**  
  - [ ] Viết API Thống kê Doanh thu (theo Ngày/Tháng/Loại sân) & Tần suất sử dụng sân.  
  - [ ] Dựng Dashboard Admin tích hợp Biểu đồ (Recharts/Chart.js) hiển thị báo cáo Doanh thu và Tỷ lệ lấp đầy sân.  
* **\[Hoàng Đạt\]**  
  - [ ] Hoàn thiện tính năng bán Gói tập/Hội viên (Membership Pass) và giảm giá đi kèm.

### 🔹 Ngày 19: Advanced Testing (Decision Table & State Transition)

* **\[Hoàng Đạt\]**  
  - [ ] Viết Test Case áp dụng **Decision Table Testing** cho logic phân công HLV và tính phí dịch vụ phụ trợ.  
* **\[Đức Tài\]**  
  - [ ] Viết Test Case áp dụng **State Transition Testing** cho Chuyển đổi Trạng thái Đơn hàng:  
    `Pending` $\rightarrow$ `Paid` $\rightarrow$ `Checked-in` $\rightarrow$ `Completed` (hoặc `Cancelled` $\rightarrow$ `Refunded`).

### 🔹 Ngày 20: Cross-Testing & Bug Fix Sprint 2

* **\[Chung\]**  
  - [ ] Thực hiện Kiểm thử Chéo toàn bộ tính năng Module 3 & 4\.  
  - [ ] Sửa lỗi UI/UX, xử lý các lỗi đứt gãy luồng thanh toán khi timeout.

### 🔹 Ngày 21: Sprint 2 Review & Pre-Release Integration

* **\[Chung\]**  
  - [ ] Kiểm tra mức độ hoàn thiện tính năng đạt 100% phạm vi cam kết.  
  - [ ] Merge toàn bộ code Module 3 & 4 vào nhánh `dev`.

---

## 🧪 TUẦN 4: SYSTEM TESTING, BUG FIXING & DEPLOYMENT

### 🔹 Ngày 22: Integration & System Testing (Toàn hệ thống)

* **\[Chung\]**  
  - [ ] Merge nhánh `dev` vào `main` trên bản staging local.  
  - [ ] Thực hiện System Testing theo Kịch bản End-to-End:  
    *Đăng ký TK Customer* $\rightarrow$ *Đặt sân \+ Chọn dịch vụ* $\rightarrow$ *Thanh toán Online* $\rightarrow$ *Staff Check-in tại sân* $\rightarrow$ *Admin xem Báo cáo doanh thu*.

### 🔹 Ngày 23: Complete Requirement Traceability Matrix (RTM) & Bug Triage

* **\[Chung\]**  
  - [ ] Khóa sổ RTM: Đảm bảo $100\%$ Use Cases có Test Case tương ứng và đã PASS.  
  - [ ] Tổng hợp tất cả Bug tồn đọng vào Bảng Bug Report (phân loại Critical, High, Medium, Low).

### 🔹 Ngày 24: Bug Fixing & Refactoring Sprint

* **\[Hoàng Đạt\]**  
  - [ ] Fix tất cả các lỗi thuộc Module 1 & 3\. Refactor Code backend, tối ưu câu truy vấn Database (Index, Query optimization).  
* **\[Đức Tài\]**  
  - [ ] Fix tất cả các lỗi thuộc Module 2 & 4\. Tối ưu UX/UI Frontend, cải thiện tốc độ tải trang và Error Handling.

### 🔹 Ngày 25: Security, Rate Limiting & Final Polish

* **\[Hoàng Đạt\]**  
  - [ ] Thêm CORS, Helmet, Rate Limiting cho Backend API để chống Brute-force.  
  - [ ] Kiểm tra lỗ hổng Bảo mật SQL Injection & XSS.  
* **\[Đức Tài\]**  
  - [ ] Kiểm tra hiển thị Responsive trên Mobile/Tablet.  
  - [ ] Bổ sung các trang thông báo lỗi chuẩn ($404$ Not Found, $500$ Server Error).

### 🔹 Ngày 26: Deployment (Đưa hệ thống lên Cloud)

* **\[Hoàng Đạt\]**  
  - [ ] Deploy Database lên Cloud (Supabase / Aiven / PostgreSQL Render).  
  - [ ] Deploy Backend Node.js API lên Render / Railway / Heroku.  
* **\[Đức Tài\]**  
  - [ ] Deploy Frontend React App lên Vercel / Netlify.  
  - [ ] Cấu hình Domain & Environment Variables (CORS origins, API Base URL) cho môi trường Production.

### 🔹 Ngày 27: Smoke Test on Production & Final Demo Setup

* **\[Chung\]**  
  - [ ] Thực hiện Smoke Testing trực tiếp trên URL Production đã deploy.  
  - [ ] Chuẩn bị bộ Data mẫu (Seed Data) chuẩn đẹp cho ngày Demo (Các loại sân, Khung giờ, Tài khoản Admin/Staff/Customer test).

### 🔹 Ngày 28: Tổng kết Tài liệu & Chuẩn bị Báo cáo Project

* **\[Chung\]**  
  - [ ] Hoàn thiện Tài liệu SRS, ERD Diagram, Use Case Specification final.  
  - [ ] Tổng hợp Báo cáo Kiểm thử (Test Summary Report).  
  - [ ] Chuẩn bị Slide Báo cáo và Kịch bản Demo (Demo Script) cho buổi nghiệm thu dự án.

---

## 📊 MA TRẬN THEO DÕI TIẾN ĐỘ HÀNG NGÀY (DAILY CHECKLIST OVERVIEW)

| Tuần | Mục tiêu chính | Đầu ra quan trọng (Key Deliverable) | Tình trạng |
| :---- | :---- | :---- | :---: |
| **Tuần 1** | Requirement, Arch & Auth | Base Code, Database Schema, User Login/Register, Test Plan | \[ \] |
| **Tuần 2** | Master Data & Core Booking | CRUD Sân, Sơ đồ sân trống, API Đặt sân không trùng | \[ \] |
| **Tuần 3** | Payment, Staff & Analytics | Thanh toán QR/Gateway, Check-in sân, Dashboard Doanh thu | \[ \] |
| **Tuần 4** | System Test & Deployment | System Test Pass, Fix $100\%$ Bug High, Live Web URL, Slide Demo | \[ \] |

&nbsp;