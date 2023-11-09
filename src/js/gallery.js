import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchImages } from './api';
import { renderGallery, galleryLoaded } from './markup';

iziToast.settings({
  position: 'topRight',
  timeout: 3000,
});

let gallery = new SimpleLightbox('.gallery a', {
  captionType: 'data',
  captionDelay: 250,
});

//access elements on page
const galleryContainer = document.querySelector('.gallery');
const form = document.querySelector('.search-form');
const loadMoreBtn = document.querySelector('.load-more');
const imgListEnd = document.querySelector('.end-of-img-list');
//add event listeners to form and button
form.addEventListener('submit', formSubmitHandler);
loadMoreBtn.addEventListener('click', loadMoreBtnHandler);
//variables to store page number and userInput respectively
let pageNumber;
let userInput;
//submit form handler
async function formSubmitHandler(e) {
  e.preventDefault();
  pageNumber = 1; //set page number to one on each new search
  userInput = e.target.searchQuery.value; //user input value
  galleryContainer.innerHTML = ''; //clear previous search gallery content
  imgListEnd.style.display = 'none'; //hides message of the end of img list if it was shown before
  loadMoreBtn.style.display = 'none'; //hides "Load more" button, if was visible before
  try {
    const imgs = await fetchImages(userInput, pageNumber); //fetch images based on user query
    //check if anything found and if array is empty show message
    if (imgs.hits.length === 0) {
      iziToast.error({
        message: `Sorry, there are no images matching your search query. Please try again.`,
      });
      return;
    }
    renderGallery(imgs, galleryContainer, gallery); //render gallery, refresh Simplelightbox
    loadMoreBtn.style.display = 'block'; //make "Load more" button visible
    e.target.searchQuery.value = ''; //clear input field
    galleryLoaded(galleryContainer); //apply smooth scrolling
    //show success message with total hits
    iziToast.success({
      message: `Hooray! We found ${imgs.totalHits} images`,
    });
  } catch (error) {
    // handle error
    iziToast.error({
      message: `${error.message}`,
    });
    console.log(error.message);
  }
}
//"load more" button handler
async function loadMoreBtnHandler() {
  pageNumber++; //increase page number by 1 with each request
  loadMoreBtn.style.display = 'none'; // hide "Load more" button
  try {
    const imgs = await fetchImages(userInput, pageNumber); //fetch next page images
    console.log(imgs);
    renderGallery(imgs, galleryContainer, gallery); // add new images to gallery and refresh Simplelightbox
    galleryLoaded(galleryContainer); //apply smooth scrolling
    //check page number, and display message about end of list of images, requesting page 7 will result in error
    if (pageNumber === 6) {
      imgListEnd.style.display = 'block';
      return;
    }
    //check if reached the end of images list and hide "Load more" button and show message
    if (imgs.hits.length < 40 || imgs.hits.length === 0) {
      loadMoreBtn.style.display = 'none';
      imgListEnd.style.display = 'block';
      return;
    }
    loadMoreBtn.style.display = 'block'; //show "Load more" button
  } catch (error) {
    //handle error
    iziToast.error({
      message: `${error.message}`,
    });
    console.log(error.message);
  }
}
