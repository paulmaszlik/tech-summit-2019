import AWS from 'aws-sdk';
import middy from 'middy';
import { errorHandler } from '../../middlewares'

const documentClient = new AWS.DynamoDB.DocumentClient();

const customMiddleWare = () => ({
    before: handler => {
        console.log('---- before handler');
        // return Promise.reject('my own custom error')
        return Promise.resolve();
    },
    after: handler => {
        console.log('++++ after handler')
        return Promise.resolve();
    },
});


const handler = async (event, context) => {
    console.log('handler - functionB');

    const id = event.pathParameters.id;
    const { Item } = await documentClient.get({
        Key: {
            id,
        },
        TableName: 'service-middy-demo-table',
    }).promise();

    return {
        statusCode: 200,
        body: Item ? Item : {}
    }
}

// export default handler;
// export default middy(handler).use(customMiddleWare());
export default middy(handler).use(customMiddleWare()).use(errorHandler());