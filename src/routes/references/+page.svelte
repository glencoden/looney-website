<script>
    const animations = ['slide-top', 'slide-bottom', 'slide-left', 'slide-right']
    const spice = 'LOONEY'
    const logos = ['benz.png', 'berlin.png', 'bikini.png', 'byron.png', 'CT.png', 'edelweiss.png', 'icke.jpg', 'levis.png', 'mc-fit.png', 'nhow.png', 'oooh.png', 'ronsons.png', 'soho.png', 'valora.png', 'VO.png', 'welldo.png']
</script>

<div class="logos">
    {#each logos as logo (logo)}

        <div class={`logo-box ${animations[Math.floor(Math.random() * 4)]}`}>
            <img src={`references/${logo}`} alt={`reference ${logo}`}>
        </div>

    {/each}
</div>

<style>
    @keyframes slide-top {
        0% {
            transform: translateY(-100vh);
        }

        25% {
            transform: translateY(-100vh);
        }

        100% {
            transform: translateY(0);
        }
    }

    @keyframes slide-bottom {
        0% {
            transform: translateY(100vh);
        }

        25% {
            transform: translateY(100vh);
        }

        100% {
            transform: translateY(0);
        }
    }

    @keyframes slide-left {
        0% {
            transform: translateX(-100vw);
        }

        25% {
            transform: translateX(-100vw);
        }

        100% {
            transform: translateX(0);
        }
    }

    @keyframes slide-right {
        0% {
            transform: translateX(100vw);
        }

        25% {
            transform: translateX(100vw);
        }

        100% {
            transform: translateX(0);
        }
    }

    .slide-top {
        animation: slide-top 0.8s ease;
    }

    .slide-bottom {
        animation: slide-bottom 0.8s ease;
    }

    .slide-left {
        animation: slide-left 0.8s ease;
    }

    .slide-right {
        animation: slide-right 0.8s ease;
    }

    .logos {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        width: 100%;
        margin: calc(-0.5 * var(--padding) * 1px);
    }

    .logo-box {
        width: 140px;
        height: 140px;
        border: var(--border-width) solid var(--pink-dark);
        background-color: var(--pink);
        margin: calc(0.5 * var(--padding) * 1px);
        overflow: hidden;
    }

    img {
        width: 140px;
        filter: sepia(100%);
    }
</style>