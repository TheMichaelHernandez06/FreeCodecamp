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
var a = new bicicleta(1, 'azul', 'montaña', [-34.6214212, -58.5658259]);
var b = new bicicleta(2, 'rojo', 'carreras', [-34.6214212, -58.5658259]);
var c = new bicicleta(3, 'verde', 'urbana', [-34.6123456, -58.5789123]);
var d = new bicicleta(4, 'amarillo', 'plegable', [-34.6156789, -58.5687654]);
var e = new bicicleta(5, 'negro', 'eléctrica', [-34.6189876, -58.5634567]);
var f = new bicicleta(6, 'blanco', 'híbrida', [-34.6198765, -58.5623456]);
var g = new bicicleta(7, 'morado', 'montaña', [-34.6207654, -58.5612345]);
var h = new bicicleta(8, 'naranja', 'carreras', [-34.6216543, -58.5601234]);

bicicleta.add(a);
bicicleta.add(b);
bicicleta.add(c);
bicicleta.add(d);
bicicleta.add(e);
bicicleta.add(f);
bicicleta.add(g);
bicicleta.add(h);

module.exports = bicicleta;