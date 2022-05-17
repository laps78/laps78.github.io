window.omload = function userApi() {
  const anchors = document.querySelectorAll('a[href*="#"]');

  //test start
  console.log(anchors);
  debugger;
  //test end

  for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      const blockID = anchor.getAttribute('href');
    
      console.log(blockID);
      debugger;

      document.querySelector('' + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
}