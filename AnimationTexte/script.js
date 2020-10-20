var ChangementUn = gsap.timeline({})
.from('.Partie.VariableUn', { color: '#077DBE',repeat:-1 ,yoyo:true, duration: 5});

var ChangementDeux = gsap.timeline({})
.from('.Partie.VariableDeux', { color: '#E615BC',repeat:-1 ,yoyo:true, duration: 5});

 const ApparitionUn = gsap.timeline() 
.to('.Partie.InchangerUn', 1, { top: '50', opacity:1})

.to('.Partie.VariableUn', 1, { opacity:1})

.to('.Partie.VariableDeux', 1, { opacity:1})

.to('.Partie.InchangerDeux', 1, { top: '50', opacity:1})