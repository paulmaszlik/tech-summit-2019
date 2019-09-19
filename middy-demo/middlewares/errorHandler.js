export const errorHandler = () => ({
    onError: handler => {
        console.log(handler.error);

        handler.response = {
            statusCode: handler.error.statusCode ? handler.error.statusCode : 500,
            body: JSON.stringify(handler.error)
        };

        return Promise.resolve();
    }
})