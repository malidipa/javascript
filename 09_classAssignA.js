console.log(`==========================================step:-1==================================================================`);

class Vehicle{
    Name
    color
    speed
    fuelType
    //Constructor
    constructor(Name,color,speed,fuelType){
        this.Name=Name;
        this.color=color;
        this.speed=speed;
        this.fuelType=fuelType;
    }
    details(){
        console.log(`Vehicle Details: name: ${this.Name}, color: ${this.color}, speed: ${this.speed}, fuelType: ${this.fuelType}`);
    }
}
const Vehicle1 = new Vehicle('Mahindra','White','210km/hr', 'Petrol');
//Vehicle1.details();

const Vehicle2 = new Vehicle('Honda','Grey','300km/hr', 'Petrol');
//Vehicle2.details();

const Vehicle3 = new Vehicle('Maruti Suzuki','White','270km/hr', 'Petrol');
//Vehicle3.details();

const Vehicle4 = new Vehicle('Mercedes-Benz','Black','350km/hr', 'Petrol');
//Vehicle4.details();

const Vehicle5 = new Vehicle('BMW','Blue','400km/hr', 'Petrol');
//Vehicle5.details();

//Add into array arrayOfVehicles traverse it

 const arrayOfVehicles = [ Vehicle1,Vehicle2,Vehicle3,Vehicle4,Vehicle5 ];
   for (const element of arrayOfVehicles) {
    element.details();
 }

console.log(`==========================================step:-2==================================================================`);

class College{
    //properties
    Name
    University
    Location
    Pincode
    

    //constructor
    constructor(Name,University,Location,Pincode){
        this.Name = Name;
        this.University = University;
        this.Location = Location;
        this.Pincode = Pincode;

    }
    //methods
    display() {
        console.log(`College1 Details:- Name: ${this.Name}, University: ${this.University}, Location: ${this.Location}, Pincode: ${this.Pincode}`);

    }
}


const College1 = new College('JSPM college','SPPU','PUNE', '411039');
College1.display();

const College2 = new College('Forguson College','PUNE University','PUNE', '411553');
College2.display();

const College3 = new College('Pratibha College','SPPU','PUNE', '411422');
College3.display();

const College4 = new College('Dy patil college','Kolhapur University',' kolhapur', '416001');
College4.display();
console.log("======================================================step:-3====================================================");

function traverseObject(CollegeObj){
    
    for (const key in CollegeObj) {
            console.log(`${key} :- ${CollegeObj[key]}`);

        
        }
    }
    traverseObject(College1);
    console.log(`--------------------------------------------------------------------------------------------------`);
    traverseObject(College2);
    console.log(`--------------------------------------------------------------------------------------------------`);
    traverseObject(College3);
    console.log(`--------------------------------------------------------------------------------------------------`);
    traverseObject(College4);
    console.log(`--------------------------------------------------------------------------------------------------`);
    //console.log(College4 instanceof College);













