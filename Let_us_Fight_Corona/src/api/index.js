import axios from 'axios';

const url = 'https://api.covid19india.org/data.json';

// export const fetchData = async() => {
//     try {
//         const { data: { statewise: { confirmed, recovered, active, deaths } } } = await axios.get(url);
//         return {
//             statewise: { confirmed, recovered, active, deaths }
//         };
//     } catch (error) {
//         return error;
//     }
// };



export const fetchData = async() => {
    try {
        const { data } = await axios.get(url);

        return data.statewise.map(({ confirmed, recovered, active, deaths }) => ({ confirmed: confirmed, recovered: recovered, active: active, deaths: deaths }));
    } catch (error) {
        return error;
    }
};

export const fetchTotalData = async() => {
    try {
        const { data } = await axios.get(url);

        return data.statewise.map(({ confirmed, recovered, active, deaths, state }) => ({ confirmed: confirmed, recovered: recovered, active: active, deaths: deaths, state: state }));
    } catch (error) {
        return error;
    }
};



export const fetchCountries = async() => {
    try {
        const { data } = await axios.get(url);

        return data.statewise.map((info) => info.state);
    } catch (error) {
        return error;
    }
};