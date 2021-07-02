class System{

    constructor(){}
    

    // Add code to authenticate the given code and the access codes.
    authenticate(actualCode , enteredCode){
        if(actualCode === enteredCode)
         return true
        else
         return false
    }

    

   /* if (score === 3){
        clear()
        background(bg2)
        fill("black")
        textsize(40)
        text("TREASURE UNLOCKED",200,250)
    }*/

   /* this.button1.mousePressed(() => {
        if(system.authenticate(accessCode1,this.access1,value())){
            this.button1.hide()
            this.access1.hide()
        }
    });*/
    

}