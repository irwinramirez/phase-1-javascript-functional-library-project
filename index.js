function myEach(collection, callBack){
 for(let accessor in collection){
  callBack(collection[accessor])
 }
 return collection
}
function myMap(collection, callBack){
  let modifiedArr = []
  for(let accessor in collection){
    modifiedArr.push(callBack(collection[accessor]))
   }
  return modifiedArr
}

function myReduce(collection, callBack, acc){
if (Array.isArray(collection) === false){
  collection = Object.values(collection);
}

if(acc === undefined){
  acc = collection[0];
  collection = collection.slice(1);
}
  for(let i = 0; i < collection.length; i++){
    acc = callBack(acc, collection[i], collection);
  }
  return acc
}

function myFind(collection, predicate){
  // console.log("collection", collection)
  if (Array.isArray(collection) === false){
    collection = Object.values(collection);
  }
  for(let i = 0; i < collection.length; i++){
    if(predicate(collection[i])){
      return collection[i]
    }
  }
}
function myFilter(collection, predicate){
  if (Array.isArray(collection) === false){
    collection = Object.values(collection);
  }
  let result = [];
  for (let i = 0; i < collection.length; i++){
    if (predicate(collection[i])) {
      result.push(collection[i]);
    }
  }
  return result
}
function mySize(collection){
  if (Array.isArray(collection) === false){
    collection = Object.values(collection);
  }
  let size = 0
  for(let i of collection){
    size++
  }
  return size
}
function myFirst(array, n){
  if (n === undefined){
    return array[0]
  }else{
    return array.slice(0, n)
  }
}
function myLast(array, n){
  if (n === undefined){
    return array[array.length - 1]
  }else{
    return array.slice(-n)
  }
}
function myKeys(obj){
  let arr = []
  for(let key in obj){
    arr.push(key)
  }
  return arr
}
function myValues(obj){
  let arr =[]
  for(let key in obj){
    arr.push(obj[key])
  }
  return arr
}