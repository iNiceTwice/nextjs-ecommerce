import ShopItem from "../ShopItem";

const shop = [
    {
        title:"Full-Spectrum Hemp CBD Oil",
        img:"https://cdn.shopify.com/s/files/1/1737/2201/products/250mgnewfeaturev5_1300x.jpg?v=1661911210",
        rating:4,
        totalRating:689,
        price:"47.20",
        commentary:"Signature CBD drops with a delicious orange flavor",
        url:"/"
    },
    {
        title:"Full-Spectrum Hemp CBD Oil",
        img:"https://cdn.shopify.com/s/files/1/1737/2201/products/250mgnewfeaturev5_1300x.jpg?v=1661911210",
        rating:4,
        totalRating:689,
        price:"47.20",
        commentary:"Signature CBD drops with a delicious orange flavor",
        url:"/"
    },
    {   
        title:"Full-Spectrum Hemp CBD Oil",
        img:"https://cdn.shopify.com/s/files/1/1737/2201/products/250mgnewfeaturev5_1300x.jpg?v=1661911210",
        rating:4,
        totalRatings:689,
        price:"47.20",
        commentary:"Signature CBD drops with a delicious orange flavor",
        url:"/"
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
                                totalRatings={ product.totalRatings } 
                            />
                        ))
                    }
                </div>
            </section>
        </>
     );
}
 
export default Favorites;