class HashTable{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }
    hash(key){
        let total=0;
        for(let i=0;i<=key.length;i++){
            total+=key.charChodeAt(i)
        }
        return total%this.size
    }
    set(key,value){
        
    }
}