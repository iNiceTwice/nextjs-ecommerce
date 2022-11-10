import ShopItem from "../ShopItem";

const shop = [
    {   
        id:1,
        title:"Full-Spectrum Hemp CBD Oil",
        img:"https://cdn.shopify.com/s/files/1/1737/2201/products/250mgnewfeaturev5_1300x.jpg?v=1661911210",
        rating:4,
        price:"59.00",
        commentary:"Signature CBD drops with a delicious orange flavor",
        url:"tincture"
    },
    {   
        id:2,
        title:"Full-Spectrum Hemp CBD Capsules",
        img:"https://cdn.shopify.com/s/files/1/1737/2201/products/12_900x.webp?v=1663332108",
        rating:5,
        price:"79.00",
        commentary:"Premium CBD in convenient, precisely dosed capsules",
        url:"capsules"
    },
    {   
        id:3,  
        title:"Lavender + CBD Face Oil",
        img:"https://cdn.shopify.com/s/files/1/1737/2201/products/10_900x.png?v=1609965845",
        rating:5,
        price:"79.00",
        commentary:"Clean beauty that leaves your skin with a healthy glow",
        url:"lavender-cbd-face-oil"
    }
]
const Favorites = () => {
    return ( 
        <>
            <section className="mt-20 lg:mt-44 mx-6 lg:mx-20 xl:mx-40 mb-20">
                <h2 className="font-medium font-serif text-2xl lg:text-4xl text-black/75 text-center lg:text-left">Our Customer Favorites</h2>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-14">
                    {
                        shop.map((product)=>(
                            <ShopItem 
                                key={ product.id } 
                                id={ product.id }
                                title={ product.title }
                                rating={ product.rating }
                                price={ product.price }
                                commentary={ product.commentary } 
                                img={ product.img }
                                url={product.url} 
                            />
                        ))
                    }
                </div>
            </section>
        </>
     );
}
 
export default Favorites;