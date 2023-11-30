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
// Creación de instancias de bicicleta
var a = new bicicleta(1, 'azul', 'montaña', [4.586274249612838, -74.16364822016423]);
var b = new bicicleta(2, 'rojo', 'carreras', [4.568325814990052, -74.14712310343425]);
var c = new bicicleta(3, 'verde', 'urbana', [4.569447605334042, -74.14505006011689]);
var d = new bicicleta(4, 'amarillo', 'plegable', [4.564429055951468, -74.13717249551084]);
var e = new bicicleta(5, 'negro', 'eléctrica', [4.570156103594268, -74.15061766216927]);
var f = new bicicleta(6, 'blanco', 'híbrida', [4.572163511528213, -74.13036106746802]);
var g = new bicicleta(7, 'morado', 'montaña', [4.5664955217141365, -74.15067689197834]);
var h = new bicicleta(8, 'naranja', 'carreras', [4.57700488398938, -74.13847555131034]);

bicicleta.add(a);
bicicleta.add(b);
bicicleta.add(c);
bicicleta.add(d);
bicicleta.add(e);
bicicleta.add(f);
bicicleta.add(g);
bicicleta.add(h);

module.exports = bicicleta;