class Form {

  constructor() {
    
    this.login = createButton('Login');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.acc=createButton("New Account");
    this.name=createInput("Enter Username");
    this.password=createInput("","Password");
    this.Username=createInput("Enter Name");
    this.pass=createInput("","Password");
    this.ok=createButton("Enter");
  }
  
  display(){
    this.title.html("Immunity Tracker");
    this.title.position(displayWidth/2 - 50, 0);
  
    
    this.login.position(displayWidth/2 + 10, displayHeight/2);
    this.acc.position(750,500);
   
    
    
    this.login.mousePressed(()=>{

      this.login.hide();
      this.name.position(700,200);
      this.password.position(700,250);
      this.ok.position(780,300);

      
    })
    this.acc.mousePressed(()=>{
      
     
      this.name.hide();
      this.password.hide();
      this.acc.hide();
      
      this.Username.position(700,200);
      this.pass.position(700,250);
      this.ok.position(780,300);


    });
  }
}
