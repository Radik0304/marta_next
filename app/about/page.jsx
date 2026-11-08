import Image from 'next/image'

const AboutPage = () => {
    return(
        <section className="content">
            <h2 className="section-title">About</h2>
            <p>Описание секции</p>
            <Image src='/marta.jpeg' alt="marta=photo" width='400' height='300' loading="eager" />
            
        </section>
    )
}

export default AboutPage;