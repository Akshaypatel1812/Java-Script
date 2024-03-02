document.addEventListener('DOMContentLoaded',function(){
    //here i apply 2 event listner one on owl and one on all images but here owl is also part of the images
    //then it firstly run the owl adn then images 

    /*here we learn the concept of the event propogation->There are two phases of event propagation: capturing phase and bubbling phase.
       -Capturing Phase: In this phase, the event is captured by the outermost element and then propagated to the innermost element. This means that events are triggered starting from the root of the DOM tree and moving towards the target element.

       -Bubbling Phase: In this phase, after the event reaches the target element, it then bubbles up from the target element back to the root of the DOM tree. This allows parent elements of the target element to also handle the event.

       -Event propagation can be controlled using the addEventListener method and by specifying a third parameter called useCapture. If useCapture is set to true, the event will be captured during the capturing phase. If set to false or omitted, the event will be handled during the bubbling phase.
    */
    // document.getElementById('owl').addEventListener('click', function(e){
    //     console.log("owl clicked");
    
    // },false)    //here false is by default

    // document.getElementById('images').addEventListener('click',()=>{
    //     console.log('Any images is clicked');
    // },false)   

    // document.getElementById('japan').addEventListener('click', function(e){
    //     console.log("japan clicked");
    
    // },true)    //here false is by default

    // document.getElementById('images').addEventListener('click',()=>{
    //     console.log('Any images is clicked');
    // },true)   
 
    // //here preventDefault method print that massage but dont move on the google
    // document.getElementById('google').addEventListener('click',(e)=>{
    //     e.preventDefault();
    //     console.log('Google clicked');
    // })

    //let do one activity

    document.getElementById('images').addEventListener('click',(e)=>{
        e.target.parentNode.remove();
        
    })

})

