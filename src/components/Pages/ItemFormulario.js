function ItemFormulario({ nome, label, type, ph }) {
    return (
        <p>
            <label htmlFor={nome}>{label}: </label>
            <input type={type} name={nome} id={nome}
                placeholder={ph} />
        </p>
    )

}
export default ItemFormulario;