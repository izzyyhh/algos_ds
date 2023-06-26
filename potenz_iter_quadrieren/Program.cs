double PotenzIteriertesQuadrieren(double baseNum, int exponent){
    if(exponent == 1){
        return baseNum;

    } else{

        if(exponent % 2 == 0){
            double tmp = PotenzIteriertesQuadrieren(baseNum, exponent/2);
            return tmp * tmp;

        } else{
            double tmp = PotenzIteriertesQuadrieren(baseNum, exponent/2);
            return tmp * tmp * baseNum;
        }
        
    }
}

double nine = PotenzIteriertesQuadrieren(3, 2);
double twentyseven = PotenzIteriertesQuadrieren(3, 3);

Console.WriteLine(nine == 9);
Console.WriteLine(twentyseven == 27);

