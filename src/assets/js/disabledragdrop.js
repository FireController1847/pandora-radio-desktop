document.addEventListener('drop', function(e) {
  console.log('drop');
  e.preventDefault();
  e.stopPropagation();
});
document.addEventListener('dragover', function(e) {
  console.log('drag');
  e.preventDefault();
  e.stopPropagation();
});