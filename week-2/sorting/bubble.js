function bubbleSort(arr){
    let swapped;
    do{
        swapped=false;
        for(let i=0;i<+arr.length-1;i++){
            if(arr[i]<arr[i+1]){
                let temp=arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=temp
                swapped=true
            }
        }
    }while(swapped)
}

const array=[1,2,5,-1,-31,4,2,0]
bubbleSort(array)
console.log(array);