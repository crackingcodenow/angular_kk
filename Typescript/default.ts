function myfun(a:string = "Ang", b:string, c?:string, ...d:any):any {
  console.log(a, b, c, d);
}

myfun(undefined, undefined, undefined, 1, 2, 3);

