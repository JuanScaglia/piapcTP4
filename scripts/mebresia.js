export default class Membresia {
    
    
     pseudo (x, m, k){
        let member = 0;
        if (x <= 5){
            member = 0
        } else if (x > 5){
        member = 1 / 1 + k * ((x - m)*(x - m));
        }
        return member;
     }
     pseudoI (x, m, k){
        let member = 0;
        if (x <= 5){
            member = 1 / 1 + k * ((x - m)*(x - m))
        } else if (x > 5){
        member = 0;
        }
        return member;
     }
     
  

    triangle(x, a, b, c){
        let member = 0;
        if(x <= a) {
            member = 0;
        }else{
            if (x > a && x <= b) {
                member = (x/(b-a)) - (a/(b-a));
            }else{
                if (x > b && x <= c) {
                    member = - (x/(c-b)) + (c/(c-b));
                } else {
                    if (x>c) {
                        member = 0;
                    }
                }
            }
        }
        return member;
    }

    trapezoid(x, a, b, c, d){
        let member = 0;
        if(x <= a) {
            member = 0;
        }else{
            if (x > a && x <= b) {
                member = (x/(b-a)) - (a/(b-a));
            }else{
                if (x > b && x <= c) {
                    member = 1;
                } else {
                    if (x>c && x <= d) {
                        member = - (x/(d-c)) + (d/(d-c))
                    } else {
                        if (x>d) {
                            member = 0;
                        }
                    }
                }
            }
        }
        return member;
    }

    operatorAND(a, b){
        return Math.min(a, b);
    }

    operatorOR(a, b){
        return Math.max(a, b);
    }

    operatorNOT(a){
        return 1-a;
    }
}