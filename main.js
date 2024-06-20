$(function () {
  // const hei = $(window).height()
  // $('.wrapper').css('width', Math.floor(hei * 0.6220338983050847))

  const topimghei = $('.sec_1 .top_img img').height()
  $('.sec_1 .top_img').css('height', topimghei * 2/3)

  setTimeout(() => {
    $('.sec_1').addClass('animed')
  }, 20)

  initsec3()
  
  $.scrollify({
    section : ".section",
    sectionName : "section-name",
    interstitialSection : "",
    easing: "linear",
    scrollSpeed: 0,
    offset : 0,
    scrollbars: true,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    updateHash: true,
    touchScroll:true,
    before:function(index, sections) {
      console.log('before scrollify')
      if (index == 0) {
        $('.sec_1').removeClass('animed')
        return
      }
      $(sections[index]).find('.animate__animated').each(function () {
        const cls = $(this).attr('class')
        console.log(cls)
        $(this).attr('class', cls.replace(/\s?animate__\w+/g, '') + ' animate__animated')
      })
    },
    after:function(index, sections) {
      console.log('after scrollify', index, sections)
      if (index == 0) {
        $('.sec_1').addClass('animed')
        return
      }
      $(sections[index]).find('.animate__animated').each(function() {
        const anim = $(this).attr('action')
        $(this).addClass('animate__' + anim)
      })
    },
    afterResize:function() {},
    afterRender:function() {}
  });
})

function initsec3 () {
  const wid = $('.sec_3 .cent div').width()
  $('.sec_3 .cent img').height(wid * 1.78)
}