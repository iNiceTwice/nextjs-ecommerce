import connectDB from "../../../utils/dbConnection"
import axios from "axios"

const MP_TOKEN = process.env.MP_TOKEN
const JWT_SECRET = process.env.JWT_SECRET
const HOST = process.env.HOST

const handler = async (req,res) => {
   
    await connectDB()

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
    const url = "https://api.mercadopago.com/preapproval";
    
    if(!firstName || !lastName || !id || !address || !zip || !phone || !email){
      return res.status(500).json({message:"Missing payer data"})
    }
    if(!req.body.totalCost){
      return req.status(500).json({message:"No totalCost provided"})
    }


    const body = {
        reason: "Custom subscription bundle - Populum",
        auto_recurring: {
            frequency: 1,
            frequency_type: "months",
            transaction_amount: req.body.totalCost.toFixed(2),
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
        back_url: `${HOST}/shop/checkout`,
        status:"pending",
        external_reference:"subscription",
        payer_email:"test_user_93452689@testuser.com",
    };

    try {
        const payment = await axios.post(url, body, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${MP_TOKEN}` 
          }
        });
        res.send(payment.data.init_point)
    } catch (error) {
        console.log(error)
    }

}

export default handler