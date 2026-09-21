export type Centre = { id:string; name:string; distance:string; address:string; hours:string; rating:number; materials:string[]; pickup:boolean };
export type WasteItem = { id:string; category:string; brand:string; model:string; condition:string; weight:string; status:string; icon:string };
export type Pickup = { id:string; items:string; centre:string; date:string; time:string; status:string; address:string };

export const centres: Centre[] = [
 {id:'greencycle',name:'GreenCycle Recycling Centre',distance:'2.4 km',address:'42 Indiranagar Main Road, Bengaluru',hours:'Open until 6:00 PM',rating:4.7,materials:['Laptops','Phones','Batteries','TVs','Printers'],pickup:true},
 {id:'ecotech',name:'EcoTech Collection Hub',distance:'4.8 km',address:'18 Koramangala 5th Block, Bengaluru',hours:'Open until 7:30 PM',rating:4.8,materials:['Computers','Cables','Tablets','Chargers'],pickup:true},
 {id:'greenearth',name:'GreenEarth Recovery Point',distance:'7.1 km',address:'76 HSR Layout, Bengaluru',hours:'Open until 5:00 PM',rating:4.6,materials:['TVs','Printers','Batteries','Phones'],pickup:false},
];
export const wasteItems: WasteItem[] = [
 {id:'ew-1042',category:'Laptop',brand:'Dell',model:'Inspiron 15',condition:'Not Working',weight:'2.3 kg',status:'Awaiting Pickup',icon:'Laptop'},
 {id:'ew-1039',category:'Smartphone',brand:'Samsung',model:'Galaxy S20',condition:'Damaged',weight:'0.18 kg',status:'Pickup Scheduled',icon:'Smartphone'},
 {id:'ew-1021',category:'USB Charger',brand:'Anker',model:'PowerPort',condition:'Partially Working',weight:'0.12 kg',status:'Registered',icon:'Cable'},
];
export const pickups: Pickup[] = [
 {id:'EC-2026-0924',items:'Laptop + 2 Smartphones',centre:'GreenCycle Recycling Centre',date:'24 Sep 2026',time:'10:00 AM – 12:00 PM',status:'Scheduled',address:'12 Residency Road, Bengaluru'},
 {id:'EC-2026-0812',items:'Television + Cable',centre:'GreenEarth Recovery Point',date:'12 Aug 2026',time:'3:00 PM – 5:00 PM',status:'Recycled',address:'12 Residency Road, Bengaluru'},
 {id:'EC-2026-0703',items:'Printer',centre:'EcoTech Collection Hub',date:'3 Jul 2026',time:'12:00 PM – 2:00 PM',status:'Recycled',address:'12 Residency Road, Bengaluru'},
];
export const pickupStages=['Pickup Requested','Centre Accepted','Pickup Scheduled','Items Collected','At Collection Centre','Sent to Recycler','Recycled'];
export const articles=[
 {id:'old-phone',title:'What happens to your old phone after recycling?',category:'Recycling',read:'6 min read',summary:'Follow a smartphone from collection through careful material recovery.'},
 {id:'battery-safety',title:'Why batteries need special handling',category:'Safety',read:'4 min read',summary:'Learn how to store and transport damaged or swollen batteries safely.'},
 {id:'reduce-waste',title:'5 practical ways to reduce electronic waste',category:'Environment',read:'5 min read',summary:'Small choices that extend device life and prevent unnecessary waste.'},
 {id:'recycling-guide',title:'Understanding e-waste recycling',category:'E-Waste Basics',read:'8 min read',summary:'A clear look at responsible collection, sorting and material recovery.'},
];
export const analyticsData=[{m:'Apr',kg:730},{m:'May',kg:880},{m:'Jun',kg:1040},{m:'Jul',kg:960},{m:'Aug',kg:1260},{m:'Sep',kg:1480}];
export const statusTone: Record<string,string>={Requested:'neutral',Pending:'warning',Accepted:'info',Scheduled:'purple','Picked Up':'warning','At Collection Centre':'info','Sent to Recycler':'purple',Recycled:'success',Completed:'success',Cancelled:'danger',Verified:'success',Rejected:'danger',Received:'info',Sorted:'purple','In Transit':'warning',Processed:'success'};
