function Load(set,map){
    for(var i=0;i<map.length;i++){
        for(var j=0;j<map[i].length;j++){
            switch(map[i][j]){
              case 'B':
                set.push(new Block(j*50,i*50,1));
                break;
                case 'X':
                  set.push(new Block(j*50,i*50,2));
                break;
                case 'I':
                  set.push(new Block(j*50,i*50,3));
                break;
                case 'C':
                  set.push(new Block(j*50,i*50,4));
                break;
                case 'S':
                  set.push(new Block(j*50,i*50,5));
                break;
                case 'L':
                  set.push(new Block(j*50,i*50,6));
                break;
                case 'W':
                  set.push(new Block(j*50,i*50,7));
                break;
                case 'P':
                  player.x=j*50;
                  player.y=i*50;
                break;
                case '1':
                  set.push(new Block(j*50,i*50,8,1));
                break;
                case '2':
                  set.push(new Block(j*50,i*50,8,2));
                break;
                case '3':
                  set.push(new Block(j*50,i*50,8,3));
                break;
                case 'U':
                  set.push(new Block(j*50,i*50,9,1));
                break;
                case 'D':
                  set.push(new Block(j*50,i*50,9,2));
                break;
                case '_':
                  set.push(new Block(j*50,i*50,10,1));
                break;
                case '-':
                  set.push(new Block(j*50,i*50,10,2));
                break;
                case '+':
                  set.push(new Block(j*50,i*50,10,3));
                break;
                case 'Z':
                  set.push(new Block(j*50,i*50,11));
                break;
                case 'A':
                  set.push(new Block(j*50,i*50,12,1));
                break;
                case 'E':
                  set.push(new Block(j*50,i*50,12,2));
                break;
                case 'R':
                  set.push(new Block(j*50,i*50,13,1));
                break;
                case 'r':
                  set.push(new Block(j*50,i*50,13,2));
                break;
                case 's':
                  set.push(new Block(j*50,i*50,14,1));
                break;
                case 'c':
                  set.push(new Block(j*50,i*50,14,2));
                break;
            }
        }
    }
}
function LoadPush(set,map){
  for(var i=0;i<map.length;i++){
    for(var j=0;j<map[i].length;j++){
      switch(map[i][j]){
        case 'V':
          set.push(new PushableBlock(j*50,i*50));
        break;
      }
    }
  }
}
/*function LoadPortals(set,map){
  for(var i=0;i<map.length;i++){
    for(var j=0;j<map[i].length;j++){
      switch(map[i][j]){
        case 's':
          set.push(new Portal(j*50,i*50,1));
        break;
      }
    }
  }
}*/
function Erase(set){
  set.length=0;
}
function LoadOrbs(set, map){
  for(var i=0;i<map.length;i++){
    for(var j=0;j<map[i].length;j++){
        switch(map[i][j]){
          case 'j':
            set.push(new Orb(j*50+25,i*50+25,1));
          break;
          case 'p':
            set.push(new Orb(j*50+25,i*50+25,3));
          break;
          case 'g':
            set.push(new Orb(j*50+25,i*50+25,4));
          break;
          case 't':
            set.push(new Orb(j*50+25,i*50+25,5));
          break;
          case 'l':
            set.push(new Orb(j*50+25,i*50+25,6));
          break;
        }
      }
    }
}