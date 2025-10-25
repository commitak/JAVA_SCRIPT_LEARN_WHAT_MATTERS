function rps(User,ComPuter){
    if (User === ComPuter) return "IT IS TIE"
        
    if (User === "rock" && Computer === "scissor")return "User WOn!"

    if (User === "paper" && Computer === "rock")return "User WOn!"

    if (User === "scissor" && Computer === "paper")return "User WOn!"

    return "ComPuter"

}
console.log(rps("sci,rock"));
