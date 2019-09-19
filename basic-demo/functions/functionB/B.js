const handler = async (event, context) => {
    console.log(`
    ▄▄▄▄▄▄▄▄▄▄       
   ▐░░░░░░░░░░▌      
   ▐░█▀▀▀▀▀▀▀█░▌     
   ▐░▌       ▐░▌     
   ▐░█▄▄▄▄▄▄▄█░▌     
   ▐░░░░░░░░░░▌      
   ▐░█▀▀▀▀▀▀▀█░▌     
   ▐░▌       ▐░▌     
   ▐░█▄▄▄▄▄▄▄█░▌     
   ▐░░░░░░░░░░▌      
    ▀▀▀▀▀▀▀▀▀▀ `);

    return 'functionB executed successfully!';
}

export default handler;