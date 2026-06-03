<template>
    <div class="fixed flex items-center justify-center z-[1000] h-screen w-screen dark:bg-darkBg bg-lightBg top-0">
        <div class="card dark:bg-darkBg bg-lightBg">
            <div class="loader text-4xl">

                <p>loading</p>

                <div class="words">
                    <span class="word">buttons</span>
                    <span class="word">forms</span>
                    <span class="word">switches</span>
                    <span class="word">cards</span>
                    <span class="word">buttons</span>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    padding: 1rem 2rem;
    border-radius: 1.25rem;
}

.loader {
    color: rgb(124, 124, 124);
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    height: 40px;
    padding: 10px 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border-radius: 8px;
}

.words {
    overflow: hidden;
    position: relative;
}

.words::after {
    content: "";
    position: absolute;
    background: linear-gradient(var(--color-darkBg) 10%,
            transparent 30%,
            transparent 70%,
            var(--color-darkBg) 90%);
}

.word {
    display: block;
    height: 100%;
    padding-left: 6px;
    color: var(--color-primary);
    animation: spin_words 4s infinite;
}

@keyframes spin_words {
    10% {
        -webkit-transform: translateY(-102%);
        transform: translateY(-102%);
    }

    25% {
        -webkit-transform: translateY(-100%);
        transform: translateY(-100%);
    }

    35% {
        -webkit-transform: translateY(-202%);
        transform: translateY(-202%);
    }

    50% {
        -webkit-transform: translateY(-200%);
        transform: translateY(-200%);
    }

    60% {
        -webkit-transform: translateY(-302%);
        transform: translateY(-302%);
    }

    75% {
        -webkit-transform: translateY(-300%);
        transform: translateY(-300%);
    }

    85% {
        -webkit-transform: translateY(-402%);
        transform: translateY(-402%);
    }

    100% {
        -webkit-transform: translateY(-400%);
        transform: translateY(-400%);
    }
}
</style>
