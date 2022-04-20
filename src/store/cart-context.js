import React from 'react';
import { createContext } from 'react/cjs/react.production.min';

React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
});

export default createContext;