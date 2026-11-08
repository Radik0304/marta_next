import { notFound } from 'next/navigation';
import { Suspense } from 'react';

async function getUser(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        cache: 'no-store',
    });
    if(res.status === 404) notFound();
    if (!res.ok) throw new Error('failed to fetch user');
    return res.json();
}

// Вся работа с await params и fetch происходит внутри дочернего компонента
async function UserDetails({ params }) {
    const { id } = await params; // 1. Распаковываем Promise params
    const user = await getUser(id); // 2. Ждем данные пользователя с сервера
    
    console.log('User data:', user);

    return (
        <div>
            <h3>Пользователь #{user.id}: {user.name}</h3>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Город: {user.address?.city}</p>
            <p>Компания: {user.company?.name}</p>
        </div>
    );
}

// Основной компонент страницы остается синхронным
const UserPage = ({ params }) => {
    return (
        <section className="content">
            <h2>User page</h2>
            {/* 3. Оборачиваем в Suspense, чтобы убрать ошибки пререндеринга */}
            <Suspense fallback={<div>Загрузка профиля...</div>}>
                <UserDetails params={params} />
            </Suspense>
        </section>
    );
};

export default UserPage;
