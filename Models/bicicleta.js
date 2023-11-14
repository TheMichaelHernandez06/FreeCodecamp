var bicicleta = function(id, color, modelo, ubicacion){ 
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}

bicicleta.prototype.toString = function(){
    return '|id: ' + this.id +' |color: ' + this.color + '|modelo: ' + this.modelo ;    
}

bicicleta.allBicis = [];
bicicleta.add = function(aBici){
    bicicleta.allBicis.push(aBici);
}

bicicleta.findById= function(aBiciId){
    var aBici = bicicleta.allBicis.find(x => x.id == aBiciId);
    if(aBici)   
        return aBici;
    else
        throw new Error('La bici ingresada no existe');
}
//buscamos un elemento en a lista para eliminarlo con splice
bicicleta.removeById = function(aBiciId){
    for (var i = 0; i < bicicleta.allBicis.length; i++) {
        if(bicicleta.allBicis[i].id == aBiciId){
            bicicleta.allBicis.splice(i,1);
            break;
        }
        
    }
}





//se añaden dos objetos al proyecto por defecto
var a = new bicicleta(1, 'azul', 'montaña', [-34.6214212, -58.5658259 ]);
var b = new bicicleta(2, 'rojo', 'carreras', [-34.6214212, -540.5658259 ]);

bicicleta.add(a);
bicicleta.add(b);

module.exports = bicicleta;