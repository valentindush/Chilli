<script lang="ts">
import Sidebar from "./components/sidebar.svelte";
import Msg from "./components/msg.svelte";
import {io} from 'socket.io-client'

let myVideoEl:HTMLVideoElement;
let theirVideoEl:HTMLVideoElement
$:isCamAllowed = false;

let msgValue:string = "";

const getCamReady = ()=>{
    navigator.mediaDevices.getUserMedia({video: true})
    .then((stream)=>{
        myVideoEl.srcObject = stream;
        myVideoEl.onloadedmetadata = (e)=>{
            myVideoEl.play();
        }
        alert('cam ready!');
        isCamAllowed = true;
    }).catch((err)=>{
        console.log(err);
        alert("Yooo G, you need to allow the camera and mic to use video call")
        isCamAllowed = false;
    }
    );
}

let messages:{type:string,msg:string}[] = []

const sendMsg = ()=>{
    if(msgValue === "") return
    messages = [...messages,{type:"right",msg:msgValue}]
    msgValue = ""
}

const socket = io('http://localhost:4000',{ transports: ['websocket', 'polling', 'flashsocket'] });
socket.on('connection',()=>{
    console.log('connected to server');
})


</script>

<main class="w-screen h-screen bg-[#020017]">
    <div class="flex relative w-full h-full p-4">
        <Sidebar/>
        <div class="bg-white bg-opacity-5 backdrop-blur-md border border-white border-opacity-20 rounded-r-xl w-[calc(100%-300px)] ml-[300px]">
            <div class="w-full h-full flex">
                <div class=" border-l w-[60%] border-white border-opacity-10 h-full">
                    <div class="chatBox p-3 relative h-full">
                        <header class="h-[30px">
                            <span class="text-gray-300 font-semibold text-xl">Chilli</span>
                        </header>
                        <div class="msgbox pt-4 h-[calc(100%-80px)] overflow-auto">
                            <!-- Messages here -->
                            <Msg type="left" msg="Hello ghee sup ? how u doin mn"/>
                            {#each messages as msg}
                              <Msg type={msg.type} msg={msg.msg} /> 
                              {:else}
                                <p class="text-gray-300 mt-5">Once you start chatting Ur messages will appea here !</p> 
                            {/each}
                        </div>
                        <div class="absolute bottom-3 w-[calc(100%-20px)] flex items-center gap-3">
                            <div class="border-2 border-white border-opacity-10 rounded-full w-full">
                                <input bind:value={msgValue} type="text" class="text-gray-300 bg-transparent outline-none p-2 px-4 w-full" placeholder="Type message . . .">
                            </div>
                            <button on:click={sendMsg} class="border-2 flex items-center justify-center border-white border-opacity-10 w-[60px] h-[50px] rounded-full active:border-pink-500 active:scale-95">
                                <svg width="30" height="30" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M40.3333 3.66666L20.1666 23.8333" stroke="#AB0E92" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M40.3333 3.66666L27.5 40.3333L20.1666 23.8333L3.66663 16.5L40.3333 3.66666Z" stroke="#AB0E92" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>       
                            </button>
                            
                        </div>

                    </div>
                </div>
                <div class="vid border-2 w-[40%] border-white border-opacity-10 h-full">
                    <div class="stranger border-2 p-2 w-full h-[50%] border-white border-opacity-10 rounded-lg">
                        {#if !isCamAllowed}
                            <button on:click={getCamReady} class="text-gray-300 bg-pink-600 p-3 rounded-xl w-fit m-auto block mt-24 active:scale-95">Get the cam ready!</button>
                        {/if}
                        <video bind:this={theirVideoEl}>
                            <track kind="captions" />
                        </video>
                    </div>
                    <div class="me border-2 p-2 w-full h-[50%] border-white border-opacity-10 rounded-lg relative">
                     
                        <video bind:this={myVideoEl} class="w-full h-full">
                            <track kind="captions" />
                        </video>
                        <button class="absolute bottom-3 left-2 p-1 px-3 border-2 backdrop-blur-md border-red-500 rounded-xl text-red-500 active:scale-95">Leave</button>
                    </div>
                </div>
            </div>  
        </div>
    </div>
</main>

<style>
    ::-webkit-scrollbar{
        width: 5px;
    }

    ::-webkit-scrollbar-thumb{
        background: rgb(216, 158, 168);
        border-radius: 10px;
        opacity: 0.5;
    }
    ::-webkit-scrollbar-thumb:hover{
        background: rgb(244, 117, 138);
    }
</style>