'use client'
// клиентский компонент

async function getMessageFromApi() {
    const res = await fetch('/api/test-api');
    return res.json();
}
const ButtonGetRequest = () => {
    const clickHandler = async () => {
        const {message} = await getMessageFromApi();
        alert(message);
    }
    return(
        <button
            className="btn btn-ghost"
            onClick={clickHandler}
        >
            Make get request (client)
        </button>
    )
}

export default ButtonGetRequest