/**
 * TriangleData object holds just 3 vertices of a tirangle.
 */
export default class TriangleData{
private readonly _x1:number;
private readonly _y1:number;
private readonly _x2:number;
private readonly _y2:number;
private readonly _x3:number;
private readonly _y3:number;

private readonly _r:number;
private readonly _g:number;
private readonly _b:number;

constructor(x1 :number,y1:number,x2:number,y2:number,x3:number,y3:number,r:number=0,g:number=0,b:number=0){

this._x1 = x1;
this._y1 = y1;
this._x2 = x2;
this._y2 = y2;
this._x3 = x3;
this._y3 = y3;
this._r = r;
this._g = g;
this._b = b;
}

x1():number{ return this._x1;}
y1():number{ return this._y1;}
x2():number{ return this._x2;}
y2():number{ return this._y2;}
x3():number{ return this._x3;}
y3():number{ return this._y3;}
r():number{ return this._r;}
g():number{ return this._g;}
b():number{ return this._b;}

/////////////////////////////
wOColor():number[]{
return [
            this.x1(),
            this.y1(),
            this.x2(),
            this.y2(),
            this.x3(),
            this.y3(),
        ];
}
/////////////////////////////
}