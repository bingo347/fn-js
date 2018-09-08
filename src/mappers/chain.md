## chain(...mappers: ValueMapper<V, R>)

Can take in any number of functions as arguments.  

Allows to execute functions one after another.   
Calls every argument (every function) with passed down value.

    const add = (num)  => {
         return num + num; // => 32 + 32 = 64
    }

    const multiply = (num) => {
         return num * num; // => 64 * 64 = 4096
    }

    chain(add, multiply)(32)