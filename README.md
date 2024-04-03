    Tạo giao diện 
- Tạo dự án react với một mẫu typeScript bằng vite
- npm create vite@latest -- --template react-ts (vite@latest: chỉ đến phiên bản mới nhất của gói, –template: option được cung cấp bởi npm create để xác định mẫu - - dự án sẽ sử dụng, react-ts: Đây là mẫu dự án được cung cấp bởi vite để tạo một ứng dụng React TypeScript)
- npm i (Tự động cài các gói phụ thuộc được liệt kê trong phần"dependencies” và devDependencies" của file package.json)
- npm i react-hook-form @tanstack/react-query axios react-router-dom (Cài đặt các gói phụ thuộc cho dự án React)
     + react-hook-form: Thư viện React dùng để quản lí và xác thực form 1 cách dễ dàng. Nó cung cấp API để xử lí các tranjg thái , giá trị và lỗi của form
     + @tanstack/react-query: Thư viện React dùng để quản lí vieejv lấy dữ liệu từ sever(API) và quản lí bộ nhớ cache của dữ liệu đó, mạnh mẽ cho việc thao tác           với dữ liệu bất đồng bộ)
     + axios: Thư viện javaScript dùng để gửi các yêu cầu HTTP từ phía client đến server. Nó giúp tương tác với API và làm việc với dữ liệu từ server thuận tiện
     + React-router-dom: Thư viện React dùng để quán lí routing trong ứng dụng web. Nó cung cấp các thành phần API  để xác định các đường dẫn URL và hiển thị các          thành phần tương ứng
- Code jsx trong app.tsx 
- npm i -D scss
- sử dụng sass trong scss (style.scss)
- Tạo _mixin.scss(định nghĩa mixin)
- Tạo các folder trong src
    + hooks
    + components
    + configs
    + pages
    + services


