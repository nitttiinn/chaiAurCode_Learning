const fs = require('fs'); // sabse phele ye line chlegi
const crypto = require('crypto'); // same as above


setTimeout(()=> console.log('Set Timeout'),0); // techincally , this one will run 2nd

setImmediate(() => console.log('Set Immediate')); // then this one will run 3rd

// we can also manage the size of thread pool
process.env.UV_THREADPOOL_SIZE = 8;

fs.readFile('sample.txt','utf-8', function(err,data){
    const start = Date.now();

    crypto.pbkdf2('password','salt1', 100000, 1024, 'sha512', function(err,key){
        console.log(`[Time taken] ${Date.now() - start}ms, Password 1 Hashed`);
    });
    
    crypto.pbkdf2('password','salt1', 100000, 1024, 'sha512', function(err,key){
        console.log(`[Time taken] ${Date.now() - start}ms, Password 2 Hashed`);
    });
    
    crypto.pbkdf2('password','salt1', 100000, 1024, 'sha512', function(err,key){
        console.log(`[Time taken] ${Date.now() - start}ms, Password 3 Hashed`);
    });
    
    crypto.pbkdf2('password','salt1', 100000, 1024, 'sha512', function(err,key){
        console.log(`[Time taken] ${Date.now() - start}ms, Password 4 Hashed`);
    });
    
    crypto.pbkdf2('password','salt1', 100000, 1024, 'sha512', function(err,key){
        console.log(`[Time taken] ${Date.now() - start}ms, Password 5 Hashed`);
    });
    
    crypto.pbkdf2('password','salt1', 100000, 1024, 'sha512', function(err,key){
        console.log(`[Time taken] ${Date.now() - start}ms, Password 6 Hashed`);
    });
    
    crypto.pbkdf2('password','salt1', 100000, 1024, 'sha512', function(err,key){
        console.log(`[Time taken] ${Date.now() - start}ms, Password 7 Hashed`);
    });
    crypto.pbkdf2('password','salt1', 100000, 1024, 'sha512', function(err,key){
        console.log(`[Time taken] ${Date.now() - start}ms, Password 8 Hashed`);
    });
});

console.log('Hello');   // this one is top level code , then it will run 1st