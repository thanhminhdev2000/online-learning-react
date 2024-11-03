# Sử dụng Node.js phiên bản 20 để đảm bảo tương thích
FROM node:20

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Sao chép file package.json và yarn.lock vào thư mục làm việc
COPY package.json yarn.lock ./

# Cài đặt các phụ thuộc
RUN yarn install --frozen-lockfile

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Xây dựng ứng dụng React
RUN yarn build

# Sử dụng hình ảnh nhẹ để phục vụ ứng dụng
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

# Cấu hình để chạy trên cổng 80
EXPOSE 80

# Khởi động Nginx để phục vụ ứng dụng React
CMD ["nginx", "-g", "daemon off;"]
