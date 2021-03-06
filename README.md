﻿# Mục tiêu
- Tạo ra một trang web quản lí sinh viên với các chức năng: 
    - Thêm sinh viên.
    - Tìm kiếm sinh viên theo id.
    - Edit lại dữ liệu của sinh viên.
    - Xóa sinh viên.
    - Sử dụng hai CSDL: MongoDB và SQLServer.
# Công nghệ sử dụng
1. Backend
- Eclipse  + Spring Tool Suite
- Maven
- Spring Boot
- MongoDB 
2. Frontend
- HTML
- CSS
- JavaScript
- ReactJS

# Hướng dẫn cài đặt 
## 1. Cài đặt Eclipse  + Spring Tool Suite
- Truy cập Eclipse Market
![Market](https://raw.githubusercontent.com/duong4279/Project1/master/media/Market.png)

- Gõ sts hoặc Spring tool để tìm kiếm Spring Tool > Click Install
![STS](https://raw.githubusercontent.com/duong4279/Project1/master/media/STS.PNG)

- Chọn Confirm > Accept > Finish 
![STS](https://raw.githubusercontent.com/duong4279/Project1/master/media/STS2.PNG)

## 2. Cài đặt Maven
- Download Maven
- Cài biến môi trường MAVEN_HOME
![MAVEN1](https://raw.githubusercontent.com/duong4279/Project1/master/media/MAVEN1.PNG)

![MAVEN2](https://raw.githubusercontent.com/duong4279/Project1/master/media/MAVEN2.PNG)

- Kiểm tra xem MAVEN đã được cài đặt hay chưa
![MAVEN3](https://raw.githubusercontent.com/duong4279/Project1/master/media/MAVEN3.PNG)

## 3. Cài đặt MongoDB & robok 3t
- Download MongoDb Community về giải nén và thực hiện run và cài theo mặc định.
- Sau khi thực hiện xong bước trên download robok 3t và thực hiện giải nén.
- Lúc này MongoDB vẫn chưa được cài vào máy bạn. Thực hiện cài đặt môi trường để MongoDB làm việc.
![MongoDB](https://raw.githubusercontent.com/duong4279/Project1/master/media/MongoDB.PNG)

## 4. Cài đặt Visual Studio Code
- Download Visual Studio Code theo đường dẫn: https://code.visualstudio.com/
- Download Visual Studio Code về giải nén và thực hiện run và cài theo mặc định.
- Giao diện làm việc của Visual Studio Code
![alt](https://raw.githubusercontent.com/duong4279/student-manager/master/media/vs11.PNG)

## 5. Cài đặt NodeJS
- Download NodeJS theo đường dẫn : https://nodejs.org/en/download/
- Download phiên bản NodeJS giành cho máy tính của bạn, giải nén và thực hiện run và cài theo mặc định.
- Kiểm tra xem đã cài đặt thành công hay chưa
 Mở của sổ Command Promt 
 Gõ lần lượt ***node --version*** và ***npm --version*** để xem phiên bản cài đặt, nếu kết quả trả về có dạng như sau là thành công
  ![alt](https://raw.githubusercontent.com/duong4279/student-manager/master/media/node12.png)
  

# Hướng dẫn sử dụng chi tiết
# **Backend**
## 1. Tạo Spring Boot Project
- Tạo Project:
![NewProject1](https://raw.githubusercontent.com/duong4279/Project1/master/media/NewProject1.png)

![NewProject2](https://raw.githubusercontent.com/duong4279/Project1/master/media/NewProject2.png)

![NewProject3](https://raw.githubusercontent.com/duong4279/Project1/master/media/NewProject3.png)

- Cấu trúc của Project
![CauTruc](https://raw.githubusercontent.com/duong4279/Project1/master/media/CauTruc.PNG)

## 2. File cấu hình Spring Boot
- Trong file cấu hình Spring Boot ta cấu hình kết nối tới MongoDB và SQLServer ở phần comment

![DataBase](https://raw.githubusercontent.com/duong4279/Project1/master/media/DataBase.PNG)

## 3.Tạo File Entity để mapp thông tin
- Annotation @Document sẽ thực hiện mapping class với collection tương ứng, ở đây nó sẽ mapping vơi collection students
- Annotation @Id đánh dấu khóa chính, nếu không truyền id lúc insert thì nó sẽ tự động tạo id cho bạn.
![Entity1](https://raw.githubusercontent.com/duong4279/Project1/master/media/Entity1.PNG)

- Nếu bạn thực hiện kết nối với CSDL là SQLServer


![alt](https://raw.githubusercontent.com/duong4279/Project1/master/media/Entity2.PNG)

- Thực hiện mapping dữ liệu với SQLServer khi đã có class đại điện cho Table rồi, chúng ta sẽ định nghĩa các trường class đó tương ứng với column nào trong database bằng tập hợp các Annotation mà Hibernate cung cấp.

## 4.Tạo File Repository
- Sử dung interface CustomerRepository extends MongoRepository<Customer,Long> nó có các phương thức để thao tác với collection students. Spring Data MongoDB sẽ tự động tạo ra một lớp thi hành tại  thời điểm chạy của ứng dụng.Tương tự khi muốn kết nối với SQLServer sẽ thực hiện extends JpaRepository<Customer, Integer> nó sẽ hộ trợ các thao tác truy xuất dữ liệu trên SQLServer cho bạn.
![InterfaceRepository](https://raw.githubusercontent.com/duong4279/Project1/master/media/InterfaceRepository.PNG)

## 5.Tạo File Service thực hiện xử lí logic
  - File Service sẽ kiểm tra dữ lieu đầu vào, gọi tới các repository để lấy dữ liệu và trả về cho Controller.
  - Tất cả dữ liệu ở đây trả về đều là ServiceResult, thay vì trả về mỗi dữ liệu query, ở đây sẽ thêm thông tin của status, message thông báo trong trường hợp lỗi.
  - Trong class CustomerService viết các hàm hiện thị ra tất cả database; tìm kiếm sinh viên theo Id nếu không tìm thấy sẽ trả về null; tạo mới một sinh viên để quản lí; thực hiện update thông tin của sinh viên, nếu không tìm thấy Id của sinh viên cần update gửi message "Student Not Found"; cuối cùng thực hiện xóa sinh viên theo Id nếu không tìm thấy Id của sinh viên đó thì gửi message "Student Not Found" nếu tìm thấy Id của sinh viên thì thực hiên xóa sinh viên đó khỏi danh sách và gửi message "success".


![alt](https://raw.githubusercontent.com/duong4279/Project1/master/media/Service.PNG)

- Ở đây tất cả dữ liệu trả về đều là ServiceResult, thay vì trả về mỗi dữ liệu query, mình sẽ có thêm các thông tin như status, message thông báo trong trường hợp lỗi… Các bạn có thể thêm các trường khác như error_code… để phía client biết rõ lỗi gặp phải là gì, hay thêm đa ngôn ngữ vào message trả về
![Result](https://raw.githubusercontent.com/duong4279/Project1/master/media/Result.PNG)

## 6.Tạo File Controller
- File Controller nhập request và gọi tới các Service thích hợp để xử lí dữ liệu. Controller đóng vai trò điều khiển tất cả các hoạt động của bộ máy.



![alt](https://raw.githubusercontent.com/duong4279/Project1/master/media/Controller.PNG)

# **Frontend**

- Mở phần mềm Visual Studio Code
- Chọn **File** > **Open Folder** > chọn folder **Project1** (trong project)
- Nhấn tổ hơp phím ***Ctrl+Shift+`*** để mở cửa số **Terminal**
- Gõ lệnh ***npm start*** để chạy project 

  ![alt](https://raw.githubusercontent.com/duong4279/student-manager/master/media/terminal.png)


  Khởi chạy Project thành công


  ![alt](https://raw.githubusercontent.com/duong4279/student-manager/master/media/s2.png)
  Chọn **List Student**
  **New Student** để thêm mới
  **View** để xem chi tiết
  **Edit** để sửa thông tin
  **Delete** để xóa

  ![alt](https://raw.githubusercontent.com/duong4279/student-manager/master/media/s1.png)
## 1. Chọn ***New Student*** 

  Thêm các thông tin và chọn ***Save*** để lưu

  ![alt](https://raw.githubusercontent.com/duong4279/student-manager/master/media/new.png)

## 2. Chon ***View***

  ![alt](https://raw.githubusercontent.com/duong4279/student-manager/master/media/view.png)

## 3. Chọn ***Edit***

Sửa các thông tin rồi chọn ***Save*** để lưu

 ![alt](https://raw.githubusercontent.com/duong4279/student-manager/master/media/edit.png)

## 4. Chọn ***Delete***

Chọn mục cần xóa > ***Delete*** >***OK*** để xóa

  ![alt](https://raw.githubusercontent.com/duong4279/student-manager/master/media/delete.png)
