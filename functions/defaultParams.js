 checkDefaultParam = (name = 'John') => {
     console.log(` Hello  ${name}`);
 }

 console.log(checkDefaultParam()); // output 'Hello John'
 console.log(checkDefaultParam('Adam')); // output'Hello Adam'