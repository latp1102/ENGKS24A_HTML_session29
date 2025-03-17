let choice;
const menu = {};

function addDish() {
    const category = prompt("Nhập tên danh mục");
    const dishName = prompt("Nhập tên món ăn");
    const price = +prompt("Nhập giá món ăn");
    const description = prompt("Nhập mô tả món ăn");

    if (!menu[category]) {
        menu[category] = [];
    }

    menu[category].push({
        name: dishName,
        price: price,
        description: description
    });

    alert(`Thêm món ${dishName} vào danh mục ${category} thành công`);
}

function deleteDish() {
    const dishName = prompt("Nhập tên món ăn cần xóa");

    let found = false;
    for (const category in menu) {
        const index = menu[category].findIndex(dish => dish.name === dishName);
        if (index !== -1) {
            menu[category].splice(index, 1);
            alert(`Xóa món ${dishName} thành công`);
            found = true;
            if (menu[category].length === 0) {
                delete menu[category];
            }
            break;
        }
    }
    if (!found) {
        alert("Không tìm thấy món ăn");
    }
}

function updateDish() {
    const dishName = prompt("Nhập tên món ăn cần cập nhật");
    let found = false;
    for (const category in menu) {
        const dish = menu[category].find(d => d.name === dishName);
        if (dish) {
            const newName = prompt(`Tên mới ${dish.name}`);
            const newPrice = prompt(`Giá mới ${dish.price}`);
            const newDesc = prompt(`Mô tả mới ${dish.description}`);

            if (newName) dish.name = newName;
            if (newPrice) dish.price = +newPrice;
            if (newDesc) dish.description = newDesc;

            alert("Cập nhật thành công");
            found = true;
            break;
        }
    }
    if (!found) {
        alert("Không tìm thấy món ăn");
    }
}

function displayMenu() {
    console.log("===== MENU =====");
    for (const category in menu) {
        console.log(`\n--- Danh mục: ${category} ---`);
        menu[category].forEach(dish => {
            console.log(`Tên: ${dish.name}`);
            console.log(`Giá: ${dish.price}`);
            console.log(`Mô tả: ${dish.description}`);
            console.log("-----------------------");
        });
    }
}

function searchDish() {
    const searchName = prompt("Nhập tên món ăn cần tìm");
    let found = false;
    for (const category in menu) {
        const dish = menu[category].find(d => d.name.toLowerCase().includes(searchName.toLowerCase()));
        if (dish) {
            alert(`Tìm thấy món ăn ở danh mục ${category}\nTên: ${dish.name}\nGiá: ${dish.price}\nMô tả: ${dish.description}`);
            found = true;
            break;
        }
    }
    if (!found) {
        alert("Không tìm thấy món ăn");
    }
}

do {
    choice = +prompt(`Chọn chức năng:
    1. Thêm món ăn vào danh mục
    2. Xóa món ăn theo tên
    3. Cập nhật thông tin món ăn theo tên
    4. Hiển thị toàn bộ menu
    5. Tìm kiếm món ăn theo tên
    6. Thoát`);

    switch (choice) {
        case 1:
            addDish();
            break;
        case 2:
            deleteDish();
            break;
        case 3:
            updateDish();
            break;
        case 4:
            displayMenu();
            break;
        case 5:
            searchDish();
            break;
        case 6:
            alert("Thoát chương trình");
            break;
        default:
            alert("Lựa chọn không hợp lệ");
    }
} while (choice !== 6);
