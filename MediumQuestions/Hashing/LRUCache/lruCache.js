var lruCache = function(capacity){
    this.capacity = capacity;
    this.map = new Map();
};

lruCache.prototype.get = function(key){
    if(!this.map.has(key)) reuturn -1;

    let value = this.map.get(key);

    this.map.delete(key);
    this.map.set(key, value);

    return value;
};

lruCache.prototype.put = function(key, value){
    if(this.map.has(key)) this.map.delete(key);

    this.map.set(key, value);

    if(this.map.size > this.capacity){
        let firstKey = this.map.keys().next().value;
        this.map.delete(firstKey);
    }
}