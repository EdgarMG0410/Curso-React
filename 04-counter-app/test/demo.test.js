describe('Pruebas en <DemoComponent/>', () => {
    test('Esta prueba no falla', ()=>{
        //Inicializacion
        const message1 = 'Hola Mundo';
        
        //Estimulo
      const message2 = message1.trim();
      
        //Observar comportamiento... esperado
        expect( message1 ).toBe( message2); 
      })
})

