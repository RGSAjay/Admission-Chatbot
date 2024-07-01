setInterval(() => {
    let date = new Date()
    let clock = document.getElementById('time')
    clock.innerHTML=
    date.getHours() + ":" +
    date.getMinutes()
},1000);
setInterval(() =>{
    setScrollPosition()
},2000)
const srch = document.querySelector("#srch")
const list = async() => {
    await fetch("../data/collegelist.json").then(response => response.json()).then((data) => {
        console.log(data)
        let el = document.createElement('datalist')
        el.setAttribute('id','colleges')
        document.querySelector('#msgbox').append(el)
        let sel = ''
        for (const dt of data) {
            sel = document.createElement('option')
            sel.setAttribute("value",dt.name)
            sel.innerText = dt.code
            document.querySelector('#colleges').append(sel)
        }
    })
}
list()
let college = ''
document.querySelector("#close").addEventListener("click",()=> {
    document.querySelector("#app").style.display = "none"
    document.querySelector("#icon").style.display = "block"
})
document.querySelector("#icon").addEventListener("click",()=> {
    document.querySelector("#app").style.display = "block"
    document.querySelector("#icon").style.display = "none"
})
// let isrank = false
let isentered = false
// let rank = null
srch.addEventListener("keyup", async (e) => {
    
    // if(e.keyCode === 13 && !isNaN(+srch.value) && srch.value !== '' && srch.value !== ' ') {
    //     rank = srch.value
    //     isrank = true
        
    // }
    
    if(e.keyCode === 13) {
        isentered = true
    }
    if(e.keyCode === 13) {
        // console.log("Rank: "+isrank)
        console.log("Entered: "+isentered)
    }
})
srch.addEventListener('keyup', async () => {
    await fetch("../data/colleges.json").then(response => response.json())
    .then((data) =>  {
        if(data[srch.value.toUpperCase()] !== undefined) {
            college = data[srch.value.toUpperCase()]
            let el = document.createElement('div')
            el.setAttribute("id","right")
            let x = document.createElement('div')
            x.setAttribute("class","msg")
            x.innerHTML = srch.value.toUpperCase()
            el.append(x)
            document.querySelector("#container").append(el)
            el = document.createElement('div')
            el.setAttribute("id","left")
            let child = document.createElement('div')
            child.setAttribute("class","msg")
            child.innerHTML = college['msg']
            el.append(child)
            document.querySelector("#container").append(el)
            srch.value = ''
        }
        if(isentered === true) {
            if(isNaN(+srch.value)){
                let el = document.createElement('div')
                el.setAttribute("id","right")
                let child = document.createElement('div')
                child.setAttribute("class","msg")
                child.innerHTML = srch.value
                el.append(child)
                document.querySelector("#container").append(el)
                el = document.createElement('div')
                el.setAttribute("id","left")
                child = document.createElement('div')
                child.setAttribute("class","msg")
                child.innerHTML = "Sorry, can't understand your request!<br/>Please enter the code/name of the college to know more about it or your rank to see the list of the colleges you can opt for."
                el.append(child)
                document.querySelector("#container").append(el)
                srch.value = ''
                isentered = false
            }
        else if(!isNaN(+srch.value) && srch.value != '' && srch.value != ' '){
            let el = document.createElement('div')
            el.setAttribute("id","right")
            let child = document.createElement('div')
            child.setAttribute("class","msg")
            child.innerHTML = srch.value
            el.append(child)
            document.querySelector("#container").append(el)
            if(srch.value <= college['CSE']){
                let el = document.createElement('div')
                el.setAttribute("id","left")
                let child = document.createElement('div')
                child.setAttribute("class","msg")
                child.innerHTML = "There is a chance to get seat in CSE"
                el.append(child)
                document.querySelector("#container").append(el)
                srch.value = ''
                isentered = false
            }
            if(srch.value <= college['CIV']){
                let el = document.createElement('div')
                el.setAttribute("id","left")
                let child = document.createElement('div')
                child.setAttribute("class","msg")
                child.innerHTML = "There is a chance to get seat in CIV"
                el.append(child)
                document.querySelector("#container").append(el)
                srch.value = ''
                isentered = false
            }
            if(srch.value <= college['ECE']){
                let el = document.createElement('div')
                el.setAttribute("id","left")
                let child = document.createElement('div')
                child.setAttribute("class","msg")
                child.innerHTML = "There is a chance to get seat in ECE"
                el.append(child)
                document.querySelector("#container").append(el)
                srch.value = ''
                isentered = false
            }
            if(srch.value <= college['EEE']){
                let el = document.createElement('div')
                el.setAttribute("id","left")
                let child = document.createElement('div')
                child.setAttribute("class","msg")
                child.innerHTML = "There is a chance to get seat in EEE"
                el.append(child)
                document.querySelector("#container").append(el)
                srch.value = ''
                isentered = false
            }
            if(srch.value <= college['MEC']){
                let el = document.createElement('div')
                el.setAttribute("id","left")
                let child = document.createElement('div')
                child.setAttribute("class","msg")
                child.innerHTML = "There is a chance to get seat in MEC"
                el.append(child)
                document.querySelector("#container").append(el)
                srch.value = ''
                isentered = false
            }
            if(srch.value <= college['INF']){
                let el = document.createElement('div')
                el.setAttribute("id","left")
                let child = document.createElement('div')
                child.setAttribute("class","msg")
                child.innerHTML = "There is a chance to get seat in INF"
                el.append(child)
                document.querySelector("#container").append(el)
                srch.value = ''
                isentered = false
            }
            if(srch.value <= college['AIM']){
                let el = document.createElement('div')
                el.setAttribute("id","left")
                let child = document.createElement('div')
                child.setAttribute("class","msg")
                child.innerHTML = "There is a chance to get seat in AIM"
                el.append(child)
                document.querySelector("#container").append(el)
                srch.value = ''
                isentered = false
            }
            if(srch.value <= college['AID']){
                let el = document.createElement('div')
                el.setAttribute("id","left")
                let child = document.createElement('div')
                child.setAttribute("class","msg")
                child.innerHTML = "There is a chance to get seat in AID"
                el.append(child)
                document.querySelector("#container").append(el)
                srch.value = ''
                isentered = false
            }
            if(srch.value <= college['CAI']){
                let el = document.createElement('div')
                el.setAttribute("id","left")
                let child = document.createElement('div')
                child.setAttribute("class","msg")
                child.innerHTML = "There is a chance to get seat in CAI"
                el.append(child)
                document.querySelector("#container").append(el)
                srch.value = ''
                isentered = false
            }
            if(srch.value <= college['CSM']){
                let el = document.createElement('div')
                el.setAttribute("id","left")
                let child = document.createElement('div')
                child.setAttribute("class","msg")
                child.innerHTML = "There is a chance to get seat in CSM"
                el.append(child)
                document.querySelector("#container").append(el)
                srch.value = ''
                isentered = false
            }
            if(srch.value <= college['CSD']){
                let el = document.createElement('div')
                el.setAttribute("id","left")
                let child = document.createElement('div')
                child.setAttribute("class","msg")
                child.innerHTML = "There is a chance to get seat in CSD"
                el.append(child)
                document.querySelector("#container").append(el)
                srch.value = ''
                isentered = false
            }
            if(srch.value <= college['DS']){
                let el = document.createElement('div')
                el.setAttribute("id","left")
                let child = document.createElement('div')
                child.setAttribute("class","msg")
                child.innerHTML = "There is a chance to get seat in DS"
                el.append(child)
                document.querySelector("#container").append(el)
                srch.value = ''
                isentered = false
            }
            if(srch.value <= college['CBA']){
                let el = document.createElement('div')
                el.setAttribute("id","left")
                let child = document.createElement('div')
                child.setAttribute("class","msg")
                child.innerHTML = "There is a chance to get seat in CBA"
                el.append(child)
                document.querySelector("#container").append(el)
                srch.value = ''
                isentered = false
            }
            if(srch.value <= college['CIC']){
                let el = document.createElement('div')
                el.setAttribute("id","left")
                let child = document.createElement('div')
                child.setAttribute("class","msg")
                child.innerHTML = "There is a chance to get seat in CIC"
                el.append(child)
                document.querySelector("#container").append(el)
                srch.value = ''
                isentered = false
            }
            if(srch.value <= college['IOT']){
                let el = document.createElement('div')
                el.setAttribute("id","left")
                let child = document.createElement('div')
                child.setAttribute("class","msg")
                child.innerHTML = "There is a chance to get seat in IOT"
                el.append(child)
                document.querySelector("#container").append(el)
                srch.value = ''
                isentered = false
            }
            if(srch.value <= college['CSC']){
                let el = document.createElement('div')
                el.setAttribute("id","left")
                let child = document.createElement('div')
                child.setAttribute("class","msg")
                child.innerHTML = "There is a chance to get seat in CSC"
                el.append(child)
                document.querySelector("#container").append(el)
                srch.value = ''
                isentered = false
            }
            if(srch.value <= college['CSO']){
                let el = document.createElement('div')
                el.setAttribute("id","left")
                let child = document.createElement('div')
                child.setAttribute("class","msg")
                child.innerHTML = "There is a chance to get seat in CSO"
                el.append(child)
                document.querySelector("#container").append(el)
                srch.value = ''
                isentered = false
            }
            if(srch.value <= college['CHE']){
                let el = document.createElement('div')
                el.setAttribute("id","left")
                let child = document.createElement('div')
                child.setAttribute("class","msg")
                child.innerHTML = "There is a chance to get seat in CHE"
                el.append(child)
                document.querySelector("#container").append(el)
                srch.value = ''
                isentered = false
            }
            if(srch.value <= college['CS']){
                let el = document.createElement('div')
                el.setAttribute("id","left")
                let child = document.createElement('div')
                child.setAttribute("class","msg")
                child.innerHTML = "There is a chance to get seat in CS"
                el.append(child)
                document.querySelector("#container").append(el)
                srch.value = ''
                isentered = false
            }
            if(srch.value <= college['EIE']){
                let el = document.createElement('div')
                el.setAttribute("id","left")
                let child = document.createElement('div')
                child.setAttribute("class","msg")
                child.innerHTML = "There is a chance to get seat in EIE"
                el.append(child)
                document.querySelector("#container").append(el)
                srch.value = ''
                isentered = false
            }
            if(srch.value <= college['ASE']){
                let el = document.createElement('div')
                el.setAttribute("id","left")
                let child = document.createElement('div')
                child.setAttribute("class","msg")
                child.innerHTML = "There is a chance to get seat in ASE"
                el.append(child)
                document.querySelector("#container").append(el)
                srch.value = ''
                isentered = false
            }
            // else{
            //     let el = document.createElement('div')
            //     el.setAttribute("id","left")
            //     let child = document.createElement('div')
            //     child.setAttribute("class","msg")
            //     child.innerHTML = "Sorry, you can't get admission in this college. Don't worry! try searching in another college.."
            //     el.append(child)
            //     document.querySelector("#container").append(el)
            //     srch.value = ''
            //     isentered = false
            }
        }
        if(srch.value.toLowerCase().includes('krishna')){
            console.log(college['Krishna'])
            let el = document.createElement('div')
            el.setAttribute("id","right")
            let child = document.createElement('div')
            child.setAttribute("class","msg")
            child.innerHTML = "KRISHNA"
            el.append(child)
            document.querySelector("#container").append(el)
            el = document.createElement('div')
            el.setAttribute("id","left")
            child = document.createElement('div')
            child.setAttribute("class","msg")
            child.innerHTML = college['Krishna']
            el.append(child)
            document.querySelector("#container").append(el)
            srch.value = ''
            el = document.createElement('div')
            el.setAttribute("id","left")
            child = document.createElement('div')
            child.setAttribute("class","msg")
            child.innerHTML = "If you want to know more enter the another district name"
            el.append(child)
            document.querySelector("#container").append(el)
        }
        if(srch.value.toLowerCase().includes('srikakulam')){
            console.log(college['Srikakulam'])
            let el = document.createElement('div')
            el.setAttribute("id","right")
            let child = document.createElement('div')
            child.setAttribute("class","msg")
            child.innerHTML = "SRIKAKULAM"
            el.append(child)
            document.querySelector("#container").append(el)
            el = document.createElement('div')
            el.setAttribute("id","left")
            child = document.createElement('div')
            child.setAttribute("class","msg")
            child.innerHTML = college['Srikakulam']
            el.append(child)
            document.querySelector("#container").append(el)
            srch.value = ''
            el = document.createElement('div')
            el.setAttribute("id","left")
            child = document.createElement('div')
            child.setAttribute("class","msg")
            child.innerHTML = "If you want to know more enter the another district name"
            el.append(child)
            document.querySelector("#container").append(el)
        }
        if(srch.value.toLowerCase().includes('guntur')){
            console.log(college['Guntur'])
            let el = document.createElement('div')
            el.setAttribute("id","right")
            let child = document.createElement('div')
            child.setAttribute("class","msg")
            child.innerHTML = "GUNTUR"
            el.append(child)
            document.querySelector("#container").append(el)
            el = document.createElement('div')
            el.setAttribute("id","left")
            child = document.createElement('div')
            child.setAttribute("class","msg")
            child.innerHTML = college['Guntur']
            el.append(child)
            document.querySelector("#container").append(el)
            srch.value = ''
            el = document.createElement('div')
            el.setAttribute("id","left")
            child = document.createElement('div')
            child.setAttribute("class","msg")
            child.innerHTML = "If you want to know more enter the another district name"
            el.append(child)
            document.querySelector("#container").append(el)
        }
        if(srch.value.toLowerCase().includes('fee')){
            console.log(college['fee'])
            let el = document.createElement('div')
            el.setAttribute("id","right")
            let child = document.createElement('div')
            child.setAttribute("class","msg")
            child.innerHTML = "FEE"
            el.append(child)
            document.querySelector("#container").append(el)
            el = document.createElement('div')
            el.setAttribute("id","left")
            child = document.createElement('div')
            child.setAttribute("class","msg")
            child.innerHTML = college['fee']
            el.append(child)
            document.querySelector("#container").append(el)
            srch.value = ''
            el = document.createElement('div')
            el.setAttribute("id","left")
            child = document.createElement('div')
            child.setAttribute("class","msg")
            child.innerHTML = "What do you want to know more about this college?"
            el.append(child)
            document.querySelector("#container").append(el)
        }
        if(srch.value.toLowerCase().includes('placement')) {
            console.log(college['placements'])
            let el = document.createElement('div')
            el.setAttribute("id","right")
            let child = document.createElement('div')
            child.setAttribute("class","msg")
            child.innerHTML = "PLACEMENTS"
            el.append(child)
            document.querySelector("#container").append(el)
            el = document.createElement('div')
            el.setAttribute("id","left")
            child = document.createElement('div')
            child.setAttribute("class","msg")
            child.innerHTML = college['placements']
            el.append(child)
            document.querySelector("#container").append(el)
            srch.value = ''
            el = document.createElement('div')
            el.setAttribute("id","left")
            child = document.createElement('div')
            child.setAttribute("class","msg")
            child.innerHTML = "What do you want to know more about this college?"
            el.append(child)
            document.querySelector("#container").append(el)
        }
        if(srch.value.toLowerCase().includes('bus')) {
            console.log(college['bus_facility'])
            let el = document.createElement('div')
            el.setAttribute("id","right")
            let child = document.createElement('div')
            child.setAttribute("class","msg")
            child.innerHTML = "BUS FACILITY"
            el.append(child)
            document.querySelector("#container").append(el)
            el = document.createElement('div')
            el.setAttribute("id","left")
            child = document.createElement('div')
            child.setAttribute("class","msg")
            child.innerHTML = college['bus_facility']
            el.append(child)
            document.querySelector("#container").append(el)
            srch.value = ''
            el = document.createElement('div')
            el.setAttribute("id","left")
            child = document.createElement('div')
            child.setAttribute("class","msg")
            child.innerHTML = "What do you want to know more about this college?"
            el.append(child)
            document.querySelector("#container").append(el)
        }
        if(srch.value.toLowerCase().includes('hostel')) {
            console.log(college['hostel_facility'])
            let el = document.createElement('div')
            el.setAttribute("id","right")
            let child = document.createElement('div')
            child.setAttribute("class","msg")
            child.innerHTML = "HOSTEL FACILITY"
            el.append(child)
            document.querySelector("#container").append(el)
            el = document.createElement('div')
            el.setAttribute("id","left")
            child = document.createElement('div')
            child.setAttribute("class","msg")
            child.innerHTML = college['hostel_facility']
            el.append(child)
            document.querySelector("#container").append(el)
            srch.value = ''
            el = document.createElement('div')
            el.setAttribute("id","left")
            child = document.createElement('div')
            child.setAttribute("class","msg")
            child.innerHTML = "What do you want to know more about this college?"
            el.append(child)
            document.querySelector("#container").append(el)
        }
        if(srch.value.toLowerCase().includes('branch')) {
            console.log(college['branches'])
            let el = document.createElement('div')
            el.setAttribute("id","right")
            let child = document.createElement('div')
            child.setAttribute("class","msg")
            child.innerHTML = "BRANCHES"
            el.append(child)
            document.querySelector("#container").append(el)
            el = document.createElement('div')
            el.setAttribute("id","left")
            child = document.createElement('div')
            child.setAttribute("class","msg")
            child.innerHTML = college['branches']
            el.append(child)
            document.querySelector("#container").append(el)
            srch.value = ''
            el = document.createElement('div')
            el.setAttribute("id","left")
            child = document.createElement('div')
            child.setAttribute("class","msg")
            child.innerHTML = "What do you want to know more about this college?"
            el.append(child)
            document.querySelector("#container").append(el)
        }
        if(srch.value.toLowerCase().includes('contact')) {
            console.log(college['contacts'])
            let el = document.createElement('div')
            el.setAttribute("id","right")
            let child = document.createElement('div')
            child.setAttribute("class","msg")
            child.innerHTML = "CONTACTS"
            el.append(child)
            document.querySelector("#container").append(el)
            el = document.createElement('div')
            el.setAttribute("id","left")
            child = document.createElement('div')
            child.setAttribute("class","msg")
            child.innerHTML = college['contacts']
            el.append(child)
            document.querySelector("#container").append(el)
            el = document.createElement('div')
            el.setAttribute("id","left")
            child = document.createElement('div')
            child.setAttribute("class","msg")
            child.innerHTML = college['link']
            el.append(child)
            document.querySelector("#container").append(el)
            srch.value = ''
            el = document.createElement('div')
            el.setAttribute("id","left")
            child = document.createElement('div')
            child.setAttribute("class","msg")
            child.innerHTML = "What do you want to know more about this college?"
            el.append(child)
            document.querySelector("#container").append(el)
        }
        if(srch.value.toLowerCase().includes('cutoff')) {
            console.log(college['cutoff'])
            let el = document.createElement('div')
            el.setAttribute("id","right")
            let child = document.createElement('div')
            child.setAttribute("class","msg")
            child.innerHTML = "CUTOFF"
            el.append(child)
            document.querySelector("#container").append(el)
            el = document.createElement('div')
            el.setAttribute("id","left")
            child = document.createElement('div')
            child.setAttribute("class","msg")
            child.innerHTML = college['cutoff']
            el.append(child)
            document.querySelector("#container").append(el)
            srch.value = ''
            el = document.createElement('div')
            el.setAttribute("id","left")
            child = document.createElement('div')
            child.setAttribute("class","msg")
            child.innerHTML = "What do you want to know more about this college?"
            el.append(child)
            document.querySelector("#container").append(el)
        }
    })   
})
const setScrollPosition = () =>{
    if (container.scrollHeight > 0){
        container.scrollTop = container.scrollHeight;
    }
}