import Employee from './models/crud';

async function init(){
    const isDev = true;

  
    await Employee.sync({alter:isDev})
    
}
const dbInit =() => {
    init();
}

export default dbInit;