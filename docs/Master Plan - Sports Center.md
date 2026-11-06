# KẾ HOẠCH TRIỂN KHAI DỰ ÁN: SPORTS CENTER MANAGEMENT SYSTEM

**Thời gian thực hiện:** 4 Tuần | **Quy mô:** 2 Thành viên (Mô hình Fullstack - Phân chia theo Feature)

**Phương pháp:** Agile/Scrum rút gọn (Sprints 1 tuần)

**Mục tiêu:** Cả 2 thành viên đều nắm vững Fullstack (Database -> API -> Frontend) và áp dụng kiến thức Software Requirement & Software Testing.

## 1. PHÂN CHIA PHẠM VI DỰ ÁN NGUYÊN TẮC (FEATURE MATRIX)

Mỗi thành viên phụ trách trọn gói (End-to-End) các tính năng được phân công: tự thiết kế DB Schema liên quan, tự làm API Backend, tự dựng UI Frontend và tự viết Test Case cho tính năng đó.

| Cụm Tính Năng (Module) | Thành Viên Phụ Trách | Nội Dung Công Việc Fullstack | 
| ----- | ----- | ----- | 
| **Module 0: Core Architecture** | **Chung (Đạt và Tài)** | Setup Base Source Code (FE + BE), Database Core, Authentication System (JWT/Session). | 
| **Module 1: Management & Facilities** | **Hoàng Đạt** | Quản lý Loại sân, Sân thể thao, Khung giờ, Bảng giá, Dịch vụ đi kèm (Thuê dụng cụ, Nước uống). | 
| **Module 2: Booking & Payment** | **Đức Tài** | Luồng Đặt sân (Booking Flow), Kiểm tra trùng lịch, Thanh toán (QR/Gateway/Tiền mặt), Lịch sử giao dịch. | 
| **Module 3: Schedule & Staffing** | **Hoàng Đạt** | Quản lý Lịch tập HLV (Personal Trainer), Phân công ca làm việc nhân viên, Check-in khách hàng tại sân. | 
| **Module 4: Customer & Analytics** | **Đức Tài** | Quản lý Thông tin Khách hàng, Gói hội viên (Membership), Báo cáo - Thống kê Doanh thu & Tần suất sử dụng sân. | 

## 2. LỊCH TRÌNH CHI TIẾT THEO TỪNG TUẦN (4-WEEK SPRINT PLAN)

### 🚀 TUẦN 1: REQUIREMENT, ARCHITECTURE & AUTHENTICATION

* **Mục tiêu chung:** Chốt Yêu cầu hệ thống, Dựng Architecture nền tảng, Làm xong tính năng Phân quyền/Xác thực.

* **Áp dụng Môn học:** Software Requirements (Use Case, User Story, ERD, SRS Document).

* **Công việc chung:**

  1. Thảo luận & Viết tài liệu SRS cơ bản (Scope, Non-functional Requirements).

  2. Thiết kế ERD Database tổng thể (Users, Roles, Courts, Slots, Bookings, Services, Payments).

  3. Khởi tạo Git Repository, Setup dự án Base (Frontend Framework + Backend Framework + DB Connection).

* **Hoàng Đạt:**

  * **Requirement:** Đóng vai BA dựng Use Case Diagram & User Stories cho Module Management & Staffing.

  * **Implementation:** Xây dựng Module Authentication & User Management (Register, Login, JWT/Session, Role-based Middleware: Admin, Staff, Customer).

  * **Testing:** Viết Unit Test cho Auth Controller & Password Hashing.

* **Đức Tài:**

  * **Requirement:** Đóng vai BA dựng Use Case Diagram & User Stories cho Module Booking & Customer.

  * **Implementation:** Xây dựng Base UI Layout (Sidebar, Header, Navigation) + Setup State Management (Redux/Zustand/Context) & Axios/Fetch Interceptor.

  * **Testing:** Viết Test Plan tổng quan cho dự án (Test Strategy, Test Environment).

### ⚽ TUẦN 2: SPRINT 1 - MASTER DATA & CORE BOOKING FLOW

* **Mục tiêu chung:** Hoàn thành các tính năng danh mục quản lý sân và luồng đặt sân cốt lõi.

* **Áp dụng Môn học:** Software Testing (Test Case Design - Equivalence Partitioning & Boundary Value Analysis).

