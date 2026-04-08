function mergeAndUpdate(original,updates){
return {...original, ...updates}
}

let orginalSetting = {theme: "black", lan: "en"}
let updatedSetting = {theme: "light", lan: "en"}

let updated = mergeAndUpdate(orginalSetting,updatedSetting)
console.log(updated)