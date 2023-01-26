function sum(){
    let res = 0 
    

    for(const n of arguments){
        res += n
    }
    return res
}
console.log(sum(1,2,1,1,55,6,3,5,99))

function sm(n1,n2){
    console.log(arguments)
    return

}

console.log(sm(1,'bruno',3))