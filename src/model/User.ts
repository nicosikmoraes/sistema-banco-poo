export default class User {
    private  name!: string;
    protected  socialNumber!: number;

    //Model do User.

    public getName(){
        return this.name;
    }

    public setName(name: string){
        this.name = name;
    }


    public getSocialNumber(){
        return this.socialNumber;
    }

    public setSocialNumber(socialNumber: number){
        this.socialNumber = socialNumber;
    }

}