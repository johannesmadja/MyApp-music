export class Album {
     id !: string;
     ref !: string;
     name !: string;
     title !: string;
     description !: string;
     duration !: number;
     url ? : string;
     tags ? : string[];
     like ? : string;
     status !: string;
     note ? : number[];

}

export class List {
    id !: string;
    list !: string[];
}


export class cover {
      id !: string;
      src !: string;
}
  