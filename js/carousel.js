class Carousel {
    constructor(image, title, url) {
        this.image = image;
        this.title = title;
        this.url = url;

    }

    static Start(arr) {
        if (arr && arr.length > 0) {
            Carousel._sequence = 0;
            Carousel._size = arr.length;
            Carousel._arr = arr;
            Carousel.Next();
            Carousel._interval = setInterval(Carousel.Next, 2000); 
        } else {
            throw "O método Start precisa de um array com itens do carrossel.";
        }
    }

    static Next() {
        const current = Carousel._arr[Carousel._sequence];

        document.getElementById("carousel").innerHTML = `<img src="img/${current.image}" alt="${current.title}"/>`;
        document.getElementById("carousel-title").innerHTML = `<a href="${current.url}"style="text-decoration: none; color: #000; font-size: 1.2em;"> ${current.title} </a>`;
        Carousel._sequence++;
        if (Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0;
        }
    }
}
