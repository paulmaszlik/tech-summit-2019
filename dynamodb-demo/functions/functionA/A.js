import AWS from 'aws-sdk';
import uuid from 'uuid';

const documentClient = new AWS.DynamoDB.DocumentClient();

const handler = async (event, context) => {
    console.log('handler - functionA');
    console.log(event);

    const { name } = JSON.parse(event.body);
    const id = uuid();

    await documentClient.put({
        TableName: 'service-dynamodb-demo-table',
        Item: {
            id,
            date: new Date().toISOString(),
            name
        },
    }).promise();

    // return 'functionA executed successfully!';
    return {
        statusCode: 200,
        body: `Item added successfully! Id: ${id}`
    }
}

export default handler;