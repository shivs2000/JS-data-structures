function Node(){

this.keys=new Map();
this.end=false;
this.setEnd=function(){
    this.end=true;
};
this.isEnd=function(){
    return this.end;
}


}




let Trie=function(){
this.root=new Node();


//method to add 
this.add=function(input,node=this.root){
//if for input zero then set end like star
if(input===0){

    node.setEnd();
    return ;
}
//this if checks that this key isn't in node so add this letter to node using map function
else if(!node.keys.has(input[0])){
    node.keys.set(input[0],new Node())
    return this.add(input.substr(1),node.keys.get(input[0]));
}
else{
    return this.add(input.substr(1),node.keys.get(input[0]));
}




}


}