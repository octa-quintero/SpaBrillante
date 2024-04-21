import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('Renderización de la aplicación', () => {
  test('La aplicación se renderiza correctamente', () => {
    const { getByText } = render(<App />);
    const welcomeText = getByText('Bienvenido');
    expect(welcomeText).toBeInTheDocument(); 
  });
});
