const { v4: uuidv4 } = require('uuid');
const uid = uuidv4();
const url = require('node:url');
const prisma = require('../../prisma/prisma')

// const jwt = require('jsonwebtoken');
// const { connect } = require('node:http2');
// require('dotenv').config();

// function verifyToken(req, res, next) {
//   const token = req.headers.authorization;

//   if (!token) {
//     return token
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
//     req.userId = decoded.userId; // Attach userId to request object for later use
//     next();
//   } catch (error) {
//     return req.userId
//   }
// }
const esewarequest = async(req,res)=>{
    res.render('esewarequest',{"uid":uid})
}


const esewaResponse = async (req, res) => {
    // verifyToken(req);
    const parsedURL = new URL(req.url, `http://${req.headers.host}`);
    const oid = parsedURL.searchParams.get('oid');
    const amt = parsedURL.searchParams.get('amt');
    const refId = parsedURL.searchParams.get('refId');

    // const { userId, courseId, amount } = req.body;

    try {
        // Create the transaction first to get its ID
        const transaction = await prisma.transaction.create({
            data: {
                oid: oid,
                amt: parseFloat(amt),
                refid: refId
            }
        });

        // Create the payment and link it to the transaction
        await prisma.$transaction([
            prisma.payment.create({
                data: {
                    userId: 5,
                    paymentMethod: "ESEWA",
                    courseId: 2,
                    amount: 100,
                    txnId: transaction.id
                }
            })
        ]);

        res.send("Payment success");
    } catch (error) {
        console.log(error);
        res.status(500).send("Payment failed");
    }
};


module.exports={esewarequest,esewaResponse}

