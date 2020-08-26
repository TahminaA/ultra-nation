import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    let totalPopulation=0;
    for (let i = 0; i < cart.length; i++) {
        const country = cart [i];
        totalPopulation=totalPopulation+country.population;
        
    }
    //const totalPopulation=cart.reduce((sum,country)=> sum+countr.population,0) ;
    return (
        <div>
            <h2>This is cart:{cart.length}</h2>
    <p><small>total population:{totalPopulation}</small></p>
        </div>
    );
};

export default Cart;