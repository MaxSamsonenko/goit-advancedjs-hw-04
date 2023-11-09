export function renderGallery(images, galleryContainer, gallery) {
  const { hits } = images;
  const markup = hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        likes,
        views,
        comments,
        downloads,
        tags,
      }) => {
        return `<div class="photo-card">    
                  <a href="${largeImageURL}">
                  <img class="searched-image" src="${webformatURL}" alt="${tags}" loading="lazy" data-title="${tags}"/></a>
                  <div class="info">
                      <p class="info-item">
                          <b>Likes</b><span class="info-data">${likes}</span>
                      </p>
                          <p class="info-item">
                      <b>Views</b><span class="info-data">${views}</span>
                      </p>
                      <p class="info-item">
                          <b>Comments</b><span class="info-data">${comments}</span>
                      </p>
                      <p class="info-item">
                          <b>Downloads</b><span class="info-data">${downloads}
                          </p></span>
                  </div>
              </div>`;
      }
    )
    .join('');
  galleryContainer.insertAdjacentHTML('beforeend', markup);
  gallery.refresh();
}

export function galleryLoaded(galleryContainer) {
  const { height: cardHeight } = galleryContainer.getBoundingClientRect();
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
