var merge = require('deepmerge');
var masterconf = require('./master.conf.js');

 var localconf = {

   capabilities: [{
       maxInstances: 5,
       browserName: 'phantomjs'
   }
  ]
 };

 exports.config = merge(masterconf.config, localconf);
