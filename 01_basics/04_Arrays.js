//Memory->>>Stack(Primitive->copy milta usme change hota ) & Heap(NonPrimitive->original mein change hota reference se)
let myyou = "SravaniTech"
let anothername = myyou;
console.log(anothername);
anothername="chaiaurcode";
console.log(anothername);
console.log(myyou);//stack
let user1={
    email:"abc@gmail.com",
    upi:"df@31"

}
user2=user1
user2.email = "sravani@gmail.com"
console.log(user1.email);//heap>>dono mein value change hota hai