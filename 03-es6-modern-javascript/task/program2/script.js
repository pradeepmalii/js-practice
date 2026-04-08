//rest parameters
function introduction(firstName,lastName,...hobbies){
    console.log(`Name: ${firstName} ${lastName}`)
    console.log(`Hobbies: ${hobbies.join(", ")}`)
}

introduction("Pradeep", "Mali", "coding", "running", "swimming", "dancing", "Singing")