$(document).ready(() => {
  // Thêm "<span class='close'>x</span>" vào từng thẻ li
  $("li").append("<span class='close'>x</span>");

  // Xử lý sự kiện click vào nút [x]
  $(".close").click(function () {
    // Xóa bỏ thẻ li là cha của nút [x] này
    $(this).parent().remove();
  });

  // Xử lý sự kiện click vào mỗi li
  $("#to-do-list>li").click(function () {
    // Chuyển qua lại class "checked" cho li này
    $(this).toggleClass("checked");
  });

  // Xử lý sự kiện click vào nút [Add]
  $(".btn-add").click(function () {
    // Lấy string trong input text
    $("#input").val();

    // Xác thực dữ liệu: Không được để trống input text
    if ($("#input").val() == "") {
      alert("Khong dc de trong input");
    }
    // Tạo thẻ "li" với text content là value
    var newText = $("<li></li>").text($("#input").val());

    // Thêm li mới vừa tạo vào phần tử con đầu tiên của ul
    // $("#to-do-list").prepend(`<li>${newText}</li>`);
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
