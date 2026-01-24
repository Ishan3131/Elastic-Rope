let box = document.getElementById('box')
let p = q = 0;
let x = y = .5;
let vel = [0,0];
let a = [0,0]
let damping = .07;
let walls = true;
let magnitude = .5;
let e = .9; 

document.addEventListener('mousemove', (e) => {
    x = e.clientX - 18;
    y = e.clientY - 18;
})

setInterval(() => {
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
    box.style.left = p + 'px';
    box.style.top = q + 'px';
    vel[0] -= damping*Math.sign(vel[0]);
    vel[1] -= damping*Math.sign(vel[1]);
    if(walls && (p >= window.innerWidth-50 || p <= 0)) vel[0] *= -e;
    if(walls && (q >= window.innerHeight-50 || q <= 0)) vel[1] *= -e;
},10)