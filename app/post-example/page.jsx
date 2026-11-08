import { createHelloGreating } from "../../lib/test-api";

const PostExample = () => {
    const  { message } = createHelloGreating('Radik');
    return(
        <section className="content">
            <h2 className="section-title">Post request</h2>
            {message && <p>{message}</p>}
        </section>
    )
}

export default PostExample