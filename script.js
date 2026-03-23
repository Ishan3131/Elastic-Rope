let box;
function setElement(elem) {
    box = elem;
    box.style.position = 'absolute';
}
let p = q = w = 0;
let x = y = .5;
let vel = [8, 8];
let a = [0,0]
let damping = .07;
let walls = true;
let magnitude = .5;
let e = .9;
let state = false;

function start(frameGap=10){
    document.addEventListener('mousemove', (e) => {
        x = e.clientX - box.offsetWidth/2;
        y = e.clientY - box.offsetHeight;
    })
    
    if(!state){
        interval = setInterval(() => {
            state = true;
            // console.log('x',x,'y',y)
            // console.log('p',p,'q',q)
            let h = x-p;
            let v = y-q;

            let vectorLengthReci = 1/Math.hypot(h,v);
            a[0] =  h*vectorLengthReci;
            a[1] = v*vectorLengthReci;
            vel[0] += magnitude*a[0];
            vel[1] += magnitude*a[1];
            p += vel[0];
            q += vel[1];
            if(Math.sqrt(vel[0]**2 + vel[1]**2) < 5 && Math.sqrt((p-x)**2 + (q-y)**2) < 5) box.className = '';
            else if(box.className != 'rotate') box.className = 'rotate';
            box.style.left = p + 'px';
            box.style.top = q + 'px';
            vel[0] -= damping*Math.sign(vel[0]);
            vel[1] -= damping*Math.sign(vel[1]);
            if(walls && (p >= window.innerWidth-50 || p <= 0)) vel[0] *= -e;
            if(walls && (q >= window.innerHeight-50 || q <= 0)) vel[1] *= -e;
        },frameGap)
    }
}

function stop(){
    clearInterval(interval);
    state = false;
    document.removeEventListener('mousemove');
}

setElement(document.getElementById('box'))
start()