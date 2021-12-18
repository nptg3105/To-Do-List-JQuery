$(document).ready(() => {
  // Thêm "<span class='close'>x</span>" vào từng thẻ li
  // Code here...

  // Xử lý sự kiện click vào nút [x]
  $(".close").click(function () {
    // Xóa bỏ thẻ li là cha của nút [x] này
    // Code here...
  });

  // Xử lý sự kiện click vào mỗi li
  $("#to-do-list>li").click(function () {
    // Chuyển qua lại class "checked" cho li này
    // Code here...
  });

  // Xử lý sự kiện click vào nút [Add]
  $(".btn-add").click(function () {
    // Lấy string trong input text
    // Code here...

    // Xác thực dữ liệu: Không được để trống input text
    // Code here...

    // Tạo thẻ "li" với text content là value
    // Code here...

    // Thêm li mới vừa tạo vào phần tử con đầu tiên của ul
    // Code here...

    // Reset lại value của input text là rỗng
    // Code here...

    // Tạo nút close cho thẻ li, gắn class và thêm nút này vào li
    // Code here...

    // Xử lý sự kiện khi nhấn nút close
    $(closeIcon).click(function () {
      $(li).remove();
    });

    // Xử lý sự kiện khi nhấn vào li
    $(li).click(function () {
      $(this).toggleClass("checked");
    });
  });
});
