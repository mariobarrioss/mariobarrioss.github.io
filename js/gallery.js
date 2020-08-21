function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage  = document.querySelector("#gallery-photo > img");

  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function() {
      let newImageSrc = thumbnail.dataset.largeVersion;
      let newImageAlt = thumbnail.alt

      document.querySelector("#gallery-thumbs > .current").classList.remove("current");
      thumbnail.parentNode.classList.add("current");
      mainImage.setAttribute("src", newImageSrc);
      mainImage.setAttribute("alt", newImageAlt);

      let title = document.querySelector("#gallery-info > .title");
      let description = document.querySelector("#gallery-info > .description");
      title.innerHTML = thumbnail.dataset.title;
      description.innerHTML = thumbnail.dataset.description;
    });
  });
};

