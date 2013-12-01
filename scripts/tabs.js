$(document).ready(function(){
  $('.tabButton').click(function(){
    var newTab = $(this).attr('tab-id');
    var currentTab = $('.visTab').attr('id');
    if (newTab != currentTab) {
    $('#' + currentTab).fadeOut('fast');
    $('#' + currentTab).attr('class','hidTab');
    $('#' + newTab).delay('fast').fadeIn('fast');
    $('#' + newTab).attr('class','visTab');
    }
  });
});