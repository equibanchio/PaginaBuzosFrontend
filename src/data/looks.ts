import buzo290copia from '../assets/buzos/Buzos-290 copia.png';
import buzo291copia from '../assets/buzos/Buzos-291 copia.png';
import buzo292copia from '../assets/buzos/Buzos-292 copia.png';
import buzo293copia from '../assets/buzos/Buzos-293 copia.png';
import buzo294copia from '../assets/buzos/Buzos-294 copia.png';
import buzo295copia from '../assets/buzos/Buzos-295 copia.png';
import buzo296copia from '../assets/buzos/Buzos-296 copia.png';

import buzo297copia from '../assets/buzos/Buzos-297 copia.jpg';
import buzo306copia from '../assets/buzos/Buzos-306 copia.jpg';
import buzo298copia from '../assets/buzos/Buzos-298 copia.jpg';
import buzo299copia from '../assets/buzos/Buzos-299 copia.jpg';
import buzo300copia from '../assets/buzos/Buzos-300 copia.jpg';
import buzo304copia from '../assets/buzos/Buzos-304 copia.jpg';
import buzo305copia from '../assets/buzos/Buzos-305 copia.jpg';

import buzo307copia from '../assets/buzos/Buzos-307 copia.jpg';
import buzo313copia from '../assets/buzos/Buzos-313 copia.jpg';
import buzo308copia from '../assets/buzos/Buzos-308 copia.jpg';
import buzo309copia from '../assets/buzos/Buzos-309 copia.jpg';
import buzo310copia from '../assets/buzos/Buzos-310 copia.jpg';
import buzo311copia from '../assets/buzos/Buzos-311 copia.jpg';
import buzo312copia from '../assets/buzos/Buzos-312 copia.jpg';

import buzo314copia from '../assets/buzos/Buzos-314 copia.jpg';
import buzo318copia from '../assets/buzos/Buzos-318 copia.jpg';
import buzo315copia from '../assets/buzos/Buzos-315 copia.jpg';
import buzo316copia from '../assets/buzos/Buzos-316 copia.jpg';
import buzo317copia from '../assets/buzos/Buzos-317 copia.jpg';

export interface Look {
    id: string;
    title: string;
    price: string;
    description: string;
    images: string[];
    features: string[];
}

export const looks: Look[] = [
    {
        id: 'modelo-1',
        title: 'Modelo 1',
        price: 'Consultar',
        description: 'Buzo ideal para egresados, con un estilo clásico y cómodo.',
        images: [buzo290copia, buzo296copia, buzo292copia, buzo293copia, buzo294copia, buzo295copia, buzo291copia],
        features: []
    },
    {
        id: 'modelo-2',
        title: 'Modelo 2',
        price: 'Consultar',
        description: 'Diseño moderno y versátil, perfecto para todo el curso.',
        images: [buzo307copia, buzo313copia, buzo308copia, buzo309copia, buzo310copia, buzo311copia, buzo312copia],
        features: []
    },
    {
        id: 'modelo-3',
        title: 'Modelo 3',
        price: 'Consultar',
        description: 'La opción perfecta para destacar, con un corte relajado.',
        images: [buzo297copia, buzo306copia, buzo298copia, buzo299copia, buzo300copia, buzo304copia, buzo305copia],
        features: []
    },
    {
        id: 'modelo-4',
        title: 'Modelo 4',
        price: 'Consultar',
        description: 'Estilo único con excelentes terminaciones. Totalmente personalizable.',
        images: [buzo314copia, buzo318copia, buzo315copia, buzo316copia, buzo317copia],
        features: []
    }
];
