const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            name: 'Luis',
            lastname: 'Rodriguez',
            services: [
                { id: 1, name: 'Plomeria' },
                { id: 2, name: 'Jardineria' },
                { id: 3, name: 'Seguridad' },
            ]
        },
        actions: {
            saludo: () => {
                const { name, lastname } = getStore();
                alert(`${name} ${lastname}`);
            },
            newMethod: () => {
                const { saludo } = getActions();
                saludo();
            },
            getServices: () => {
                fetch("", {})
                    .then((response) => response.json())
                    .then((data) => {
                        setStore({
                            services: data
                        })
                    })
            }
        }
    }
}

export default getState;