import AWS from 'aws-sdk';

const documentClient = new AWS.DynamoDB.DocumentClient();

const handler = async (event, context) => {
    console.log('handler - functionB');
    // console.log(event);

    const id = event.pathParameters.id;

    const { Item } = await documentClient.get({
        Key: {
            id,
        },
        TableName: 'service-dynamodb-demo-table',
    }).promise();


    // return 'functionB executed successfully!';
    return {
        statusCode: 200,
        body: JSON.stringify(Item)
    }
}

export default handler;