function sumfibs(num){

    let pre=0;
    let cur =1;
    let sum=0;

    while (cur<= num){
        if(cur%2!==0){
            sum+=cur
        }
        cur+=pre;
        pre=cur-pre;


    }
    return sum
}