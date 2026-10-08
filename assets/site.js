// 截图画廊：左右按钮按一张的宽度滚动，到头时禁用按钮
(function () {
  var rail = document.getElementById('rail');
  var prev = document.getElementById('rail-prev');
  var next = document.getElementById('rail-next');
  if (!rail || !prev || !next) return;

  function step() {
    var shot = rail.querySelector('.shot');
    return shot ? shot.getBoundingClientRect().width + 18 : 300;
  }
  function update() {
    prev.disabled = rail.scrollLeft <= 4;
    next.disabled = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 4;
  }
  prev.addEventListener('click', function () { rail.scrollBy({ left: -step() * 2, behavior: 'smooth' }); });
  next.addEventListener('click', function () { rail.scrollBy({ left: step() * 2, behavior: 'smooth' }); });
  rail.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();
