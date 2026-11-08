import ButtonGetRequest from "../../components/ButtonGetRequest";
import { getMessage } from "../../lib/test-api";

const getExample = () => {
    const { message } = getMessage();
    return (
        <section className="content">
            <h2 className="section-title">Get request</h2>
            {
                message && 
                <p>{message}</p>
            }
            <ButtonGetRequest />
        </section>
    )
}

export default getExample;