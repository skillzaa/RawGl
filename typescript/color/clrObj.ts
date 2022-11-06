


export default class ClrObj {

private _r :number;
private _g :number;
private _b :number;
private _a :number;

constructor(r :number=0,g :number=0,b :number=0, a :number=1){
this._r = r;
this._g = g;    
this._b = b;
this._a = a;
}

r():number{return this._r;}
g():number{return this._g;}
b():number{return this._b;}
a():number{return this._a;}



set(r :number | null=null,g :number | null=null,b :number | null=null, a :number | null=null){
if(r !== null){this._r = r;}    
if(g !== null){this._g = g;}    
if(b !== null){this._b = b;}    
if(a !== null){this._a = a;}    
}





}