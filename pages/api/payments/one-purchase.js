import axios from "axios"

const MP_TOKEN = process.env.MP_TOKEN
const HOST = process.env.HOST

const handler = (req,res) => {
   
    switch (req.method) {
        case "POST":
            oncePayment(req,res)
            break;
        default:
            break;
    }

}

const oncePayment = async (req,res) => {

    const { firstName, lastName, id, address, zip, phone, email } = req.body.payerData
  
    if(!firstName || !lastName || !id || !address || !zip || !phone || !email){
      return res.status(500).json({message:"Missing payer data"})
    }
    if(!req.body.products){
      return req.status(500).json({message:"No products provided"})
    }

    const products = req.body.products.map( product => ({
                title: `${product.item.title} - ${product.item.size}`,
                picture_url: product.item.img,
                quantity: product.quantity,
                unit_price: product.item.price
    }))

    const url = "https://api.mercadopago.com/checkout/preferences";

    const body = {
      payer_email:"test_user_93452689@testuser.com",
      items: products,
      shipments: {
        name: firstName,
        surname: lastName,
        email: email,
        phone: {
            area_code: 11,
            number: phone
        },
        identification: {
            type: "DNI",
            number: id
        },
        address: {
            street_name: address,
            zip_code: zip
        }
      },
      external_reference:"once",
      back_urls: {
        failure: `${HOST}/shop/checkout`,
        pending: `${HOST}/shop/checkout`,
        success: `${HOST}/shop/checkout`
      }
    };

    const payment = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${MP_TOKEN}`
      }
    });

    return res.send(payment.data.init_point)
}

export default handler