// Functions
function sayHello() {
  alert("Hello!!");
}

$(function() {
  $("#topBtn").hide(); //ボタンを非表示にする
  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 100) {
      //ページの上から100pxスクロールした時
      $("#topBtn").fadeIn("fast"); //ボタンがフェードインする
    } else {
      $("#topBtn").fadeOut("fast"); //ボタンがフェードアウトする
    }
    scrollHeight = $(document).height(); //ドキュメントの高さ
    scrollPosition = $(window).height() + $(window).scrollTop(); //現在地
    footHeight = $("footer").innerHeight(); //止めたい位置の高さ(今回はfooter)
    if (scrollHeight - scrollPosition <= footHeight) {
      //ドキュメントの高さと現在地の差がfooterの高さ以下の時
      $("#topBtn").css({
        position: "absolute", //pisitionをabsoluteに変更
      });
    } else {
      //それ以外の場合は
      $("#topBtn").css({
        position: "fixed", //固定表示
      });
    }
  });

  $('#topBtn').trigger('click', function () {
    $('body,html').animate({
        scrollTop: 0
    }, 800);　//スムーススクロールの速度
    return false;
  });

    // 設定
  var interval = 3000; // 切り替わりの間隔（ミリ秒）
  var fade_speed = 3000;// フェード処理の早さ（ミリ秒）
  $(".pict img").hide();
  $(".pict img:first").addClass("active").show();

  var changeImage = function() {
    var $active = $(".pict img.active");
    var $next = $active.next("img").length ? $active.next("img") : $(".pict img:first");

    $active.removeClass("active").fadeOut(fade_speed,()  => {
      $next.addClass("active").fadeIn(fade_speed);
    });
  }

  setInterval(changeImage,interval);
});
