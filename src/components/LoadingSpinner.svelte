<div class="lds-box">
    <div class="lds-hourglass"></div>
</div>

<style>
    @keyframes lds-hourglass {
        0% {
            transform: rotate(0);
            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
        }
        50% {
            transform: rotate(900deg);
            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        100% {
            transform: rotate(1800deg);
        }
    }

    .lds-box {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    .lds-hourglass {
        display: inline-block;
        position: relative;
        width: 100px;
        height: 100px;
    }

    .lds-hourglass:after {
        content: " ";
        display: block;
        border-radius: 50%;
        width: 0;
        height: 0;
        margin: 8px;
        box-sizing: border-box;
        border: 32px solid var(--pink);
        border-color: var(--pink) transparent var(--pink) transparent;
        animation: lds-hourglass 1.2s infinite;
    }
</style>