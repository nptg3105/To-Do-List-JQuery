$(document).ready(() => {
  // Thêm "<span class='close'>x</span>" vào từng thẻ li
  $("li").append("<span class='close'>x</span>");

  // Xử lý sự kiện click vào nút [x]
  $(".close").click(function () {
    // Xóa bỏ thẻ li là cha của nút [x] này
    $(this).parent().remove().animate({
      left: "100%",
      opacity: "0",
    });
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
    } else {
      // Tạo thẻ "li" với text content là value
      var newText = $("<li></li>").text($("#input").val());

      // Thêm li mới vừa tạo vào phần tử con đầu tiên của ul
      $("#to-do-list").prepend(newText).fadeIn("slow");

      // Reset lại value của input text là rỗng
      $("#input").val("");
    }

    // Tạo nút close cho thẻ li, gắn class và thêm nút này vào li
    newText.append("<span class='close'>x</span>");

    // Xử lý sự kiện khi nhấn nút close

    $(".close").click(function () {
      $(this).parent().remove();
    });

    // Xử lý sự kiện khi nhấn vào li
    newText.click(function () {
      $(this).toggleClass("checked");
    });
  });
});
