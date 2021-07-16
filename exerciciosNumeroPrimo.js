function ePrimo(num) {
    let divisores = 0

    if (num === 1) {
        return false
    }
    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            divisores++
        }
        console.log(divisores)
    }
    if (divisores == 0) {
        return true
    } else {
        return false
    }

}
console.log(ePrimo(10))
