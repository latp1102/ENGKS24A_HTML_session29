let choice;
const contacts = [];

function addContact(arr) {
  const name = prompt("Nhập tên liên hệ");
  const email = prompt("Nhập email liên hệ");
  const phone = prompt("Nhập số điện thoại");

  const newContact = {
    id: Math.ceil(Math.random() * 1000000),
    name: name,
    email: email,
    phone: phone,
  };

  arr.push(newContact);
  alert(`Thêm liên hệ thành công ${name}`);
}

function searchContactByPhone(arr, phoneNumber) {
  const foundContacts = arr.filter((contact) =>
    contact.phone.includes(phoneNumber)
  );
  if (foundContacts.length > 0) {
    console.log("Kết quả tìm kiếm");
    console.table(foundContacts);
  } else {
    alert("Không tìm thấy liên hệ với số điện thoại");
  }
}

function updateContact(arr, contactId) {
  const index = arr.findIndex((contact) => contact.id === contactId);
  if (index !== -1) {
    const newName = prompt("Nhập tên mới");
    const newEmail = prompt("Nhập email mới");
    const newPhone = prompt("Nhập số điện thoại mới");

    arr[index].name = newName;
    arr[index].email = newEmail;
    arr[index].phone = newPhone;

    alert("Cập nhật thông tin thành công");
  } else {
    alert("Không tìm thấy liên hệ với ID này");
  }
}

function deleteContact(arr, contactId) {
  const index = arr.findIndex((contact) => contact.id === contactId);
  if (index !== -1) {
    const confirmDelete = confirm(
      `Bạn có chắc muốn xóa liên hệ ${arr[index].name}?`
    );
    if (confirmDelete) {
      arr.splice(index, 1);
      alert("Xóa liên hệ thành công");
    }
  } else {
    alert("Không tìm thấy liên hệ với ID này");
  }
}

do {
  choice = +prompt(`Nhập lựa chọn:
        1. Thêm liên hệ mới
        2. Hiển thị danh bạ
        3. Tìm kiếm liên hệ theo số điện thoại
        4. Cập nhật thông tin liên hệ theo ID
        5. Xóa liên hệ theo ID
        6. Thoát chương trình`);

  switch (choice) {
    case 1:
      addContact(contacts);
      break;
    case 2:
      console.table(contacts);
      break;
    case 3:
      const phoneSearch = prompt("Nhập số điện thoại cần tìm");
      searchContactByPhone(contacts, phoneSearch);
      break;
    case 4:
      const idUpdate = +prompt("Nhập ID liên hệ cần cập nhật");
      updateContact(contacts, idUpdate);
      break;
    case 5:
      const idDelete = +prompt("Nhập ID liên hệ cần xóa");
      deleteContact(contacts, idDelete);
      break;
    case 0:
      alert("Thoát chương trình");
      break;
    default:
      alert("Lựa chọn không hợp lệ. Vui lòng chọn lại");
  }
} while (choice !== 6);
