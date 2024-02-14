class Products{
    
    render() {
        let htmlCatalog = '';
        
        CATALOG.forEach(({id, name, img, price, href, discount, brand, size}) =>{
            
            htmlCatalog += `
                <li class="products_element">
                    <div  class="products_elementcenter_container">

                    <img class="products_element_images" src="${img}" />

                    <div class="top_products_element">
                    <div class="products_brand">${brand}</div>
                    <div class="products_element_name">${name}</div><dr>
                    </div>

                    <div class="bottom_products_element">
                    <div class="products_element_size">${size} Сm</div>
                    <div class="products_element_price">${price}</div>
                    </div>
                    
                    </div>
                </li>
            `;
        });
        
        const html = `
        <div class="products_element_container">
            <ul class="products_container">
            ${htmlCatalog}
            </ul>
        </div>
        `;
        
        ROOT_PRODUCTS.innerHTML = html;
    }
}
const ROOT_PRODUCTS = document.getElementById("products_content");

const productsPage = new Products();
productsPage.render();
