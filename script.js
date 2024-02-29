const display = document.querySelector('h1');
const start = document.querySelector('button');
const image = document.querySelector('img');

let timer = 10;
start.addEventListener('click',function()
{
    setTimeout(()=>{
        display.innerText = timer--;
       display.style.color = 'red';

       setTimeout(()=>{
        display.innerText = timer--;
        display.style.color = 'green';

        setTimeout(()=>{
            display.innerText = timer--;
            display.style.color = 'Yellow';

            setTimeout(()=>{
                display.innerText = timer--;
                display.style.color = 'orange';

                setTimeout(()=>{
                    display.innerText = timer--;
                    display.style.color = 'skyblue';

                    setTimeout(()=>{
                        display.innerText = timer--;
                        display.style.color = '#8A2BE2';

                        setTimeout(()=>{
                            display.innerText = timer--;
                            display.style.color = '#DC143C';

                            setTimeout(()=>{
                                display.innerText = timer--;
                            display.style.color = '#FF7F50';

                            setTimeout(()=>{
                                 display.innerText = timer--;
                            display.style.color = '#B22222';

                            setTimeout(()=>{
                                 display.innerText = timer--;
                            display.style.color = '#FFD700';

                            setTimeout(()=>{
                                display.innerText='Happy Independence Day';
                                image.style.display='block';
                                display.style.color = 'orange';
                            },1000)
                            },1000)
                            },1000)
                            },1000)
    
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
 
       },1000)
    },1000)
})