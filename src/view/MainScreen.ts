import promptSync from 'prompt-sync';
import MainController from '../controller/MainController';
import UserRegister from './UserRegister';
import UserLogin from './UserLogin';

export default class MainScreen {
   
    private prompt = promptSync();
    private control: MainController;
    private userRegister: UserRegister;
    private userLogin: UserLogin;

    constructor(control: MainController){
        this.control = control;
        this.userRegister = new UserRegister(control);
        this.userLogin = new UserLogin(control)
        // Vai rodar a tela principal quando for chamado eu acho.
        this.mainMenu();
    }


    //Tela principal
    public mainMenu(): void{
            let continuing: boolean = true;
            while (continuing) {

                let choice = parseInt(this.prompt("Escolha: \n1. Criar conta \n2. Login \n3.Sair \n"));
                switch (choice) {
                    case 1:
                            this.userRegister.addUser();
                        break;

                    case 2:
                            this.userLogin.enterLogin()
                        break;

                    case 3:
                        continuing = false;
                        break;
                
                    default:
                        console.log("Valor inválido.")
                        break;
                }
            }
            console.log("Saiu")
    }
}