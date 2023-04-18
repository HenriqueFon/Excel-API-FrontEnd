import './ImportForm.css';

const ImportForm = ( {handleFileChange, importFile }) => {

    return (
        <form name = "input-file" onSubmit = { importFile }>
            <div className = 'input-form'>
                <label htmlFor= "input-file">Insira o arquivo</label>
                <input type="file"
                        id = "input-file"
                        className = 'input-box'
                        onChange = { handleFileChange }
                        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"/>
            </div>
            <div className = 'button-form'>
                <button>Enviar</button>
            </div>
        </form>
    )
}

export default ImportForm;