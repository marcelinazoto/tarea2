package com.example.calculadora;

import java.util.ArrayList;

public class Calculadora {
    private String mainregx = "\\([\\d\\.]+[\\+\\-\\*\\/\\^]+[\\d\\.]+\\)";
    private String sumregx = "[\\d\\.]+\\+[\\d\\.]+";
    private String resregx = "[\\d\\.]+\\-[\\d\\.]+";
    private String mulregx = "[\\d\\.]+\\*[\\d\\.]+";
    private String divregx = "[\\d\\.]+\\/[\\d\\.]+";
    private String powregx = "[\\d\\.]+\\^[\\d\\.]+";
    private String numberregx = "[\\d\\.]+";
    private String lastregx = "[\\+\\*\\^\\/\\-]";
    private String expresion;
    public Calculadora(String exp) {
        this.expresion = exp;
    }
    public String solve() {
        ArrayList<String> results;
        do {
            RegularMatch match = new RegularMatch(this.expresion, mainregx);
            results = match.match();
            binaryOp(results);
        } while(results.size() > 0);
        RegularMatch finalmatch;
        do {
            RegularMatch matchpow = new RegularMatch(this.expresion, powregx);
            ArrayList<String> pow = matchpow.match();
            if (pow.size() > 0) {
                powFunction(pow);
            }
            RegularMatch matchdiv = new RegularMatch(this.expresion, divregx);
            ArrayList<String> div = matchdiv.match();
            if (div.size() > 0) {
                divFunction(div);
            }
            RegularMatch matchmul = new RegularMatch(this.expresion, mulregx);
            ArrayList<String> mul = matchmul.match();
            if (mul.size() > 0) {
                mulFunction(mul);
            }
            RegularMatch matchres = new RegularMatch(this.expresion, resregx);
            ArrayList<String> res = matchres.match();
            if (res.size() > 0) {
                resFunction(res);
            }
            RegularMatch matchsum = new RegularMatch(this.expresion, sumregx);
            ArrayList<String> sum = matchsum.match();
            if (sum.size() > 0) {
                sumFunction(sum);
            }
            finalmatch = new RegularMatch(this.expresion, lastregx);
        }while (finalmatch.match().size() > 0);

        return this.expresion;
    }
    private void powFunction (ArrayList<String> operacion) {
        for (int i = 0; i < operacion.size(); i++) {
            RegularMatch op = new RegularMatch(operacion.get(i), numberregx);
            ArrayList<String> rs = op.match();
            if (rs.size() == 2) {
                Double n1 = Double.parseDouble(rs.get(0));
                Double n2 = Double.parseDouble(rs.get(1));
                Double r = Math.pow(n1, n2);
                String auxcad = operacion.get(i);
                this.expresion = this.expresion.replace(auxcad, r.toString());
            }
        }
    }
    private void divFunction (ArrayList<String> operacion) {
        for (int i = 0; i < operacion.size(); i++) {
            RegularMatch op = new RegularMatch(operacion.get(i), numberregx);
            ArrayList<String> rs = op.match();
            if (rs.size() == 2) {
                Double n1 = Double.parseDouble(rs.get(0));
                Double n2 = Double.parseDouble(rs.get(1));
                Double r = n1 / n2;
                String auxcad = operacion.get(i);
                this.expresion = this.expresion.replace(auxcad, r.toString());
            }
        }
    }
    private void mulFunction (ArrayList<String> operacion) {
        for (int i = 0; i < operacion.size(); i++) {
            RegularMatch op = new RegularMatch(operacion.get(i), numberregx);
            ArrayList<String> rs = op.match();
            if (rs.size() == 2) {
                Double n1 = Double.parseDouble(rs.get(0));
                Double n2 = Double.parseDouble(rs.get(1));
                Double r = n1 * n2;
                String auxcad = operacion.get(i);
                this.expresion = this.expresion.replace(auxcad, r.toString());
            }
        }
    }
    private void resFunction (ArrayList<String> operacion) {
        for (int i = 0; i < operacion.size(); i++) {
            RegularMatch op = new RegularMatch(operacion.get(i), numberregx);
            ArrayList<String> rs = op.match();
            if (rs.size() == 2) {
                Double n1 = Double.parseDouble(rs.get(0));
                Double n2 = Double.parseDouble(rs.get(1));
                Double r = n1 - n2;
                String auxcad = operacion.get(i);
                this.expresion = this.expresion.replace(auxcad, r.toString());
            }
        }
    }
    private void sumFunction (ArrayList<String> operacion) {
        for (int i = 0; i < operacion.size(); i++) {
            RegularMatch op = new RegularMatch(operacion.get(i), numberregx);
            ArrayList<String> rs = op.match();
            if (rs.size() == 2) {
                Double n1 = Double.parseDouble(rs.get(0));
                Double n2 = Double.parseDouble(rs.get(1));
                Double r = n1 + n2;
                String auxcad = operacion.get(i);
                this.expresion = this.expresion.replace(auxcad, r.toString());
            }
        }
    }
    private void binaryOp(ArrayList<String> result) {
        for (int i = 0; i < result.size(); i++) {
            RegularMatch powmatch = new RegularMatch(result.get(i), powregx);
            RegularMatch divmatch = new RegularMatch(result.get(i), divregx);
            RegularMatch mulmatch = new RegularMatch(result.get(i), mulregx);
            RegularMatch resmatch = new RegularMatch(result.get(i), resregx);
            RegularMatch summatch = new RegularMatch(result.get(i), sumregx);
            if (powmatch.match().size() > 0) {
                ArrayList<String> operacion = powmatch.match();
                RegularMatch op = new RegularMatch(operacion.get(0), numberregx);
                ArrayList<String> rs = op.match();
                if (rs.size() == 2) {
                    Double n1 = Double.parseDouble(rs.get(0));
                    Double n2 = Double.parseDouble(rs.get(1));
                    Double r = Math.pow(n1, n2);
                    String auxcad = result.get(i);
                    this.expresion = this.expresion.replace(auxcad, r.toString());
                }
            }
            if (divmatch.match().size() > 0) {
                ArrayList<String> operacion = divmatch.match();
                RegularMatch op = new RegularMatch(operacion.get(0), numberregx);
                ArrayList<String> rs = op.match();
                if (rs.size() == 2) {
                    Double n1 = Double.parseDouble(rs.get(0));
                    Double n2 = Double.parseDouble(rs.get(1));
                    Double r = n1 / n2;
                    String auxcad = result.get(i);
                    this.expresion = this.expresion.replace(auxcad, r.toString());
                }
            }
            if (mulmatch.match().size() > 0) {
                ArrayList<String> operacion = mulmatch.match();
                RegularMatch op = new RegularMatch(operacion.get(0), numberregx);
                ArrayList<String> rs = op.match();
                if (rs.size() == 2) {
                    Double n1 = Double.parseDouble(rs.get(0));
                    Double n2 = Double.parseDouble(rs.get(1));
                    Double r = n1 * n2;
                    String auxcad = result.get(i);
                    this.expresion = this.expresion.replace(auxcad, r.toString());
                }
            }
            if (resmatch.match().size() > 0) {
                ArrayList<String> operacion = resmatch.match();
                RegularMatch op = new RegularMatch(operacion.get(0), numberregx);
                ArrayList<String> rs = op.match();
                if (rs.size() == 2) {
                    Double n1 = Double.parseDouble(rs.get(0));
                    Double n2 = Double.parseDouble(rs.get(1));
                    Double r = n1 - n2;
                    String auxcad = result.get(i);
                    this.expresion = this.expresion.replace(auxcad, r.toString());
                }
            }
            if (summatch.match().size() > 0) {
                ArrayList<String> suma = summatch.match();
                RegularMatch op = new RegularMatch(suma.get(0), numberregx);
                ArrayList<String> rs = op.match();
                if (rs.size() == 2) {
                    Double n1 = Double.parseDouble(rs.get(0));
                    Double n2 = Double.parseDouble(rs.get(1));
                    Double r = n1 + n2;
                    String auxcad = result.get(i);
                    this.expresion = this.expresion.replace(auxcad, r.toString());
                }
            }
        }
    }
}