* **Hoàng Đạt (Management & Facilities Feature):**

  * **Backend:** CRUD API Quản lý Sân (Sân bóng, Badminton, Tennis...), Quản lý Khung giờ (Time Slots), Quản lý Giá theo giờ peak/off-peak.

  * **Frontend:** Dựng màn hình Admin/Staff Quản lý Sân, Thiết lập Khung giờ và Bảng giá.

  * **Testing:** Viết Test Case kiểm thử các điều kiện ràng buộc dữ liệu đầu vào (Form Validations, Biên số lượng sân, Giá tiền negative).

* **Đức Tài (Booking Flow Feature):**

  * **Backend:** API Tìm kiếm sân trống theo Ngày/Giờ, Logic xử lý Đặt sân (Check Trùng Lịch / Overlapping Bookings).

  * **Frontend:** Màn hình Khách hàng xem sơ đồ sân trống (Calendar/Grid View) và Đặt lịch.

  * **Testing:** Viết Test Case kỹ thuật Black-box (Boundary Value Analysis cho thời gian đặt, trùng khung giờ).

### 💳 TUẦN 3: SPRINT 2 - EXTENDED SERVICES, PAYMENT & ANALYTICS

* **Mục tiêu chung:** Tích hợp Thanh toán, Dịch vụ phụ trợ, Quản lý Nhân viên/HLV và Báo cáo Thống kê.

* **Áp dụng Môn học:** Software Testing (Decision Table & State Transition Testing cho Luồng Thanh toán).

* **Hoàng Đạt (Schedule & Staffing Feature):**

  * **Backend:** API Quản lý Dịch vụ đi kèm (Thuê vợt, nước uống...), API Lịch làm việc HLV/Nhân viên, API Check-in sân.

  * **Frontend:** Màn hình Đặt kèm dịch vụ, Màn hình Lịch dạy HLV và Check-in cho Staff.

  * **Testing:** Áp dụng Decision Table Testing cho logic phân công ca dạy HLV và dịch vụ đi kèm.

* **Đức Tài (Payment & Analytics Feature):**

  * **Backend:** API Tích hợp Cổng thanh toán (VNPay/ZaloPay/Momo Sandbox hoặc QR Static), API Thống kê Doanh thu (Theo ngày/tháng/loại sân).

  * **Frontend:** Màn hình Thanh toán, Màn hình Lịch sử Đặt sân, Dashboard Báo cáo Biểu đồ (Charts) cho Admin.

  * **Testing:** Áp dụng State Transition Testing kiểm thử các trạng thái Đơn hàng/Thanh toán (`Pending` -> `Paid` -> `Cancelled` -> `Refunded`).

### 🧪 TUẦN 4: SYSTEM TESTING, BUG FIXING & DEPLOYMENT

* **Mục tiêu chung:** Kiểm thử toàn diện, Đóng gói Hệ thống, Viết Báo cáo, Deploy và Chuẩn bị Demo.

* **Áp dụng Môn học:** Integration Testing, System Testing, Requirement Traceability Matrix (RTM), Bug Report.

* **Công việc chung:**

  1. **Cross-Testing (Kiểm thử chéo):** Hoàng Đạt thực hiện Test toàn bộ tính năng của Đức Tài và ngược lại để phát hiện Bug độc lập.

  2. **Requirement Traceability Matrix (RTM):** Lập bảng đối soát toàn bộ Requirement từ Tuần 1 với Chức năng thực tế và Test Case đã pass.

  3. **Fix Bug & Refactor Code:** Tối ưu hóa Database Query, cải thiện UX/UI, xử lý Edge Cases.

  4. **Deployment:** Deploy Frontend (Vercel/Netlify), Backend & Database (Render/Railway/Supabase/Aiven).

  5. **Báo cáo & Demo:** Chuẩn bị Slide báo cáo, kịch bản Demo dự án và Báo cáo Tổng kết Kiểm thử (Test Summary Report).

## 3. QUY TRÌNH HỢP TÁC KỸ THUẬT & HỖ TRỢ LẪN NHAU

1. **Git Workflow:**

   * Nhánh `main`: Chỉ merge khi tính năng đã pass Test.

   * Nhánh `dev`: Nhánh tích hợp chung.

   * Nhánh tính năng: `feature/Hoang-Dat-court-management`, `feature/Duc-Tai-booking-system`.

2. **Code Review & Pair Programming:**

   * Cuối mỗi ngày hoặc trước khi merge Pull Request (PR), hai thành viên dành 15-20 phút Review Code cho nhau để nắm toàn bộ luồng logic của bạn mình.

3. **API Contract First:**

   * Trước khi viết code cho từng Feature, 2 thành viên phải thống nhất cấu trúc JSON Request/Response (API Contract) để Frontend/Backend làm việc không bị nghẽn.