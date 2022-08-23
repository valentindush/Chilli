<script lang="ts">

</script>

<main class="w-screen h-screen home flex justify-center items-center">
    <div class="p-2 w-[600px] flex flex-col items-center">
        <div class="">
            <img src="images/logo.svg" alt="not found">
        </div>
        <h2 class="text-gray-300 text-2xl mt-4">Get to chill with the strangers !</h2>
        <p class="text-gray-300 text-lg">Select your nickname and your interests then, you are ready to go</p>

        <input type="text" placeholder="Just a nickname not your real name" class="text-gray-300 p-2 rounded-full px-4 w-[60%] text-center outline-none border mt-12 bg-transparent border-gray-300 focus:border-pink-500">

        <button type="button" class="bg-pink-500 p-2 cursor-pointer shadow-lg rounded-full px-7 mt-12 text-gray-300 hover:scale-[0.98] active:scale-[0.98]">
            <a href="#/chat" class="">Go to chat</a>
        </button>

    </div>
</main>

<style>
    .home{
        background-color: #020017;
        background-image: linear-gradient(rgba(2, 0, 23, 0.82),rgba(2, 0, 23, 0.82)), url("images/bg.png");
    }
</style>