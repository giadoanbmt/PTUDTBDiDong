# App Bán Hàng Mini - Nhóm 8

Đây là dự án ứng dụng di động bán nước giải khát mini được xây dựng bằng **React Native (Expo)**. Ứng dụng cung cấp giao diện trực quan giúp người dùng dễ dàng xem danh sách các loại đồ uống, xem chi tiết từng sản phẩm và tìm hiểu thông tin về nhóm phát triển.

---

## Phân tích Kiến trúc & Kỹ thuật

Dưới đây là thông tin chi tiết về các quyết định kỹ thuật và cách tổ chức mã nguồn của ứng dụng:

### 1. Các Component có trong project
Trong thư mục `src/components`, project sử dụng các component tái sử dụng (reusable components) sau:
* **CustomButton.js:** Một component nút bấm được tùy chỉnh giao diện (màu nền, padding, bo góc), dùng chung cho các thao tác click trong toàn bộ app.
* **ProductCard.js:** Component cốt lõi dùng để tạo hình dáng "thẻ" cho từng món nước. Nó đóng gói cấu trúc hiển thị gồm hình ảnh nhỏ, tên món nước, giá tiền, giúp mã nguồn ở màn hình chính gọn gàng hơn.

### 2. Các loại màn hình (Screen)
Trong thư mục `src/screens`, project được chia thành 3 màn hình chính:
* **HomeScreen.js:** Màn hình trang chủ của ứng dụng (nằm trong tab Cửa hàng). Đây là nơi hiển thị toàn bộ danh sách các loại đồ uống đang kinh doanh.
* **DetailScreen.js:** Màn hình Chi tiết sản phẩm. Khi người dùng chọn một món đồ uống bất kỳ, màn hình này sẽ hiện ra để cung cấp hình ảnh phóng to, mức giá cụ thể và mô tả hương vị của món nước đó.
* **AboutScreen.js:** Màn hình Giới thiệu. Nơi chứa thông tin chào mừng và giới thiệu về đội ngũ phát triển (Nhóm 8).

### 3. Các loại Navigation
Thông qua file thiết lập `src/navigation/AppNavigator.js`, project tích hợp 2 loại navigation từ thư viện `@react-navigation`:
* **Bottom Tab Navigation (`createBottomTabNavigator`):** Được sử dụng để tạo thanh menu điều hướng nằm ở dưới đáy màn hình, giúp người dùng chuyển đổi qua lại mượt mà giữa tab Cửa hàng (Shop) và tab Giới thiệu (About).
* **Stack Navigation (`createStackNavigator`):** Được lồng bên trong tab Cửa hàng. Khi người dùng đang ở `HomeScreen` và bấm vào một món nước, hệ thống Stack sẽ "push" màn hình `DetailScreen` lên trên cùng để xem chi tiết, và cho phép bấm nút "Back" để quay lại danh sách một cách tự nhiên.

### 4. Tối ưu hóa danh sách với FlatList
**Có sử dụng.** `FlatList` được sử dụng rõ rệt và đóng vai trò then chốt bên trong màn hình `src/screens/HomeScreen.js`.
* **Mục đích:** `FlatList` nhận dữ liệu (`data={PRODUCTS}`) là một mảng gồm 10 món nước được nạp từ file `mockData.js`. Nó giúp render (kết xuất) danh sách này một cách tối ưu, tự động tạo ra một thanh cuộn mượt mà. Thay vì viết tay 10 lần, `FlatList` lặp qua từng phần tử và truyền dữ liệu vào component `ProductCard` để hiển thị hàng loạt lên giao diện.

### 5. Thiết kế UI với StyleSheet
**Có sử dụng StyleSheet hoàn toàn.**
* Tất cả các file UI trong dự án (bao gồm các Screen và các Component) đều import module `StyleSheet` từ thư viện `react-native`.
* Ở cuối mỗi file, giao diện được khai báo rõ ràng và quy củ bằng khối lệnh `const styles = StyleSheet.create({...})` để quy định layout bằng Flexbox, căn chỉnh khoảng cách, màu sắc, font chữ. Việc này giúp tách biệt hoàn toàn phần code logic phía trên và phần code làm đẹp phía dưới.

### 6. Vai trò của App.js
**Có code nhưng hoàn toàn không chứa giao diện, chỉ dùng để gọi bộ điều hướng.**
* Mã nguồn trong `App.js` đã được thiết kế lại cực kỳ tối giản. Dòng đầu tiên là import bắt buộc `react-native-gesture-handler`.
* Bên trong component `App`, project không chứa bất kỳ thẻ `View` hay `Text` nào để vẽ layout. Thay vào đó, nó chỉ gọi (return) duy nhất component `<AppNavigator />`.
* **Đánh giá:** Cách tổ chức này tuân thủ xuất sắc nguyên tắc phân chia module: `App.js` làm file khởi chạy gốc, cấu hình điều hướng để ở `navigation`, và giao diện để ở `screens`. Tối ưu cho việc mở rộng dự án sau này.

---

## Cấu trúc thư mục

Dự án được sắp xếp theo kiến trúc module hóa:

```text
topic02/
├── App.js                      # Điểm bắt đầu (Entry point), gọi Navigation
├── README.md                   # File tài liệu đặc tả dự án
├── package.json                # Chứa thông tin các thư viện đã cài đặt
└── src/                        # Thư mục chứa toàn bộ mã nguồn chính
    ├── components/             # Chứa UI Component dùng chung
    │   ├── CustomButton.js     
    │   └── ProductCard.js      
    ├── data/                   # Thư mục chứa dữ liệu tĩnh
    │   └── mockData.js         # Dữ liệu giả lập 10 sản phẩm
    ├── navigation/             # Chứa cấu hình luồng đi của ứng dụng
    │   └── AppNavigator.js     
    └── screens/                # Chứa các màn hình hiển thị
        ├── AboutScreen.js      
        ├── DetailScreen.js     
        └── HomeScreen.js