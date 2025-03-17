let choice;
const products = [];

function addProduct(arr) {
    const name = prompt("Nhập tên sản phẩm");
    const price = +prompt("Nhập giá sản phẩm");
    const category = prompt("Nhập danh mục sản phẩm");
    const quantity = +prompt("Nhập số lượng sản phẩm");

    const newProduct = {
        id: Math.ceil(Math.random() * 1000000),
        name: name,
        price: price,
        category: category,
        quantity: quantity
    };

    arr.push(newProduct);
    alert(`Thêm sản phẩm thành công ${name}`);
}

function showProductDetail(arr, productId) {
    const product = arr.find(p => p.id === productId);
    if (product) {
        console.log("Chi tiết sản phẩm:");
        console.log(product);
    } else {
        alert("Không tìm thấy sản phẩm với ID này");
    }
}

function updateProduct(arr, productId) {
    const index = arr.findIndex(p => p.id === productId);
    if (index !== -1) {
        const newName = prompt("Nhập tên mới");
        const newPrice = +prompt("Nhập giá mới");
        const newCategory = prompt("Nhập danh mục mới");
        const newQuantity = +prompt("Nhập số lượng mới");

        arr[index].name = newName;
        arr[index].price = newPrice;
        arr[index].category = newCategory;
        arr[index].quantity = newQuantity;

        alert("Cập nhật sản phẩm thành công");
    } else {
        alert("Không tìm thấy sản phẩm với ID này");
    }
}

function deleteProduct(arr, productId) {
    const index = arr.findIndex(p => p.id === productId);
    if (index !== -1) {
        const confirmDelete = confirm(`Bạn có chắc muốn xóa sản phẩm ${arr[index].name}?`);
        if (confirmDelete) {
            arr.splice(index, 1);
            alert("Xóa sản phẩm thành công");
        }
    } else {
        alert("Không tìm thấy sản phẩm với ID này");
    }
}

function filterProductsByPrice(arr) {
    const minPrice = +prompt("Nhập giá thấp nhất");
    const maxPrice = +prompt("Nhập giá cao nhất");

    const filtered = arr.filter(p => p.price >= minPrice && p.price <= maxPrice);
    if (filtered.length > 0) {
        console.log(`Danh sách sản phẩm trong khoảng giá ${minPrice} - ${maxPrice}:`);
        console.table(filtered);
    } else {
        alert("Không tìm thấy sản phẩm nào trong khoảng giá này");
    }
}

do {
    choice = +prompt(`Nhập lựa chọn:
    1. Thêm sản phẩm mới
    2. Hiển thị tất cả sản phẩm
    3. Hiển thị chi tiết sản phẩm theo ID
    4. Cập nhật thông tin sản phẩm theo ID
    5. Xóa sản phẩm theo ID
    6. Lọc sản phẩm theo khoảng giá
    7. Thoát`);

    switch (choice) {
        case 1:
            addProduct(products);
            break;
        case 2:
            console.table(products); 
            break;
        case 3:
            const idDetail = +prompt("Nhập ID sản phẩm cần xem");
            showProductDetail(products, idDetail);
            break;
        case 4:
            const idUpdate = +prompt("Nhập ID sản phẩm cần cập nhật");
            updateProduct(products, idUpdate);
            break;
        case 5:
            const idDelete = +prompt("Nhập ID sản phẩm cần xóa");
            deleteProduct(products, idDelete);
            break;
        case 6:
            filterProductsByPrice(products);
            break;
        case 7:
            alert("Thoát chương trình");
            break;
        default:
            alert("Lựa chọn không hợp lệ");
    }
} while (choice !== 7);

