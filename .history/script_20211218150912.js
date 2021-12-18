function removeListItem(item) {
  $(item).click(function () {
    $(this).parent().slideUp(500);
  });
}
function addListItem(item) {
  $(item).append("<span class='close'>x</span>");
}
function checkedItem(item) {
  $(item).click(function () {
    $(this).toggleClass("checked");
  });
}

$(document).ready(() => {
  // Thêm "<span class='close'>x</span>" vào từng thẻ li
  addListItem("li");
  // $("li").append("<span class='close'>x</span>");

  // Xử lý sự kiện click vào nút [x]

  // Xóa bỏ thẻ li là cha của nút [x] này
  removeListItem(".close");
  // $(".close").click(function () {
  //   $(this).parent().slideUp(500);
  // });

  // Xử lý sự kiện click vào mỗi li
  // Chuyển qua lại class "checked" cho li này
  checkedItem("#to-do-list>li");
  // $("#to-do-list>li").click(function () {
  //   $(this).toggleClass("checked");
  // });

  // Xử lý sự kiện click vào nút [Add]
  // Them item khi nhan phim Enter
  $(document).keydown(function (event) {
    if (event.which == 13) {
      event.preventDefault();
      $(".btn-add").click();
    }
  });
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
      newText.hide().prependTo("#to-do-list").slideDown(500);
      // Reset lại value của input text là rỗng
      $("#input").val("");
    }
    // newText.slideDown(500);

    // Tạo nút close cho thẻ li, gắn class và thêm nút này vào li
    addListItem(newText);
    // newText.append("<span class='close'>x</span>");

    // Xử lý sự kiện khi nhấn nút close
    removeListItem(".close");
    // $(".close").click(function () {
    //   $(this).parent().slideUp(500);
    // });

    // Xử lý sự kiện khi nhấn vào li
    checkedItem(newText);
    // newText.click(function () {
    //   $(this).toggleClass("checked");
    // });
  });
});
