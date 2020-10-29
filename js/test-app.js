let brandsData = `{
    "@context": "https://schema.org/", 
    "@type": "BreadcrumbList", 
    "itemListElement": [{
      "@type": "ListItem", 
      "position": 24, 
      "name": "Renault",
      "item": "#"    
    },{
      "@type": "ListItem", 
      "position": 23, 
      "name": "Mazda",
      "item": "#"    
    },{
      "@type": "ListItem", 
      "position": 22, 
      "name": "Lexus",
      "item": "#"    
    },{
      "@type": "ListItem", 
      "position": 21, 
      "name": "BMW",
      "item": "#"    
    },{
      "@type": "ListItem", 
      "position": 20, 
      "name": "Chevrolet",
      "item": "#"    
    },{
      "@type": "ListItem", 
      "position": 19, 
      "name": "Audi",
      "item": "#"    
    },{
      "@type": "ListItem", 
      "position": 18, 
      "name": "Fiat",
      "item": "#"    
    },{
      "@type": "ListItem", 
      "position": 17, 
      "name": "Subaru",
      "item": "#"    
    },{
      "@type": "ListItem", 
      "position": 16, 
      "name": "Suzuki",
      "item": "#"    
    },{
      "@type": "ListItem", 
      "position": 15, 
      "name": "Maserati",
      "item": "#"    
    },{
      "@type": "ListItem", 
      "position": 14, 
      "name": "Volkswagen",
      "item": "#"    
    },{
      "@type": "ListItem", 
      "position": 13, 
      "name": "Peugeor",
      "item": "#"    
    },{
      "@type": "ListItem", 
      "position": 12, 
      "name": "Renault",
      "item": "#"    
    },{
      "@type": "ListItem", 
      "position": 11, 
      "name": "Volvo",
      "item": "#"    
    },{
      "@type": "ListItem", 
      "position": 10, 
      "name": "Skoda",
      "item": "#"    
    },{
      "@type": "ListItem", 
      "position": 9, 
      "name": "Mazda",
      "item": "#"    
    },{
      "@type": "ListItem", 
      "position": 8, 
      "name": "Mercedes",
      "item": "#"    
    },{
      "@type": "ListItem", 
      "position": 7, 
      "name": "SsangYong",
      "item": "#"    
    },{
      "@type": "ListItem", 
      "position": 6, 
      "name": "Nissan",
      "item": "#"    
    },{
      "@type": "ListItem", 
      "position": 5, 
      "name": "Ford",
      "item": "#"    
    },{
      "@type": "ListItem", 
      "position": 4, 
      "name": "Honda",
      "item": "#"    
    },{
      "@type": "ListItem", 
      "position": 3, 
      "name": "Opel",
      "item": "#"    
    },{
      "@type": "ListItem", 
      "position": 2, 
      "name": "Kia",
      "item": "#"    
    },{
      "@type": "ListItem", 
      "position": 1, 
      "name": "Audi",
      "item": "#"  
    }]
  }`

brandsData = JSON.parse(brandsData);

const renderBrandItem = (item, container) => {
    const markup = `
        <li class="brands-box__brand-item brand-item" 
                   itemprop="itemListElement" 
                   itemscope="itemscope" 
                   itemtype="https://schema.org/${item["@type"]}">

            <a class="brand-item__link" href=${item.item} 
                    itemprop="item"> 

                <p class="brand-item__paragraph" 
                        itemprop="name">Запчасти на ${item.name}
                </p>
                <span itemprop="count">более 3948274</span>
                <meta itemprop="position" 
                    content="${item.position}"/>
            </a>

            <svg class="icon-box__icon">
                <use xlink:href="#arrow-right"></use>
            </svg>
        </li>
    `;

    container.insertAdjacentHTML('afterbegin', markup)
};

renderLoader = containerString => {
    const container = containerString;

    const loader = `
        <div class="loader">
            <svg>
                <use href="../img/cw-icon.svg#icon-cw"></use>
            </svg>
        </div>
    `;

    container.insertAdjacentHTML('afterbegin', loader);
};

clearLoader = () => {
    const loader = document.querySelector('.loader');
    if(loader) loader.parentElement.removeChild(loader);
}

const renderBrandsPage = brands => {
    const root = document.getElementById('root');

    const markup = `
    <div class="brands-box" 
         itemscope="itemscope">
         <h1 class="heading-primary mb-69px" 
             itemprop="name">
             Мы продаем запчасти для <br> следующих марок автомобилей:
         </h1>

        <ul class="brands-box__list mb-56px" itemscope="itemscope" 
                                             itemtype="${brands["@context"]}${brands["@type"]}"> 
            
        </ul>

        <a class="brands-box__btn btn" href="#">
            Запчасти для других марок
        </a>
    </div>
    `
    root.insertAdjacentHTML('afterbegin', markup);

    const containerList = document.querySelector('.brands-box__list');

    renderLoader(containerList);

    setTimeout(() => {
        brands["itemListElement"].map(item => renderBrandItem(item, containerList))
        clearLoader();
    }, 1000);
};

renderLoader(document.getElementById('root'));

setTimeout(() => {
    renderBrandsPage(brandsData);
    clearLoader();
}, 1000);