function Level( ) {
    let gameObjects = [ ];
 this.processInput = function( ) {
       gameObjects.forEach( ( gameObject ) => {
            gameObject.processInput( );
       } )
    }

    this.update = function( ) {
        gameObjects.forEach( ( gameObject ) => {
            gameObject.update( );
       } )
       this.verifyDamage( );
    }

    this.render = function( ) {
        gameObjects.forEach( ( gameObject ) => {
            gameObject.render( );
       } )
    }
}    