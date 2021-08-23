let base_url = window.location.origin,
  imageUrl = `${base_url}/public/images`;

const registeredBusinesses = [
  {
    name: "appheart",
    logo: `${imageUrl}/appheart.png`,
    description:
      "Proferring creative solutions using state-of-art technologies, towards discovering happiness ❣",
    website: "https://appheartafrica.netlify.app",
    rating: 234,
  },
  {
    name: "DataXpress",
    logo: `${imageUrl}/DataXpressLogo.png`,
    description:
      "Your top Professional Data Solution and Delivery Company with the right certified team of professionals in orienting Data solutions.",
    website: "https://dataxpressprofessionals.com",
    rating: 176,
  },
  {
    name: "OGB Sports",
    logo: `${imageUrl}/ogbsports.png`,
    description:
      "The No. 1 sports clothing company with the goal of delivering authentic wears, sneakers and accessories to you as our only priority in our hearts.",
    website: "https://ogbsports.netlify.app",
    rating: 89,
  },
];

const businessContainer = document.querySelector(".businesses");

function businessLayout(businesss) {}

const populateBusinessContainer = registeredBusinesses.forEach((business) => {
  businessContainer.innerHTML += `
  <!-- ${business.name}-->
  <div class="business" id="${business.name}">
    <div class="business__info">
      <div class="business__logo">
        <img
          src="${business.logo}"
          alt=""
          class="logo"
        />
      </div>
      <div class="business__desc">
        <div class="business__about">
        ${business.description}
        </div>
        <div class="business__name">${business.name}</div>
      </div>
    </div>

    <div class="business__rating">
      <div class="stars-outer">
        <div class="stars-inner"></div>
      </div>

      <div class="business__rating--count">${business.rating}</div>
    </div>

    <div class="business__connect">
      <button>
        <a href="${business.website}" class="button" target='__blank'
          >Learn more</a
        >
      </button>
    </div>
  </div>`;
});
