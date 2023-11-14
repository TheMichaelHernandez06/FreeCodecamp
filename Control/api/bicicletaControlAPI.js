var bicicleta = require('../../Models/bicicleta');

exports.bicicleta_list = function(req, res){
    res.status(200).json({
        bicicletas : bicicleta.allBicis
    });
}

exports.bicicleta_create = function(req, res){
    var bici = new bicicleta(req.body.id, req.body.color, req.body.modelo);
    bici.ubicacion =(req.body.lat, req.body.lng);

    bicicleta.add(bici);
    res.status(200).json({
        bicicleta : bici
    });
}

exports.bicicleta_delete = function(req, res){
    bicicleta.removeById(req.body.id);
    res.status(204).send();
}

exports.bicicleta_update = function(req, res){
    var aBici = bicicleta.findById(req.body.id);
    if(aBici)   
        return aBici;
    else
        throw new Error('La bici ingresada no existe');
    res.status(204).send();
}