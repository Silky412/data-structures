class Linklist{

    constructor(){
      this.head=null
      
    }

addNode(nodeVal){
    let newNode={
        value:nodeVal,
        next:null
    }
    let curr
    if(this.head==null){
          this.head=newNode
    }
    else{
         curr=this.head;
        while(curr.next){
            curr=curr.next;
        }
        curr.next=newNode

    }
      
     
     
    
}
        
    }
    let list=new Linklist()
    list.addNode("20")
    list.addNode("30")
    list.addNode("40")
    console.log(list)
  