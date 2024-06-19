$(function() {
  $.scrollify({
    section : ".section",
    sectionName : "section-name",
    interstitialSection : "",
    easing: "linear",
    scrollSpeed: 0,
    offset : 0,
    scrollbars: false,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    updateHash: true,
    touchScroll:true,
    before:function(index) {
      console.log('before scrollify')
      $('.section .animate__animated').attr('class', 'animate__animated')
    },
    after:function(index, sections) {
      console.log('after scrollify', index, sections)
      $(sections[index]).find('.animate__animated').each(function() {
        const anim = $(this).attr('action')
        $(this).addClass('animate__' + anim)
      })
    },
    afterResize:function() {},
    afterRender:function() {}
  });
});