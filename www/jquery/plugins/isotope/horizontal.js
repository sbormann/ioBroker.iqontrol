/*!
 * horizontal layout mode for Isotope
 * v2.0.1
 * https://isotope.metafizzy.co/layout-modes/horiz.html
 */

( function( window, factory ) {
    // universal module definition
    /* jshint strict: false */ /*globals define, module, require */
    if ( typeof define === 'function' && define.amd ) {
      // AMD
      define( [
          'isotope-layout/js/layout-mode'
        ],
        factory );
    } else if ( typeof module == 'object' && module.exports ) {
      // CommonJS
      module.exports = factory(
        require('isotope-layout/js/layout-mode')
      );
    } else {
      // browser global
      factory(
        window.Isotope.LayoutMode
      );
    }
  
  }( window, function factory( LayoutMode ) {
    'use strict';
  
    var Horiz = LayoutMode.create( 'horiz', {
      verticalAlignment: 0
    });
  
    var proto = Horiz.prototype;
  
    proto._resetLayout = function() {
      this.x = 0;
    };
  
    proto._getItemLayoutPosition = function( item ) {
      item.getSize();
      var y = ( this.isotope.size.innerHeight - item.size.outerHeight ) *
        this.options.verticalAlignment;
      var x = this.x;
      this.x += item.size.outerWidth;
      return { x: x, y: y };
    };
  
    proto._getContainerSize = function() {
      return { width: this.x };
    };
  
    proto.needsResizeLayout = function() {
      return this.needsVerticalResizeLayout();
    };
  
    return Horiz;
  
  }));