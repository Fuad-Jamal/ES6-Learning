const enemies = {
chew: {atk: 10, def: 2, hp: 4, class: 3},
puf: {atk: 1, def: 5, hp: 2, class: 8},
heni: {atk: 40, def: 12, hp: 44, class: 33},
eew: {atk: 20, def: 12, hp: 9, class: 9}
}

for(const ene of Object.values(enemies)){
    switch(ene.class){
    case 3:{console.log('this is easy')
        break;
    }
    case 8:{console.log('this is medium')
        break;
    }
    default:{console.log('this is hard')
        break; 
    }
}
}
