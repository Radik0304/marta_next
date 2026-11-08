'use client'
// клиентский компонент
const Button = () => {
    return(
        <button
            className="btn btn-ghost"
            onClick={() => alert("click")}
        >
            Click (client)
        </button>
    )
}

export default Button