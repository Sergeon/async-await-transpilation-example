module.exports = async function(){
    throw new Error('synchronous throw inside an async function');
};