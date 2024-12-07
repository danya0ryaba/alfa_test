import React from 'react'
import { Filter } from '../components/Filter';
import { Cards } from '../components/Cards';

export const Home: React.FC = () => {

    return <>
        <Filter />
        {/* сделал этот компонент только чтобы не рендерит фильтры лишний раз, можно было и без него */}
        <Cards />
    </>
}
