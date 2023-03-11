class Linklist{
     constructor(){
         this.head=null
     }
     append(val){

        let curr
        let newNode={
            value:val,
            next:null
        }
        if(this.head===null){
               this.head=newNode
        }
        
        else{
            curr=this.head;
            while(curr.next){
                curr=curr.next

            }
            curr.next=newNode

        }
          
     }


     traverse(){
         let curr
         curr=this.head
         while(curr){
             console.log("val:",curr.value)
             curr=curr.next
         }
          
     }
     insertAtIndex(val,index){

         let curr,prev,ind=0;
         let newNode={
             value:val,
             next:null
         }
         if(index===0){
             newNode.next=this.head
             this.head=newNode
         }
        else{
            curr=this.head;
            while(ind<index){
                ind++;
                prev=curr;
                curr=curr.next
   
   
            }
   
            newNode.next=prev.next;
            prev.next=newNode;
        }
      

     }
}

const list=new Linklist()
list.append("10")
list.append("20")
list.append("50")
list.append("100")
list.traverse()
console.log("******after*****")
list.insertAtIndex('200',0)
list.traverse()