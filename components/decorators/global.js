global.darkmodeEnabled = true;
global.activity1DataIndex;
global.activity4DataIndex;
global.team
global.highest = 0;
global.activity1Complete = {0:false,1:false,2:false,3:false};
global.activity4Complete = {0:false,1:false,2:false};

global.activity1Data = {
    0:{time:null,mass:null,height:null,accuracy:null,video:[]},
    1:{time:null,mass:null,height:null,accuracy:null,video:[]},
    2:{time:null,mass:null,height:null,accuracy:null,video:[]},
    3:{time:null,mass:null,height:null,accuracy:null,video:[]}
}
global.activity2Data = {
    0:{volume:"0"},
    1:{volume:"0"},
    2:{volume:"0"},
    3:{volume:"0"},
    4:{volume:"0"}
}
global.activity3Data = {
    material1:'',
    material2:'',
    material3:'',
    material4:'',
    bend1:'',
    bend2:'',
    bend3:'',
    bend4:'',
    checkbox1:false,
    checkbox2:false,
    checkbox3:false,
    checkbox4:false,
}
global.activity4Data = {
    0:{vibration:null,outcome:null},
    1:{vibration:null,outcome:null},
    2:{vibration:null,outcome:null}
}

global.activity5Results = {
  movement1: 'Not Started',
  movement2: 'Not Started',
  movement3: 'Not Started',
};
global.members = []
global.activity6DataIndex = 0;
global.activity1DataIndex;
global.activity4DataIndex;
global.activity1Reflection = '';
global.activity2Reflection = '';
global.activity3Reflection = '';
global.activity4Reflection = '';
global.activity5Reflection = '';
global.activity6Reflection = '';
global.activity7Reflection = '';

export default function HiddenRoute() {
  return null;
}
