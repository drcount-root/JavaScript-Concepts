const adder = (n) => {
    console.log(n,"outer function popped off")
    
    const clos = (x) => {
        return console.log(x+n ,"ansClos")
    }

    return clos;
}

adder(10)(5);
