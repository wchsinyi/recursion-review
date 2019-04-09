// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(target) {
    console.log(target)
    var level = document.body;

    var ans = [];
    // nodeTraversal(document, x => console.dir(x));
    var nodeTraversal = function(n) {
        
        
        if (n.nodeType === 1 && n.classList.contains(target)) {
            ans.push(n)
        } 
        // debugger;
        if(n.hasChildNodes()){
            var childNodesLength = n.childNodes.length;
            for (let i = 0; i < childNodesLength; i++) {
                nodeTraversal(n.childNodes[i])
            }
        }
        // for (let i = 0; i < childNodesLength; i++) {
        //     ans.push(n.childNodes[i]);
    
        //     if (n.childNodes[i].length !==0 ) {
        //         nodeTraversal(n[i], cb);
        //     }
        // } 
    }
    
    nodeTraversal(level)
    return ans
};


// var ans = [];




// console.dir(document);
// getElementsByClassName('d');


// <div>
// <div class="somediv">
// <div class="innerdiv">
// <span class="targetClassName">
// yay
// </span>
// </div>
// </div>
// </div>


