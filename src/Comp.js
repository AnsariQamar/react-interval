import React from 'react';

export default function Comp(){
  const [count,setCount]=React.useState(0);
  
  React.useEffect(()=>{
    const a=document.querySelectorAll('.block');
    let temp=a[0].style.backgroundColor;
    if(a[0].style.backgroundColor=""){
      a[0].style.backgroundColor='black';
    }else{
      a[0].style.backgroundColor='white';
    }
    // a[0].style.backgroundColor='white';
    // setTimeout(()=>{
    //   console.log(a[0].style);
    // },1000)
    setInterval(()=>{
      const rand=Math.floor(Math.random()*25);
      a[rand].style.backgroundColor='white';
      // console.log(a[rand].style)
      // if(a[rand].style.backgroundColor=='black'){
      // }
    },1000);
  },);

  function handle(e){
    e.target.style.backgroundColor='white';
    // console.log(e.target);
    setCount(count+1);
  }

  return (
    <div onClick={handle} >
      {count}
      <div className='block'></div>
      <div className='block'></div>
      <div className='block'></div>
      <div className='block'></div>
      <div className='block'></div>
    </div>
  );
}