from pymongo import MongoClient

MONGO_URI = 'mongodb://localhost'

client = MongoClient (MONGO_URI)

db = client['ovi_database_store'] #se crea base de datos con nombre testore
clinguista = db['linguista'] #crea y almacena coleccion en base de datos con nombre linguista
ckinestesica = db ['corporal kinestesica'] #crea y almacena coleccion en base de datos con nombre kinestesica
cinterpersonal = db ['interpersonal'] #crea y almacena coleccion en base de datos con nombre interpersonal
cintrapersonal = db ['intrapersonal'] #crea y almacena coleccion en base de datos con nombre intrapersonal

colecciones = [clinguista, ckinestesica, cinterpersonal, cintrapersonal] #Se guardan las colecciones en una lista

"""showcollection.insert_one(
{"actor":
        {   "Queres comunicar a través de personajes?": 
                                                       {
                                                        "respuesta1":  "si", 
                                                        "respuesta2" : "probablemente", 
                                                        "respuesta 3": "tendria que ver si me animo", 
                                                        "respuesta 4": "no me animaria ni a gancho"
                                                        }
        }
}
)"""

'''for r in results:
    print (r['b']['valor'][0])''' #test 1 ok in testore


'''for r in results:
    print (r['actor']['pregunta 1']['respuesta 1']) ''' # test 2 ok in ovidatabase



'''for r in results:
        dic = r
        keys = dic.keys()
        val = dic.values()
        if r['valor']==300:
         #print (r['pregunta 1']['Quieres comunicar a través de personajes?'])
                print (keys),
                #print (val)'''


#lista_opciones= ["1","2","3","4"]

cont = 0
eleccion_inteligencia = ""
print ("elegir inteligencia: ")
eleccion_inteligencia = input()
results = colecciones[int(eleccion_inteligencia)].find()
print ("es la " ,eleccion_inteligencia)
while cont!=2:
        
        for r in results:
                #print (r)
                #cont=0
                
                #print("ENTRA A FOR")
                
                while cont < 4:
                        #print ( r['inteligencia'])
                        print ( r['encuesta'][cont]['pregunta'])
                        print ( "1-", r['encuesta'][cont]['respuesta 1'])
                        print ( "2-", r['encuesta'][cont]['respuesta 2'])
                        print ( "3-", r['encuesta'][cont]['respuesta 3'])
                        print ( "4-", r['encuesta'][cont]['respuesta 4'])
                        cont=cont+1
                        opcion = ""
                        while opcion not in  ("1","2","3","4"):
                                opcion = input("->")                       
                print ("tengo hasta aca") 
        

             
        