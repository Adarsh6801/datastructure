class MinHeap{
    constructor() {
        this.heap=[]
    }
    build(array){
        this.heap=array;
        for(let i=Math.floor(this.heap.length/2);i>=0;i--){

        }
    }
    heapifyDown(index){
        const leftIndex=2*index+1;
        const rightIndex=2*index+2;
        let smallestIndex=index;
        if(leftIndex<this.heap.length && this.heap[leftIndex]<this.heap[smallestIndex]){
            smallestIndex=leftIndex;
        }
        if(rightIndex<this.heap.length && this.heap[rightIndex]<this.heap[smallestIndex]){
            smallestIndex=rightIndex;
        }
        if(smallestIndex!=index){
            [this.heap[index],this.heap[smallestIndex]]=[this.heap[smallestIndex],this.heap[index]]
            this.heapifyDown(smallestIndex)
        }
    }

    insert(value){
        this.heap.push(value)

    }
    heapifyUp(index){
        const parentIndex=Math.floor((index-1)/2)
        if(index>0 && this.heap[index]< this.heap[parentIndex]){
            [this.heap[index], this.heap[parentIndex]]=[this.heap[parentIndex], this.heap[index]]
            this.heapifyUp(parentIndex)
        }
    }

    remove(){
        if(this.heap.length===0){
            return null;
        }

        if(this.heap.length===1){
           return this.heap.pop()
        }

        const minValue=this.heap[0];
        this.heap[0]=this.heap.pop();
        this.heapifyDown(0)
        return minValue
    }
}