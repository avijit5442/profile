nq.a={
       new:(role)=>{return `select from${role}`},
       old:(user,name,city)=>{return `${name} choose ${user} in ${city} `}
}

nq.b={
    first:(q1)=>{return `name of ${q1}`},
    second:(q2,d1)=>{return `name of ${q2} is equal to ${d1}`},
    Third:(q3,d2,a5)=>{return`name of ${q3}is ${d2}is ${a5}`}

}


module.exports = nq;