import Image from 'next/image'

export default function ContactsPage() {
    return(
        <section className="content">
            <h2 className="section-title">Contacts</h2>
            <p>
                Email: fuck@fuck.com <br />
                Phone: 03040506067 <br />
                Address: tebya ebat ne dolzhno
            </p>
            <br />
            {/* добавление изображений со сторонних хостов, заглянуть в next.config */}
            <Image src='https://webcademy.ru/blog/wp-content/uploads/2025/09/dodge-400-200.jpg' alt="marta=photo" width='400' height='200' loading="eager" />
        </section>
    )
}