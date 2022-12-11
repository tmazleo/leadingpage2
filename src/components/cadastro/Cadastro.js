
import styles from './Cadastro.module.css'


function Cadastro() {

    function envio () {
        const btn = document.getElementById('sub');
        const input = document.getElementById('name').value;



        btn.addEventListener('click', () => {
            if(input) {
                window.location.reload()
            } else {
                alert("Preencha os campos")
            }
        })
    }

    return (
        <form action="https://api.staticforms.xyz/submit" method='POST' className={styles.form}>
            <input type="hidden" name="accessKey" value="e73b6668-9731-4f54-8851-780a6e6a2a78"/>
            <input type="text" name="name" id="name" placeholder="Nome" required/>
            <input type="email" name="email" id="email" placeholder="Email" required/>
            <textarea name="message" id="textArea" placeholder='Numero' required spellcheck ></textarea>

            <input type="submit" id='btn' value="Cadastrar" onClick={envio} />
        </form>
    )
}

export default Cadastro