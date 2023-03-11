class LinkList{
      constructor(){

        this.head=null;
           
      }
     
      append(item){
        let curr;
          let newNode={
              value:item,
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
      insertAtIndex(item,index){
        let curr,prev,it=0;
        let newNode={
            value:item,
            next:null

        }
          if(index===0){
              newNode.next=this.head
              this.head=newNode

          }
          else{
              curr=this.head
              while(it<index){
                  it++;
                  prev=curr
                  curr=curr.next
              }
              newNode.next=prev.next
              prev.next=newNode

          }
        

      }
      trav(){
          let curr=this.head;
          while(curr){
              console.log(curr.value + ">>")
                  curr=curr.next
          }
         
      }
}
const list=new LinkList()
const listt=new LinkList()
list.append(10)
list.append(20)
list.trav()
console.log("before",list)
list.insertAtIndex(55,1)
console.log("after",list)
list.trav()
// console.log("after",list)

