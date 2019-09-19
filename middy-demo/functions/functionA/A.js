import AWS from 'aws-sdk';
// import middy from 'middy';
// import { jsonBodyParser, validator } from 'middy/middlewares'; // built in middy middlewares
// import { errorHandler } from '../../middlewares'
import uuid from 'uuid';

const documentClient = new AWS.DynamoDB.DocumentClient();

const handler = async (event, context) => {
    console.log('handler - functionA');

    // const { name } = event.body; // don't have parse here anymore - jsonBodyParser middleware parsing the input body
    const { name } = JSON.parse(event.body);
    const id = uuid();

    await documentClient.put({
        TableName: 'service-middy-demo-table',
        Item: {
            id,
            date: new Date().toISOString(),
            name
        },
    }).promise();

    return {
        statusCode: 200,
        body: `Item added successfully! Id: ${id}`
    }
}

export default handler;
// export default middy(handler).use(jsonBodyParser()).use(validator({
//     required: ['body'],
//     properties: {
//         body: {
//             required: ['name'],
//             type: 'object',
//             properties: {
//                 name: {
//                     type: 'string',
//                     pattern: '^[a-zA-Z]+$',
//                 },
//                 quantity: {
//                     tpye: 'number'
//                 }
//             },
//         },
//     },
// })).use(errorHandler());