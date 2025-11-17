const carousels = document.querySelectorAll(".image-carousel-block");

class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        this.imageBlock = carousel.querySelector(".carousel-images");
        this.images = carousel.querySelectorAll(".carousel-img");
        this.legendItems = (function () {
            let legend = carousel.querySelector(".carousel-legend");
            let legendItems = [];
            for (
                let i = 0;
                i < carousel.querySelectorAll(".carousel-img").length;
                i++
            ) {
                let legendItem = document.createElement("div");
                legendItem.classList.add("carousel-legend-item");
                legend.appendChild(legendItem);
                legendItems.push(legendItem);
            }
            return legendItems;
        })();
        this.prevBtn = carousel.querySelector(".prev-btn");
        this.nextBtn = carousel.querySelector(".next-btn");
        this.currentImage = 0;
        this.#assignButtons();
        setInterval(() => {
            this.currentImage = this.currentImage + 1;
        }, 5000);
    }

    set currentImage(number) {
        if (number < 0) {
            this._currentImage = this.images.length - 1;
        } else if (number > this.images.length - 1) {
            this._currentImage = 0;
        } else {
            this._currentImage = number;
        }
        this.#displayImage(this.currentImage);
    }

    get currentImage() {
        return this._currentImage;
    }

    #displayImage(number) {
        this.imageBlock.style.left = `-${number * 500}px`;
        for (let item of this.legendItems) {
            item.textContent = "○";
        }
        this.legendItems[number].textContent = "●";
    }

    #assignButtons() {
        this.prevBtn.addEventListener("click", () => {
            this.currentImage = this.currentImage - 1;
        });

        this.nextBtn.addEventListener("click", () => {
            this.currentImage = this.currentImage + 1;
        });

        for (let item of this.legendItems) {
            item.addEventListener("click", () => {
                let legendArray = Array.from(this.legendItems);
                this.currentImage = legendArray.indexOf(item);
            });
        }
    }
}

for (let carousel of carousels) {
    let newCarousel = new Carousel(carousel);
    console.log(newCarousel);
}
