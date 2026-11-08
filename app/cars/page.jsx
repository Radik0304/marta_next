const carList = [
    {
        id: 1,
        name: 'nissan',
        model: 'x-trail',
    },
    {
        id: 2,
        name: 'nissan',
        model: 'quasquai',
    },
    {
        id: 3,
        name: 'bmw',
        model: 'quasquai',
    },
    {
        id: 4,
        name: 'bmw',
        model: 'x-5',
    },
    {
        id: 5,
        name: 'dodge',
        model: 'charger',
    },
    {
        id: 6,
        name: 'dodge',
        model: 'challenger',
    },
    {
        id: 7,
        name: 'audi',
        model: 'A6',
    },
    {
        id: 8,
        name: 'audi',
        model: 'q7',
    },
    {
        id: 9,
        name: 'mersedes',
        model: 'g-class',
    },
    {
        id: 10,
        name: 'mersedes',
        model: 's-class',
    }
];

const CarsPage = () => {
    return (
        <section className="content">
            <h2 className="section-title">Cars</h2>
            <div className="users-list">
                {carList.map((car) => 
                    <div key={car.id} className="item">
                        <div className="item-title">{car.name}</div>
                        <div className="item-sub">{car.model}</div>
                    </div>
                )
                }
            </div>
        </section>
    );
};

export default CarsPage;