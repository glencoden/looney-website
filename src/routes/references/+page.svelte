<script>
    import { base } from '$app/paths'
    import VerticalSpacer from '../../components/VerticalSpacer.svelte'

    const logos = [
        'vice.png',
        'levis.png',
        'mc-fit.png',
        'hilti.png',
        'boston-consulting.png',
        'soho.png',
        'benz.png',
        'normec.png',
        'spreespeicher.png',
        'bikini.png',
        'berlin.png',
        'nhow.png',
        'byron.png',
        'digital-turbine.png',
        'edelweiss.png',
        'katapult.png',
        'icke.jpg',
        'oooh.png',
        'ronsons.png',
        'CT.png',
        'valora.png',
        'VO.png',
        'welldo.png',
    ]
        // .sort(() => 0.5 - Math.random())

    const animations = [ 'slide-top', 'slide-bottom', 'slide-left', 'slide-right' ]

    const numColumns = 4
    const spice = 'ライブ❤カラオケ!'

    for (let i = 0; i < spice.length; i++) {
        const currentIndex = numColumns * i + Math.floor(Math.random() * numColumns)
        if (currentIndex >= logos.length) {
            break
        }
        logos.splice(currentIndex, 0, `${spice[i]}${i}`)
    }
</script>

<VerticalSpacer />

<div class="logos">
    {#each logos as logo (logo)}

        {#if logo.length === 2}
            <div class={`logo-box logo-box-salt ${animations[Math.floor(Math.random() * 4)]}`}>
                {logo.slice(0, 1)}
            </div>
        {:else}
            <div class={`logo-box ${animations[Math.floor(Math.random() * 4)]}`}>
                <img src="{base}/images/{logo}" alt={`reference ${logo}`}>
            </div>
        {/if}

    {/each}
</div>

<VerticalSpacer />

<style>
    @keyframes slide-top {
        0% {
            transform: translateY(-200vh);
        }

        25% {
            transform: translateY(-200vh);
        }

        100% {
            transform: translateY(0);
        }
    }

    @keyframes slide-bottom {
        0% {
            transform: translateY(200vh);
        }

        25% {
            transform: translateY(200vh);
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
        margin: calc(-1 * var(--reference-tile-margin));
    }

    .logo-box {
        display: flex;
        justify-content: center;
        align-items: center;
        width: var(--reference-tile-size);
        height: var(--reference-tile-size);
        background-color: var(--black);
        margin: var(--reference-tile-margin);
        overflow: hidden;
    }

    .logo-box-salt {
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 900;
        font-size: var(--font-size-l);
        color: var(--pink-dark);
        border: var(--border-width) solid var(--pink-dark);
        background-color: var(--pink);
    }

    img {
        width: calc(var(--reference-tile-size) * 5 / 7);
        filter: brightness(150%) saturate(0);
    }
</style>