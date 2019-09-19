const handler = async (event, context) => {
    console.log(`
    ▄▄▄▄▄▄▄▄▄▄▄      
   ▐░░░░░░░░░░░▌     
   ▐░█▀▀▀▀▀▀▀█░▌     
   ▐░▌       ▐░▌     
   ▐░█▄▄▄▄▄▄▄█░▌     
   ▐░░░░░░░░░░░▌     
   ▐░█▀▀▀▀▀▀▀█░▌     
   ▐░▌       ▐░▌     
   ▐░▌       ▐░▌     
   ▐░▌       ▐░▌     
    ▀         ▀ `)

    return 'functionA executed successfully!';
}

export default handler;