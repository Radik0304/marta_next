import Link from 'next/link';
import { Suspense } from 'react';

async function getUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
        cache: 'no-store',
    });
    if (!res.ok) throw new Error('failed to fetch users');
    return res.json();
}

const UserItem = ({ user }) => {
    return (
        // Оборачиваем элемент в Link для перехода на /users/1, /users/2 и т.д.
        <Link href={`/users/${user.id}`} className="item">
            <div>
                <div className="item-title">{`${user.id}. ${user.name}`}</div>
                <div className="item-sub">{user.email}</div>
            </div>
            <span aria-hidden>→</span>
        </Link>
    );
};

// Выносим асинхронный запрос в отдельный компонент для работы внутри Suspense
async function UsersList() {
    const users = await getUsers();
    return (
        <div className="users-list">
            {users.map((user) => (
                <UserItem key={user.id} user={user} />
            ))}
        </div>
    );
}

const UsersPage = () => {
    return (
        <section className="content">
            <h2 className="section-title">Users</h2>
            {/* Suspense решает ошибку "uncached data during prerendering" */}
            <Suspense fallback={<div>Загрузка списка пользователей...</div>}>
                <UsersList />
            </Suspense>
        </section>
    );
};

export default UsersPage;
