function monthOfYear(month) {
    switch (month) {
        case 1:
            console.log(`Month Number is ${month} --> January`);
            break;
            case 2:
            console.log(`Month Number is ${month} --> February`);
            break;
            case 3:
            console.log(`Month Number is ${month} --> March`);
            break;
            case 4:
            console.log(`Month Number is ${month} --> April`);
            break;
            case 5:
            console.log(`Month Number is ${month} --> May`);
            break;
            case 6:
                console.log(`Month Number is ${month} --> Jun`);
                break;
                case 7:
                    console.log(`Month Number is ${month} --> July`);
                    break;
                    case 8:
                        console.log(`Month Number is ${month} --> Agust`);
                        break;
                        case 9:
                    console.log(`Month Number is ${month} --> Sept`);
                    break;
                    case 10:
                    console.log(`Month Number is ${month} --> Oct`);
                    break;
                    case 11:
                    console.log(`Month Number is ${month} --> Nov`);
                    break;
                    case 12:
                    console.log(`Month Number is ${month} --> Des`);
                    break;
        default:
            console.log(`invalid input --> Month Number is ${month}`);
            break;
    }
 }
 monthOfYear (0);
 monthOfYear (2);
 monthOfYear(5);
 monthOfYear(12);
 monthOfYear(15);
 monthOfYear(100);
 monthOfYear(null);
 monthOfYear(undefined);