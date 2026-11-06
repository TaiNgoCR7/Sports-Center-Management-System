# 🏟️ Sports Center Management System

> **Hệ thống Quản lý Trung tâm Thể thao Đa năng**  
> Dự án Fullstack Web hoàn chỉnh kết hợp quy trình **Software Requirements (SRS)** và **Software Testing (Master Test Plan)** chuẩn doanh nghiệp.

[![React](https://img.shields.io/badge/Frontend-React_18_%2B_Vite-61DAFB?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind_CSS_v4-38BDF8?logo=tailwindcss)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js_%2B_Express-339933?logo=nodedotjs)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-4169E1?logo=postgresql)](https://www.postgresql.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 📌 MỤC LỤC
- [Giới thiệu Dự án](#-giới-thiệu-dự-án)
- [Tính năng Cốt lõi](#-tính-năng-cốt-lõi)
- [Công nghệ Sử dụng](#-công-nghệ-sử-dụng)
- [Cấu trúc Dự án](#-cấu-trúc-dự-án)
- [Hướng dẫn Cài đặt & Khởi chạy](#-hướng-dẫn-cài-đặt--khởi-chạy)
- [Quy trình Quản lý & Kiểm thử](#-quy-trình-quản-lý--kiểm-thử)
- [Thành viên Phát triển](#-thành-viên-phát-triển)

---

## 📖 GIỚI THIỆU DỰ ÁN

**Sports Center Management System** giải quyết triệt để các bài toán vận hành thực tế tại các trung tâm thể thao phức hợp (Bóng đá, Cầu lông, Tennis, Pickleball):
- **Chống trùng lịch đặt sân (Anti-overlapping algorithm):** Đảm bảo xử lý đồng thời (Concurrency control) khi nhiều khách hàng cùng chọn một khung giờ.
- **Tối ưu hóa doanh thu:** Quản lý linh hoạt bảng giá theo ca cao điểm/thường, dịch vụ đi kèm và gói hội viên.
- **Minh bạch hóa quản lý:** Phân quyền chặt chẽ 3 vai trò Admin, Staff và Customer.

---

## ✨ TÍNH NĂNG CỐT LÕI

### 1. 👤 Khách hàng (Customer)
* **Tìm kiếm & Đặt sân:** Lọc sân trống theo Ngày, Loại sân, Khung giờ với giao diện Ma trận thời gian thực (Grid Matrix).
* **Thanh toán tích hợp:** Hỗ trợ thanh toán qua Cổng thanh toán / Mã QR tĩnh / Tiền mặt.
* **Lịch sử & Gói tập:** Quản lý lịch đặt sân cá nhân và đăng ký gói hội viên ưu đãi.

### 2. 👨‍💼 Nhân viên (Staff)
* **Check-in tự động:** Xác thực mã đặt sân (Booking ID / QR Code) khi khách đến sân.
* **Quản lý Dịch vụ:** Bán kèm nước uống, cho thuê dụng cụ thể thao tại chỗ.
* **Lịch phân công:** Xem ca trực và hỗ trợ khách hàng hủy/đổi lịch đặt.

### 3. 🛡️ Quản trị viên (Admin)
* **Quản lý Sân & Bảng giá:** CRUD danh sách sân, thiết lập hệ số giá ca cao điểm (Peak-hour pricing).
* **Quản lý Nhân sự:** Phân công HLV (Personal Trainer) và ca làm việc cho nhân viên.
* **Dashboard Báo cáo:** Biểu đồ phân tích doanh thu theo thời gian, tỷ lệ lấp đầy sân và sản phẩm bán chạy.

---

## 🛠️ CÔNG NGHỆ SỬ DỤNG

| Tầng Công Nghệ | Công Nghệ / Thư Viện Sử Dụng |
| :--- | :--- |
| **Frontend** | ReactJS (Vite), Tailwind CSS v4, Axios, Zustand, React Router DOM v6 |
| **Backend** | Node.js, Express.js, JWT Authentication, Bcrypt, CORS |
| **Database** | PostgreSQL (Relational Database) |
| **Testing** | Jest, Supertest, Manual Black-box Testing (EP, BVA, Decision Table) |
| **DevOps & Tooling** | Git, GitHub, VS Code, Postman, Vercel / Render |

---

## 📂 CẤU TRÚC DỰ ÁN

```text
sports-center-management-system/
├── docs/                           # Tài liệu Yêu cầu (SRS) & Kiểm thử (Test Plan)
│   ├── srs/                        # Use Case Specification & User Stories
│   ├── erd/                        # Sơ đồ CSDL ERD & Script SQL DDL
│   └── testing/                    # Master Test Plan, Test Cases & RTM Matrix
├── backend/                        # Node.js + Express API Server (Layered Architecture)
│   ├── src/
│   │   ├── config/                 # Cấu hình kết nối DB PostgreSQL & JWT
│   │   ├── controllers/            # Xử lý HTTP Request/Response
│   │   ├── services/               # Business Logic & Chống trùng lịch
│   │   ├── models/                 # Query Builders SQL
│   │   ├── routes/                 # Express Routers
│   │   └── middlewares/            # Auth JWT & Role-based Authorization
│   └── server.js
├── frontend/                       # ReactJS SPA Client (Feature-based Architecture)
│   ├── src/
│   │   ├── components/             # Reusable UI Components
│   │   ├── pages/                  # Route Pages (Booking, Dashboard, Auth)
│   │   ├── services/               # Axios Interceptors API client
│   │   ├── store/                  # Global State (AuthStore)
│   │   └── index.css               # Import Tailwind CSS v4
│   └── vite.config.js              # Vite config & Path Alias (@/)