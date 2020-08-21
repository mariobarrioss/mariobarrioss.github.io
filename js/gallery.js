  function activateGallery() {
    let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage  = document.querySelector("#gallery-photo > img");

  thumbnails.forEach(function(thumbnail) {
    let largeVersion = new Image();
    largeVersion.src = thumbnail.dataset.largeVersion;
    let newImageAlt = thumbnail.alt

    thumbnail.addEventListener("click", function() {
      document.querySelector("#gallery-thumbs > .current").classList.remove("current");
      thumbnail.parentNode.classList.add("current");
      mainImage.setAttribute("src", largeVersion.src);
      mainImage.setAttribute("alt", newImageAlt);

      let title = document.querySelector("#gallery-info > .title");
      let description = document.querySelector("#gallery-info > .description");
      title.innerHTML = thumbnail.dataset.title;
      description.innerHTML = thumbnail.dataset.description;
    });
  });
};

