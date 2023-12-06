function decode(message) {
    while (message.includes('(')) {
        let start = message.lastIndexOf('(');
        let end = message.indexOf(')', start);

        message = message.substring(0, start) + 
        message.substring(start + 1, end).split('').reverse().join('') + 
        message.substring(end + 1);
    }
    return message;
}

const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus
