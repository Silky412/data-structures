class LinkList{
    constructor(){
     this.head=null
     
    }
    
    
     append(nodeValue){  
     
     let newNode={
        value:nodeValue,
        next:null
     }
     let curr
     
      if(this.head==null){
      this.head=newNode
      } 
      else{
      curr=this.head
         while(curr.next){
            curr=curr.next
         }
         
         curr.next=newNode; 
      
      }
             
     }
 }
 
 const list=new LinkList()
 list.append(10)
 list.append(20)
 list.append(30)

 console.log(list)