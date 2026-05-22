global.darkmodeEnabled = true;
global.videos = [];
global.activity1Complete = [false,false,false,false];
global.activity4Complete = [false,false,false];
global.activity1DataIndex;
global.activity4DataIndex;
global.activity1Data = [
    {time:null,mass:null,height:null,accuracy:null,video:[]},
    {time:null,mass:null,height:null,accuracy:null,video:[]},
    {time:null,mass:null,height:null,accuracy:null,video:[]},
    {time:null,mass:null,height:null,accuracy:null,video:[]}
]
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
global.activity4Data = [
    {vibration:null,outcome:null},
    {vibration:null,outcome:null},
    {vibration:null,outcome:null}
]
global.activity1Reflection = '';
global.activity2Reflection = '';
global.activity3Reflection = '';
global.activity4Reflection = '';

export const activity5Results = {
  movement1: 'Not Started',
  movement2: 'Not Started',
  movement3: 'Not Started',
};
export default function HiddenRoute() {
  return null;
}