# 🚀 HƯỚNG DẪN QUY TRÌNH GIT & GITHUB CHUYÊN NGHIỆP (GIT WORKFLOW CHEAT SHEET)

> **Tài liệu hướng dẫn dành cho Lập trình viên:** Dễ hiểu, chuẩn mực, áp dụng cho dự án *Sports Center Management System* và mọi dự án phần mềm tương lai.

---

## 💡 1. MÔ HÌNH TƯ DUY (MENTAL MODEL): GIT HOẠT ĐỘNG THẾ NÀO?

Hãy hình dung quy trình quản lý code giống như **Quản lý Hồ sơ Doanh nghiệp**:

```text
[Bàn làm việc riêng]  --->  [Hộp gom tài liệu]  --->  [Sổ nhật ký local]  --->  [Tủ hồ sơ chung GitHub]
(Working Directory)         (Staging Area)           (Local Repository)          (Remote Repository)
     Code sửa/tạo               git add .              git commit -m "..."           git push origin ...
```

* **Working Directory (Bàn làm việc):** Nơi bạn trực tiếp gõ code, tạo folder (`docs`, `backend`, `frontend`).
* **Staging Area (`git add .`):** Hộp gom tài liệu. Bạn nhặt những file đã sửa dán nhãn chuẩn bị gửi đi.
* **Local Repository (`git commit`):** Sổ nhật ký cá nhân dưới máy. Lưu lại một "bức ảnh" (Snapshot) trạng thái code của bạn tại thời điểm đó kèm lời nhắn.
* **Remote Repository (`git push`):** Tủ hồ sơ chung trực tuyến trên mạng (GitHub). Nơi đồng đội lấy code của bạn về.

---

## 🌳 2. CẤU TRÚC NHÁNH (BRANCH ARCHITECTURE)

Dự án sử dụng **3 cấp nhánh chuẩn (Git Flow)**:

1. **`main` (Production):** 🛑 **TẬN TỤY VÀ NGUYÊN BẢN.** Chỉ chứa code 100% chạy ổn định dùng để nộp bài hoặc demo cuối tuần/cuối Sprint. **Không bao giờ code trực tiếp trên `main`.**
2. **`dev` (Development):** 🔄 **SÂN CHƠI CHUNG.** Nơi tích hợp toàn bộ code tính năng của tất cả các thành viên trong nhóm.
3. **`feature/ten-nguoi-ten-task` (Feature Branches):** 🛠️ **HỘC TỦ CÁ NHÂN.** Nhánh làm việc riêng của từng người (Ví dụ: `feature/Duc-Tai-booking-system`, `feature/Hoang-Dat-facilities`).

---

## 📝 3. QUY TRÌNH 3 BƯỚC CODE & PUSH HÀNG NGÀY (DAILY WORKFLOW)

Mỗi khi làm xong một tính năng hoặc tạo xong một file/folder mới ở máy local, hãy thực hiện theo đúng 3 bước:

### 📌 Bước 1: Kiểm tra & Gom file (Staging)
```bash
# 1. Kiểm tra xem máy bạn đang có file nào mới/sửa đổi (file màu đỏ/vàng)
git status

# 2. Gom tất cả thay đổi vào Hộp chuẩn bị lưu
git add .
```

### 📌 Bước 2: Dán nhãn mô tả (Commit)
Nội dung commit nên viết theo chuẩn **Conventional Commits**:
* `feat:` Tính năng mới (Feature)
* `fix:` Sửa lỗi (Bug fix)
* `docs:` Sửa tài liệu
* `refactor:` Tối ưu code nhưng không thay đổi tính năng

```bash
git commit -m "feat(backend): add courts and slots search api"
```

### 📌 Bước 3: Đẩy code lên GitHub (Push)
```bash
# Đẩy code lên nhánh riêng của bạn trên GitHub
git push origin feature/Duc-Tai-base-layout
```

---

## 🔀 4. QUY TRÌNH TẠO PULL REQUEST (PR) & MERGE VÀO `dev`

Sau khi `git push` thành công:

