<script>
    import Button from '../../components/Button.svelte';
    import InputText from '../../components/InputText.svelte';
    import InputTextArea from '../../components/InputTextArea.svelte';
    import LoadingSpinner from '../../components/LoadingSpinner.svelte';
    import VerticalSpacer from '../../components/VerticalSpacer.svelte';
    import usePost from '../../utils/usePost';
    import { isEmail } from './helpers/is-email';

    let email = ''
    let name = ''
    let content = ''

    let info = ''
    let timeoutId = 0

    const contactFormUrl = (typeof window !== 'undefined' && window.location.origin === 'http://localhost:5173')
        ? 'http://localhost:5555/contact'
        : 'https://rc.api.looneytunez.de/contact'

    const { error, isLoading, post } = usePost(contactFormUrl)

    const showMessage = (input, time) => {
        info = input
        timeoutId = setTimeout(() => {
            info = ''
        }, 1000 * time)
    }

    const onSubmit = () => {
        if (!name) {
            showMessage('Please enter a name.', 4)
            return
        }
        if (!isEmail(email)) {
            showMessage('Please enter a valid email address.', 4)
            return
        }
        if (!content) {
            showMessage('Please enter a message.', 4)
            return
        }
        post({
            name,
            email,
            content
        })
            .then(() => {
                showMessage('Your message has been sent!', 15)

                email = ''
                name = ''
                content = ''
            })
    }
</script>

<VerticalSpacer />

{#if $isLoading}

    <LoadingSpinner />

{:else if $error !== null}

    <pre>{JSON.stringify(error, null, 4)}</pre>

{:else}


    {#if !info}
        <p class="info">Please email us, we're happy to hear from you! <br> <a href="mailto:mail@liverockkaraoke.de">mail@liverockkaraoke.de</a></p>
    {:else}
        <p class="info">{info}</p>
    {/if}

{/if}

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

    .input-field-box {
        display: flex;
        justify-content: space-between;
        width: 100%;
        animation: slide-top 0.7s ease;
    }

    .text-area-box {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: calc(var(--main-content-width) * 0.7);
        animation: slide-top 0.6s ease;
    }

    .button-box {
        display: flex;
        justify-content: center;
        width: 100%;
        padding: calc(2 * var(--padding) * 1px);
        animation: slide-top 0.5s ease;
    }

    p {
        font-family: 'Pacifico', serif;
        font-size: var(--font-size-xm);
    }

    a {
        font-family: Poppins, sans-serif;
        font-size: var(--font-size-m);
    }

    .info {
        white-space: pre-line;
        font-size: var(--font-size-l);
        padding: calc(2 * var(--padding) * 1px);
    }

    .input-field {
        display: inline-flex;
        flex-direction: column;
        width: 48%;
    }
</style>