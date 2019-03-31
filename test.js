var mergeTwoLists = function(l1, l2) {
    var firstArray=l1.split("->");
    var secondArray=l2.split("->");
    var thirdArray=firstArray.concat(secondArray).sort().join("->");
    console.log(thirdArray) 
    
};

mergeTwoLists('1->2->4', '1->3->4')