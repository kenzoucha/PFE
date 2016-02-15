
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Pc = new Schema({
  fabricant:    {
    type    : String,
    require : true
  },
  referenceProcesseur:    {
    type    : String,
    require : true
  },
  systemeExploitation:    {
    type    : String,
    enum    :  ['FreeDos', 'Linux', 'Windows', 'MacOS X'],
    require : true
  },
  memoire :   {
    type    : Number,
    require : true
  },
  processeur :   {
    type    : String,
    require : true
  },
  disqueDur :   {
    type    : Number,
    require : true
  },

  carteGraphique:   {
    type    : String,
    require : true
  },
  tailleEcran :   {
    type    : Number,
    require : true
  },

  garantie :   {
    type    : Number,
    require : true
  },
  ecranTactile:   {
    type    : Boolean,
    require : true
  },
  prix :   {
    type    : Number,
    require : true
  },
  modified: {
    type    : Date,
    default : Date.now
  }
});

module.exports = mongoose.model('PC',Pc);