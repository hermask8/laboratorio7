-----------------------------------------------------------serie 1---------------------------------------------------------

se genera el token con un GET
////////////////////////////////////////////////////////////////////////////////////
localhost:3000/:password     -----clave secreta como par�metro, ejemplo: localhost:3000/Danilo

En el body puede ir cualquier JSON v�lido




-----------------------------------------------------------serie 2---------------------------------------------------------

para fines de la serie 2, pues a�n no se conecta a la base de datos existen 3 pizzas ya creadas y se guardan las nuevas en una variable

GET
//////////////////////////////////////////////////////////////////////////////
localhost:3000/pizzas     -----obtener todas
localhost:3000/pizzas/:id   -----se obtiene una por su id, ejemplo: localhost:3000/pizzas/1

POST
///////////////////////////////////////////////////////////////////////////
localhost:3000/pizzas

este es un ejemplo de lo que debe ir en el body de la petici�n Post, en mi aplicaci�n, se puede agregar una a la vez y
se generar� un ID autom�tico



{
     
	"nombre": "mar",
        
	"desc": "mariscos frescos",
        
	"ingredientes": {
            
			 "ing1": "calamar",
            
			 "ing2": "cangrejo",
            
			 "ing3": "camar�n"

			},
        
	"masa": "delgada",
        
	"tama�o": "mediana",
        
	"porciones": 8,
        
	"extraqueso": true
    
}


PUT
/////////////////////////////////////////////////////////
localhost:3000/pizzas/:id   -----se modifica una por su id, ejemplo: localhost:3000/pizzas/1

para fines de esta serie, se deben de mandar todos los datos en el body, el mismo JSON que en POST

{
     
	"nombre": "mar",
        
	"desc": "mariscos frescos",
        
	"ingredientes": {
            
			 "ing1": "calamar",
            
			 "ing2": "cangrejo",
            
			 "ing3": "camar�n"

			},
        
	"masa": "delgada",
        
	"tama�o": "mediana",
        
	"porciones": 8,
        
	"extraqueso": true
    
}

modificar los campos que se desean modificar, el id sigue siendo el mismo, en la serie 3, con la base de datos, si se podr�n modificar solo ciertos campos

DELETE
//////////////////////////////////////////////////////////////////////////
localhost:3000/pizzas/:id   -----se Elimina una por su id, ejemplo: localhost:3000/pizzas/1