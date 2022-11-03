import { serialize } from "cookie"
import axios from "axios"

const MP_TOKEN = process.env.MP_TOKEN

const handler = (req,res) => {
   
    switch (req.method) {
        case "POST":
            monthlyPayment(req,res)
            break;
        default:
            break;
    }

}

const monthlyPayment = async (req,res) => {

    const { firstName, lastName, id, address, zip, phone, email } = req.body.payerData
    let totalPrice = 0

    req.body.products.map( item => {
        totalPrice = totalPrice + item.quantity * item.item.price
    })

    const url = "https://api.mercadopago.com/preapproval";

    const body = {
        reason: "Custom subscription bundle - Populum",
        auto_recurring: {
            frequency: 1,
            frequency_type: "months",
            transaction_amount: totalPrice,
            currency_id: "ARS"
        },
        payer: {
            name: firstName,
            surname: lastName,
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
        back_url: "https://google.com.ar",
        status:"pending",
        external_reference:"subscription",
        payer_email:"test_user_93452689@testuser.com",
    };

    const payment = await axios.post(url, body, {
        headers: {
            "Content-Type": "application/json",
        Authorization: `Bearer ${MP_TOKEN}` 
      }
    });

    res.send(payment.data.init_point)
}

export default handler