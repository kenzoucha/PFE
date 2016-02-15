

var Pc = require('../models/pc.js');
var mongoose  = require("mongoose");

module.exports = function(app) {


  /**
   * Find and retrieves all pcs
   * @param {Object} req HTTP request object.
   * @param {Object} res HTTP response object.
   */
  findAllPcs = function(req, res) {
    console.log("GET - /pc");
    return Pc.find(function(err, pcs) {
      if(!err) {
        return res.send(pcs);
      } else {
        res.statusCode = 500;
        console.log('Internal error(%d): %s',res.statusCode,err.message);
        return res.send({ error: 'Server error' });
      }
    });
  };



  /**
   * Find and retrieves a single pc by its ID
   * @param {Object} req HTTP request object.
   * @param {Object} res HTTP response object.
   */

  findById = function(req, res) {
    //var Id = mongoose.Types.ObjectId(req.params.id);
    console.log("GET - /pc/:id");
    return Pc.findOne({_id:req.params.id}, function(err, pc) {

      if(!pc) {
        res.statusCode = 404;
        return res.send({ error: 'Not found' });
      }

      if(!err) {
        return res.send({ status: 'OK', pc:pc });
      } else {

        res.statusCode = 500;
        console.log('Internal error(%d): %s', res.statusCode, err.message);
        return res.send({ error: 'Server error' });
      }
    });
  };




  /**
   * Creates a new pc from the data request
   * @param {Object} req HTTP request object.
   * @param {Object} res HTTP response object.k   */
  addPc = function(req, res) {

    console.log('POST - /pc');

    var pc = new Pc({
      fabricant:               req.body.fabricant,
      referenceProcesseur:    req.body.referenceProcesseur,
      systemeExploitation:  req.body.systemeExploitation,
      memoire :                req.body.memoire ,
      processeur :             req.body.processeur ,
      disqueDur:              req.body.disqueDur,
      carteGraphique:         req.body.carteGraphique,
      tailleEcran:            req.body.tailleEcran,
      ecranTactile:           req.body.ecranTactile,
      garantie:                req.body.garantie,
      prix:                    req.body.prix
    });

    pc.save(function(err) {

      if(err) {

        console.log('Error while saving pc: ' + err);
        res.send({ error:err });
        return;

      } else {

        console.log("pc created");
        return res.send({ status: 'OK', pc:pc });

      }

    });

  };



  /**
   * Update a PC by its ID
   * @param {Object} req HTTP request object.
   * @param {Object} res HTTP response object.
   */
  updatePc = function(req, res) {
    console.log('hello');
  console.log(req.body.Fabricant);
    console.log("PUT - /pc/:id");
    return Pc.findOne({_id:req.params.id}, function(err, pc) {

      if(!pc) {
        res.statusCode = 404;
        return res.send({ error: 'Not found' });
      }
      if (req.body.Fabricant != null) pc.fabricant = req.body.Fabricant;
      if (req.body.referenceProcesseur != null) pc.referenceProcesseur = req.body.referenceProcesseur;
      if (req.body.systemeExploitation != null) pc.systemeExploitation = req.body.systemeEexploitation;
      if (req.body.memoire != null) pc.memoire  = req.body.memoire;
      if (req.body.processeur  != null) pc.processeur   = req.body.processeur ;
      if (req.body.disqueDur != null) pc.disqueDur  = req.body.disqueDur;
      if (req.body.carteGraphique != null) pc.carteGraphique  = req.body.carteGraphique;
      if (req.body.tailleEcran != null) pc.tailleEcran  = req.body.tailleEcran;
      if (req.body.garantie  != null) pc.garantie   = req.body.garantie ;
      if (req.body.ecranTactile != null) pc.ecranTactile  = req.body.ecranTactile;
      if (req.body.prix  != null) pc.prix  = req.body.prix ;


      return pc.save(function(err) {
        if(!err) {
          console.log('Updated');
          return res.send({ status: 'OK', pc:pc });
        } else {
          if(err.name == 'ValidationError') {
            res.statusCode = 400;
            res.send({ error: 'Validation error' });
          } else {
            res.statusCode = 500;
            res.send({ error: 'Server error' });
          }
          console.log('Internal error(%d): %s',res.statusCode,err.message);
        }

        res.send(pc);

      });
    });
  };


 /**
   * Creates a new pc from the data request with get methode
   * @param {Object} req HTTP request object.
   * @param {Object} res HTTP response object.
   */
  addGetPcs = function(req, res) {

    console.log('get - /pc');

    var pc = new Pc({
      fabricant:               req.params.fabricant,
      referenceProcesseur:    req.params.referenceProcesseur,
      systemeExploitation:  req.params.systemeExploitation,
      memoire :                req.params.memoire ,
      processeur :             req.params.processeur ,
      disqueDur:              req.params.disqueDur,
      carteGraphique:         req.params.carteGraphique,
      tailleEcran:            req.params.tailleEcran,
      ecranTactile:           req.params.ecranTactile,
      garantie:                req.params.garantie,
      prix:                    req.params.prix
    });

    pc.save(function(err) {

      if(err) {

        console.log('Error while saving pc: ' + err);
        res.send({ error:err });
        return;

      } else {

        console.log("PC created");
        return res.send({ status: 'OK', pc:pc });

      }

    });

  };




  updPc = function(req, res) {

    console.log("PUT - /pc/:id");
    return Pc.findOne({_id:req.params.id}, function(err, pc) {

      if(!pc) {
        res.statusCode = 404;
        return res.send({ error: 'Not found' });
      }
      if (req.params.fabricant != null) pc.fabricant = req.params.fabricant;
      if (req.params.referenceProcesseur != null) pc.referenceProcesseur = req.params.referenceProcesseur;
      if (req.params.systemeExploitation != null) pc.systemeExploitation = req.params.systemeEexploitation;
      if (req.params.memoire != null) pc.memoire  = req.params.memoire;
      if (req.params.processeur  != null) pc.processeur   = req.params.processeur ;
      if (req.params.disqueDur != null) pc.disqueDur  = req.params.disqueDur;
      if (req.params.carteGraphique != null) pc.carteGraphique  = req.params.carteGraphique;
      if (req.params.tailleEcran != null) pc.tailleEcran  = req.params.tailleEcran;
      if (req.params.garantie  != null) pc.garantie   = req.params.garantie ;
      if (req.params.ecranTactile != null) pc.ecranTactile  = req.params.ecranTactile;
      if (req.params.prix  != null) pc.prix  = req.params.prix ;


      return pc.save(function(err) {
        if(!err) {
          console.log('Update');
          return res.send({ status: 'Modification avec succées', pc:pc });
        } else {
          if(err.name == 'ValidationError') {
            res.statusCode = 400;
            res.send({ error: 'Validation error' });
          } else {
            res.statusCode = 500;
            res.send({ error: 'Server error' });
          }
          console.log('Internal error(%d): %s',res.statusCode,err.message);
        }

        res.send(pc);

      });
    });
  };

  deletPcGet = function(req, res) {

    console.log("DELETE - /pc/:id");
    return Pc.findOne({_id:req.params.id}, function(err, pc) {
      if(!pc) {
        res.statusCode = 404;
        return res.send({ error: 'Not found' });
      }

      return pc.remove(function(err) {
        if(!err) {
          console.log('Removed pc');
          return res.send({ status: 'supression avec succées' });
        } else {
          res.statusCode = 500;
          console.log('Internal error(%d): %s',res.statusCode,err.message);
          return res.send({ error: 'Server error' });
        }
      })
    });
  };

  /**
   * Delete a pc by its ID
   * @param {Object} req HTTP request object.
   * @param {Object} res HTTP response object.
   */
  deletePcPost = function(req, res) {

    console.log("DELETE - /pc/:id");
    console.log(req.body.id);

    return Pc.findOne({_id:req.body.id}, function(err, pc) {
      if(!pc) {
        res.statusCode = 404;
        return res.send({ error: 'Not found' });
      }

      return pc.remove(function(err) {
        if(!err) {
          console.log('Removed pc');
          return res.send({ status: 'supression avec succées' });
        } else {
          res.statusCode = 500;
          console.log('Internal error(%d): %s',res.statusCode,err.message);
          return res.send({ error: 'Server error' });
        }
      })
    });
  };

  //Link routes and actions
  app.get('/pc', findAllPcs);
  app.get('/pcF/:id', findById);
  app.get('/savePc/:fabricant/:referenceProcesseur/:systemeExploitation/:memoire/:processeur/:disqueDur/:carteGraphique/:tailleEcran/:garantie/:ecranTactile/:prix?', addGetPcs);
  app.post('/pcAdd', addPc);
  app.post('/pcs/:id', updatePc);
  app.post('/deletePost', deletePcPost);
  app.get('/updPc/pc/:id/:fabricant/:referenceProcesseur/:systemeExploitation/:memoire/:processeur/:disqueDur/:carteGraphique/:tailleEcran/:garantie/:ecranTactile/:prix?',updPc);
  app.get('/deletGet/pc/:id', deletPcGet);

}