import { refs } from './refs';

const { gallery } = refs;

export function createMarkup(searchResults) {
    const arrPhotos = searchResults.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        return `<div class="photo-card">
        <div class="img_wrap">
            <a class="gallery_link" href="${largeImageURL}">
                <img src="${webformatURL}" alt="${tags}" width="300" loading="lazy" />
            </a>
        </div>
        <div class="info">
        <div class="info-item">
            <b>Likes:</b> <span class="image-description">${likes}</span>
        </div>
        <div class="info-item">
            <b>Views:</b> <span class="image-description">${views}</span>
        </div>
        <div class="info-item">
            <b>Comments:</b> <span class="image-description">${comments}</span>
        </div>
        <div class="info-item">
            <b>Downloads:</b> <span class="image-description">${downloads}</span>
        </div>
    </div>
    
        </div>`
    });
    gallery.insertAdjacentHTML("beforeend", arrPhotos.join(''));
};