const swiperBanner = new Swiper(".mySwiper", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperWork = new Swiper(".mySwiper2", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

function bannerMobile() {
  const teste = document.getElementById("swiper-wrapper").innerHTML;

  if (screen.width < 640 || screen.height < 480) {
    document.getElementById("swiper-wrapper").innerHTML = `
      <div class="swiper-slide swiper-slide1">
        <img
          src="../assets/desafio-frontend-assets/banner-01-mobile.png"
        />
      </div>
      <div class="swiper-slide swiper-slide1">
        <img
          src="../assets/desafio-frontend-assets/banner-02-mobile.png"
        />
      </div>
      <div class="swiper-slide swiper-slide1">
        <img
          src="../assets/desafio-frontend-assets/banner-03-mobile.png"
        />
      </div>`;
  } else if (screen.width < 1024 || screen.height < 768) {
    document.getElementById("swiper-wrapper").innerHTML = `
    <div class="swiper-slide swiper-slide1">
    <img
      src="../assets/desafio-frontend-assets/banner-01-desktop.png"
    />
    </div>
    <div class="swiper-slide swiper-slide1">
      <img
        src="../assets/desafio-frontend-assets/banner-02-desktop.png"
      />
    </div>
    <div class="swiper-slide swiper-slide1">
      <img
        src="../assets/desafio-frontend-assets/banner-03-desktop.png"
      />
    </div>`;
  }
}

bannerMobile();

function requestDados(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}

function buscarDados() {
  data = requestDados(
    "https://wine-back-test.herokuapp.com/products?page=1&limit=5"
  );
  products = JSON.parse(data);

  const { items } = products;

  var menu = items.map(function (item) {
    return ` <div class="wine-card-container">
    <div class="wine-card">
      <img src=${item.image} />
      <div class="wine-description">
        <h2>${item.name}</h2>
        <h3>
          R$ ${item.price}
          <span>${item.discount}% OFF</span>
        </h3>
        <h4>
          Sócio wine<span>R$ ${item.priceMember}</span>
        </h4>
        <h5>Não sócio R$ ${item.priceNonMember}</h5>
      </div>
    </div>
    <button>Adicionar</button> </div>`;
  });

  document.getElementById("wine-content").innerHTML = menu.join("");
}

buscarDados();
