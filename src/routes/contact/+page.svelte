<script>
    import usePost from '../../utils/usePost'
    import InputText from '../../components/InputText.svelte'
    import InputTextArea from '../../components/InputTextArea.svelte'
    import Button from '../../components/Button.svelte'
    import LoadingSpinner from '../../components/LoadingSpinner.svelte'

    let email = ''
    let name = ''
    let content = ''

    const { error, isLoading, post } = usePost('https://5o2bjifmql.execute-api.us-east-1.amazonaws.com/dev/email/send')

    const onSubmit = () => {
        if (!name || !email || !content) {
            return
        }
        post({
            name,
            email,
            content,
            page: 'looneys', // identify this website to serverless contact form
        })
    }
</script>

{#if $isLoading}

    <LoadingSpinner />

{:else if $error !== null}

    <pre>{JSON.stringify(error, null, 4)}</pre>

{:else}

    <div class="contact-form">
        <div class="input-field-box">
            <div class="input-field">
                <p>Name</p>
                <InputText bind:value={name} />
            </div>
            <div class="input-field">
                <p>Email</p>
                <InputText bind:value={email} />
            </div>
        </div>

        <div class="text-area-box">
            <p>Message</p>
            <InputTextArea bind:value={content} />
        </div>

        <Button label="submit" onClick={onSubmit} />
    </div>

{/if}

<style>
    .contact-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: calc(var(--padding) * 1px);
        width: 100%;
        height: 70vh;
        font-family: "Playfair Display SC", sans-serif;
        font-weight: 700;
        font-size: var(--font-size-m);
        color: var(--pink);
        background-color: var(--pink-dark);
        border: var(--border-width) solid var(--black);
        border-radius: var(--boder-radius);
        box-shadow: var(--box-shadow);
    }

    .input-field-box {
        display: flex;
        justify-content: space-between;
        width: 90%;
    }

    .input-field {
        display: inline-flex;
        flex-direction: column;
        width: 48%;
    }

    .text-area-box {
        display: flex;
        flex-direction: column;
        width: 90%;
        height: 40vh;
    }
</style>