1. Truy cập vào Repository trên Web GitHub.
2. Bấm vào nút màu vàng **`Compare & pull request`**.
3. **ĐẢM BẢO CHỌN NGUYÊN TẮC HƯỚNG MERGE:**
   * **Base (Nơi nhận):** `dev` $\leftarrow$ **Compare (Nơi gửi):** `feature/Duc-Tai-base-layout`
4. Viết tiêu đề PR ngắn gọn, mô tả những gì đã làm.
5. Bấm nút **`Create pull request`**.
6. Thành viên còn lại (Hoàng Đạt hoặc Đức Tài) mở PR, đọc lướt qua code (Code Review) và bấm **`Merge pull request`** $\rightarrow$ **`Confirm merge`**.

---

## ⬇️ 5. QUY TRÌNH KÉO CODE MỚI VỀ MÁY (DAILY SYNC / PULL)

Mỗi buổi sáng trước khi bắt đầu viết code mới, hoặc khi bạn bè vừa merge code mới vào `dev`, bạn cần cập nhật máy mình:

### Bước 5.1: Cập nhật nhánh `dev` dưới máy local
```bash
# 1. Chuyển sang đứng ở nhánh dev local
git checkout dev

# 2. Kéo code mới nhất từ dev trên GitHub về máy
git pull origin dev
```

### Bước 5.2: Trộn code mới đó vào nhánh tính năng bạn đang làm
```bash
# 1. Chuyển lại về nhánh làm việc cá nhân của bạn
git checkout feature/Duc-Tai-booking-system

# 2. Trộn code mới từ dev vào nhánh của bạn
git merge dev
```

---

## ⚠️ 6. XỬ LÝ LỖI XUNG ĐỘT (MERGE CONFLICTS) & SỰ CỐ THƯỜNG GẶP

### ❓ Lỗi 1: "Merge Conflict" xảy ra khi nào?
Khi bạn và Đạt cùng sửa chung **một dòng code trong cùng một file**, Git không biết nên giữ code của ai nên sẽ báo `Conflict`.

### 🛠️ Cách khắc phục Conflict cực dễ trong VS Code:
1. VS Code sẽ tự động đánh dấu đoạn code bị đụng độ bằng màu nổi bật và hiện 4 lựa chọn phía trên:
   * **`Accept Current Change`**: Giữ code của bạn.
   * **`Accept Incoming Change`**: Lấy code của bạn mình vừa kéo về.
   * **`Accept Both Changes`**: Giữ cả 2 đoạn code.
2. Bạn bấm chọn 1 trong các nút trên để VS Code tự làm sạch file.
3. Sau khi sửa xong, gõ lệnh lưu lại:
   ```bash
   git add .
   git commit -m "fix: resolve merge conflict with dev"
   git push origin <ten-nhanh-cua-ban>
   ```

### ❓ Lỗi 2: Lỡ sửa sai code dưới máy và muốn "hủy hết làm lại từ đầu"?
```bash
# Hủy toàn bộ thay đổi chưa commit, đưa code về lại trạng thái ban đầu của commit gần nhất
git checkout .
```

---

## 📊 7. BẢNG TRA CỨU NHANH CÂU LỆNH (GIT CHEAT SHEET)

| Thao Tác Mong Muốn | Lệnh Git Thực Thi |
| :--- | :--- |
| **Xem nhánh hiện tại & trạng thái file** | `git status` |
| **Xem danh sách tất cả các nhánh** | `git branch -a` |
| **Tạo nhánh mới và chuyển sang nhánh đó** | `git checkout -b feature/ten-nhanh-moi` |
| **Chuyển giữa các nhánh có sẵn** | `git checkout ten-nhanh` |
| **Gom toàn bộ file chuẩn bị dán nhãn** | `git add .` |
| **Lưu nhãn commit kèm thông điệp** | `git commit -m "thong-diep-o-day"` |
| **Đẩy code lên GitHub** | `git push origin ten-nhanh-cua-ban` |
| **Kéo code mới nhất từ GitHub về** | `git pull origin dev` |
| **Xem lịch sử các lần commit** | `git log --oneline` |

---
*Tài liệu được chuẩn hóa bởi Technical Mentor & PM Advisor dành riêng cho dự án Sports Center Management System.*